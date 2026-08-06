"use client";

import { DiscountMode } from "../types";

interface DiscountTabsProps {
  mode: DiscountMode;
  onChange: (mode: DiscountMode) => void;
}

const modes = [
  {
    value: "final-price",
    emoji: "🛒",
    title: "Final Price",
    description:
      "Calculate the final price after discount.",
  },
  {
    value: "discount-amount",
    emoji: "💸",
    title: "Discount Amount",
    description:
      "Find how much money you save.",
  },
  {
    value: "reverse-discount",
    emoji: "↩️",
    title: "Reverse Discount",
    description:
      "Find the original price before discount.",
  },
  {
    value: "gst-discount",
    emoji: "🧾",
    title: "GST + Discount",
    description:
      "Apply discount and GST together.",
  },
] as const;

export default function DiscountTabs({
  mode,
  onChange,
}: DiscountTabsProps) {
  return (
    <div className="mb-10">

      <h2 className="mb-5 text-2xl font-bold">
        Choose Calculation
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {modes.map((item) => (

          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
              mode === item.value
                ? "border-violet-500 bg-violet-600/20 shadow-lg shadow-violet-500/10"
                : "border-zinc-800 bg-zinc-900 hover:border-violet-500/40 hover:bg-zinc-800"
            }`}
          >

            <div className="mb-3 text-4xl">

              {item.emoji}

            </div>

            <h3 className="text-lg font-semibold">

              {item.title}

            </h3>

            <p className="mt-2 text-sm text-zinc-400">

              {item.description}

            </p>

          </button>

        ))}

      </div>

    </div>
  );
}