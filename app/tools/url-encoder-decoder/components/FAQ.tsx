const faqs = [
  {
    question: "What is URL Encoding?",
    answer:
      "URL encoding converts special characters into a format that can be safely transmitted over the internet.",
  },
  {
    question: "Why is URL encoding required?",
    answer:
      "Browsers and servers reserve certain characters such as spaces, ?, &, # and =. Encoding prevents them from breaking the URL.",
  },
  {
    question: "What is URL decoding?",
    answer:
      "URL decoding converts an encoded URL back into its original readable format.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes. Toolora's URL Encoder & Decoder is completely free and works entirely in your browser.",
  },
  {
    question: "Is my data uploaded?",
    answer:
      "No. All encoding and decoding happens locally in your browser. Your data is never uploaded to any server.",
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