export type DiscountMode =
  | "final-price"
  | "discount-amount"
  | "reverse-discount"
  | "gst-discount";

export interface DiscountInput {
  mode: DiscountMode;

  originalPrice: number;

  discountPercent: number;

  gstPercent?: number;
}

export interface DiscountResult {
  mode: DiscountMode;

  title: string;

  finalPrice: number;

  discountAmount: number;

  gstAmount: number;

  originalPrice: number;

  formula: string;

  explanation: string;
}