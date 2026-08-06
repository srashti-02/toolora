export type GSTMode = "exclusive" | "inclusive";

export interface GSTInput {
  amount: number;
  gstRate: number;
  mode: GSTMode;
}

export interface GSTResult {
  originalAmount: number;
  gstAmount: number;
  finalAmount: number;
  gstRate: number;
  mode: GSTMode;
}