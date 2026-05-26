import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/app/data/blogs";

// ─── Types ────────────────────────────────────────────────────────────────────

type Props = {
  params: Promise<{ slug: string }>;
};

// ─── SEO: Dynamic Metadata ────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Post Not Found | Toolora",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://toolora.in";
  const canonicalUrl = `${siteUrl}/blog/${slug}`;

  return {
    title: `${blog.title} | Toolora Blog`,
    description: blog.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: canonicalUrl,
      siteName: "Toolora",
      images: [{ url: blog.image, width: 1200, height: 630, alt: blog.title }],
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author],
      tags: [blog.category],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ─── SEO: Static Params ───────────────────────────────────────────────────────

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function renderContent(raw: string) {
  const lines = raw.split("\n");
  const nodes: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    nodes.push(
      <ul key={key++} className="my-6 space-y-3 pl-6">
        {listBuffer.map((item, i) => (
          <li
            key={i}
            className="relative text-zinc-300 text-lg leading-8 before:absolute before:-left-5 before:text-purple-400 before:content-['▸']"
          >
            {parseBold(item)}
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  const parseBold = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );
  };

  for (const line of lines) {
    if (line.startsWith("# ")) {
      flushList();
      nodes.push(
        <h2
          key={key++}
          className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white leading-snug"
        >
          {line.slice(2)}
        </h2>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      nodes.push(
        <h3
          key={key++}
          className="text-2xl md:text-3xl font-semibold mt-12 mb-4 text-purple-400"
        >
          {line.slice(3)}
        </h3>
      );
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      nodes.push(
        <h4
          key={key++}
          className="text-xl font-semibold mt-8 mb-3 text-purple-300"
        >
          {line.slice(4)}
        </h4>
      );
      continue;
    }
    if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
      continue;
    }
    if (line.trim() === "") {
      flushList();
      nodes.push(<div key={key++} className="h-2" aria-hidden="true" />);
      continue;
    }
    flushList();
    nodes.push(
      <p
        key={key++}
        className="text-zinc-300 text-lg md:text-xl leading-9 mb-6"
      >
        {parseBold(line)}
      </p>
    );
  }

  flushList();
  return nodes;
}

// ─── Structured Data ──────────────────────────────────────────────────────────

function ArticleJsonLd({
  blog,
  url,
}: {
  blog: (typeof blogs)[number];
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    author: { "@type": "Person", name: blog.author },
    publisher: {
      "@type": "Organization",
      name: "Toolora",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://toolora.in",
    },
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbJsonLd({
  blog,
  url,
}: {
  blog: (typeof blogs)[number];
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: process.env.NEXT_PUBLIC_SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${process.env.NEXT_PUBLIC_SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: blog.title, item: url },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://toolora.in";
  const canonicalUrl = `${siteUrl}/blog/${slug}`;

  const related = blogs
    .filter((b) => b.category === blog.category && b.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <ArticleJsonLd blog={blog} url={canonicalUrl} />
      <BreadcrumbJsonLd blog={blog} url={canonicalUrl} />

      <div className="min-h-screen bg-black text-white">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-6">
          <ol
            className="flex items-center gap-2 text-sm text-zinc-500"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {[
              { href: "/", label: "Home", pos: 1 },
              { href: "/blog", label: "Blog", pos: 2 },
              { href: `/blog/${slug}`, label: blog.category, pos: 3 },
            ].map(({ href, label, pos }, i, arr) => (
              <li
                key={href}
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <a
                  href={href}
                  itemProp="item"
                  className="hover:text-purple-400 transition-colors"
                >
                  <span itemProp="name">{label}</span>
                </a>
                <meta itemProp="position" content={String(pos)} />
                {i < arr.length - 1 && (
                  <span aria-hidden="true" className="text-zinc-700">›</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Hero ── */}
        <header className="relative mt-6 mx-auto max-w-6xl px-6">
          <div className="relative rounded-3xl overflow-hidden h-[60vh] md:h-[70vh]">
            <img
              src={blog.image}
              alt={`Cover image for ${blog.title}`}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              loading="eager"
              decoding="async"
            />
            {/* Same gradient style as your site */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              {/* Category badge — purple to match site */}
              <span className="inline-block mb-4 text-xs uppercase tracking-widest font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full">
                {blog.category}
              </span>

              {/* h1 */}
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-4xl">
                {blog.title}
              </h1>

              {/* Description */}
              <p className="mt-4 text-zinc-300 text-lg md:text-xl max-w-3xl leading-relaxed">
                {blog.description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6" itemScope itemType="https://schema.org/Person">
                <div
                  className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg"
                  aria-hidden="true"
                >
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm" itemProp="name">
                    {blog.author}
                  </p>
                  <p className="text-zinc-400 text-xs">
                    <time dateTime={blog.publishedAt}>{blog.publishedAt}</time>
                    {" · "}
                    <span>{blog.readTime}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main className="max-w-4xl mx-auto px-6 py-16">

          {/* Pull quote */}
          <blockquote className="border-l-4 border-purple-500 bg-purple-500/5 rounded-r-2xl px-8 py-6 mb-16">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-200 italic">
              "Productivity tools help students save time, improve focus, and
              simplify academic work — without burning out."
            </p>
            <footer className="mt-3 text-sm text-zinc-500">
              — {blog.author}, Toolora
            </footer>
          </blockquote>

          {/* Article body */}
          <article
            itemScope
            itemType="https://schema.org/Article"
          >
            <meta itemProp="headline" content={blog.title} />
            <meta itemProp="image" content={blog.image} />
            <meta itemProp="datePublished" content={blog.publishedAt} />

            {renderContent(blog.content)}
          </article>

          {/* Tags */}
          <div className="mt-16 flex flex-wrap gap-2" aria-label="Article tags">
            {Array.from(
              new Set([blog.category, "Students", "Productivity", "Free Tools", "Online Tools"])
            ).map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full"
              >
                #{tag.replace(/\s+/g, "")}
              </span>
            ))}
          </div>

          {/* Author Box — E-E-A-T signal */}
          <aside
            className="mt-16 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex gap-6"
            aria-label="About the author"
          >
            <div
              className="w-16 h-16 shrink-0 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-2xl"
              aria-hidden="true"
            >
              {blog.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                Written by
              </p>
              <h2 className="text-lg font-semibold text-white mb-2">
                {blog.author}
              </h2>
              <p className="text-zinc-400 text-sm leading-6">
                A writer and researcher passionate about helping students and
                creators discover the best free tools. Covers productivity,
                technology, and educational software on Toolora.
              </p>
            </div>
          </aside>

          {/* Related Posts */}
          {related.length > 0 && (
            <section className="mt-20" aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="text-2xl font-bold text-white mb-8"
              >
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-colors"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-purple-400 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="mt-2 text-zinc-200 font-semibold leading-snug group-hover:text-purple-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-zinc-500 text-xs">{post.readTime}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* CTA — purple gradient matching site theme */}
          <div className="mt-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 rounded-3xl p-10 text-center">
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-3">
              Free for everyone
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore More Productivity Tools
            </h2>
            <p className="text-zinc-400 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Discover free online tools built for students, creators, and
              developers — all in one place on Toolora.
            </p>
            <a
              href="/tools"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-2xl transition-colors text-base"
            >
              Browse All Tools →
            </a>
          </div>

        </main>

        {/* ── Footer ── */}
        <footer className="border-t border-white/5 mt-8 py-10 text-center text-zinc-600 text-sm">
          <p>
            © {new Date().getFullYear()} Toolora · Free tools for students &amp; creators
          </p>
          <nav
            className="mt-3 flex justify-center gap-6 text-xs"
            aria-label="Footer navigation"
          >
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/contact", label: "Contact" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-purple-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </footer>

      </div>
    </>
  );
}