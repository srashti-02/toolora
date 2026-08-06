export interface CurrencyInput {
  amount: number;

  from: string;

  to: string;
}

export interface CurrencyResult {
  amount: number;

  from: string;

  to: string;

  rate: number;

  convertedAmount: number;

  formula: string;

  explanation: string;
}