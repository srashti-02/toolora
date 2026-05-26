"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = () => {

    if (!email.includes("@")) {

      alert("Enter a valid email.");

      return;
    }

    setSuccess(true);

    setEmail("");

    setTimeout(() => {

      setSuccess(false);

    }, 3000);
  };

  return (

    <footer className="border-t border-white/10 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-14 mb-20">

          {/* BRAND */}
          <div>

            <h2 className="text-4xl font-extrabold text-purple-500">
              Toolora
            </h2>

            <p className="text-zinc-400 leading-relaxed mt-6 text-lg">

              Modern online productivity and utility tools
              for students, developers, creators,
              and professionals.

            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">

              <Link
                href="/contact"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
              >
                <Mail size={20} />
              </Link>

            </div>

          </div>

          {/* TOOLS */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Tools
            </h3>

            <div className="space-y-5 text-zinc-400">

              <Link
                href="/tools/text-counter"
                className="block hover:text-purple-400 transition"
              >
                Text Counter
              </Link>

              <Link
                href="/tools/password-generator"
                className="block hover:text-purple-400 transition"
              >
                Password Generator
              </Link>

              <Link
                href="/tools/pomodoro-timer"
                className="block hover:text-purple-400 transition"
              >
                Pomodoro Timer
              </Link>

              <Link
                href="/tools"
                className="block hover:text-purple-400 transition"
              >
                All Tools
              </Link>

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Company
            </h3>

            <div className="space-y-5 text-zinc-400">

              <Link
                href="/about"
                className="block hover:text-purple-400 transition"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="block hover:text-purple-400 transition"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block hover:text-purple-400 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* LEGAL */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Legal
            </h3>

            <div className="space-y-5 text-zinc-400">

              <Link
                href="/privacy-policy"
                className="block hover:text-purple-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block hover:text-purple-400 transition"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/disclaimer"
                className="block hover:text-purple-400 transition"
              >
                Disclaimer
              </Link>

            </div>

          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[2rem] p-10 mb-16">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            <div>

              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with Toolora
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">

                Get updates about new productivity tools,
                features, and useful blog articles.

              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-black border border-white/10 rounded-2xl px-6 py-4 outline-none w-full sm:w-[320px]"
              />

              <button
                onClick={handleSubscribe}
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
              >

                Subscribe

                <ArrowUpRight size={18} />

              </button>

            </div>

          </div>

          {success && (

            <div className="mt-6 text-green-400 font-medium">

              Successfully subscribed to Toolora updates.

            </div>

          )}

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-5 items-center justify-between">

          <p className="text-zinc-500 text-center md:text-left">

            © 2026 Toolora. All rights reserved.

          </p>

          <p className="text-zinc-500 text-center md:text-right">

            Built for productivity, simplicity & modern workflow.

          </p>

        </div>

      </div>

    </footer>
  );
}