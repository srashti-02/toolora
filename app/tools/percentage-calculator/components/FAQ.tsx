const faqs = [
  {
    question: "What is a Percentage Calculator?",
    answer:
      "A Percentage Calculator helps you quickly calculate percentages, percentage increase, percentage decrease, marks percentage, and determine what percentage one number is of another.",
  },
  {
    question: "How do I calculate the percentage of a number?",
    answer:
      "Enter the percentage in the first field and the number in the second field. The calculator will instantly calculate the percentage value.",
  },
  {
    question: "How do I calculate percentage increase?",
    answer:
      "Select 'Percentage Increase', enter the old value and the new value, then click Calculate to see the increase as a percentage.",
  },
  {
    question: "How do I calculate percentage decrease?",
    answer:
      "Select 'Percentage Decrease', enter the old value and the new value, then click Calculate to see the decrease as a percentage.",
  },
  {
    question: "Can I calculate my exam percentage?",
    answer:
      "Yes. Choose 'Marks Percentage', enter your obtained marks and total marks, and the calculator will display your percentage instantly.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-20">
      <h2 className="mb-10 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
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