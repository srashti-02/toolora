"use client";

import { EMIResult as EMIResultType, formatCurrency } from "../utils/emi";

interface EMIResultProps {
  result: EMIResultType | null;
}

export default function EMIResult({ result }: EMIResultProps) {
  if (!result) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 p-8 text-center">
        <h3 className="text-xl font-semibold text-white">
          EMI Result
        </h3>

        <p className="mt-4 text-zinc-400">
          Fill in the loan details and click
          <span className="font-semibold text-violet-400">
            {" "}Calculate EMI{" "}
          </span>
          to view your repayment summary.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Loan Summary
      </h2>

      <div className="space-y-5">

        {/* Monthly EMI */}

        <div className="rounded-xl border border-violet-600 bg-violet-950/30 p-5">

          <p className="text-sm uppercase tracking-wide text-violet-300">
            Monthly EMI
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {formatCurrency(result.emi)}
          </h3>

        </div>

        {/* Total Interest */}

        <div className="flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-950 p-4">

          <span className="text-zinc-400">
            Total Interest
          </span>

          <span className="text-lg font-semibold text-red-400">
            {formatCurrency(result.totalInterest)}
          </span>

        </div>

        {/* Total Payment */}

        <div className="flex items-center justify-between rounded-xl border border-zinc-700 bg-zinc-950 p-4">

          <span className="text-zinc-400">
            Total Payment
          </span>

          <span className="text-lg font-semibold text-green-400">
            {formatCurrency(result.totalPayment)}
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-xl bg-zinc-950 p-4">

        <h4 className="mb-3 font-semibold text-white">
          Quick Insight
        </h4>

        <ul className="space-y-2 text-sm text-zinc-400">

          <li>
            • Monthly EMI remains fixed throughout the loan tenure.
          </li>

          <li>
            • Paying extra every month reduces your interest burden.
          </li>

          <li>
            • Choosing a shorter tenure saves interest but increases EMI.
          </li>

        </ul>

      </div>

    </div>
  );
}