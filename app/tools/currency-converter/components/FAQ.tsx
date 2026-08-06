const faqs = [
  {
    question: "What is a Currency Converter?",
    answer:
      "A Currency Converter is an online tool that converts one currency into another using the latest exchange rates. It helps travelers, online shoppers, businesses, freelancers and investors calculate currency values quickly.",
  },
  {
    question: "How does this Currency Converter work?",
    answer:
      "The converter fetches the latest exchange rates from a live exchange rate API. It multiplies your entered amount by the current exchange rate to calculate the converted value.",
  },
  {
    question: "Are the exchange rates live?",
    answer:
      "Yes. Toolora uses live exchange rate data to provide accurate currency conversions. Rates are updated regularly based on the selected API provider.",
  },
  {
    question: "Which currencies are supported?",
    answer:
      "The converter supports major world currencies including USD, INR, EUR, GBP, AED, JPY, CAD, AUD, CNY, SGD and many more as supported by the exchange rate API.",
  },
  {
    question: "Can I use this Currency Converter for international travel?",
    answer:
      "Yes. It is useful for estimating travel expenses, hotel bookings, shopping abroad, and comparing prices in different countries.",
  },
  {
    question: "Why do exchange rates change?",
    answer:
      "Exchange rates fluctuate due to supply and demand, inflation, interest rates, economic conditions, central bank policies and global market events.",
  },
  {
    question: "Can I convert any amount?",
    answer:
      "Yes. Simply enter any positive amount, select the source and target currencies, and the converter will calculate the equivalent value instantly.",
  },
  {
    question: "Is Toolora's Currency Converter free?",
    answer:
      "Yes. The Currency Converter is completely free to use and works directly in your web browser without requiring registration.",
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