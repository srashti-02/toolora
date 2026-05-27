// "use client";

// import { useRef, useState } from "react";
// import {
//   Download,
//   FileText,
//   Briefcase,
//   GraduationCap,
//   User,
//   Mail,
//   Phone,
//   Globe,
//   Plus,
//   Trash2,
//   Eye,
// } from "lucide-react";
// import toast from "react-hot-toast";

// // ─── TYPES ────────────────────────────────────────────────────────────────────
// interface Project {
//   id: string;
//   title: string;
//   tech: string;
//   points: string;
// }

// interface Experience {
//   id: string;
//   company: string;
//   role: string;
//   duration: string;
//   points: string;
// }

// interface FormData {
//   name: string;
//   role: string;
//   email: string;
//   phone: string;
//   linkedin: string;
//   github: string;
//   portfolio: string;
//   summary: string;
//   skills: string;
//   languages: string;
//   tools: string;
//   educationDegree: string;
//   educationInstitute: string;
//   educationDuration: string;
//   educationCGPA: string;
//   educationCoursework: string;
//   achievements: string;
//   projects: Project[];
//   experiences: Experience[];
// }

// const defaultForm: FormData = {
//   name: "Srashti Kumari",
//   role: "Full Stack Developer",
//   email: "ksrashti5@gmail.com",
//   phone: "8442026189",
//   linkedin: "linkedin.com/in/srashti-kumari-6a781228a",
//   github: "github.com/srashti-02",
//   portfolio: "Portfolio",
//   summary: "",
//   skills: "HTML, CSS, React.js, Node.js, Express.js, MongoDB",
//   languages: "C, C++, Python, JavaScript",
//   tools: "Git, GitHub, VS Code",
//   educationDegree: "B.Tech in Computer Science Engineering",
//   educationInstitute: "Rajasthan Technical University, Kota",
//   educationDuration: "2023 – 2027",
//   educationCGPA: "7.62",
//   educationCoursework: "Operating Systems, DBMS, Computer Networking, Artificial Intelligence, Cloud Computing, Data Structures and Algorithms",
//   achievements: "Active member of the HNM Club, contributing to organizational initiatives and collaborative activities.\nActively learning Full Stack Web Development and improving programming skills.",
//   projects: [
//     {
//       id: "1",
//       title: "Chit-Chat App",
//       tech: "Node.js, Express.js, MongoDB, Socket.io, HTML, CSS, JavaScript",
//       points:
//         "Developed a real-time chat application enabling multiple users to communicate instantly.\nImplemented WebSocket communication using Socket.io for real-time message exchange.\nDesigned backend APIs with Node.js and Express.js for handling user interactions.\nBuilt a responsive and user-friendly interface for seamless chatting experience.",
//     },
//     {
//       id: "2",
//       title: "Weather App",
//       tech: "HTML, CSS, JavaScript, Weather API",
//       points:
//         "Developed a responsive weather application that fetches real-time weather information using a public weather API.\nDisplays temperature, humidity, wind speed, and weather conditions based on the user's city input.\nImplemented API integration using JavaScript fetch method for retrieving live data.\nDesigned a clean and responsive user interface using HTML and CSS.",
//     },
//   ],
//   experiences: [],
// };

// // ─── HELPERS ──────────────────────────────────────────────────────────────────
// const uid = () => Math.random().toString(36).slice(2, 8);

// // ─── PAGE ─────────────────────────────────────────────────────────────────────
// export default function ResumeBuilderPage() {
//   const resumeRef = useRef<HTMLDivElement>(null);
//   const [form, setForm] = useState<FormData>(defaultForm);
//   const [activeTab, setActiveTab] = useState<"form" | "preview">("form");

//   const set = (key: keyof FormData, val: string) =>
//     setForm((p) => ({ ...p, [key]: val }));

//   // Projects
//   const addProject = () =>
//     setForm((p) => ({
//       ...p,
//       projects: [...p.projects, { id: uid(), title: "", tech: "", points: "" }],
//     }));
//   const removeProject = (id: string) =>
//     setForm((p) => ({ ...p, projects: p.projects.filter((x) => x.id !== id) }));
//   const setProject = (id: string, key: keyof Project, val: string) =>
//     setForm((p) => ({
//       ...p,
//       projects: p.projects.map((x) => (x.id === id ? { ...x, [key]: val } : x)),
//     }));

//   // Experiences
//   const addExp = () =>
//     setForm((p) => ({
//       ...p,
//       experiences: [
//         ...p.experiences,
//         { id: uid(), company: "", role: "", duration: "", points: "" },
//       ],
//     }));
//   const removeExp = (id: string) =>
//     setForm((p) => ({
//       ...p,
//       experiences: p.experiences.filter((x) => x.id !== id),
//     }));
//   const setExp = (id: string, key: keyof Experience, val: string) =>
//     setForm((p) => ({
//       ...p,
//       experiences: p.experiences.map((x) =>
//         x.id === id ? { ...x, [key]: val } : x
//       ),
//     }));

//   // Download via print
//   const downloadPDF = () => {
//     const style = document.createElement("style");
//     style.id = "print-override";
//     style.innerHTML = `
//       @media print {
//         body * { visibility: hidden !important; }
//         #resume-preview, #resume-preview * { visibility: visible !important; }
//         #resume-preview {
//           position: fixed !important;
//           left: 0 !important; top: 0 !important;
//           width: 210mm !important;
//           margin: 0 !important;
//           padding: 0 !important;
//           box-shadow: none !important;
//           border-radius: 0 !important;
//         }
//         @page { size: A4; margin: 10mm 12mm; }
//       }
//     `;
//     document.head.appendChild(style);
//     window.print();
//     setTimeout(() => document.getElementById("print-override")?.remove(), 1000);
//     toast.success("Print dialog opened — Save as PDF!");
//   };

//   const inputCls =
//     "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition placeholder:text-zinc-600";
//   const labelCls = "block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5";
//   const sectionHeadCls =
//     "flex items-center gap-2 text-base font-bold text-white mb-4 pb-2 border-b border-zinc-800";

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white">
//       {/* ── Header ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8 text-center">
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-purple-400 text-sm mb-5">
//           <FileText size={15} />
//           Resume Builder
//         </div>
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//           Build Your{" "}
//           <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//             Professional Resume
//           </span>
//         </h1>
//         <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
//           Fill in your details and download a clean, ATS-friendly PDF resume instantly.
//         </p>
//       </div>

//       {/* ── Mobile Tab Toggle ── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 flex gap-3 lg:hidden">
//         <button
//           onClick={() => setActiveTab("form")}
//           className={`flex-1 py-3 rounded-xl font-semibold text-sm transition ${activeTab === "form" ? "bg-purple-600" : "bg-zinc-900 border border-zinc-800"}`}
//         >
//           Edit Details
//         </button>
//         <button
//           onClick={() => setActiveTab("preview")}
//           className={`flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition ${activeTab === "preview" ? "bg-purple-600" : "bg-zinc-900 border border-zinc-800"}`}
//         >
//           <Eye size={15} /> Preview
//         </button>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 grid lg:grid-cols-2 gap-8 items-start">

//         {/* ══════════════════════════════════════════════
//             FORM PANEL
//         ══════════════════════════════════════════════ */}
//         <div className={`space-y-6 ${activeTab === "preview" ? "hidden lg:block" : ""}`}>

//           {/* Personal Info */}
//           <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
//             <h2 className={sectionHeadCls}>
//               <User size={17} className="text-purple-400" /> Personal Information
//             </h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="col-span-2">
//                 <label className={labelCls}>Full Name</label>
//                 <input className={inputCls} placeholder="e.g. Srashti Kumari" value={form.name} onChange={(e) => set("name", e.target.value)} />
//               </div>
//               <div className="col-span-2">
//                 <label className={labelCls}>Professional Role / Title</label>
//                 <input className={inputCls} placeholder="e.g. Full Stack Developer" value={form.role} onChange={(e) => set("role", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>Email</label>
//                 <input className={inputCls} placeholder="email@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>Phone</label>
//                 <input className={inputCls} placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>LinkedIn URL</label>
//                 <input className={inputCls} placeholder="linkedin.com/in/..." value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>GitHub URL</label>
//                 <input className={inputCls} placeholder="github.com/..." value={form.github} onChange={(e) => set("github", e.target.value)} />
//               </div>
//               <div className="col-span-2">
//                 <label className={labelCls}>Portfolio URL (optional)</label>
//                 <input className={inputCls} placeholder="yourportfolio.com" value={form.portfolio} onChange={(e) => set("portfolio", e.target.value)} />
//               </div>
//             </div>
//           </div>

//           {/* Education */}
//           <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
//             <h2 className={sectionHeadCls}>
//               <GraduationCap size={17} className="text-purple-400" /> Education
//             </h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="col-span-2">
//                 <label className={labelCls}>Degree</label>
//                 <input className={inputCls} placeholder="B.Tech in Computer Science" value={form.educationDegree} onChange={(e) => set("educationDegree", e.target.value)} />
//               </div>
//               <div className="col-span-2">
//                 <label className={labelCls}>Institute</label>
//                 <input className={inputCls} placeholder="University Name, City" value={form.educationInstitute} onChange={(e) => set("educationInstitute", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>Duration</label>
//                 <input className={inputCls} placeholder="2023 – 2027" value={form.educationDuration} onChange={(e) => set("educationDuration", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>CGPA / Percentage</label>
//                 <input className={inputCls} placeholder="7.62 / 10" value={form.educationCGPA} onChange={(e) => set("educationCGPA", e.target.value)} />
//               </div>
//               <div className="col-span-2">
//                 <label className={labelCls}>Relevant Coursework</label>
//                 <input className={inputCls} placeholder="DBMS, OS, DSA, AI..." value={form.educationCoursework} onChange={(e) => set("educationCoursework", e.target.value)} />
//               </div>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
//             <h2 className={sectionHeadCls}>
//               <Briefcase size={17} className="text-purple-400" /> Technical Skills
//             </h2>
//             <div className="space-y-4">
//               <div>
//                 <label className={labelCls}>Programming Languages</label>
//                 <input className={inputCls} placeholder="C, C++, Python, JavaScript" value={form.languages} onChange={(e) => set("languages", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>Web Development / Frameworks</label>
//                 <input className={inputCls} placeholder="HTML, CSS, React.js, Node.js..." value={form.skills} onChange={(e) => set("skills", e.target.value)} />
//               </div>
//               <div>
//                 <label className={labelCls}>Tools & Platforms</label>
//                 <input className={inputCls} placeholder="Git, GitHub, VS Code, Docker..." value={form.tools} onChange={(e) => set("tools", e.target.value)} />
//               </div>
//             </div>
//           </div>

//           {/* Projects */}
//           <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="flex items-center gap-2 text-base font-bold text-white">
//                 <FileText size={17} className="text-purple-400" /> Projects
//               </h2>
//               <button onClick={addProject} className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-lg transition">
//                 <Plus size={13} /> Add Project
//               </button>
//             </div>
//             <div className="space-y-5">
//               {form.projects.map((proj) => (
//                 <div key={proj.id} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 space-y-3">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Project</span>
//                     <button onClick={() => removeProject(proj.id)} className="text-red-500/60 hover:text-red-400 transition">
//                       <Trash2 size={14} />
//                     </button>
//                   </div>
//                   <input className={inputCls} placeholder="Project Title" value={proj.title} onChange={(e) => setProject(proj.id, "title", e.target.value)} />
//                   <input className={inputCls} placeholder="Tech Stack (comma separated)" value={proj.tech} onChange={(e) => setProject(proj.id, "tech", e.target.value)} />
//                   <textarea className={inputCls} rows={4} placeholder={"• Point 1\n• Point 2\n• Point 3"} value={proj.points} onChange={(e) => setProject(proj.id, "points", e.target.value)} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Experience */}
//           <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="flex items-center gap-2 text-base font-bold text-white">
//                 <Briefcase size={17} className="text-purple-400" /> Experience (Optional)
//               </h2>
//               <button onClick={addExp} className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-lg transition">
//                 <Plus size={13} /> Add
//               </button>
//             </div>
//             {form.experiences.length === 0 && (
//               <p className="text-zinc-600 text-sm">No experience added yet. Click + Add to add internships or jobs.</p>
//             )}
//             <div className="space-y-5">
//               {form.experiences.map((exp) => (
//                 <div key={exp.id} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 space-y-3">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Experience</span>
//                     <button onClick={() => removeExp(exp.id)} className="text-red-500/60 hover:text-red-400 transition">
//                       <Trash2 size={14} />
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-2 gap-3">
//                     <input className={inputCls} placeholder="Company / Organization" value={exp.company} onChange={(e) => setExp(exp.id, "company", e.target.value)} />
//                     <input className={inputCls} placeholder="Your Role" value={exp.role} onChange={(e) => setExp(exp.id, "role", e.target.value)} />
//                   </div>
//                   <input className={inputCls} placeholder="Duration (e.g. Jun 2024 – Aug 2024)" value={exp.duration} onChange={(e) => setExp(exp.id, "duration", e.target.value)} />
//                   <textarea className={inputCls} rows={3} placeholder={"• What you did\n• Impact / result"} value={exp.points} onChange={(e) => setExp(exp.id, "points", e.target.value)} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Achievements */}
//           <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
//             <h2 className={sectionHeadCls}>
//               <User size={17} className="text-purple-400" /> Achievements & Activities
//             </h2>
//             <textarea
//               className={inputCls}
//               rows={4}
//               placeholder={"• Won XYZ Hackathon\n• Active member of ABC Club"}
//               value={form.achievements}
//               onChange={(e) => set("achievements", e.target.value)}
//             />
//           </div>

//           {/* Download Button */}
//           <button
//             onClick={downloadPDF}
//             className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:opacity-90 transition rounded-2xl py-4 font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30"
//           >
//             <Download size={20} />
//             Download PDF Resume
//           </button>
//         </div>

//         {/* ══════════════════════════════════════════════
//             RESUME PREVIEW
//         ══════════════════════════════════════════════ */}
//         <div className={`sticky top-6 ${activeTab === "form" ? "hidden lg:block" : ""}`}>

//           <div className="flex items-center justify-between mb-4">
//             <span className="text-sm font-semibold text-zinc-400">Live Preview</span>
//             <button
//               onClick={downloadPDF}
//               className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-xl text-sm font-semibold"
//             >
//               <Download size={15} />
//               Download PDF
//             </button>
//           </div>

//           {/* ── Actual Resume ── */}
//           <div
//             id="resume-preview"
//             ref={resumeRef}
//             className="bg-white text-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden"
//             style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
//           >
//             {/* Header Band */}
//             <div className="bg-[#1e293b] text-white px-8 py-7">
//               <h1 className="text-3xl font-bold tracking-tight leading-tight">
//                 {form.name || "Your Name"}
//               </h1>
//               {form.role && (
//                 <p className="text-blue-300 text-base mt-1 font-medium">{form.role}</p>
//               )}
//               {/* Contact row */}
//               <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4 text-sm text-slate-300">
//                 {form.phone && (
//                   <span className="flex items-center gap-1.5">
//                     <Phone size={12} /> {form.phone}
//                   </span>
//                 )}
//                 {form.email && (
//                   <span className="flex items-center gap-1.5">
//                     <Mail size={12} /> {form.email}
//                   </span>
//                 )}

//                 {form.portfolio && (
//                   <span className="flex items-center gap-1.5">
//                     <Globe size={12} /> {form.portfolio}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Body */}
//             <div className="px-8 py-6 space-y-5 text-sm leading-relaxed">

//               {/* Summary */}
//               {form.summary && (
//                 <ResumeSection title="Summary">
//                   <p className="text-gray-700">{form.summary}</p>
//                 </ResumeSection>
//               )}

//               {/* Education */}
//               <ResumeSection title="Education">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="font-bold text-[#1e293b]">{form.educationInstitute || "University Name"}</p>
//                     <p className="text-gray-700">{form.educationDegree || "Degree"}</p>
//                     {form.educationCGPA && (
//                       <p className="text-gray-600 text-xs mt-0.5">CGPA: {form.educationCGPA}</p>
//                     )}
//                     {form.educationCoursework && (
//                       <p className="text-gray-500 text-xs mt-1">
//                         <span className="font-semibold text-gray-600">Coursework:</span> {form.educationCoursework}
//                       </p>
//                     )}
//                   </div>
//                   <span className="text-gray-500 text-xs whitespace-nowrap ml-4">{form.educationDuration}</span>
//                 </div>
//               </ResumeSection>

//               {/* Projects */}
//               {form.projects.length > 0 && (
//                 <ResumeSection title="Projects">
//                   <div className="space-y-4">
//                     {form.projects.map((proj) => (
//                       <div key={proj.id}>
//                         <div className="flex items-start justify-between">
//                           <p className="font-bold text-[#1e293b]">{proj.title || "Project Title"}</p>
//                         </div>
//                         {proj.tech && (
//                           <p className="text-gray-500 text-xs italic mb-1">{proj.tech}</p>
//                         )}
//                         <ul className="space-y-0.5 mt-1">
//                           {proj.points
//                             .split("\n")
//                             .filter((l) => l.trim())
//                             .map((line, i) => (
//                               <li key={i} className="flex items-start gap-2 text-gray-700">
//                                 <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
//                                 {line.replace(/^[•\-]\s*/, "")}
//                               </li>
//                             ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </ResumeSection>
//               )}

//               {/* Experience */}
//               {form.experiences.length > 0 && (
//                 <ResumeSection title="Experience">
//                   <div className="space-y-4">
//                     {form.experiences.map((exp) => (
//                       <div key={exp.id}>
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <p className="font-bold text-[#1e293b]">{exp.role || "Role"}</p>
//                             <p className="text-gray-600 text-xs">{exp.company}</p>
//                           </div>
//                           <span className="text-gray-500 text-xs whitespace-nowrap ml-4">{exp.duration}</span>
//                         </div>
//                         <ul className="space-y-0.5 mt-1">
//                           {exp.points
//                             .split("\n")
//                             .filter((l) => l.trim())
//                             .map((line, i) => (
//                               <li key={i} className="flex items-start gap-2 text-gray-700">
//                                 <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
//                                 {line.replace(/^[•\-]\s*/, "")}
//                               </li>
//                             ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </ResumeSection>
//               )}

//               {/* Technical Skills */}
//               <ResumeSection title="Technical Skills">
//                 <div className="space-y-1.5">
//                   {form.languages && (
//                     <p className="text-gray-700">
//                       <span className="font-semibold text-[#1e293b]">Programming Languages: </span>
//                       {form.languages}
//                     </p>
//                   )}
//                   {form.skills && (
//                     <p className="text-gray-700">
//                       <span className="font-semibold text-[#1e293b]">Web Development: </span>
//                       {form.skills}
//                     </p>
//                   )}
//                   {form.tools && (
//                     <p className="text-gray-700">
//                       <span className="font-semibold text-[#1e293b]">Tools & Platforms: </span>
//                       {form.tools}
//                     </p>
//                   )}
//                 </div>
//               </ResumeSection>

//               {/* Achievements */}
//               {form.achievements && (
//                 <ResumeSection title="Achievements">
//                   <ul className="space-y-1">
//                     {form.achievements
//                       .split("\n")
//                       .filter((l) => l.trim())
//                       .map((line, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-700">
//                           <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
//                           {line.replace(/^[•\-]\s*/, "")}
//                         </li>
//                       ))}
//                   </ul>
//                 </ResumeSection>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// // ── Resume Section Component ──────────────────────────────────────────────────
// function ResumeSection({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <div className="flex items-center gap-3 mb-2">
//         <h2
//           className="text-xs font-bold uppercase tracking-widest text-[#1e293b]"
//           style={{ letterSpacing: "0.12em" }}
//         >
//           {title}
//         </h2>
//         <div className="flex-1 h-px bg-[#1e293b]/20" />
//       </div>
//       {children}
//     </div>
//   );
// }



"use client";

import { useRef, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  User,
  Mail,
  Phone,
  Globe,
  Plus,
  Trash2,
  Eye,
} from "lucide-react";

import toast from "react-hot-toast";

// ───────────────── TYPES ─────────────────

interface Project {
  id: string;
  title: string;
  tech: string;
  points: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  points: string;
}

interface FormData {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
  skills: string;
  languages: string;
  tools: string;
  educationDegree: string;
  educationInstitute: string;
  educationDuration: string;
  educationCGPA: string;
  educationCoursework: string;
  achievements: string;
  projects: Project[];
  experiences: Experience[];
}

const defaultForm: FormData = {
  name: "Srashti Kumari",
  role: "Full Stack Developer",
  email: "ksrashti5@gmail.com",
  phone: "8442026189",
  linkedin: "linkedin.com/in/srashti-kumari",
  github: "github.com/srashti-02",
  portfolio: "toolora-seven.vercel.app",
  summary:
    "Passionate frontend developer skilled in building modern responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.",
  skills:
    "HTML, CSS, JavaScript, React.js, Next.js, Node.js, MongoDB",
  languages: "C, C++, Python, JavaScript",
  tools: "Git, GitHub, VS Code, Postman",
  educationDegree:
    "B.Tech in Computer Science Engineering",
  educationInstitute:
    "Rajasthan Technical University",
  educationDuration: "2023 - 2027",
  educationCGPA: "7.62",
  educationCoursework:
    "DBMS, Operating Systems, AI, Computer Networks",
  achievements:
    "Built multiple productivity tools.\nImproved UI/UX and SEO of Toolora project.",
  projects: [
    {
      id: "1",
      title: "Toolora",
      tech:
        "Next.js, TypeScript, Tailwind CSS",
      points:
        "Built a modern multi-tool productivity platform.\nImplemented responsive UI and SEO optimization.\nAdded image tools, calculators, and resume builder.",
    },
  ],
  experiences: [],
};

const uid = () =>
  Math.random().toString(36).slice(2, 8);

export default function ResumeBuilderPage() {

  const resumeRef =
    useRef<HTMLDivElement>(null);

  const [form, setForm] =
    useState<FormData>(defaultForm);

  const [activeTab, setActiveTab] =
    useState<"form" | "preview">("form");

  const set = (
    key: keyof FormData,
    val: string
  ) =>
    setForm((p) => ({
      ...p,
      [key]: val,
    }));

  // ───────────── PROJECTS ─────────────

  const addProject = () =>
    setForm((p) => ({
      ...p,
      projects: [
        ...p.projects,
        {
          id: uid(),
          title: "",
          tech: "",
          points: "",
        },
      ],
    }));

  const removeProject = (id: string) =>
    setForm((p) => ({
      ...p,
      projects: p.projects.filter(
        (x) => x.id !== id
      ),
    }));

  const setProject = (
    id: string,
    key: keyof Project,
    val: string
  ) =>
    setForm((p) => ({
      ...p,
      projects: p.projects.map((x) =>
        x.id === id
          ? { ...x, [key]: val }
          : x
      ),
    }));

  // ───────────── EXPERIENCE ─────────────

  const addExp = () =>
    setForm((p) => ({
      ...p,
      experiences: [
        ...p.experiences,
        {
          id: uid(),
          company: "",
          role: "",
          duration: "",
          points: "",
        },
      ],
    }));

  const removeExp = (id: string) =>
    setForm((p) => ({
      ...p,
      experiences:
        p.experiences.filter(
          (x) => x.id !== id
        ),
    }));

  const setExp = (
    id: string,
    key: keyof Experience,
    val: string
  ) =>
    setForm((p) => ({
      ...p,
      experiences:
        p.experiences.map((x) =>
          x.id === id
            ? { ...x, [key]: val }
            : x
        ),
    }));

  // ───────────── PDF DOWNLOAD ─────────────

  const downloadPDF = async () => {

    if (!resumeRef.current) return;

    try {

      toast.loading(
        "Generating PDF..."
      );

      const canvas =
        await html2canvas(
          resumeRef.current,
          {
            scale: 2,
            useCORS: true,
            backgroundColor:
              "#ffffff",
          }
        );

      const imgData =
        canvas.toDataURL("image/png");

      const pdf = new jsPDF(
        "p",
        "mm",
        "a4"
      );

      const pdfWidth =
        pdf.internal.pageSize.getWidth();

      const imgWidth =
        canvas.width;

      const imgHeight =
        canvas.height;

      const ratio =
        pdfWidth / imgWidth;

      const imgPdfHeight =
        imgHeight * ratio;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        imgPdfHeight
      );

      pdf.save(
        "toolora-resume.pdf"
      );

      toast.dismiss();

      toast.success(
        "Resume Downloaded!"
      );

    } catch (error) {

      console.error(error);

      toast.dismiss();

      toast.error(
        "PDF generation failed"
      );
    }
  };

  const inputCls =
    "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 text-white";

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}

      <div className="max-w-7xl mx-auto px-4 py-10 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-purple-400 text-sm mb-6">
          <FileText size={15} />
          Resume Builder
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Build Your
          <span className="block bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
            Professional Resume
          </span>
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          Create modern ATS-friendly
          resumes and download them
          instantly as PDF.
        </p>
      </div>

      {/* MOBILE TABS */}

      <div className="lg:hidden flex gap-3 px-4 mb-6">

        <button
          onClick={() =>
            setActiveTab("form")
          }
          className={`flex-1 py-3 rounded-xl font-semibold ${
            activeTab === "form"
              ? "bg-purple-600"
              : "bg-zinc-900"
          }`}
        >
          Form
        </button>

        <button
          onClick={() =>
            setActiveTab("preview")
          }
          className={`flex-1 py-3 rounded-xl font-semibold ${
            activeTab === "preview"
              ? "bg-purple-600"
              : "bg-zinc-900"
          }`}
        >
          Preview
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 px-4 pb-20">

        {/* FORM */}

        <div
          className={`space-y-5 ${
            activeTab === "preview"
              ? "hidden lg:block"
              : ""
          }`}
        >

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-4">

            <input
              className={inputCls}
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                set(
                  "name",
                  e.target.value
                )
              }
            />

            <input
              className={inputCls}
              placeholder="Professional Role"
              value={form.role}
              onChange={(e) =>
                set(
                  "role",
                  e.target.value
                )
              }
            />

            <input
              className={inputCls}
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                set(
                  "email",
                  e.target.value
                )
              }
            />

            <input
              className={inputCls}
              placeholder="Phone"
              value={form.phone}
              onChange={(e) =>
                set(
                  "phone",
                  e.target.value
                )
              }
            />

            <input
              className={inputCls}
              placeholder="LinkedIn URL"
              value={form.linkedin}
              onChange={(e) =>
                set(
                  "linkedin",
                  e.target.value
                )
              }
            />

            <input
              className={inputCls}
              placeholder="GitHub URL"
              value={form.github}
              onChange={(e) =>
                set(
                  "github",
                  e.target.value
                )
              }
            />

            <textarea
              rows={4}
              className={inputCls}
              placeholder="Professional Summary"
              value={form.summary}
              onChange={(e) =>
                set(
                  "summary",
                  e.target.value
                )
              }
            />

            <textarea
              rows={3}
              className={inputCls}
              placeholder="Skills"
              value={form.skills}
              onChange={(e) =>
                set(
                  "skills",
                  e.target.value
                )
              }
            />

            <button
              onClick={downloadPDF}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 font-bold flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume PDF
            </button>
          </div>
        </div>

        {/* PREVIEW */}

        <div
          className={`${
            activeTab === "form"
              ? "hidden lg:block"
              : ""
          }`}
        >

          <div
            ref={resumeRef}
            className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl w-full"
          >

            {/* TOP */}

            <div className="bg-slate-800 text-white px-8 py-8">

              <h1 className="text-4xl font-black">
                {form.name}
              </h1>

              <p className="text-blue-300 mt-2 text-lg">
                {form.role}
              </p>

              <div className="flex flex-wrap gap-4 mt-5 text-sm">

                <span className="flex items-center gap-2">
                  <Mail size={14} />
                  {form.email}
                </span>

                <span className="flex items-center gap-2">
                  <Phone size={14} />
                  {form.phone}
                </span>

                <span className="flex items-center gap-2">
                  <Globe size={14} />
                  {form.portfolio}
                </span>
              </div>
            </div>

            {/* BODY */}

            <div className="p-8 space-y-7">

              <ResumeSection title="Summary">
                <p className="text-zinc-700 leading-7">
                  {form.summary}
                </p>
              </ResumeSection>

              <ResumeSection title="Skills">
                <p className="text-zinc-700 leading-7">
                  {form.skills}
                </p>
              </ResumeSection>

              <ResumeSection title="Education">
                <div>

                  <h3 className="font-bold text-lg">
                    {
                      form.educationInstitute
                    }
                  </h3>

                  <p className="text-zinc-700">
                    {
                      form.educationDegree
                    }
                  </p>

                  <p className="text-zinc-500 mt-1">
                    {
                      form.educationDuration
                    }
                  </p>
                </div>
              </ResumeSection>

              <ResumeSection title="Projects">

                {form.projects.map(
                  (project) => (
                    <div
                      key={project.id}
                      className="mb-5"
                    >

                      <h3 className="font-bold text-lg">
                        {
                          project.title
                        }
                      </h3>

                      <p className="text-sm text-zinc-500 italic">
                        {
                          project.tech
                        }
                      </p>

                      <ul className="mt-2 space-y-1">

                        {project.points
                          .split("\n")
                          .map(
                            (
                              point,
                              index
                            ) => (
                              <li
                                key={
                                  index
                                }
                                className="text-zinc-700 flex gap-2"
                              >
                                • {point}
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  )
                )}
              </ResumeSection>

              <ResumeSection title="Achievements">

                <ul className="space-y-1">

                  {form.achievements
                    .split("\n")
                    .map(
                      (
                        item,
                        index
                      ) => (
                        <li
                          key={
                            index
                          }
                          className="text-zinc-700"
                        >
                          • {item}
                        </li>
                      )
                    )}
                </ul>
              </ResumeSection>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ───────────────── SECTION ─────────────────

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  return (
    <div>

      <div className="flex items-center gap-3 mb-3">

        <h2 className="text-sm uppercase font-black tracking-widest text-slate-800">
          {title}
        </h2>

        <div className="h-px bg-slate-300 flex-1" />
      </div>

      {children}
    </div>
  );
}