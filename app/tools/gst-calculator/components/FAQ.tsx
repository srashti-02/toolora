const faqs = [
  {
    question: "What is GST?",
    answer:
      "GST (Goods and Services Tax) is an indirect tax applied to the supply of goods and services in India. It replaced multiple indirect taxes with a single unified tax system.",
  },
  {
    question: "How do I calculate GST?",
    answer:
      "Enter the amount, choose the GST rate, select whether you want to add or remove GST, and the calculator will instantly display the GST amount and final value.",
  },
  {
    question: "What GST rates are available?",
    answer:
      "This calculator supports the most commonly used GST rates in India: 3%, 5%, 12%, 18%, and 28%.",
  },
  {
    question: "Can I remove GST from an amount?",
    answer:
      "Yes. Select the 'Remove GST' option to calculate the original amount before GST and the GST portion included in the entered value.",
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
            <h3 className="text-lg font-semibold text-white">
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