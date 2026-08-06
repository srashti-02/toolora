"use client";

interface CalculatorButtonsProps {
  onButtonClick: (value: string) => void;
}

const buttons = [
  "MC",
  "MR",
  "M+",
  "M-",
  "AC",

  "(",
  ")",
  "%",
  "⌫",
  "÷",

  "sin",
  "cos",
  "tan",
  "√",
  "×",

  "asin",
  "acos",
  "atan",
  "^",
  "-",

  "log",
  "ln",
  "π",
  "e",
  "+",

  "7",
  "8",
  "9",
  "x²",
  "x³",

  "4",
  "5",
  "6",
  "1/x",
  "!",

  "1",
  "2",
  "3",
  ".",
  "=",

  "0",
];

export default function CalculatorButtons({
  onButtonClick,
}: CalculatorButtonsProps) {
  return (
    <div className="mt-8">

      <div className="grid grid-cols-5 gap-3">

        {buttons.map((button) => (

          <button
            key={button}
            onClick={() =>
              onButtonClick(button)
            }
            className={getButtonStyle(button)}
          >

            {button}

          </button>

        ))}

      </div>

    </div>
  );
}

function getButtonStyle(
  button: string
) {
  if (button === "=") {
    return "rounded-xl bg-violet-600 py-4 text-lg font-semibold transition hover:bg-violet-500";
  }

  if (
    [
      "+",
      "-",
      "×",
      "÷",
      "%",
      "^",
    ].includes(button)
  ) {
    return "rounded-xl bg-orange-600 py-4 text-lg font-semibold transition hover:bg-orange-500";
  }

  if (
    [
      "AC",
      "⌫",
      "MC",
      "MR",
      "M+",
      "M-",
    ].includes(button)
  ) {
    return "rounded-xl bg-red-600 py-4 text-lg font-semibold transition hover:bg-red-500";
  }

  if (
    [
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "log",
      "ln",
      "√",
      "π",
      "e",
      "!",
      "x²",
      "x³",
      "1/x",
    ].includes(button)
  ) {
    return "rounded-xl bg-zinc-800 py-4 text-lg font-semibold transition hover:bg-zinc-700";
  }

  return "rounded-xl bg-zinc-900 py-4 text-lg font-semibold transition hover:bg-zinc-800";
}
