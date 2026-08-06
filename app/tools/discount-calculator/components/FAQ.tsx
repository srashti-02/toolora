const faqs = [
  {
    question: "What is a Discount Calculator?",
    answer:
      "A Discount Calculator helps you quickly calculate the final price of a product after applying a discount. It also shows how much money you save and can calculate GST when required.",
  },
  {
    question: "How do I calculate the final price after a discount?",
    answer:
      "Enter the original price and the discount percentage. The calculator automatically subtracts the discount amount and displays the final payable price.",
  },
  {
    question: "How is the discount amount calculated?",
    answer:
      "The discount amount is calculated using the formula: Original Price × Discount Percentage ÷ 100.",
  },
  {
    question: "Can I calculate GST after applying a discount?",
    answer:
      "Yes. Select the 'GST + Discount' mode, enter the original price, discount percentage, and GST rate. The calculator first applies the discount and then calculates GST on the discounted amount.",
  },
  {
    question: "Can I find the original price before a discount?",
    answer:
      "Yes. The Reverse Discount mode helps you calculate the original price when you know the discounted price and discount percentage.",
  },
  {
    question: "Where can I use a Discount Calculator?",
    answer:
      "It is useful for online shopping, retail stores, supermarket sales, business invoices, GST billing, and comparing offers during festivals like Diwali, Black Friday, and seasonal sales.",
  },
  {
    question: "Is this Discount Calculator free?",
    answer:
      "Yes. Toolora's Discount Calculator is completely free to use without registration or subscription.",
  },
  {
    question: "Does this calculator work on mobile devices?",
    answer:
      "Yes. The Discount Calculator is fully responsive and works smoothly on desktops, tablets, and smartphones.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-20">

      <h2 className="mb-10 text-center text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">

        {faqs.map((faq) => (

          <div
            key={faq.question}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-violet-500/40"
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