import Link from "next/link";
import PageHero from "../components/ui/pageHero";
import {
  Type,
  Lock,
  Calculator,
  TimerReset,
  FileText,
  Image,
  ScanText,
  Percent,
  Hash,
  Sigma,
  ArrowRight,
  ImageIcon,
  Receipt,
} from "lucide-react";

const tools = [
  {
    title: "Text Counter",
    description:
      "Count words, characters and reading time instantly.",
    href: "/tools/text-counter",
    icon: Type,
  },

  {
    title: "Password Generator",
    description:
      "Generate secure and strong passwords instantly.",
    href: "/tools/password-generator",
    icon: Lock,
  },

  {
    title: "Age Calculator",
    description:
      "Calculate your exact age quickly and accurately.",
    href: "/tools/age-calculator",
    icon: Calculator,
  },

  {
    title: "Pomodoro Timer",
    description:
      "Boost productivity using focus sessions and breaks.",
    href: "/tools/pomodoro-timer",
    icon: TimerReset,
  },

  {
    title: "CGPA Calculator",
    description:
      "Calculate semester and overall CGPA easily.",
    href: "/tools/cgpa-calculator",
    icon: Sigma,
  },

  {
    title: "BMI Calculator",
    description:
      "Check your body mass index instantly.",
    href: "/tools/bmi-calculator",
    icon: Percent,
  },

  {
    title: "GST Calculator",
    description:
      "Calculate GST instantly. Add or remove GST using 3%, 5%, 12%, 18%, 28%, or a custom GST rate.",
    href: "/tools/gst-calculator",
    icon: Receipt,
  },

  {
    title: "Factorial Calculator",
    description:
      "Find factorial values instantly for any number.",
    href: "/tools/factorial-calculator",
    icon: Hash,
  },

  {
    title: "PDF Merger",
    description:
      "Merge multiple PDF documents in seconds.",
    href: "/tools/pdf-merger",
    icon: FileText,
  },

  {
    title: "Image Compressor",
    description:
      "Compress image size without noticeable quality loss.",
    href: "/tools/image-compressor",
    icon: Image,
  },

  {
    title: "JPG to PNG Converter",
    description:
      "Convert JPG and JPEG images into high-quality PNG files instantly.",
    href: "/tools/jpg-to-png",
    icon: ImageIcon,
  },

  {
    title: "Image to PDF",
    description:
      "Convert images into high-quality PDF documents.",
    href: "/tools/image-to-pdf",
    icon: ScanText,
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <PageHero
        badge="🛠 Toolora Utilities"
        title="Smart Utility Tools"
        gradientText="Built for Everyday Productivity"
        description="Explore modern online tools designed for students, creators, developers, and professionals to improve productivity and simplify everyday digital tasks."
      />

      {/* TOOLS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10"
              >
                {/* ICON */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                  <Icon
                    size={28}
                    className="text-purple-400"
                  />
                </div>

                {/* TITLE */}
                <h2 className="mb-3 text-xl font-bold">
                  {tool.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mb-7 text-sm leading-relaxed text-zinc-400">
                  {tool.description}
                </p>

                {/* BUTTON */}
                <Link
                  href={tool.href}
                  className="inline-flex items-center gap-2 font-medium text-purple-400 transition hover:text-purple-300"
                >
                  Open Tool
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}