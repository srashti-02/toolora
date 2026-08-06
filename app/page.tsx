import Link from "next/link";
import {
  Calculator,
  FileText,
  Image,
  QrCode,
  Lock,
  Clock,

} from "lucide-react";

const tools = [
  {
    title: "Simple Calculator",
    description: "Perform quick mathematical calculations.",
    href: "/tools/simple-calculator",
    icon: Calculator,
  },
  {
    title: "QR Generator",
    description: "Generate QR codes instantly.",
    href: "/tools/qr-generator",
    icon: QrCode,
  },
  {
    title: "Password Generator",
    description: "Create strong and secure passwords.",
    href: "/tools/password-generator",
    icon: Lock,
  },
  {
    title: "Pomodoro Timer",
    description: "Boost productivity using focus sessions.",
    href: "/tools/pomodoro-timer",
    icon: Clock,
  },

  {
    title: "Image Compressor",
    description: "Compress images without losing quality.",
    href: "/tools/image-compressor",
    icon: Image,
  },
  {
    title: "PDF Merger",
    description: "Merge multiple PDF files into one.",
    href: "/tools/pdf-merger",
    icon: FileText,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-purple-400 text-sm mb-6">
            🚀 Free Online Utility Tools
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            All Your
            <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Productivity Tools
            </span>
            In One Place
          </h1>

          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Toolora provides free online tools for students,
            developers, creators, and professionals.
            Generate QR codes, compress images, merge PDFs,
            calculate instantly, and much more.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="rounded-2xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700 transition"
            >
              Explore Tools
            </Link>

            <Link
              href="/about"
              className="rounded-2xl border border-zinc-800 px-8 py-4 font-semibold hover:bg-zinc-900 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "20+", label: "Online Tools" },
            { value: "100%", label: "Free to Use" },
            { value: "<1s", label: "Instant Results" },
            { value: "99.9%", label: "Accurate Results" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-center"
            >
              <h3 className="text-3xl font-black text-purple-400">
                {item.value}
              </h3>
              <p className="mt-2 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            Featured Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-purple-500 hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6">
                    <Icon
                      size={28}
                      className="text-purple-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {tool.title}
                  </h3>

                  <p className="text-zinc-400">
                    {tool.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}