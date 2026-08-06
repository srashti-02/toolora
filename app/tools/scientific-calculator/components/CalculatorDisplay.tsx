"use client";

import { Copy, Trash2 } from "lucide-react";

interface CalculatorDisplayProps {
  expression: string;
  result: string;
  onClear: () => void;
}

export default function CalculatorDisplay({
  expression,
  result,
  onClear,
}: CalculatorDisplayProps) {
  async function handleCopy() {
    if (!result || result === "Error") return;

    await navigator.clipboard.writeText(result);
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">

      {/* Expression */}

      <div className="min-h-[40px] break-all text-right text-xl text-zinc-400">

        {expression || "0"}

      </div>

      {/* Result */}

      <div className="mt-4 break-all text-right text-5xl font-bold text-violet-400">

        {result || "0"}

      </div>

      {/* Buttons */}

      <div className="mt-6 flex justify-end gap-3">

        <button
          onClick={handleCopy}
          className="rounded-xl border border-zinc-700 p-3 transition hover:border-violet-500"
          title="Copy Result"
        >

          <Copy size={20} />

        </button>

        <button
          onClick={onClear}
          className="rounded-xl border border-red-500 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
          title="Clear"
        >

          <Trash2 size={20} />

        </button>

      </div>

    </div>
  );
}