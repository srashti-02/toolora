"use client";

import { useState } from "react";

import ConverterForm from "./components/ConverterForm";
import ConverterResult from "./components/ConverterResult";
import ConverterSummary from "./components/ConverterSummary";
import FAQ from "./components/FAQ";

import { convertUnit } from "./utils/converter";

import {
  ConverterInput,
  ConverterResult as ConverterResultType,
} from "./types";

export default function UnitConverterPage() {
  const [result, setResult] =
    useState<ConverterResultType | null>(null);

  function handleConvert(values: ConverterInput) {
    const converted = convertUnit(values);

    setResult(converted);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <h1 className="text-center text-5xl font-extrabold">

            Unit Converter

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">

            Convert Length, Weight, Temperature,
            Storage, Time and Speed instantly with
            accurate conversion formulas.

          </p>

        </div>

      </section>

      {/* CONVERTER */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-2">

          <ConverterForm
            onConvert={handleConvert}
          />

          <ConverterResult
            result={result}
          />

        </div>

        {result && (

          <ConverterSummary
            result={result}
          />

        )}

        <FAQ />

      </section>

    </main>
  );
}