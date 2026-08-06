import { PercentageResult } from "../types";

interface PercentageSummaryProps {
  result: PercentageResult;
}

export default function PercentageSummary({
  result,
}: PercentageSummaryProps) {
  const examples = getExamples(result.mode);

  return (
    <section className="mt-16">

      <h2 className="mb-8 text-center text-4xl font-bold">
        Learn About This Calculation
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Formula */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">
            📐 Formula
          </h3>

          <div className="rounded-2xl bg-black p-6">

            <code className="text-xl text-violet-400">

              {result.formula}

            </code>

          </div>

          <p className="mt-6 leading-8 text-zinc-400">

            This formula is used to calculate the
            required percentage accurately.

          </p>

        </div>

        {/* Explanation */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">
            💡 Explanation
          </h3>

          <p className="leading-8 text-zinc-400">

            {result.explanation}

          </p>

        </div>

      </div>

      {/* Examples */}

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          📚 Common Use Cases
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          {examples.map((example) => (

            <div
              key={example.title}
              className="rounded-2xl bg-black p-5"
            >

              <h4 className="font-semibold">

                {example.title}

              </h4>

              <p className="mt-3 text-zinc-400 leading-7">

                {example.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

function getExamples(mode: string) {
  switch (mode) {
    case "find":
      return [
        {
          title: "GST Calculation",
          description:
            "Calculate 18% GST on a product price.",
        },
        {
          title: "Discounts",
          description:
            "Find 25% discount on shopping.",
        },
        {
          title: "Commission",
          description:
            "Calculate employee commission.",
        },
        {
          title: "Tips",
          description:
            "Calculate restaurant tips.",
        },
      ];

    case "what":
      return [
        {
          title: "Exam Percentage",
          description:
            "Find your score percentage.",
        },
        {
          title: "Attendance",
          description:
            "Calculate attendance percentage.",
        },
        {
          title: "Sales Target",
          description:
            "Measure completed work percentage.",
        },
        {
          title: "Project Completion",
          description:
            "Track overall project progress.",
        },
      ];

    case "increase":
      return [
        {
          title: "Salary Hike",
          description:
            "Calculate salary increment percentage.",
        },
        {
          title: "Population Growth",
          description:
            "Measure yearly population increase.",
        },
        {
          title: "Stock Growth",
          description:
            "Compare investment returns.",
        },
        {
          title: "Business Revenue",
          description:
            "Track revenue growth.",
        },
      ];

    case "decrease":
      return [
        {
          title: "Weight Loss",
          description:
            "Measure body weight reduction.",
        },
        {
          title: "Price Drop",
          description:
            "Compare old and new prices.",
        },
        {
          title: "Sales Decline",
          description:
            "Analyze business performance.",
        },
        {
          title: "Expense Reduction",
          description:
            "Track monthly savings.",
        },
      ];

    case "marks":
      return [
        {
          title: "School Exams",
          description:
            "Calculate overall exam percentage.",
        },
        {
          title: "University Results",
          description:
            "Check semester performance.",
        },
        {
          title: "Competitive Exams",
          description:
            "Estimate overall percentage.",
        },
        {
          title: "Assignments",
          description:
            "Calculate assignment scores.",
        },
      ];

    default:
      return [];
  }
}