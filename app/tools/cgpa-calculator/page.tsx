"use client";

import { useState } from "react";

const gradeTable = [
  { grade: "A++", points: 10 },
  { grade: "A+", points: 9 },
  { grade: "A", points: 8 },
  { grade: "B+", points: 7 },
  { grade: "B", points: 6 },
  { grade: "C+", points: 5 },
  { grade: "C", points: 4 },
  { grade: "D+", points: 3 },
  { grade: "E+", points: 2 },
  { grade: "E", points: 1 },
  { grade: "F", points: 0 },
];

export default function CGPACalculator() {
  const [subjects, setSubjects] = useState([
    {
      name: "",
      grade: "A+",
      credits: "",
    },
  ]);

  const [cgpa, setCgpa] = useState<number | null>(null);

  const [percentage, setPercentage] =
    useState<number | null>(null);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        name: "",
        grade: "A+",
        credits: "",
      },
    ]);
  };

  const updateSubject = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...subjects];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setSubjects(updated);
  };

  const removeSubject = (index: number) => {
    const updated = [...subjects];

    updated.splice(index, 1);

    setSubjects(updated);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const credits = parseFloat(subject.credits);

      const gradeObj = gradeTable.find(
        (g) => g.grade === subject.grade
      );

      const gradePoint = gradeObj
        ? gradeObj.points
        : 0;

      if (!isNaN(credits)) {
        totalPoints += gradePoint * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits === 0) {
      alert("Please enter valid credits");
      return;
    }

    const calculatedCGPA =
      totalPoints / totalCredits;

    setCgpa(Number(calculatedCGPA.toFixed(2)));

    setPercentage(
      Number((calculatedCGPA * 9.5).toFixed(2))
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 text-sm text-yellow-300 mb-6">
            🎓 Smart CGPA Calculator
          </div>

          <h1 className="text-5xl font-extrabold">
            CGPA Calculator
          </h1>

          <p className="text-zinc-400 mt-5 max-w-3xl mx-auto leading-relaxed">
            Calculate your CGPA instantly using
            grades and credit points with a
            modern academic calculator.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">

            {/* FORMULA */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8">

              <h2 className="text-2xl font-bold mb-4">
                CGPA Formula
              </h2>

              <div className="text-zinc-300 text-lg leading-relaxed">
                CGPA =
                <span className="text-yellow-400 font-bold">
                  {" "}
                  Σ(Grade Point × Credits)
                </span>
                {" "}÷ Total Credits
              </div>

              <p className="text-zinc-500 mt-4 text-sm">
                Percentage = CGPA × 9.5
              </p>
            </div>

            {/* SUBJECTS */}
            <div className="space-y-6">

              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-white/10 rounded-2xl p-6"
                >

                  <div className="grid md:grid-cols-4 gap-4">

                    {/* SUBJECT */}
                    <input
                      type="text"
                      placeholder="Subject Name"
                      value={subject.name}
                      onChange={(e) =>
                        updateSubject(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      className="bg-zinc-950 border border-white/10 rounded-xl p-4 outline-none focus:border-yellow-500"
                    />

                    {/* GRADE */}
                    <select
                      value={subject.grade}
                      onChange={(e) =>
                        updateSubject(
                          index,
                          "grade",
                          e.target.value
                        )
                      }
                      className="bg-zinc-950 border border-white/10 rounded-xl p-4 outline-none focus:border-yellow-500"
                    >
                      {gradeTable.map((item) => (
                        <option
                          key={item.grade}
                          value={item.grade}
                        >
                          {item.grade}
                        </option>
                      ))}
                    </select>

                    {/* CREDITS */}
                    <input
                      type="number"
                      placeholder="Credits"
                      value={subject.credits}
                      onChange={(e) =>
                        updateSubject(
                          index,
                          "credits",
                          e.target.value
                        )
                      }
                      className="bg-zinc-950 border border-white/10 rounded-xl p-4 outline-none focus:border-yellow-500"
                    />

                    {/* REMOVE */}
                    <button
                      onClick={() =>
                        removeSubject(index)
                      }
                      className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl px-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={addSubject}
                className="bg-white/10 hover:bg-white/20 transition px-6 py-4 rounded-2xl font-medium"
              >
                + Add Subject
              </button>

              <button
                onClick={calculateCGPA}
                className="bg-yellow-500 hover:bg-yellow-600 transition text-black px-6 py-4 rounded-2xl font-bold"
              >
                Calculate CGPA
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            {/* RESULT */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Result
              </h2>

              {cgpa !== null ? (
                <div>

                  <div className="text-center">

                    <p className="text-zinc-400 mb-3">
                      Your CGPA
                    </p>

                    <h3 className="text-6xl font-extrabold text-yellow-400">
                      {cgpa}
                    </h3>
                  </div>

                  <div className="mt-8 bg-zinc-900 border border-white/10 rounded-2xl p-5">

                    <p className="text-zinc-400 text-sm">
                      Percentage
                    </p>

                    <h4 className="text-3xl font-bold mt-2">
                      {percentage}%
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">

                  <div className="text-7xl mb-5">
                    🎓
                  </div>

                  <p className="text-zinc-400">
                    Add subjects and calculate
                    your CGPA instantly.
                  </p>
                </div>
              )}
            </div>

            {/* GRADE TABLE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Grade Table
              </h2>

              <div className="space-y-4">

                {gradeTable.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4"
                  >

                    <div>
                      <p className="font-semibold text-lg">
                        {item.grade}
                      </p>
                    </div>

                    <div className="text-yellow-400 font-bold text-lg">
                      {item.points}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">

          {[
            "Credit Based System",
            "Percentage Conversion",
            "Unlimited Subjects",
            "Modern Student UI",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}