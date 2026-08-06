"use client";

import { useState } from "react";

import PercentageTabs from "./PercentageTabs";

import {
  PercentageInput,
  PercentageMode,
} from "../types";

interface PercentageFormProps {
  onCalculate: (
    values: PercentageInput
  ) => void;
}

export default function PercentageForm({
  onCalculate,
}: PercentageFormProps) {
  const [mode, setMode] =
    useState<PercentageMode>("find");

  const [value1, setValue1] =
    useState("");

  const [value2, setValue2] =
    useState("");

  function getContent() {
    switch (mode) {
      case "find":
        return {
          heading: "📊 What is X% of Y?",
          first: "Percentage",
          second: "Number",
          firstPlaceholder: "e.g. 20",
          secondPlaceholder: "e.g. 500",
        };

      case "what":
        return {
          heading: "❓ X is What % of Y?",
          first: "Part",
          second: "Total",
          firstPlaceholder: "e.g. 25",
          secondPlaceholder: "e.g. 200",
        };

      case "increase":
        return {
          heading: "📈 Percentage Increase",
          first: "Old Value",
          second: "New Value",
          firstPlaceholder: "e.g. 500",
          secondPlaceholder: "e.g. 650",
        };

      case "decrease":
        return {
          heading: "📉 Percentage Decrease",
          first: "Old Value",
          second: "New Value",
          firstPlaceholder: "e.g. 500",
          secondPlaceholder: "e.g. 350",
        };

      case "marks":
        return {
          heading: "🎓 Marks Percentage",
          first: "Obtained Marks",
          second: "Total Marks",
          firstPlaceholder: "e.g. 485",
          secondPlaceholder: "e.g. 600",
        };
    }
  }

  const content = getContent();

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    onCalculate({
      mode,
      value1: Number(value1),
      value2: Number(value2),
    });
  }

  function handleReset() {
    setMode("find");
    setValue1("");
    setValue2("");
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <PercentageTabs
        mode={mode}
        onChange={setMode}
      />

      <h2 className="mb-8 text-3xl font-bold">
        {content.heading}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div>
          <label className="mb-2 block text-sm font-medium">
            {content.first}
          </label>

          <input
            type="number"
            value={value1}
            onChange={(e) =>
              setValue1(e.target.value)
            }
            placeholder={
              content.firstPlaceholder
            }
            required
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            {content.second}
          </label>

          <input
            type="number"
            value={value2}
            onChange={(e) =>
              setValue2(e.target.value)
            }
            placeholder={
              content.secondPlaceholder
            }
            required
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-violet-500"
          />
        </div>

        <div className="flex gap-4 pt-2">

          <button
            type="submit"
            className="flex-1 rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-500"
          >
            Calculate
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