"use client";

import { ConverterCategory } from "../types";

interface CategoryTabsProps {
  category: ConverterCategory;
  onChange: (category: ConverterCategory) => void;
}

const categories = [
  {
    value: "length",
    emoji: "📏",
    title: "Length",
    description: "Meter, Kilometer, Mile, Inch...",
  },
  {
    value: "weight",
    emoji: "⚖️",
    title: "Weight",
    description: "Gram, Kilogram, Pound...",
  },
  {
    value: "temperature",
    emoji: "🌡️",
    title: "Temperature",
    description: "Celsius, Fahrenheit, Kelvin",
  },
  {
    value: "storage",
    emoji: "💾",
    title: "Storage",
    description: "KB, MB, GB, TB...",
  },
  {
    value: "time",
    emoji: "⏰",
    title: "Time",
    description: "Second, Minute, Hour...",
  },
  {
    value: "speed",
    emoji: "🚗",
    title: "Speed",
    description: "km/h, mph, m/s...",
  },
] as const;

export default function CategoryTabs({
  category,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="mb-10">

      <h2 className="mb-5 text-2xl font-bold">
        Choose Category
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {categories.map((item) => (

          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
              category === item.value
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