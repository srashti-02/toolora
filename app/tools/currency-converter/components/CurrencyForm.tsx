"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

import { CurrencyInput } from "../types";

interface CurrencyFormProps {
  onConvert: (
    values: CurrencyInput
  ) => Promise<void>;
}

const currencies = [
  "USD",
  "INR",
  "EUR",
  "GBP",
  "AED",
  "JPY",
  "CAD",
  "AUD",
  "CNY",
  "SGD",
];

export default function CurrencyForm({
  onConvert,
}: CurrencyFormProps) {
  const [amount, setAmount] = useState("1");

  const [from, setFrom] = useState("USD");

  const [to, setTo] = useState("INR");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      await onConvert({
        amount: Number(amount),
        from,
        to,
      });
    } finally {
      setLoading(false);
    }
  }

  function swapCurrencies() {
    const current = from;

    setFrom(to);

    setTo(current);
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-3xl font-bold">

        Live Currency Converter

      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Amount */}

        <div>

          <label className="mb-2 block text-sm font-medium">

            Amount

          </label>

          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-violet-500"
          />

        </div>

        {/* Currency */}

        <div className="grid grid-cols-[1fr_auto_1fr] gap-4">

          {/* From */}

          <div>

            <label className="mb-2 block text-sm font-medium">

              From

            </label>

            <select
              value={from}
              onChange={(e) =>
                setFrom(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            >

              {currencies.map((currency) => (

                <option
                  key={currency}
                  value={currency}
                >

                  {currency}

                </option>

              ))}

            </select>

          </div>

          {/* Swap */}

          <div className="flex items-end">

            <button
              type="button"
              onClick={swapCurrencies}
              className="rounded-xl border border-zinc-700 p-3 transition hover:border-violet-500"
            >

              <ArrowLeftRight size={22} />

            </button>

          </div>

          {/* To */}

          <div>

            <label className="mb-2 block text-sm font-medium">

              To

            </label>

            <select
              value={to}
              onChange={(e) =>
                setTo(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3"
            >

              {currencies.map((currency) => (

                <option
                  key={currency}
                  value={currency}
                >

                  {currency}

                </option>

              ))}

            </select>

          </div>

        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-500 disabled:opacity-50"
        >

          {loading
            ? "Converting..."
            : "Convert Currency"}

        </button>

      </form>

    </div>
  );
}