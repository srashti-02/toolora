"use client";

import { useRef, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import toast from "react-hot-toast";

import {
  Download,
  FileText,
  Plus,
  Trash2,
} from "lucide-react";

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

// ───────────────── DEFAULT DATA ─────────────────

const defaultForm: FormData = {
  name: "Srashti Kumari",
  role: "Frontend Developer",

  email: "ksrashti5@gmail.com",
  phone: "8442026189",

  linkedin:
    "https://linkedin.com/in/srashti-kumari",

  github:
    "https://github.com/srashti-02",

  portfolio:
    "https://toolora-seven.vercel.app",

  summary:
    "Passionate frontend developer skilled in building modern responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.",

  skills:
    "React.js, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB",

  languages:
    "JavaScript, TypeScript, Python, C++",

  tools:
    "Git, GitHub, VS Code, Postman",

  educationDegree:
    "Bachelor of Technology in Computer Science Engineering",

  educationInstitute:
    "Rajasthan Technical University",

  educationDuration:
    "2023 - 2027",

  educationCGPA:
    "7.62 CGPA",

  educationCoursework:
    "DBMS, Operating Systems, AI, Computer Networks",

  achievements:
    "Built multiple productivity tools.\nImproved SEO and UI/UX of Toolora.\nCreated responsive utility applications.",

  projects: [],
  experiences: [],
};

// ───────────────── HELPERS ─────────────────

const uid = () =>
  Math.random()
    .toString(36)
    .slice(2, 9);

const cleanLink = (url: string) =>
  url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace("linkedin.com/in/", "")
    .replace("github.com/", "");

// ───────────────── PAGE ─────────────────

export default function ResumeBuilderPage() {

  const resumeRef =
    useRef<HTMLDivElement>(null);

  const [form, setForm] =
    useState<FormData>(defaultForm);

  // ───────────────── SETTERS ─────────────────

  const set = (
    key: keyof FormData,
    val: string
  ) =>
    setForm((p) => ({
      ...p,
      [key]: val,
    }));

  // ───────────────── PROJECTS ─────────────────

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

  const removeProject = (
    id: string
  ) =>
    setForm((p) => ({
      ...p,
      projects:
        p.projects.filter(
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
      projects:
        p.projects.map((x) =>
          x.id === id
            ? {
                ...x,
                [key]: val,
              }
            : x
        ),
    }));

  // ───────────────── EXPERIENCE ─────────────────

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

  const removeExp = (
    id: string
  ) =>
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
            ? {
                ...x,
                [key]: val,
              }
            : x
        ),
    }));

  // ───────────────── PDF ─────────────────

  const downloadPDF =
    async () => {

      if (!resumeRef.current)
        return;

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
          canvas.toDataURL(
            "image/png"
          );

        const pdf =
          new jsPDF(
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
          "Failed to generate PDF"
        );
      }
    };

  // ───────────────── INPUT CLASS ─────────────────

  const inputCls =
    "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500";

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-purple-400 text-sm mb-5">

            <FileText size={15} />

            Resume Builder

          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-5">

            Build Professional
            <span className="block bg-linear-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
              ATS Friendly Resume
            </span>

          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Create modern resumes with
            live preview and download
            them instantly as PDF.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* FORM */}

          <div className="space-y-6">

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

              <input
                className={inputCls}
                placeholder="Portfolio URL"
                value={form.portfolio}
                onChange={(e) =>
                  set(
                    "portfolio",
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

              <textarea
                rows={2}
                className={inputCls}
                placeholder="Programming Languages"
                value={form.languages}
                onChange={(e) =>
                  set(
                    "languages",
                    e.target.value
                  )
                }
              />

              <textarea
                rows={2}
                className={inputCls}
                placeholder="Tools"
                value={form.tools}
                onChange={(e) =>
                  set(
                    "tools",
                    e.target.value
                  )
                }
              />

            </div>

            {/* EDUCATION */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-4">

              <h2 className="font-bold text-xl">
                Education
              </h2>

              <input
                className={inputCls}
                placeholder="Degree"
                value={
                  form.educationDegree
                }
                onChange={(e) =>
                  set(
                    "educationDegree",
                    e.target.value
                  )
                }
              />

              <input
                className={inputCls}
                placeholder="Institute"
                value={
                  form.educationInstitute
                }
                onChange={(e) =>
                  set(
                    "educationInstitute",
                    e.target.value
                  )
                }
              />

              <input
                className={inputCls}
                placeholder="Duration"
                value={
                  form.educationDuration
                }
                onChange={(e) =>
                  set(
                    "educationDuration",
                    e.target.value
                  )
                }
              />

              <input
                className={inputCls}
                placeholder="CGPA"
                value={
                  form.educationCGPA
                }
                onChange={(e) =>
                  set(
                    "educationCGPA",
                    e.target.value
                  )
                }
              />

              <textarea
                rows={3}
                className={inputCls}
                placeholder="Coursework"
                value={
                  form.educationCoursework
                }
                onChange={(e) =>
                  set(
                    "educationCoursework",
                    e.target.value
                  )
                }
              />

            </div>

            {/* PROJECTS */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

              <div className="flex items-center justify-between mb-5">

                <h2 className="font-bold text-xl">
                  Projects
                </h2>

                <button
                  onClick={addProject}
                  className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-xl text-sm flex items-center gap-2"
                >
                  <Plus size={15} />
                  Add
                </button>

              </div>

              <div className="space-y-5">

                {form.projects.map(
                  (project) => (
                    <div
                      key={project.id}
                      className="border border-zinc-800 rounded-2xl p-4 space-y-3"
                    >

                      <input
                        className={
                          inputCls
                        }
                        placeholder="Project Title"
                        value={
                          project.title
                        }
                        onChange={(e) =>
                          setProject(
                            project.id,
                            "title",
                            e.target
                              .value
                          )
                        }
                      />

                      <input
                        className={
                          inputCls
                        }
                        placeholder="Technologies"
                        value={
                          project.tech
                        }
                        onChange={(e) =>
                          setProject(
                            project.id,
                            "tech",
                            e.target
                              .value
                          )
                        }
                      />

                      <textarea
                        rows={4}
                        className={
                          inputCls
                        }
                        placeholder="Project Points"
                        value={
                          project.points
                        }
                        onChange={(e) =>
                          setProject(
                            project.id,
                            "points",
                            e.target
                              .value
                          )
                        }
                      />

                      <button
                        onClick={() =>
                          removeProject(
                            project.id
                          )
                        }
                        className="text-red-400 text-sm flex items-center gap-2"
                      >
                        <Trash2
                          size={14}
                        />
                        Remove
                      </button>

                    </div>
                  )
                )}
              </div>
            </div>

            {/* EXPERIENCE */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

              <div className="flex items-center justify-between mb-5">

                <h2 className="font-bold text-xl">
                  Experience
                </h2>

                <button
                  onClick={addExp}
                  className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-xl text-sm flex items-center gap-2"
                >
                  <Plus size={15} />
                  Add
                </button>

              </div>

              <div className="space-y-5">

                {form.experiences.map(
                  (exp) => (
                    <div
                      key={exp.id}
                      className="border border-zinc-800 rounded-2xl p-4 space-y-3"
                    >

                      <input
                        className={
                          inputCls
                        }
                        placeholder="Company"
                        value={
                          exp.company
                        }
                        onChange={(e) =>
                          setExp(
                            exp.id,
                            "company",
                            e.target
                              .value
                          )
                        }
                      />

                      <input
                        className={
                          inputCls
                        }
                        placeholder="Role"
                        value={exp.role}
                        onChange={(e) =>
                          setExp(
                            exp.id,
                            "role",
                            e.target
                              .value
                          )
                        }
                      />

                      <input
                        className={
                          inputCls
                        }
                        placeholder="Duration"
                        value={
                          exp.duration
                        }
                        onChange={(e) =>
                          setExp(
                            exp.id,
                            "duration",
                            e.target
                              .value
                          )
                        }
                      />

                      <textarea
                        rows={4}
                        className={
                          inputCls
                        }
                        placeholder="Experience Points"
                        value={
                          exp.points
                        }
                        onChange={(e) =>
                          setExp(
                            exp.id,
                            "points",
                            e.target
                              .value
                          )
                        }
                      />

                      <button
                        onClick={() =>
                          removeExp(
                            exp.id
                          )
                        }
                        className="text-red-400 text-sm flex items-center gap-2"
                      >
                        <Trash2
                          size={14}
                        />
                        Remove
                      </button>

                    </div>
                  )
                )}
              </div>
            </div>

            {/* ACHIEVEMENTS */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-4">

              <h2 className="font-bold text-xl">
                Achievements
              </h2>

              <textarea
                rows={5}
                className={inputCls}
                placeholder="Achievements"
                value={
                  form.achievements
                }
                onChange={(e) =>
                  set(
                    "achievements",
                    e.target.value
                  )
                }
              />

            </div>

            {/* DOWNLOAD */}

            <button
              onClick={downloadPDF}
              className="w-full py-4 rounded-2xl bg-linear-to-r from-purple-600 to-blue-500 hover:opacity-90 transition font-bold flex items-center justify-center gap-3"
            >

              <Download size={20} />

              Download Resume PDF

            </button>

          </div>

          {/* PREVIEW */}

          <div>

            <div
              ref={resumeRef}
              className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl"
            >

              {/* HEADER */}

              <div className="bg-slate-800 text-white px-8 py-6">

                <h1 className="text-4xl font-black">
                  {form.name}
                </h1>

                <p className="text-blue-300 mt-2 text-lg">
                  {form.role}
                </p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-200">

                  {form.email && (
                    <span>
                      ✉{" "}
                      {form.email}
                    </span>
                  )}

                  {form.phone && (
                    <span>
                      📞{" "}
                      {form.phone}
                    </span>
                  )}

                  {form.linkedin && (
                    <span>
                      in{" "}
                      {cleanLink(
                        form.linkedin
                      )}
                    </span>
                  )}

                  {form.github && (
                    <span>
                      ⌘{" "}
                      {cleanLink(
                        form.github
                      )}
                    </span>
                  )}

                </div>
              </div>

              {/* BODY */}

              <div className="p-6 space-y-5">

                <Section title="Summary">

                  <p className="text-sm text-zinc-700 leading-6">
                    {form.summary}
                  </p>

                </Section>

                <Section title="Technical Skills">

                  <div className="space-y-2 text-sm text-zinc-700">

                    <p>
                      <strong>
                        Skills:
                      </strong>{" "}
                      {form.skills}
                    </p>

                    <p>
                      <strong>
                        Languages:
                      </strong>{" "}
                      {
                        form.languages
                      }
                    </p>

                    <p>
                      <strong>
                        Tools:
                      </strong>{" "}
                      {form.tools}
                    </p>

                  </div>

                </Section>

                <Section title="Education">

                  <div>

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="font-bold text-sm">
                          {
                            form.educationInstitute
                          }
                        </h3>

                        <p className="italic text-xs text-zinc-500">
                          {
                            form.educationDegree
                          }
                        </p>

                      </div>

                      <div className="text-right text-xs text-zinc-500">
                        {
                          form.educationDuration
                        }
                      </div>

                    </div>

                    <p className="text-sm text-zinc-700 mt-2">
                      CGPA:{" "}
                      {
                        form.educationCGPA
                      }
                    </p>

                    <p className="text-sm text-zinc-700 mt-2">
                      Coursework:{" "}
                      {
                        form.educationCoursework
                      }
                    </p>

                  </div>

                </Section>

                <Section title="Projects">

                  <div className="space-y-5">

                    {form.projects.map(
                      (project) => (
                        <div
                          key={
                            project.id
                          }
                        >

                          <h3 className="font-bold text-sm">
                            {
                              project.title
                            }
                          </h3>

                          <p className="italic text-xs text-zinc-500">
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
                                    className="text-sm text-zinc-700 leading-5"
                                  >
                                    •{" "}
                                    {
                                      point
                                    }
                                  </li>
                                )
                              )}

                          </ul>

                        </div>
                      )
                    )}

                  </div>

                </Section>

                {form.experiences
                  .length > 0 && (
                  <Section title="Experience">

                    <div className="space-y-5">

                      {form.experiences.map(
                        (
                          exp
                        ) => (
                          <div
                            key={
                              exp.id
                            }
                          >

                            <div className="flex items-start justify-between gap-4">

                              <div>

                                <h3 className="font-bold text-sm">
                                  {
                                    exp.role
                                  }
                                </h3>

                                <p className="italic text-xs text-zinc-500">
                                  {
                                    exp.company
                                  }
                                </p>

                              </div>

                              <div className="text-xs text-zinc-500">
                                {
                                  exp.duration
                                }
                              </div>

                            </div>

                            <ul className="mt-2 space-y-1">

                              {exp.points
                                .split(
                                  "\n"
                                )
                                .map(
                                  (
                                    point,
                                    index
                                  ) => (
                                    <li
                                      key={
                                        index
                                      }
                                      className="text-sm text-zinc-700 leading-5"
                                    >
                                      •{" "}
                                      {
                                        point
                                      }
                                    </li>
                                  )
                                )}

                            </ul>

                          </div>
                        )
                      )}

                    </div>

                  </Section>
                )}

                <Section title="Achievements">

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
                            className="text-sm text-zinc-700 leading-5"
                          >
                            • {item}
                          </li>
                        )
                      )}

                  </ul>

                </Section>

              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

// ───────────────── SECTION ─────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  return (
    <section>

      <div className="flex items-center gap-3 mb-3">

        <h2 className="text-sm uppercase tracking-widest font-black text-slate-800 whitespace-nowrap">
          {title}
        </h2>

        <div className="h-0.5 bg-slate-300 flex-1" />

      </div>

      {children}

    </section>
  );
}



