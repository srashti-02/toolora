export type ConverterCategory =
  | "length"
  | "weight"
  | "temperature"
  | "storage"
  | "time"
  | "speed";

export interface ConverterInput {
  category: ConverterCategory;

  fromUnit: string;

  toUnit: string;

  value: number;
}

export interface ConverterResult {
  category: ConverterCategory;

  title: string;

  value: number;

  fromUnit: string;

  toUnit: string;

  formula: string;

  explanation: string;
}