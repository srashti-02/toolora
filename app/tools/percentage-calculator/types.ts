export type PercentageMode =
  | "find"
  | "what"
  | "increase"
  | "decrease"
  | "marks";

export interface PercentageInput {
  mode: PercentageMode;
  value1: number;
  value2: number;
}

export interface PercentageResult {
  mode: PercentageMode;

  title: string;

  label: string;

  result: number;

  formula: string;

  calculation: string;

  explanation: string;
}