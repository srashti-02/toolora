"use client";

import { useState } from "react";

export default function SimpleCalculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = eval(input);

      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "C",
    "⌫",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-sm">

        {/* HEADER */}
        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-300 mb-5">
            🧮 Smart Calculator
          </div>

          <h1 className="text-4xl font-extrabold">
            Simple Calculator
          </h1>
        </div>

        {/* CALCULATOR */}
        <div className="bg-zinc-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">

          {/* DISPLAY */}
          <div className="p-6 bg-black/40 border-b border-white/10">

            <div className="h-24 flex items-end justify-end">

              <h2 className="text-5xl font-bold break-all text-right">
                {input || "0"}
              </h2>

            </div>
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-4 gap-3 p-5">

            {buttons.map((btn) => {
              const isOperator =
                ["/", "*", "-", "+", "="].includes(btn);

              const isSpecial =
                ["C", "⌫", "%"].includes(btn);

              return (
                <button
                  key={btn}
                  onClick={() => {
                    if (btn === "C") {
                      clearInput();
                    } else if (btn === "⌫") {
                      deleteLast();
                    } else if (btn === "=") {
                      calculateResult();
                    } else {
                      handleClick(btn);
                    }
                  }}
                  className={`
                    h-16 rounded-2xl text-2xl font-bold transition-all active:scale-95

                    ${
                      isOperator
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : isSpecial
                        ? "bg-zinc-800 hover:bg-zinc-700 text-red-400"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }
                  `}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>

        {/* INFO */}
        <div className="mt-8 text-center text-zinc-500 text-sm">
          Fast • Responsive • Mobile Friendly
        </div>
      </div>
    </div>
  );
}