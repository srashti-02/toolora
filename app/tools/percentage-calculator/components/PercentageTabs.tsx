"use client";

import { PercentageMode } from "../types";

interface PercentageTabsProps {
  mode: PercentageMode;
  onChange: (mode: PercentageMode) => void;
}

const modes = [
  {
    value: "find",
    emoji: "📊",
    title: "What is X% of Y?",
    description: "Find the percentage value.",
  },
  {
    value: "what",
    emoji: "❓",
    title: "X is What % of Y?",
    description: "Calculate percentage from two values.",
  },
  {
    value: "increase",
    emoji: "📈",
    title: "Percentage Increase",
    description: "Find percentage growth.",
  },
  {
    value: "decrease",
    emoji: "📉",
    title: "Percentage Decrease",
    description: "Find percentage reduction.",
  },
  {
    value: "marks",
    emoji: "🎓",
    title: "Marks Percentage",
    description: "Calculate exam percentage.",
  },
] as const;

export default function PercentageTabs({
  mode,
  onChange,
}: PercentageTabsProps) {
  return (
    <div className="mb-10">
      <h2 className="mb-5 text-xl font-bold">
        Choose Calculation
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            <div className="mb-3 text-3xl">
              {item.emoji}
            </div>

            <h3 className="font-semibold text-lg">
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