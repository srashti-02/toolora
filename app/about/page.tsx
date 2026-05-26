
import Link from "next/link";

import PageHero from "../components/ui/pageHero";

import {
  ShieldCheck,
  Zap,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Smart Tools",
    desc: "Toolora provides fast online utilities for productivity, calculations, and digital tasks.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Experience",
    desc: "Your data stays private. Most tools work directly in your browser without storing information.",
  },

  {
    icon: Globe,
    title: "Accessible Anywhere",
    desc: "Use Toolora on desktop, tablet, or mobile from anywhere in the world.",
  },

  {
    icon: Sparkles,
    title: "Modern User Experience",
    desc: "Clean UI, smooth performance, and easy navigation for all users.",
  },
];

export default function AboutPage() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <PageHero
        badge="🚀 About Toolora"
        title="Modern Tools Designed"
        gradientText="for Productivity & Simplicity"
        description="Toolora provides free online productivity, utility, and educational tools designed for students, developers, creators, and professionals."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        {/* ABOUT GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-28">

          {/* LEFT */}
          <div>

            <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-6">
              Our Mission
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">

              Making Useful Digital
              Tools Accessible to Everyone

            </h2>

            <p className="text-zinc-400 leading-relaxed mt-8 text-base sm:text-lg">

              We believe online tools should be simple,
              fast, and available without complicated signups
              or unnecessary ads.

            </p>

            <p className="text-zinc-400 leading-relaxed mt-6 text-base sm:text-lg">

              Toolora combines productivity,
              education, utility, and smart calculators
              into one clean platform that anyone can use.

            </p>

            <Link
              href="/tools"
              className="inline-flex items-center gap-2 mt-10 bg-purple-600 hover:bg-purple-700 transition px-6 py-4 rounded-2xl font-semibold"
            >

              Explore Tools

              <ArrowRight size={18} />

            </Link>

          </div>

          {/* RIGHT */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[2rem] p-5 sm:p-8 md:p-10 overflow-hidden">

            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              {[
                {
                  value: "10+",
                  label: "Smart Tools",
                  color: "text-purple-400",
                },

                {
                  value: "100%",
                  label: "Free Access",
                  color: "text-blue-400",
                },

                {
                  value: "Fast",
                  label: "Performance",
                  color: "text-green-400",
                },

                {
                  value: "Secure",
                  label: "Experience",
                  color: "text-pink-400",
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 text-center overflow-hidden"
                >

                  <h3
                    className={`text-2xl sm:text-4xl md:text-5xl font-extrabold whitespace-nowrap leading-tight ${item.color}`}
                  >

                    {item.value}

                  </h3>

                  <p className="text-zinc-400 mt-3 text-sm sm:text-base break-words">

                    {item.label}

                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* FEATURES */}
        <div className="mb-28">

          <div className="text-center mb-16">

            <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-5">
              Why Toolora
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              What Makes Toolora Better
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (

                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-[1.7rem] p-7 hover:bg-white/10 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">

                    <Icon
                      size={28}
                      className="text-purple-400"
                    />

                  </div>

                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
                    {feature.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* WHO USES TOOLORA */}
        <div className="mb-28">

          <div className="text-center mb-16">

            <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-5">
              Who Uses Toolora
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Built for Modern Digital Users
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Students",
                desc:
                  "Students use Toolora for productivity, study tools, calculators, and online utilities.",
              },

              {
                title: "Developers",
                desc:
                  "Developers use Toolora for quick utilities, generators, and productivity tools.",
              },

              {
                title: "Creators",
                desc:
                  "Creators use Toolora for content optimization and workflow improvement.",
              },

              {
                title: "Professionals",
                desc:
                  "Professionals use Toolora for fast online utilities and task simplification.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-[1.7rem] p-7"
              >

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* FAQ */}
        <div className="mb-28">

          <div className="text-center mb-16">

            <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-5">
              Frequently Asked Questions
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Common Questions
            </h2>

          </div>

          <div className="space-y-6 max-w-4xl mx-auto">

            {[
              {
                q: "Is Toolora free to use?",
                a:
                  "Yes. Most tools on Toolora are completely free to use.",
              },

              {
                q: "Do I need to create an account?",
                a:
                  "No. Toolora tools are accessible without signup.",
              },

              {
                q: "Can I use Toolora on mobile?",
                a:
                  "Yes. Toolora is fully responsive and works across mobile, tablet, and desktop devices.",
              },

              {
                q: "Are Toolora tools secure?",
                a:
                  "Most tools work directly in the browser and prioritize user privacy and security.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8"
              >

                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {item.q}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                  {item.a}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}