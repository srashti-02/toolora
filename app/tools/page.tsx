import Link from "next/link";
import PageHero from "../components/ui/pageHero";

import {
  Type,
  Lock,
  Calculator,
  TimerReset,
  FileText,
  Image,
  Eraser,
  ScanText,
  Percent,
  Hash,
  Sigma,
  ArrowRight,
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
    title: "Background Remover",
    description:
      "Remove image backgrounds instantly using AI.",
    href: "/tools/background-remover",
    icon: Eraser,
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
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {tools.map((tool, index) => {

            const Icon = tool.icon;

            return (

              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
              >

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">

                  <Icon
                    size={28}
                    className="text-purple-400"
                  />

                </div>

                {/* TITLE */}
                <h2 className="text-xl font-bold mb-3">

                  {tool.title}

                </h2>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-7">

                  {tool.description}

                </p>

                {/* BUTTON */}
                <Link
                  href={tool.href}
                  className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition"
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