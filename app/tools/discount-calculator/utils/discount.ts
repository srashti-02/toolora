import {
  DiscountInput,
  DiscountResult,
} from "../types";

function round(value: number): number {
  return Number(value.toFixed(2));
}

export function calculateDiscount({
  mode,
  originalPrice,
  discountPercent,
  gstPercent = 0,
}: DiscountInput): DiscountResult {

  if (originalPrice < 0) {
    throw new Error("Price cannot be negative.");
  }

  if (discountPercent < 0) {
    throw new Error("Discount cannot be negative.");
  }

  if (gstPercent < 0) {
    throw new Error("GST cannot be negative.");
  }

  switch (mode) {

    // ===========================
    // Final Price
    // ===========================

    case "final-price": {

      const discountAmount = round(
        (originalPrice * discountPercent) / 100
      );

      const finalPrice = round(
        originalPrice - discountAmount
      );

      return {
        mode,

        title: "Discount Calculator",

        originalPrice,

        discountAmount,

        gstAmount: 0,

        finalPrice,

        formula:
          "Final Price = Original Price − Discount",

        explanation: `You save ₹${discountAmount} and pay ₹${finalPrice}.`,
      };
    }

    // ===========================
    // Discount Amount
    // ===========================

    case "discount-amount": {

      const discountAmount = round(
        (originalPrice * discountPercent) / 100
      );

      return {
        mode,

        title: "Discount Amount Calculator",

        originalPrice,

        discountAmount,

        gstAmount: 0,

        finalPrice: round(
          originalPrice - discountAmount
        ),

        formula:
          "Discount = Price × Discount% ÷ 100",

        explanation: `The discount amount is ₹${discountAmount}.`,
      };
    }

    // ===========================
    // Reverse Discount
    // ===========================

    case "reverse-discount": {

      const actualPrice = round(
        originalPrice /
          (1 - discountPercent / 100)
      );

      const discountAmount = round(
        actualPrice - originalPrice
      );

      return {
        mode,

        title: "Reverse Discount",

        originalPrice: actualPrice,

        discountAmount,

        gstAmount: 0,

        finalPrice: originalPrice,

        formula:
          "Original = Final ÷ (1 − Discount%)",

        explanation: `The original price before discount was ₹${actualPrice}.`,
      };
    }

    // ===========================
    // GST + Discount
    // ===========================

    case "gst-discount": {

      const discountAmount = round(
        (originalPrice * discountPercent) / 100
      );

      const discountedPrice = round(
        originalPrice - discountAmount
      );

      const gstAmount = round(
        (discountedPrice * gstPercent) / 100
      );

      const finalPrice = round(
        discountedPrice + gstAmount
      );

      return {

        mode,

        title: "GST + Discount Calculator",

        originalPrice,

        discountAmount,

        gstAmount,

        finalPrice,

        formula:
          "Discount → GST → Final Price",

        explanation: `After ${discountPercent}% discount and ${gstPercent}% GST, you pay ₹${finalPrice}.`,
      };
    }

    default:
      throw new Error(
        "Invalid discount mode."
      );
  }
}