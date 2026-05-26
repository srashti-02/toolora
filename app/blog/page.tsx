import Link from "next/link";
import PageHero from "../components/ui/pageHero";

import { blogs } from "../data/blogs";

export default function BlogPage() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <PageHero
        badge="📝 Toolora Blog"
        title="Helpful Guides &"
        gradientText="Productivity Articles"
        description="Read useful tutorials, productivity tips, study guides, tech insights, and online tool recommendations designed for students, creators, and professionals."
      />

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogs.map((blog) => (

            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TOP */}
                <div className="flex items-center justify-between mb-4">

                  <span className="text-sm text-purple-400 font-medium">
                    {blog.category}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {blog.readTime}
                  </span>

                </div>

                {/* TITLE */}
                <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-purple-300 transition">

                  {blog.title}

                </h2>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 leading-relaxed text-sm">

                  {blog.description}

                </p>

                {/* BUTTON */}
                <div className="mt-6 inline-flex items-center gap-2 text-purple-400 font-medium group-hover:text-purple-300 transition">

                  Read Article →

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

    </div>
  );
}