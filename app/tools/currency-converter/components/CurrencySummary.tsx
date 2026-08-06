import { CurrencyResult } from "../types";

interface CurrencySummaryProps {
  result: CurrencyResult;
}

export default function CurrencySummary({
  result,
}: CurrencySummaryProps) {
  return (
    <section className="mt-16">

      <h2 className="mb-8 text-center text-4xl font-bold">
        Learn About Currency Conversion
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Formula */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">
            💱 Conversion Formula
          </h3>

          <div className="rounded-2xl bg-black p-6">

            <code className="text-lg text-violet-400">

              {result.formula}

            </code>

          </div>

          <p className="mt-6 leading-8 text-zinc-400">

            Currency conversion multiplies the entered amount
            by the latest exchange rate between the selected
            currencies.

          </p>

        </div>

        {/* Explanation */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="mb-5 text-2xl font-bold">

            📘 Explanation

          </h3>

          <p className="leading-8 text-zinc-400">

            {result.explanation}

          </p>

        </div>

      </div>

      {/* Common Uses */}

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h3 className="mb-6 text-2xl font-bold">

          🌍 Common Uses

        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <InfoCard
            title="✈️ Travel"
            description="Estimate travel expenses before visiting another country."
          />

          <InfoCard
            title="🛒 Online Shopping"
            description="Know the exact price of products sold in foreign currencies."
          />

          <InfoCard
            title="💼 Freelancing"
            description="Convert international client payments into your local currency."
          />

          <InfoCard
            title="📈 Investing"
            description="Track investments and understand values across different currencies."
          />

        </div>

      </div>

      {/* Popular Currency Pairs */}

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h3 className="mb-6 text-2xl font-bold">

          ⭐ Popular Currency Pairs

        </h3>

        <div className="grid gap-4 md:grid-cols-3">

          <PairCard
            from="USD"
            to="INR"
          />

          <PairCard
            from="EUR"
            to="INR"
          />

          <PairCard
            from="GBP"
            to="INR"
          />

          <PairCard
            from="AED"
            to="INR"
          />

          <PairCard
            from="USD"
            to="EUR"
          />

          <PairCard
            from="USD"
            to="GBP"
          />

        </div>

      </div>

    </section>
  );
}

interface InfoCardProps {
  title: string;
  description: string;
}

function InfoCard({
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl bg-black p-5">

      <h4 className="font-semibold">

        {title}

      </h4>

      <p className="mt-3 leading-7 text-zinc-400">

        {description}

      </p>

    </div>
  );
}

interface PairCardProps {
  from: string;
  to: string;
}

function PairCard({
  from,
  to,
}: PairCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-5 text-center">

      <div className="text-xl font-bold text-violet-400">

        {from}

        {" → "}

        {to}

      </div>

    </div>
  );
}