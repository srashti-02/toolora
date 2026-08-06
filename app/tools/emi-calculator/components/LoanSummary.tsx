"use client";

import { CalendarDays, CreditCard, Landmark, Percent } from "lucide-react";
import { formatCurrency } from "../utils/emi";

interface LoanSummaryProps {
  loanAmount: number;
  totalInterest: number;
  totalPayment: number;
  tenureMonths: number;
}

export default function LoanSummary({
  loanAmount,
  totalInterest,
  totalPayment,
  tenureMonths,
}: LoanSummaryProps) {
  const interestPercentage =
    loanAmount === 0 ? 0 : (totalInterest / loanAmount) * 100;

  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + tenureMonths);

  const cards = [
    {
      title: "Principal Amount",
      value: formatCurrency(loanAmount),
      icon: CreditCard,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Interest Paid",
      value: formatCurrency(totalInterest),
      icon: Landmark,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Interest %",
      value: `${interestPercentage.toFixed(2)}%`,
      icon: Percent,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Loan Ends",
      value: endDate.toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      }),
      icon: CalendarDays,
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section className="mt-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Loan Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl"
            >
              <div
                className={`inline-flex rounded-xl bg-linear-to-r ${card.color} p-3`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-5 text-sm uppercase tracking-wide text-zinc-400">
                {card.title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-white">
                {card.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <h3 className="mb-4 text-xl font-semibold text-white">
          Financial Insight
        </h3>

        <div className="space-y-3 text-sm leading-7 text-zinc-400">

          <p>
            💡 Paying extra towards the principal can reduce your overall
            interest significantly.
          </p>

          <p>
            💡 A lower tenure means higher EMI but much lower interest.
          </p>

          <p>
            💡 A lower interest rate can save thousands over the life of the
            loan.
          </p>

          <p>
            💡 Compare multiple loan offers before making your final decision.
          </p>

        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-violet-700 bg-linear-to-r from-violet-900/30 to-purple-900/30 p-6">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-xl font-bold text-white">
              Total Repayment
            </h3>

            <p className="mt-2 text-zinc-400">
              Principal + Interest
            </p>
          </div>

          <div className="text-right">
            <p className="text-3xl font-extrabold text-violet-400">
              {formatCurrency(totalPayment)}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}