export default function CalculatorSummary() {
  const features = [
    {
      title: "Basic Arithmetic",
      description:
        "Perform addition, subtraction, multiplication, division and percentage calculations instantly.",
    },
    {
      title: "Scientific Functions",
      description:
        "Supports trigonometric, logarithmic, exponential and square root calculations.",
    },
    {
      title: "Calculation History",
      description:
        "Review and reuse previous calculations without retyping expressions.",
    },
    {
      title: "Responsive Design",
      description:
        "Works smoothly on desktop, tablet and mobile devices.",
    },
  ];

  return (
    <section className="mt-16">

      <h2 className="mb-10 text-center text-4xl font-bold">
        Why Use Toolora Scientific Calculator?
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >

            <h3 className="text-xl font-semibold">

              {feature.title}

            </h3>

            <p className="mt-3 leading-7 text-zinc-400">

              {feature.description}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}