// import Link from "next/link";
// import PageHero from "./components/ui/pageHero";

// import {
//   QrCode,
//   Lock,
//   Calculator,
//   FileImage,
//   GraduationCap,
//   HeartPulse,
//   Sigma,
//   Timer,
//   ArrowRight,
//   ImageIcon,
//   FileText,
//   Type,
// } from "lucide-react";

// const tools = [
//   {
//     title: "QR Code Generator",
//     description:
//       "Generate QR codes instantly for websites, text, links, and more.",
//     icon: QrCode,
//     slug: "qr-generator",
//   },

//   {
//     title: "Password Generator",
//     description:
//       "Create strong and secure passwords instantly.",
//     icon: Lock,
//     slug: "password-generator",
//   },

//   {
//     title: "Age Calculator",
//     description:
//       "Calculate your exact age quickly and accurately.",
//     icon: Calculator,
//     slug: "age-calculator",
//   },

//   {
//     title: "CGPA Calculator",
//     description:
//       "Calculate semester and overall CGPA easily.",
//     icon: GraduationCap,
//     slug: "cgpa-calculator",
//   },

//   {
//     title: "BMI Calculator",
//     description:
//       "Check your body mass index instantly.",
//     icon: HeartPulse,
//     slug: "bmi-calculator",
//   },

//   {
//     title: "Factorial Calculator",
//     description:
//       "Calculate factorial values instantly.",
//     icon: Sigma,
//     slug: "factorial-calculator",
//   },

//   {
//     title: "Simple Calculator",
//     description:
//       "Perform quick mathematical calculations online.",
//     icon: Calculator,
//     slug: "simple-calculator",
//   },

//   {
//     title: "Pomodoro Timer",
//     description:
//       "Boost productivity using focused work sessions.",
//     icon: Timer,
//     slug: "pomodoro-timer",
//   },

//   {
//     title: "Image to PDF",
//     description:
//       "Convert images into high-quality PDF files.",
//     icon: FileImage,
//     slug: "image-to-pdf",
//   },

//   {
//     title: "Image Compressor",
//     description:
//       "Compress image size without losing quality.",
//     icon: ImageIcon,
//     slug: "image-compressor",
//   },

//   {
//     title: "PDF Merger",
//     description:
//       "Merge multiple PDF documents into one file.",
//     icon: FileText,
//     slug: "pdf-merger",
//   },

//   {
//     title: "Text Counter",
//     description:
//       "Count words, characters, reading time and more.",
//     slug: "text-counter",
//     icon: Type,
//   },
// ];

// export default function HomePage() {

//   return (

//     <div className="min-h-screen bg-black text-white">

//       {/* HERO */}
//       <PageHero
//         badge="🚀 Welcome to Toolora"
//         title="Modern Online Tools"
//         gradientText="Built for Productivity"
//         description="Toolora provides smart productivity, utility, educational, and calculation tools designed for students, creators, developers, and professionals."
//       />

//       {/* TOOLS SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-20">

//         {/* SECTION TOP */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

//           <div>

//             <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-5">
//               Featured Tools
//             </div>

//             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

//               Explore Smart
//               <br />

//               Utility Tools

//             </h2>

//           </div>

//           <Link
//             href="/tools"
//             className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition"
//           >

//             View All Tools

//             <ArrowRight size={18} />

//           </Link>

//         </div>

//         {/* GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {tools.map((tool) => {

//             const Icon = tool.icon;

//             return (

//               <Link
//                 key={tool.slug}
//                 href={`/tools/${tool.slug}`}
//                 className="group bg-white/5 border border-white/10 rounded-[1.7rem] p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
//               >

//                 {/* ICON */}
//                 <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">

//                   <Icon
//                     className="text-purple-400"
//                     size={28}
//                   />

//                 </div>

//                 {/* TITLE */}
//                 <h2 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition">

//                   {tool.title}

//                 </h2>

//                 {/* DESCRIPTION */}
//                 <p className="text-zinc-400 text-sm leading-relaxed mb-7">

//                   {tool.description}

//                 </p>

//                 {/* BUTTON */}
//                 <div className="inline-flex items-center gap-2 text-purple-400 font-medium">

//                   Open Tool

//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition"
//                   />

//                 </div>

//               </Link>
//             );
//           })}

//         </div>

//       </section>

//       {/* WHY TOOLORA */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">

//       <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[2rem] p-10 md:p-14">
//           <div className="max-w-4xl">

//             <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-6">
//               Why Toolora
//             </div>

//             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

//               Fast, Modern &
//               <br />

//               Easy-to-Use Online Tools

//             </h2>

//             <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl">

//               Toolora is designed to simplify everyday digital tasks
//               with modern productivity tools, calculators,
//               file utilities, and educational resources —
//               all in one clean platform.

//             </p>

//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 mt-10 bg-purple-600 hover:bg-purple-700 transition px-7 py-4 rounded-2xl font-semibold"
//             >

//               Learn More

//               <ArrowRight size={18} />

//             </Link>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }






import Link from "next/link";
import PageHero from "./components/ui/pageHero";

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
} from "lucide-react";

const tools = [
  {
    title: "QR Code Generator",
    description:
      "Generate QR codes instantly for websites, text, links, and more.",
    icon: QrCode,
    slug: "qr-generator",
  },

  {
    title: "Password Generator",
    description:
      "Create strong and secure passwords instantly.",
    icon: Lock,
    slug: "password-generator",
  },

  {
    title: "Age Calculator",
    description:
      "Calculate your exact age quickly and accurately.",
    icon: Calculator,
    slug: "age-calculator",
  },

  {
    title: "CGPA Calculator",
    description:
      "Calculate semester and overall CGPA easily.",
    icon: GraduationCap,
    slug: "cgpa-calculator",
  },

  {
    title: "BMI Calculator",
    description:
      "Check your body mass index instantly.",
    icon: HeartPulse,
    slug: "bmi-calculator",
  },

  {
    title: "Factorial Calculator",
    description:
      "Calculate factorial values instantly.",
    icon: Sigma,
    slug: "factorial-calculator",
  },

  {
    title: "Simple Calculator",
    description:
      "Perform quick mathematical calculations online.",
    icon: Calculator,
    slug: "simple-calculator",
  },

  {
    title: "Pomodoro Timer",
    description:
      "Boost productivity using focused work sessions.",
    icon: Timer,
    slug: "pomodoro-timer",
  },

  {
    title: "Image to PDF",
    description:
      "Convert images into high-quality PDF files.",
    icon: FileImage,
    slug: "image-to-pdf",
  },

  {
    title: "Image Compressor",
    description:
      "Compress image size without losing quality.",
    icon: ImageIcon,
    slug: "image-compressor",
  },

  {
    title: "PDF Merger",
    description:
      "Merge multiple PDF documents into one file.",
    icon: FileText,
    slug: "pdf-merger",
  },

  {
    title: "Text Counter",
    description:
      "Count words, characters, reading time and more.",
    slug: "text-counter",
    icon: Type,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <PageHero
        badge="🚀 Welcome to Toolora"
        title="Modern Online Tools"
        gradientText="Built for Productivity"
        description="Toolora provides smart productivity, utility, educational, and calculation tools designed for students, creators, developers, and professionals."
      />

      {/* TOOLS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* SECTION TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-14">

          <div>

            <div className="inline-flex bg-white/10 text-zinc-300 text-xs sm:text-sm px-4 py-2 rounded-full mb-5">
              Featured Tools
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">

              Explore Smart
              <br />

              Utility Tools

            </h2>

          </div>

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition text-sm sm:text-base"
          >
            View All Tools

            <ArrowRight size={18} />
          </Link>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {tools.map((tool) => {

            const Icon = tool.icon;

            return (

              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group bg-white/5 border border-white/10 rounded-[1.7rem] p-5 sm:p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >

                {/* ICON */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">

                  <Icon
                    className="text-purple-400"
                    size={24}
                  />

                </div>

                {/* TITLE */}
                <h2 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-purple-300 transition">

                  {tool.title}

                </h2>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">

                  {tool.description}

                </p>

                {/* BUTTON */}
                <div className="inline-flex items-center gap-2 text-purple-400 font-medium text-sm">

                  Open Tool

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* WHY TOOLORA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">

        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[2rem] p-6 sm:p-10 md:p-14">

          <div className="max-w-4xl">

            <div className="inline-flex bg-white/10 text-zinc-300 text-xs sm:text-sm px-4 py-2 rounded-full mb-6">
              Why Toolora
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">

              Fast, Modern &
              <br />

              Easy-to-Use Online Tools

            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mt-6 sm:mt-8 max-w-3xl">

              Toolora is designed to simplify everyday digital tasks
              with modern productivity tools, calculators,
              file utilities, and educational resources —
              all in one clean platform.

            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 sm:mt-10 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 sm:px-7 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base"
            >

              Learn More

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}