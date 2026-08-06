import { GSTInput, GSTResult } from "../types";

function round(value: number): number {
  return Number(value.toFixed(2));
}

export function calculateGST({
  amount,
  gstRate,
  mode,
}: GSTInput): GSTResult {
  if (amount < 0 || gstRate < 0) {
    throw new Error("Amount and GST rate must be positive.");
  }

  if (mode === "exclusive") {
    const gstAmount = round((amount * gstRate) / 100);
    const finalAmount = round(amount + gstAmount);

    return {
      originalAmount: round(amount),
      gstAmount,
      finalAmount,
      gstRate,
      mode,
    };
  }

  const originalAmount = round(
    (amount * 100) / (100 + gstRate)
  );

  const gstAmount = round(amount - originalAmount);

  return {
    originalAmount,
    gstAmount,
    finalAmount: round(amount),
    gstRate,
    mode,
  };
}