"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const emiSchema = z.object({
  loanAmount: z
    .number({ message: "Loan amount is required" })
    .min(1000, "Minimum loan amount is ₹1,000"),

  annualInterestRate: z
    .number({ message: "Interest rate is required" })
    .min(0.1, "Interest rate must be greater than 0"),

  tenureMonths: z
    .number({ message: "Loan tenure is required" })
    .min(1, "Minimum tenure is 1 month"),
});

export type EMIFormValues = z.infer<typeof emiSchema>;

interface EMIFormProps {
  onCalculate: (values: EMIFormValues) => void;
}

export default function EMIForm({
  onCalculate,
}: EMIFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EMIFormValues>({
    resolver: zodResolver(emiSchema),
    defaultValues: {
      loanAmount: 500000,
      annualInterestRate: 8.5,
      tenureMonths: 60,
    },
  });

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-white">
        EMI Calculator
      </h2>

      <form
        onSubmit={handleSubmit(onCalculate)}
        className="space-y-5"
      >
        {/* Loan Amount */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Loan Amount (₹)
          </label>

          <input
            type="number"
            {...register("loanAmount", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          {errors.loanAmount && (
            <p className="mt-1 text-sm text-red-500">
              {errors.loanAmount.message}
            </p>
          )}
        </div>

        {/* Interest */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Interest Rate (%)
          </label>

          <input
            type="number"
            step="0.01"
            {...register("annualInterestRate", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          {errors.annualInterestRate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.annualInterestRate.message}
            </p>
          )}
        </div>

        {/* Tenure */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Loan Tenure (Months)
          </label>

          <input
            type="number"
            {...register("tenureMonths", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
          />

          {errors.tenureMonths && (
            <p className="mt-1 text-sm text-red-500">
              {errors.tenureMonths.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Calculate EMI
          </button>

          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg border border-zinc-700 px-5 py-3 text-white transition hover:bg-zinc-800"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}