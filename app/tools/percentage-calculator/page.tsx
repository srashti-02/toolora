"use client";

import { useState } from "react";

import PercentageForm from "./components/PercentageForm";
import PercentageResult from "./components/PercentageResult";
import PercentageSummary from "./components/PercentageSummary";
import FAQ from "./components/FAQ";

import { calculatePercentage } from "./utils/percentage";

import {
  PercentageInput,
  PercentageResult as PercentageResultType,
} from "./types";

export default function PercentageCalculatorPage() {
  const [result, setResult] =
    useState<PercentageResultType | null>(null);

  function handleCalculate(values: PercentageInput) {
    const percentageResult =
      calculatePercentage(values);

    setResult(percentageResult);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-center text-5xl font-extrabold">
            Percentage Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">
            Instantly calculate percentages,
            percentage increase, decrease,
            marks percentage and much more.
          </p>
        </div>
      </section>

      {/* Calculator */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <PercentageForm
            onCalculate={handleCalculate}
          />

          <PercentageResult
            result={result}
          />
        </div>

        {result && (
          <div className="mt-12">
            <PercentageSummary
              result={result}
            />
          </div>
        )}

        <FAQ />
      </section>
    </main>
  );
}