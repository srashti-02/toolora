"use client";

import { GSTResult as GSTResultType } from "../types";

interface GSTResultProps {
  result: GSTResultType | null;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export default function GSTResult({
  result,
}: GSTResultProps) {
  if (!result) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">
          GST Result
        </h2>

        <div className="flex h-72 items-center justify-center text-zinc-500">
          Enter the amount and calculate GST.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <h2 className="mb-8 text-2xl font-bold">
        GST Result
      </h2>

      <div className="space-y-5">

        <ResultRow
          label="Original Amount"
          value={formatCurrency(result.originalAmount)}
        />

        <ResultRow
          label="GST Rate"
          value={`${result.gstRate}%`}
        />

        <ResultRow
          label="GST Amount"
          value={formatCurrency(result.gstAmount)}
          valueClass="text-violet-400"
        />

        <ResultRow
          label="Final Amount"
          value={formatCurrency(result.finalAmount)}
          valueClass="text-green-400 text-xl font-bold"
        />

      </div>
    </div>
  );
}

interface ResultRowProps {
  label: string;
  value: string;
  valueClass?: string;
}

function ResultRow({
  label,
  value,
  valueClass = "",
}: ResultRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-black px-5 py-4">

      <span className="text-zinc-400">
        {label}
      </span>

      <span className={valueClass}>
        {value}
      </span>

    </div>
  );
}