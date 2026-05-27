import Link from "next/link";

import {
  QrCode,
  Lock,
  Calculator,
  FileImage,
  GraduationCap,
  HeartPulse,
  Sigma,
  Timer,
  ArrowRight,
  ImageIcon,
  FileText,
  Type,
  Zap,
  Shield,
  Globe,
  CheckCircle2,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const tools = [
  { title: "QR Code Generator", description: "Generate QR codes for URLs, text, and links instantly.", icon: QrCode, slug: "qr-generator", category: "Utility" },
  { title: "Password Generator", description: "Create strong, secure passwords in one click.", icon: Lock, slug: "password-generator", category: "Security" },
  { title: "Age Calculator", description: "Find your exact age down to days and months.", icon: Calculator, slug: "age-calculator", category: "Calculator" },
  { title: "CGPA Calculator", description: "Compute semester and cumulative CGPA effortlessly.", icon: GraduationCap, slug: "cgpa-calculator", category: "Education" },
  { title: "BMI Calculator", description: "Instantly check your Body Mass Index.", icon: HeartPulse, slug: "bmi-calculator", category: "Health" },
  { title: "Factorial Calculator", description: "Calculate factorial values for any number.", icon: Sigma, slug: "factorial-calculator", category: "Math" },
  { title: "Simple Calculator", description: "Quick arithmetic calculations in your browser.", icon: Calculator, slug: "simple-calculator", category: "Calculator" },
  { title: "Pomodoro Timer", description: "Stay focused with timed work and break sessions.", icon: Timer, slug: "pomodoro-timer", category: "Productivity" },
  { title: "Image to PDF", description: "Convert JPG/PNG images into PDF documents.", icon: FileImage, slug: "image-to-pdf", category: "File" },
  { title: "Image Compressor", description: "Reduce image file size without quality loss.", icon: ImageIcon, slug: "image-compressor", category: "File" },
  { title: "PDF Merger", description: "Combine multiple PDFs into a single document.", icon: FileText, slug: "pdf-merger", category: "File" },
  { title: "Text Counter", description: "Count words, characters, sentences, and reading time.", slug: "text-counter", icon: Type, category: "Writing" },
];

const features = [
  { icon: Zap, title: "Instant Results", description: "Every tool runs live in your browser — no loading, no waiting." },
  { icon: Shield, title: "100% Free & Private", description: "No account needed. Your data never leaves your device." },
  { icon: Globe, title: "Works Everywhere", description: "Fully responsive on mobile, tablet, and desktop." },
];

const whyPoints = [
  "No sign-up or login required",
  "All tools are completely free",
  "Works on any device or browser",
  "Data stays on your device — always private",
  "New tools added regularly",
  "Clean, distraction-free interface",
];

const stats = [
  { value: "12+", label: "Free Tools" },
  { value: "0", label: "Sign-ups Needed" },
  { value: "100%", label: "Browser-Based" },
  { value: "Free", label: "Forever" },
];

// ─── AD SLOT COMPONENT ───────────────────────────────────────────────────────
function AdSlot({ className = "", label = "Advertisement" }: { className?: string; label?: string }) {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="w-full max-w-[728px] h-[90px] bg-white/[0.03] border border-dashed border-white/10 rounded-xl flex items-center justify-center">
        <span className="text-zinc-600 text-xs tracking-widest uppercase">{label}</span>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-12 sm:pb-16 text-center">
        {/* Ambient glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-700/15 blur-[120px] rounded-full" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm sm:text-base px-5 py-2.5 rounded-full mb-7 font-medium">
          🚀 Free Online Tools — No Sign-up Required
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Free Online Tools for
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 bg-clip-text text-transparent">
            Students, Creators &amp; Developers
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Calculate, convert, compress, and generate — all your everyday digital
          tasks solved in one fast, clean, and completely free platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-purple-900/30"
          >
            Explore All Tools
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#tools"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/8 hover:border-purple-500/25 transition-all px-8 py-4 rounded-xl font-semibold text-base"
          >
            Start Using Now
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Stats strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-10 gap-y-5 border border-white/8 rounded-2xl px-10 py-5 bg-white/[0.03]">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-zinc-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          AD SLOT — below hero (Leaderboard 728×90)
      ══════════════════════════════════════════════ */}
      <AdSlot className="px-4 sm:px-6 pb-10" />

      {/* ══════════════════════════════════════════════
          FEATURES — 3 cards
      ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-zinc-400 text-base leading-relaxed">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TOOLS GRID
      ══════════════════════════════════════════════ */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 pb-18">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-2">Featured Tools</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Explore Smart Utility Tools</h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition text-base font-semibold shrink-0"
          >
            View All Tools
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group bg-white/[0.05] border border-white/10 rounded-3xl p-7 hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Icon className="text-purple-400" size={28} />
                  </div>
                  <span className="text-sm text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 font-medium">
                    {tool.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-snug group-hover:text-purple-300 transition">
                  {tool.title}
                </h2>

                {/* Description */}
                <p className="text-zinc-400 text-base leading-relaxed flex-1 mb-6">
                  {tool.description}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-purple-400 text-base font-semibold">
                  Open Tool
                  <ArrowRight
                    size={17}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all CTA below grid */}
        <div className="mt-10 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/8 hover:border-purple-500/25 transition px-7 py-3.5 rounded-xl text-base font-semibold"
          >
            See All 12+ Tools
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          AD SLOT — between tools and why section
      ══════════════════════════════════════════════ */}
      <AdSlot className="px-4 sm:px-6 py-10" />

      {/* ══════════════════════════════════════════════
          WHY TOOLORA — two-column layout
      ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="bg-gradient-to-br from-purple-500/8 to-blue-500/8 border border-white/8 rounded-[1.75rem] p-8 sm:p-14 grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-4">Why Toolora</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-5">
              Fast, Modern &amp;
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Easy-to-Use Tools
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8">
              Toolora is built to simplify everyday digital tasks — no distractions,
              no paywalls, no fluff. Just clean, fast tools that get the job done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-7 py-3.5 rounded-xl font-semibold text-base"
              >
                Start Using Tools
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 transition px-7 py-3.5 rounded-xl font-semibold text-base"
              >
                Learn More
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Right — checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white/[0.04] border border-white/8 rounded-xl px-5 py-4">
                <CheckCircle2 size={18} className="text-purple-400 mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-base leading-snug">{point}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
