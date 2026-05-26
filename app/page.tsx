// import Link from "next/link";

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
//   Scissors,
//   Type,
// } from "lucide-react";

// const tools = [
//   {
//     title: "QR Code Generator",
//     description:
//       "Generate QR codes instantly.",
//     icon: QrCode,
//     slug: "qr-generator",
//   },

//   {
//     title: "Password Generator",
//     description:
//       "Create strong secure passwords.",
//     icon: Lock,
//     slug: "password-generator",
//   },

//   {
//     title: "Age Calculator",
//     description:
//       "Calculate exact age instantly.",
//     icon: Calculator,
//     slug: "age-calculator",
//   },

//   {
//     title: "CGPA Calculator",
//     description:
//       "Calculate your CGPA easily.",
//     icon: GraduationCap,
//     slug: "cgpa-calculator",
//   },

//   {
//     title: "BMI Calculator",
//     description:
//       "Check your body mass index.",
//     icon: HeartPulse,
//     slug: "bmi-calculator",
//   },

//   {
//     title: "Factorial Calculator",
//     description:
//       "Calculate factorials instantly.",
//     icon: Sigma,
//     slug: "factorial-calculator",
//   },

//   {
//     title: "Simple Calculator",
//     description:
//       "Perform basic calculations.",
//     icon: Calculator,
//     slug: "simple-calculator",
//   },
//   {
//     title: "Pomodoro Timer",
//     description:
//       "Boost productivity using the Pomodoro technique.",
//     icon: Timer,
//     slug: "pomodoro-timer",
//   },
//   {
//     title: "Image to PDF",
//     description:
//       "Convert images into PDF files.",
//     icon: FileImage,
//     slug: "image-to-pdf",
//   },

//   {
//     title: "Image Compressor",
//     description:
//       "Compress images without losing quality.",
//     icon: ImageIcon,
//     slug: "image-compressor",
//   },

//   {
//     title: "PDF Merger",
//     description:
//       "Merge multiple PDF files into one.",
//     icon: FileText,
//     slug: "pdf-merger",
//   },
//   {
//   title: "Text Counter",
//   description:
//     "Count words, characters, reading time & more.",
//   slug: "text-counter",
//   icon: Type,
// },
// ];

// export default function ToolsPage() {
//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors duration-300">

//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <div className="text-center mb-20">

//           <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-5 py-2 text-sm text-purple-300 mb-8">
//             🛠 Toolora Utilities
//           </div>

//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

//             Explore Powerful
//             <span className="bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
//               {" "}Online Tools
//             </span>
//           </h1>

//           <p className="text-zinc-400 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
//             Toolora provides smart productivity,
//             utility, educational, and calculation
//             tools designed for students,
//             creators, developers, and professionals.
//           </p>
//         </div>

//         {/* TOOLS GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {tools.map((tool) => {
//             const Icon = tool.icon;

//             return (
//               <Link
//                 key={tool.slug}
//                 href={`/tools/${tool.slug}`}
//                 className="group bg-white/5 border border-white/10 rounded-4xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
//               >

//                 <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">

//                   <Icon
//                     className="text-purple-400"
//                     size={30}
//                   />
//                 </div>

//                 <h2 className="text-2xl font-bold mt-8 group-hover:text-purple-400 transition">

//                   {tool.title}
//                 </h2>

//                 <p className="text-zinc-400 mt-4 leading-relaxed">

//                   {tool.description}
//                 </p>

//                 <div className="flex items-center gap-2 text-purple-400 font-medium mt-8">

//                   Open Tool

//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition"
//                   />
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
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

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <PageHero
        badge="🚀 Welcome to Toolora"
        title="Modern Online Tools"
        gradientText="Built for Productivity"
        description="Toolora provides smart productivity, utility, educational, and calculation tools designed for students, creators, developers, and professionals."
      />

      {/* TOOLS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* SECTION TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

          <div>

            <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-5">
              Featured Tools
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

              Explore Smart
              <br />

              Utility Tools

            </h2>

          </div>

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition"
          >

            View All Tools

            <ArrowRight size={18} />

          </Link>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {tools.map((tool) => {

            const Icon = tool.icon;

            return (

              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group bg-white/5 border border-white/10 rounded-[1.7rem] p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5">

                  <Icon
                    className="text-purple-400"
                    size={28}
                  />

                </div>

                {/* TITLE */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition">

                  {tool.title}

                </h2>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-7">

                  {tool.description}

                </p>

                {/* BUTTON */}
                <div className="inline-flex items-center gap-2 text-purple-400 font-medium">

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
      <section className="max-w-7xl mx-auto px-6 pb-24">

      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[2rem] p-10 md:p-14">
          <div className="max-w-4xl">

            <div className="inline-flex bg-white/10 text-zinc-300 text-sm px-4 py-2 rounded-full mb-6">
              Why Toolora
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

              Fast, Modern &
              <br />

              Easy-to-Use Online Tools

            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl">

              Toolora is designed to simplify everyday digital tasks
              with modern productivity tools, calculators,
              file utilities, and educational resources —
              all in one clean platform.

            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-10 bg-purple-600 hover:bg-purple-700 transition px-7 py-4 rounded-2xl font-semibold"
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