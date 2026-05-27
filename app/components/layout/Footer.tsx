// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Mail, ArrowUpRight } from "lucide-react";

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSubscribe = () => {
//     if (!email.includes("@")) {
//       setError(true);
//       setTimeout(() => setError(false), 3000);
//       return;
//     }
//     setSuccess(true);
//     setEmail("");
//     setTimeout(() => setSuccess(false), 3000);
//   };

//   return (
//     <footer className="border-t border-white/10 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* ── NEWSLETTER BANNER (top of footer, full-width) ── */}
//         <div className="py-12 sm:py-14 border-b border-white/10">
//           <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[1.75rem] px-8 sm:px-12 py-10 sm:py-12">
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

//               {/* Left: text */}
//               <div className="max-w-xl">
//                 <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-3 py-1.5 rounded-full mb-4">
//                   <Mail size={12} />
//                   Newsletter
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3">
//                   Stay Updated with Toolora
//                 </h3>
//                 <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
//                   Get notified about new tools, features, and useful articles.
//                   No spam, ever.
//                 </p>
//               </div>

//               {/* Right: input */}
//               <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[380px]">
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
//                     placeholder="Enter your email address"
//                     className="bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none rounded-xl px-5 py-3.5 text-sm w-full sm:w-auto flex-1 placeholder:text-zinc-600 transition"
//                   />
//                   <button
//                     onClick={handleSubscribe}
//                     className="bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all duration-150 px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 whitespace-nowrap"
//                   >
//                     Subscribe
//                     <ArrowUpRight size={16} />
//                   </button>
//                 </div>

//                 {/* Feedback messages */}
//                 {success && (
//                   <p className="text-green-400 text-xs font-medium flex items-center gap-1.5">
//                     ✓ You're subscribed! Welcome to Toolora.
//                   </p>
//                 )}
//                 {error && (
//                   <p className="text-red-400 text-xs font-medium flex items-center gap-1.5">
//                     ✕ Please enter a valid email address.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── MAIN LINKS GRID ── */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 py-14">

//           {/* Brand column */}
//           <div className="col-span-2 sm:col-span-1">
//             <Link href="/" className="text-3xl font-extrabold text-purple-500 tracking-tight">
//               Toolora
//             </Link>
//             <p className="text-zinc-500 text-sm leading-relaxed mt-4 max-w-[220px]">
//               Modern online tools for students, developers, creators, and professionals.
//             </p>
//             <div className="flex items-center gap-3 mt-6">
//               <Link
//                 href="/contact"
//                 aria-label="Email"
//                 className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/30 transition"
//               >
//                 <Mail size={15} />
//               </Link>
          
            
//             </div>
//           </div>

//           {/* Tools */}
//           <div>
//             <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
//               Tools
//             </h3>
//             <ul className="space-y-3.5 text-sm text-zinc-400">
//               {[
//                 { label: "Text Counter", href: "/tools/text-counter" },
//                 { label: "Password Generator", href: "/tools/password-generator" },
//                 { label: "Pomodoro Timer", href: "/tools/pomodoro-timer" },
//                 { label: "QR Code Generator", href: "/tools/qr-generator" },
//                 { label: "All Tools →", href: "/tools" },
//               ].map((l) => (
//                 <li key={l.href}>
//                   <Link href={l.href} className="hover:text-purple-400 transition">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
//               Company
//             </h3>
//             <ul className="space-y-3.5 text-sm text-zinc-400">
//               {[
//                 { label: "About", href: "/about" },
//                 { label: "Blog", href: "/blog" },
//                 { label: "Contact", href: "/contact" },
//               ].map((l) => (
//                 <li key={l.href}>
//                   <Link href={l.href} className="hover:text-purple-400 transition">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
//               Legal
//             </h3>
//             <ul className="space-y-3.5 text-sm text-zinc-400">
//               {[
//                 { label: "Privacy Policy", href: "/privacy-policy" },
//                 { label: "Terms & Conditions", href: "/terms" },
//                 { label: "Disclaimer", href: "/disclaimer" },
//               ].map((l) => (
//                 <li key={l.href}>
//                   <Link href={l.href} className="hover:text-purple-400 transition">
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         {/* ── BOTTOM BAR ── */}
//         <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
//           <p>© 2026 Toolora. All rights reserved.</p>
//           <p>Built for productivity, simplicity &amp; modern workflow.</p>
//         </div>

//       </div>
//     </footer>
//   );
// }










import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* MAIN LINKS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 py-14">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="text-3xl font-extrabold text-purple-500 tracking-tight">
              Toolora
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mt-4 max-w-[220px]">
              Modern online tools for students, developers, creators, and professionals.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="/contact"
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/30 transition"
              >
                <Mail size={15} />
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
              Tools
            </h3>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              {[
                { label: "Text Counter", href: "/tools/text-counter" },
                { label: "Password Generator", href: "/tools/password-generator" },
                { label: "Pomodoro Timer", href: "/tools/pomodoro-timer" },
                { label: "QR Code Generator", href: "/tools/qr-generator" },
                { label: "All Tools →", href: "/tools" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-purple-400 transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
              Company
            </h3>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-purple-400 transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
              Legal
            </h3>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-purple-400 transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>© 2026 Toolora. All rights reserved.</p>
          <p>Built for productivity, simplicity &amp; modern workflow.</p>
        </div>

      </div>
    </footer>
  );
}