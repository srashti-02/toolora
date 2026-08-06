const faqs = [
  {
    question: "What is a Scientific Calculator?",
    answer:
      "A scientific calculator performs advanced mathematical operations including trigonometric functions, logarithms, powers, roots, factorials and much more.",
  },
  {
    question: "Is this calculator free?",
    answer:
      "Yes. Toolora Scientific Calculator is completely free and works directly in your browser.",
  },
  {
    question: "Does it support trigonometric functions?",
    answer:
      "Yes. You can calculate sin, cos, tan, asin, acos and atan values.",
  },
  {
    question: "Can I calculate logarithms?",
    answer:
      "Yes. Both log (base 10) and natural logarithm (ln) are supported.",
  },
  {
    question: "Can I reuse previous calculations?",
    answer:
      "Yes. Every successful calculation is stored in the History panel and can be reused with one click.",
  },
  {
    question: "Is it mobile friendly?",
    answer:
      "Yes. The calculator is fully responsive and works on phones, tablets and desktops.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-20">

      <h2 className="mb-10 text-center text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">

        {faqs.map((faq) => (

          <div
            key={faq.question}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >

            <h3 className="text-lg font-semibold">

              {faq.question}

            </h3>

            <p className="mt-3 leading-7 text-zinc-400">

              {faq.answer}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}