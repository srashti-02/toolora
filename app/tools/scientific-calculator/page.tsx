"use client";

import { useState } from "react";

import CalculatorDisplay from "./components/CalculatorDisplay";
import CalculatorButtons from "./components/CalculatorButtons";
import HistoryPanel from "./components/HistoryPanel";

import { calculateExpression } from "./utils/calculator";

import { HistoryItem } from "./types";

export default function ScientificCalculatorPage() {
  const [expression, setExpression] =
    useState("");

  const [result, setResult] =
    useState("");

  const [history, setHistory] =
    useState<HistoryItem[]>([]);

  function handleButtonClick(
    value: string
  ) {

    switch (value) {

      case "=": {

        const answer =
          calculateExpression(expression);

        setResult(answer);

        if (answer !== "Error") {
          setHistory((prev) => [
            ...prev,
            {
              expression,
              result: answer,
            },
          ]);
        }

        break;
      }

      case "AC":

        setExpression("");
        setResult("");

        break;

      case "⌫":

        setExpression((prev) =>
          prev.slice(0, -1)
        );

        break;

      case "√":

        setExpression(
          (prev) => prev + "sqrt("
        );

        break;

      case "π":

        setExpression(
          (prev) => prev + "π"
        );

        break;

      case "x²":

        setExpression(
          (prev) => prev + "^2"
        );

        break;

      case "x³":

        setExpression(
          (prev) => prev + "^3"
        );

        break;

      case "1/x":

        setExpression(
          (prev) => "1/(" + prev + ")"
        );

        break;

      case "sin":
      case "cos":
      case "tan":
      case "asin":
      case "acos":
      case "atan":
      case "log":
      case "ln":

        setExpression(
          (prev) => prev + value + "("
        );

        break;

      default:

        setExpression(
          (prev) => prev + value
        );
    }
  }

  function handleClear() {

    setExpression("");

    setResult("");

  }

  function handleReuse(
    exp: string
  ) {

    setExpression(exp);

    setResult(
      calculateExpression(exp)
    );

  }

  function clearHistory() {
    setHistory([]);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <h1 className="text-center text-5xl font-extrabold">

            Scientific Calculator

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">

            Perform advanced mathematical calculations
            including trigonometry, logarithms,
            exponents, roots and more.

          </p>

        </div>

      </section>

      {/* CALCULATOR */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 xl:grid-cols-[2fr_1fr]">

          <div>

            <CalculatorDisplay
              expression={expression}
              result={result}
              onClear={handleClear}
            />

            <CalculatorButtons
              onButtonClick={
                handleButtonClick
              }
            />

          </div>

          <HistoryPanel
            history={history}
            onReuse={handleReuse}
            onClearHistory={
              clearHistory
            }
          />

        </div>

      </section>

    </main>
  );
}
