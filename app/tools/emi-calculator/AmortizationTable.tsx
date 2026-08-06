"use client";

import { useMemo, useState } from "react";
import {
  AmortizationRow,
  formatCurrency,
} from "./utils/emi";

interface Props {
  schedule: AmortizationRow[];
}

const ROWS_PER_PAGE = 12;

export default function AmortizationTable({
  schedule,
}: Props) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(
    schedule.length / ROWS_PER_PAGE
  );

  const currentRows = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;

    return schedule.slice(
      start,
      start + ROWS_PER_PAGE
    );
  }, [page, schedule]);

  return (
    <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Amortization Schedule
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Monthly breakdown of principal,
            interest and remaining balance.
          </p>

        </div>

        <span className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white">
          {schedule.length} Months
        </span>

      </div>

      {/* TABLE */}

      <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800">

        <table className="min-w-full">

          <thead className="sticky top-0 bg-zinc-950">

            <tr>

              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-300">
                Month
              </th>

              <th className="px-4 py-3 text-right text-sm font-semibold text-zinc-300">
                EMI
              </th>

              <th className="px-4 py-3 text-right text-sm font-semibold text-zinc-300">
                Principal
              </th>

              <th className="px-4 py-3 text-right text-sm font-semibold text-zinc-300">
                Interest
              </th>

              <th className="px-4 py-3 text-right text-sm font-semibold text-zinc-300">
                Balance
              </th>

            </tr>

          </thead>

          <tbody>

            {currentRows.map((row) => (

              <tr
                key={row.month}
                className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
              >

                <td className="px-4 py-4 font-medium text-white">
                  {row.month}
                </td>

                <td className="px-4 py-4 text-right text-zinc-300">
                  {formatCurrency(row.emi)}
                </td>

                <td className="px-4 py-4 text-right text-green-400">
                  {formatCurrency(row.principal)}
                </td>

                <td className="px-4 py-4 text-right text-red-400">
                  {formatCurrency(row.interest)}
                </td>

                <td className="px-4 py-4 text-right text-yellow-400">
                  {formatCurrency(row.balance)}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      <div className="mt-8 flex items-center justify-between">

        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="rounded-lg bg-zinc-800 px-5 py-2 text-white disabled:opacity-40"
        >
          Previous
        </button>

        <p className="text-sm text-zinc-400">
          Page {page} of {totalPages}
        </p>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="rounded-lg bg-violet-600 px-5 py-2 text-white disabled:opacity-40"
        >
          Next
        </button>

      </div>

    </section>
  );
}