"use client";

import { useState } from "react";

import { Copy, Check } from "lucide-react";

import { PercentageResult as PercentageResultType } from "../types";

interface PercentageResultProps {
  result: PercentageResultType | null;
}

export default function PercentageResult({
  result,
}: PercentageResultProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!result) return;

    await navigator.clipboard.writeText(
      `${result.label}: ${result.result}%`
    );

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

        <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-center text-zinc-500">

          Enter your values and click
          <br />
          <span className="mt-2 font-semibold text-white">
            Calculate
          </span>

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

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

      {/* RESULT */}

      <div className="rounded-3xl bg-violet-600/10 border border-violet-500/30 p-8 text-center">

        <p className="text-zinc-400">
          Final Answer
        </p>

        <h1 className="mt-4 text-6xl font-black text-violet-400">

          {result.result}%

        </h1>

      </div>

      {/* DETAILS */}

      <div className="mt-8 space-y-5">

        <Card
          title="Calculation Type"
          value={result.label}
        />

        <Card
          title="Formula Used"
          value={result.formula}
        />

        <Card
          title="Calculation"
          value={result.calculation}
        />

        <Card
          title="Explanation"
          value={result.explanation}
        />

      </div>

    </div>
  );
}

interface CardProps {
  title: string;
  value: string;
}

function Card({
  title,
  value,
}: CardProps) {
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