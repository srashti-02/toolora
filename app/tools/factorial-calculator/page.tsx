"use client";

import { useState } from "react";

export default function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateFactorial = () => {
    const n = parseInt(number);

    if (isNaN(n) || n < 0) {
      alert("Enter valid number");
      return;
    }

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }

    setResult(factorial);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-300 mb-6">
            🔢 Math Utility Tool
          </div>

          <h1 className="text-5xl font-extrabold">
            Factorial Calculator
          </h1>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <input
            type="number"
            placeholder="Enter Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500"
          />

          <button
            onClick={calculateFactorial}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition rounded-2xl py-4 font-semibold"
          >
            Calculate Factorial
          </button>

          {result !== null && (
            <div className="mt-10 text-center">

              <p className="text-zinc-400">
                Factorial Result
              </p>

              <h2 className="text-5xl font-extrabold text-blue-400 mt-4 break-all">
                {result}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}