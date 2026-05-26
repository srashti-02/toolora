"use client";

import PageHero from "../components/ui/pageHero";

import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactPage() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <PageHero
        badge="📩 Contact Toolora"
        title="Let’s Connect &"
        gradientText="Talk Together"
        description="Have questions, suggestions, feedback, or partnership ideas? We'd love to hear from you and help you with Toolora."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>

            <div className="bg-white/5 border border-white/10 rounded-[1.8rem] p-8">

              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">

                {/* EMAIL */}
                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">

                    <Mail className="text-purple-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Email Support
                    </h3>

                    <p className="text-zinc-400 mt-2">
                      toolorasupport@gmail.com
                    </p>

                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">

                    <MapPin className="text-green-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Availability
                    </h3>

                    <p className="text-zinc-400 mt-2">
                      Available Worldwide
                    </p>

                  </div>

                </div>

              </div>

              {/* EXTRA */}
              <div className="mt-12 bg-linear-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-7">

                <h3 className="text-2xl font-bold">
                  Need Quick Help?
                </h3>

                <p className="text-zinc-400 mt-4 leading-relaxed">

                  For faster support, include
                  detailed information about
                  your issue or suggestion.

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="bg-white/5 border border-white/10 rounded-[1.8rem] p-8"
            >

              {/* ACCESS KEY */}
              <input
                type="hidden"
                name="access_key"
                value="997affed-a693-44c4-b41a-afffc4c8b45e"
              />

              {/* SUBJECT */}
              <input
                type="hidden"
                name="subject"
                value="New Toolora Contact Message"
              />

              {/* FORM NAME */}
              <input
                type="hidden"
                name="from_name"
                value="Toolora Contact Form"
              />

              {/* REPLY TO */}
              <input
                type="hidden"
                name="replyto"
                value="email"
              />

              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                Send Message
              </h2>

              {/* NAME */}
              <div className="mb-6">

                <label className="block text-sm text-zinc-400 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
                />

              </div>

              {/* EMAIL */}
              <div className="mb-6">

                <label className="block text-sm text-zinc-400 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
                />

              </div>

              {/* MESSAGE */}
              <div className="mb-6">

                <label className="block text-sm text-zinc-400 mb-3">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  required
                  rows={6}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-purple-500 transition"
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-2xl py-4 font-semibold flex items-center justify-center gap-2"
              >

                Send Message

                <Send size={18} />

              </button>

            </form>

          </div>

        </div>

        {/* FAQ */}
        <div className="mt-28">

          <div className="text-center mb-16">

            <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-5">
              FAQ
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                q: "Are Toolora tools free?",
                a: "Yes, all Toolora tools are completely free to use.",
              },

              {
                q: "Do you store user data?",
                a: "Most tools work directly in the browser and do not store personal data.",
              },

              {
                q: "Can I suggest new tools?",
                a: "Absolutely. We welcome feature requests and suggestions.",
              },

              {
                q: "Is Toolora mobile friendly?",
                a: "Yes, Toolora is optimized for desktop, tablet, and mobile devices.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-7"
              >

                <h3 className="text-xl font-bold">
                  {item.q}
                </h3>

                <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
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