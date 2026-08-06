import {
  CurrencyInput,
  CurrencyResult,
} from "../types";

const API_URL =
  "https://open.er-api.com/v6/latest";

export async function convertCurrency({
  amount,
  from,
  to,
}: CurrencyInput): Promise<CurrencyResult> {

  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  const response = await fetch(
    `${API_URL}/${from}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch exchange rates."
    );
  }

  const data = await response.json();

  const rate = data.rates[to];

  if (!rate) {
    throw new Error(
      "Currency not supported."
    );
  }

  const convertedAmount =
    Number((amount * rate).toFixed(2));

  return {
    amount,
    from,
    to,
    rate,
    convertedAmount,

    formula: `${amount} × ${rate}`,

    explanation: `${amount} ${from} equals ${convertedAmount} ${to} at the current exchange rate.`,
  };
}