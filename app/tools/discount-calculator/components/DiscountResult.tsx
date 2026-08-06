"use client";

import { useState } from "react";

import { Copy, Check } from "lucide-react";

import { DiscountResult as DiscountResultType } from "../types";

interface DiscountResultProps {
  result: DiscountResultType | null;
}

export default function DiscountResult({
  result,
}: DiscountResultProps) {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    if (!result) return;

    await navigator.clipboard.writeText(
      `Final Price: ₹${result.finalPrice}`
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

        <div className="flex h-[520px] items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-center text-zinc-500">

          Enter the details and click
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

      {/* FINAL PRICE */}

      <div className="rounded-3xl border border-violet-500/30 bg-violet-600/10 p-8 text-center">

        <p className="text-zinc-400">

          Final Price

        </p>

        <h1 className="mt-4 text-5xl font-black text-violet-400">

          ₹{result.finalPrice}

        </h1>

      </div>

      {/* DETAILS */}

      <div className="mt-8 space-y-5">

        <InfoCard
          title="Original Price"
          value={`₹${result.originalPrice}`}
        />

        <InfoCard
          title="Discount Saved"
          value={`₹${result.discountAmount}`}
        />

        {result.gstAmount > 0 && (
          <InfoCard
            title="GST Amount"
            value={`₹${result.gstAmount}`}
          />
        )}

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