"use client";

import { useState } from "react";

import GSTForm from "./components/GSTForm";
import GSTResult from "./components/GSTResult";
import GSTSummary from "./components/GSTSummary";
import FAQ from "./components/FAQ";

import { calculateGST } from "./utils/gst";

import {
  GSTInput,
  GSTResult as GSTResultType,
} from "./types";

export default function GSTCalculatorPage() {
  const [result, setResult] =
    useState<GSTResultType | null>(null);

  function handleCalculate(values: GSTInput) {
    const gstResult = calculateGST(values);
    setResult(gstResult);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-center text-5xl font-extrabold">
            GST Calculator
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">
            Calculate GST online instantly.
            Add or remove GST from any amount using the latest GST rates.
          </p>
        </div>
      </section>

      {/* Calculator */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <GSTForm
            onCalculate={handleCalculate}
          />

          <GSTResult
            result={result}
          />
        </div>

        {result && (
          <div className="mt-12">
            <GSTSummary
              result={result}
            />
          </div>
        )}
        <FAQ />
      </section>
    </main>
  );
}