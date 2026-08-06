"use client";

import { useState } from "react";

import DiscountForm from "./components/DiscountForm";
import DiscountResult from "./components/DiscountResult";
import DiscountSummary from "./components/DiscountSummary";
import FAQ from "./components/FAQ";

import { calculateDiscount } from "./utils/discount";

import {
  DiscountInput,
  DiscountResult as DiscountResultType,
} from "./types";

export default function DiscountCalculatorPage() {
  const [result, setResult] =
    useState<DiscountResultType | null>(null);

  function handleCalculate(values: DiscountInput) {
    const discountResult =
      calculateDiscount(values);

    setResult(discountResult);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <h1 className="text-center text-5xl font-extrabold">

            Discount Calculator

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">

            Calculate discount amount, final price,
            reverse discounts and GST after discount
            instantly.

          </p>

        </div>

      </section>

      {/* CALCULATOR */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-2">

          <DiscountForm
            onCalculate={handleCalculate}
          />

          <DiscountResult
            result={result}
          />

        </div>

        {result && (

          <DiscountSummary
            result={result}
          />

        )}

        <FAQ />

      </section>

    </main>
  );
}