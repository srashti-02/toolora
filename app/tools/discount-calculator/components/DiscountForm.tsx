"use client";

import { useState } from "react";

import DiscountTabs from "./DiscountTabs";

import {
  DiscountInput,
  DiscountMode,
} from "../types";

interface DiscountFormProps {
  onCalculate: (
    values: DiscountInput
  ) => void;
}

export default function DiscountForm({
  onCalculate,
}: DiscountFormProps) {
  const [mode, setMode] =
    useState<DiscountMode>("final-price");

  const [price, setPrice] =
    useState("");

  const [discount, setDiscount] =
    useState("");

  const [gst, setGst] =
    useState("");

  function getContent() {
    switch (mode) {
      case "final-price":
        return {
          heading: "🛒 Final Price Calculator",
          priceLabel: "Original Price",
          pricePlaceholder: "e.g. 2500",
          discountLabel: "Discount (%)",
          showGST: false,
        };

      case "discount-amount":
        return {
          heading: "💸 Discount Amount Calculator",
          priceLabel: "Original Price",
          pricePlaceholder: "e.g. 2500",
          discountLabel: "Discount (%)",
          showGST: false,
        };

      case "reverse-discount":
        return {
          heading: "↩️ Reverse Discount",
          priceLabel: "Final Price",
          pricePlaceholder: "e.g. 2000",
          discountLabel: "Discount (%)",
          showGST: false,
        };

      case "gst-discount":
        return {
          heading: "🧾 GST + Discount",
          priceLabel: "Original Price",
          pricePlaceholder: "e.g. 2500",
          discountLabel: "Discount (%)",
          showGST: true,
        };
    }
  }

  const content = getContent();

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    onCalculate({
      mode,
      originalPrice: Number(price),
      discountPercent: Number(discount),
      gstPercent: content.showGST
        ? Number(gst)
        : 0,
    });
  }

  function handleReset() {
    setMode("final-price");
    setPrice("");
    setDiscount("");
    setGst("");
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <DiscountTabs
        mode={mode}
        onChange={setMode}
      />

      <h2 className="mb-8 text-3xl font-bold">
        {content.heading}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* PRICE */}

        <div>

          <label className="mb-2 block text-sm font-medium">

            {content.priceLabel}

          </label>

          <input
            type="number"
            inputMode="decimal"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            placeholder={
              content.pricePlaceholder
            }
            required
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-violet-500"
          />

        </div>

        {/* DISCOUNT */}

        <div>

          <label className="mb-2 block text-sm font-medium">

            {content.discountLabel}

          </label>

          <input
            type="number"
            inputMode="decimal"
            value={discount}
            onChange={(e) =>
              setDiscount(e.target.value)
            }
            placeholder="e.g. 20"
            required
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-violet-500"
          />

        </div>

        {/* GST */}

        {content.showGST && (

          <div>

            <label className="mb-2 block text-sm font-medium">

              GST (%)

            </label>

            <input
              type="number"
              inputMode="decimal"
              value={gst}
              onChange={(e) =>
                setGst(e.target.value)
              }
              placeholder="e.g. 18"
              required
              className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-violet-500"
            />

          </div>

        )}

        {/* BUTTONS */}

        <div className="flex gap-4 pt-2">

          <button
            type="submit"
            className="flex-1 rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-500"
          >
            Calculate
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl border border-zinc-700 px-8 py-3 transition hover:border-zinc-500"
          >
            Reset
          </button>

        </div>

      </form>

    </div>
  );
}