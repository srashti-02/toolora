"use client";
import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[1.75rem] px-8 sm:px-12 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

            {/* Left: text */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-3 py-1.5 rounded-full mb-4">
                <Mail size={12} />
                Newsletter
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3">
                Stay Updated with Toolora
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Get notified about new tools, features, and useful articles.
                No spam, ever.
              </p>
            </div>

            {/* Right: input */}
            <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[380px]">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="Enter your email address"
                  className="bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none rounded-xl px-5 py-3.5 text-sm w-full sm:w-auto flex-1 placeholder:text-zinc-600 transition"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all duration-150 px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowUpRight size={16} />
                </button>
              </div>
              {success && (
                <p className="text-green-400 text-xs font-medium">
                  ✓ You're subscribed! Welcome to Toolora.
                </p>
              )}
              {error && (
                <p className="text-red-400 text-xs font-medium">
                  ✕ Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}