import { DiscountResult } from "../types";

interface DiscountSummaryProps {
  result: DiscountResult;
}

export default function DiscountSummary({
  result,
}: DiscountSummaryProps) {
  const examples = getExamples(result.mode);

  return (
    <section className="mt-16">

      <h2 className="mb-8 text-center text-4xl font-bold">
        Learn About Discounts
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Formula */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">
            📐 Formula
          </h3>

          <div className="rounded-2xl bg-black p-6">

            <code className="text-lg text-violet-400">

              {result.formula}

            </code>

          </div>

          <p className="mt-6 leading-8 text-zinc-400">

            This formula is widely used by shopping websites,
            supermarkets, online stores and businesses to
            calculate discounted prices accurately.

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

      {/* Common Uses */}

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h3 className="mb-6 text-2xl font-bold">

          🛍️ Common Uses

        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          {examples.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl bg-black p-5"
            >

              <h4 className="font-semibold">

                {item.title}

              </h4>

              <p className="mt-3 leading-7 text-zinc-400">

                {item.description}

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

    case "final-price":
      return [
        {
          title: "Online Shopping",
          description:
            "Find the final amount after applying a discount coupon.",
        },
        {
          title: "Festival Sales",
          description:
            "Calculate prices during Diwali, Black Friday, or other seasonal sales.",
        },
        {
          title: "Retail Stores",
          description:
            "Estimate how much you'll pay after an in-store discount.",
        },
        {
          title: "Electronics",
          description:
            "Compare discounted prices before making a purchase.",
        },
      ];

    case "discount-amount":
      return [
        {
          title: "Savings",
          description:
            "Know exactly how much money you save during a sale.",
        },
        {
          title: "Budget Planning",
          description:
            "Estimate your total savings before shopping.",
        },
        {
          title: "Coupons",
          description:
            "Check the value of discount coupons instantly.",
        },
        {
          title: "Cashback Comparison",
          description:
            "Compare discounts with cashback offers.",
        },
      ];

    case "reverse-discount":
      return [
        {
          title: "Original Price",
          description:
            "Find the item's original price before a discount was applied.",
        },
        {
          title: "Verify Offers",
          description:
            "Check whether a sale price is genuinely discounted.",
        },
        {
          title: "Shopping",
          description:
            "Understand how much the product originally cost.",
        },
        {
          title: "Price History",
          description:
            "Estimate historical prices from current sale prices.",
        },
      ];

    case "gst-discount":
      return [
        {
          title: "GST Bills",
          description:
            "Calculate your payable amount after discount and GST.",
        },
        {
          title: "Business Invoices",
          description:
            "Prepare invoices with discounts and tax.",
        },
        {
          title: "Retail Billing",
          description:
            "Useful for shop owners and customers.",
        },
        {
          title: "Online Orders",
          description:
            "Understand how GST affects discounted purchases.",
        },
      ];

    default:
      return [];
  }
}