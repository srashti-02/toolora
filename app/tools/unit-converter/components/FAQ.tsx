const faqs = [
  {
    question: "What is a Unit Converter?",
    answer:
      "A Unit Converter is an online tool that converts values from one unit of measurement to another. It helps convert length, weight, temperature, storage, time, speed, and many other measurement units quickly and accurately.",
  },
  {
    question: "How does the Unit Converter work?",
    answer:
      "The converter uses internationally accepted conversion factors and mathematical formulas to convert values between different units while maintaining high accuracy.",
  },
  {
    question: "Which unit categories are supported?",
    answer:
      "This Unit Converter supports Length, Weight, Temperature, Data Storage, Time, and Speed conversions. More categories will be added in future updates.",
  },
  {
    question: "Can I convert kilometers to miles?",
    answer:
      "Yes. Select the Length category, choose Kilometer as the source unit and Mile as the destination unit, then enter your value and click Convert.",
  },
  {
    question: "Can I convert Celsius to Fahrenheit?",
    answer:
      "Yes. Select the Temperature category, choose Celsius as the source unit and Fahrenheit as the destination unit to instantly calculate the converted temperature.",
  },
  {
    question: "Are the conversion results accurate?",
    answer:
      "Yes. Toolora uses standard international conversion factors and formulas to provide accurate and reliable conversion results.",
  },
  {
    question: "Can I use this Unit Converter for free?",
    answer:
      "Absolutely. Toolora's Unit Converter is completely free to use without registration or subscription.",
  },
  {
    question: "Is this Unit Converter mobile friendly?",
    answer:
      "Yes. The converter is fully responsive and works smoothly on desktops, tablets, and smartphones.",
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