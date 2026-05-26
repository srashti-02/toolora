import Link from "next/link";

import { blogs } from "../data/blogs";

export default function BlogPage() {

  return (

    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Toolora Blog
          </h1>

          <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
            Productivity tips, study guides,
            security tips and useful tool tutorials.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (

            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex items-center justify-between mb-4">

                  <span className="text-sm text-purple-400">
                    {blog.category}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {blog.readTime}
                  </span>

                </div>

                <h2 className="text-2xl font-bold mb-4 leading-tight">
                  {blog.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  {blog.description}
                </p>

                <div className="mt-6 text-purple-500 font-medium">
                  Read Article →
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}