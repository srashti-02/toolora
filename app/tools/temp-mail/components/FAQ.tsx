const faqs = [
  {
    question: "What is a Temporary Email?",
    answer:
      "A temporary email is a disposable email address that lets you receive emails without using your personal inbox.",
  },
  {
    question: "Is this service free?",
    answer:
      "Yes. Toolora Temp Mail is completely free to use.",
  },
  {
    question: "Can I receive OTPs?",
    answer:
      "Yes. Most websites that send verification codes or OTPs can be used with a temporary email, although some services block disposable email providers.",
  },
  {
    question: "How long does the email stay active?",
    answer:
      "The mailbox remains active according to the limits of the email service provider. Generate a new mailbox anytime if needed.",
  },
  {
    question: "Can I send emails?",
    answer:
      "No. This tool is designed only for receiving temporary emails.",
  },
  {
    question: "Is registration required?",
    answer:
      "No. Your temporary mailbox is created instantly without signing up.",
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