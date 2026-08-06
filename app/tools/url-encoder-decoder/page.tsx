"use client";

import { useState } from "react";

import UrlForm from "./components/UrlForm";
import UrlResult from "./components/UrlResult";
import UrlSummary from "./components/UrlSummary";
import FAQ from "./components/FAQ";

import { processUrl } from "./utils/url";

import {
  UrlInput,
  UrlResult as UrlResultType,
} from "./types";

export default function UrlEncoderDecoderPage() {
  const [result, setResult] =
    useState<UrlResultType | null>(null);

  const [error, setError] =
    useState("");

  function handleConvert(
    values: UrlInput
  ) {
    try {
      setError("");

      const output =
        processUrl(values);

      setResult(output);

    } catch (err) {

      setResult(null);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <h1 className="text-center text-5xl font-extrabold">

            URL Encoder & Decoder

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">

            Encode or decode URLs instantly using your browser.
            Fast, secure and completely free.

          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-2">

          <UrlForm
            onConvert={handleConvert}
          />

          <UrlResult
            result={result}
          />

        </div>

        {error && (

          <div className="mt-8 rounded-xl border border-red-500 bg-red-500/10 p-4 text-center text-red-400">

            {error}

          </div>

        )}

        {result && (

          <UrlSummary
            result={result}
          />

        )}

        <FAQ />

      </section>

    </main>
  );
}