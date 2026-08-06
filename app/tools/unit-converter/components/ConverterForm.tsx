"use client";

import { useMemo, useState } from "react";

import CategoryTabs from "./CategoryTabs";

import {
  ConverterCategory,
  ConverterInput,
} from "../types";

interface ConverterFormProps {
  onConvert: (values: ConverterInput) => void;
}

const units: Record<ConverterCategory, string[]> = {
  length: [
    "Millimeter",
    "Centimeter",
    "Meter",
    "Kilometer",
    "Inch",
    "Foot",
    "Yard",
    "Mile",
  ],

  weight: [
    "Milligram",
    "Gram",
    "Kilogram",
    "Pound",
    "Ounce",
  ],

  temperature: [
    "Celsius",
    "Fahrenheit",
    "Kelvin",
  ],

  storage: [
    "Byte",
    "KB",
    "MB",
    "GB",
    "TB",
  ],

  time: [
    "Millisecond",
    "Second",
    "Minute",
    "Hour",
    "Day",
    "Week",
  ],

  speed: [
    "m/s",
    "km/h",
    "mph",
    "Knot",
  ],
};

export default function ConverterForm({
  onConvert,
}: ConverterFormProps) {

  const [category, setCategory] =
    useState<ConverterCategory>("length");

  const availableUnits = useMemo(
    () => units[category],
    [category]
  );

  const [value, setValue] = useState("");

  const [fromUnit, setFromUnit] =
    useState("Meter");

  const [toUnit, setToUnit] =
    useState("Kilometer");

  function handleCategoryChange(
    selected: ConverterCategory
  ) {

    setCategory(selected);

    const first = units[selected][0];
    const second =
      units[selected][1] ??
      units[selected][0];

    setFromUnit(first);
    setToUnit(second);
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    onConvert({
      category,
      value: Number(value),
      fromUnit,
      toUnit,
    });
  }

  function handleSwap() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  function handleReset() {

    setCategory("length");

    setValue("");

    setFromUnit("Meter");

    setToUnit("Kilometer");
  }

  return (

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <CategoryTabs
        category={category}
        onChange={handleCategoryChange}
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* VALUE */}

        <div>

          <label className="mb-2 block text-sm font-medium">

            Enter Value

          </label>

          <input
            type="number"
            inputMode="decimal"
            value={value}
            onChange={(e) =>
              setValue(e.target.value)
            }
            placeholder="e.g. 100"
            required
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-violet-500"
          />

        </div>

        {/* FROM */}

        <div>

          <label className="mb-2 block text-sm font-medium">

            From

          </label>

          <select
            value={fromUnit}
            onChange={(e) =>
              setFromUnit(e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-violet-500"
          >

            {availableUnits.map((unit) => (

              <option
                key={unit}
                value={unit}
              >

                {unit}

              </option>

            ))}

          </select>

        </div>

        {/* SWAP */}

        <div className="flex justify-center">

          <button
            type="button"
            onClick={handleSwap}
            className="rounded-full border border-violet-500 px-5 py-2 transition hover:bg-violet-600"
          >

            ⇅ Swap

          </button>

        </div>

        {/* TO */}

        <div>

          <label className="mb-2 block text-sm font-medium">

            To

          </label>

          <select
            value={toUnit}
            onChange={(e) =>
              setToUnit(e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-violet-500"
          >

            {availableUnits.map((unit) => (

              <option
                key={unit}
                value={unit}
              >

                {unit}

              </option>

            ))}

          </select>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-4 pt-4">

          <button
            type="submit"
            className="flex-1 rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-500"
          >

            Convert

          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl border border-zinc-700 px-8 py-3 transition hover:border-zinc-500"
          >

            Reset

          </button>

        </div>

      </form>

    </div>

  );
}