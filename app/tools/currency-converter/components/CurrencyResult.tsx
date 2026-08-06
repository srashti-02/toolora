"use client";

import { useState } from "react";

import { Copy, Check } from "lucide-react";

import { CurrencyResult as CurrencyResultType } from "../types";

interface CurrencyResultProps {
  result: CurrencyResultType | null;
}

export default function CurrencyResult({
  result,
}: CurrencyResultProps) {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    if (!result) return;

    const text = `${result.amount} ${result.from} = ${result.convertedAmount} ${result.to}`;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  if (!result) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          Result
        </h2>

        <div className="flex h-[500px] items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-center text-zinc-500">

          Enter the amount and choose currencies.

          <br />

          Click

          <span className="ml-1 font-semibold text-white">
            Convert Currency
          </span>

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Result

        </h2>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 transition hover:border-violet-500"
        >

          {copied ? (
            <>
              <Check
                size={18}
                className="text-green-400"
              />

              Copied

            </>
          ) : (
            <>
              <Copy size={18} />

              Copy

            </>
          )}

        </button>

      </div>

      {/* Converted Amount */}

      <div className="rounded-3xl border border-violet-500/30 bg-violet-600/10 p-8 text-center">

        <p className="text-zinc-400">

          Converted Amount

        </p>

        <h1 className="mt-4 text-5xl font-black text-violet-400">

          {result.convertedAmount.toLocaleString()}

          {" "}

          {result.to}

        </h1>

      </div>

      {/* Details */}

      <div className="mt-8 space-y-5">

        <InfoCard
          title="Amount"
          value={`${result.amount} ${result.from}`}
        />

        <InfoCard
          title="Exchange Rate"
          value={`1 ${result.from} = ${result.rate.toFixed(4)} ${result.to}`}
        />

        <InfoCard
          title="Formula"
          value={result.formula}
        />

        <InfoCard
          title="Explanation"
          value={result.explanation}
        />

      </div>

    </div>
  );
}

interface InfoCardProps {
  title: string;
  value: string;
}

function InfoCard({
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-5">

      <p className="text-sm text-zinc-500">

        {title}

      </p>

      <p className="mt-2 text-lg leading-7">

        {value}

      </p>

    </div>
  );
}