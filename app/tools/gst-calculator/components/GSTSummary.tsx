import { GSTResult } from "../types";

interface GSTSummaryProps {
  result: GSTResult;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

interface SummaryCardProps {
  title: string;
  value: string;
}

function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-violet-400">
        {value}
      </h3>
    </div>
  );
}

export default function GSTSummary({
  result,
}: GSTSummaryProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold">
        GST Summary
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Original Amount"
          value={formatCurrency(result.originalAmount)}
        />

        <SummaryCard
          title="GST Rate"
          value={`${result.gstRate}%`}
        />

        <SummaryCard
          title="GST Amount"
          value={formatCurrency(result.gstAmount)}
        />

        <SummaryCard
          title="Final Amount"
          value={formatCurrency(result.finalAmount)}
        />
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-4 text-xl font-semibold">
          GST Details
        </h3>

        <p className="text-zinc-400">
          {result.mode === "exclusive"
            ? "GST has been added to the original amount."
            : "GST has been removed from the entered amount."}
        </p>
      </div>
    </section>
  );
}