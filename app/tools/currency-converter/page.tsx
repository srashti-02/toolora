"use client";

import { useState } from "react";

import CurrencyForm from "./components/CurrencyForm";
import CurrencyResult from "./components/CurrencyResult";
import CurrencySummary from "./components/CurrencySummary";
import FAQ from "./components/FAQ";

import { convertCurrency } from "./utils/currency";

import {
  CurrencyInput,
  CurrencyResult as CurrencyResultType,
} from "./types";

export default function CurrencyConverterPage() {
  const [result, setResult] =
    useState<CurrencyResultType | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleConvert(
    values: CurrencyInput
  ) {
    try {
      setLoading(true);
      setError("");

      const currencyResult =
        await convertCurrency(values);

      setResult(currencyResult);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <h1 className="text-center text-5xl font-extrabold">

            Currency Converter

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">

            Convert currencies instantly using
            live exchange rates. Fast, accurate
            and completely free.

          </p>

        </div>

      </section>

      {/* Converter */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-2">

          <CurrencyForm
            onConvert={handleConvert}
          />

          <CurrencyResult
            result={result}
          />

        </div>

        {loading && (

          <div className="mt-8 text-center text-violet-400">

            Fetching latest exchange rates...

          </div>

        )}

        {error && (

          <div className="mt-8 rounded-xl border border-red-500 bg-red-500/10 p-4 text-center text-red-400">

            {error}

          </div>

        )}

        {result && (

          <CurrencySummary
            result={result}
          />

        )}

        <FAQ />

      </section>

    </main>
  );
}