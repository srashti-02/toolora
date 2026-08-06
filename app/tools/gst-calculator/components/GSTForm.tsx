"use client";

import { useState } from "react";
import { GSTInput, GSTMode } from "../types";

export interface GSTFormProps {
  onCalculate: (values: GSTInput) => void;
}

const GST_RATES = [3, 5, 12, 18, 28];

export default function GSTForm({
  onCalculate,
}: GSTFormProps) {
  const [amount, setAmount] = useState<number>(1000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [mode, setMode] = useState<GSTMode>("exclusive");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onCalculate({
      amount,
      gstRate,
      mode,
    });
  }

  function handleReset() {
    setAmount(1000);
    setGstRate(18);
    setMode("exclusive");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl"
    >
      <h2 className="mb-6 text-2xl font-bold">
        GST Calculator
      </h2>

      {/* Amount */}

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          Amount (₹)
        </label>

        <input
          type="number"
          min={0}
          value={amount}
          onChange={(e) =>
            setAmount(Number(e.target.value))
          }
          className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-violet-500"
        />
      </div>

      {/* GST Rate */}

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          GST Rate
        </label>

        <select
          value={gstRate}
          onChange={(e) =>
            setGstRate(Number(e.target.value))
          }
          className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
        >
          {GST_RATES.map((rate) => (
            <option key={rate} value={rate}>
              {rate}%
            </option>
          ))}
        </select>
      </div>

      {/* Mode */}

      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium">
          GST Type
        </label>

        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={mode === "exclusive"}
              onChange={() =>
                setMode("exclusive")
              }
            />

            Add GST
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={mode === "inclusive"}
              onChange={() =>
                setMode("inclusive")
              }
            />

            Remove GST
          </label>
        </div>
      </div>

      {/* Buttons */}

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-700"
        >
          Calculate
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:bg-zinc-800"
        >
          Reset
        </button>
      </div>
    </form>
  );
}