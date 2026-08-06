import {
  PercentageInput,
  PercentageResult,
} from "../types";

function round(value: number): number {
  return Number(value.toFixed(2));
}

export function calculatePercentage({
  mode,
  value1,
  value2,
}: PercentageInput): PercentageResult {
  if (value1 < 0 || value2 < 0) {
    throw new Error("Values cannot be negative.");
  }

  switch (mode) {
    case "find": {
      const result = round((value1 * value2) / 100);

      return {
        mode,
        title: "What is X% of Y?",
        label: "Find Percentage",
        result,
        formula: "(Percentage × Number) ÷ 100",
        calculation: `(${value1} × ${value2}) ÷ 100`,
        explanation: `${value1}% of ${value2} is ${result}.`,
      };
    }

    case "what": {
      if (value2 === 0) {
        throw new Error("Total cannot be zero.");
      }

      const result = round((value1 / value2) * 100);

      return {
        mode,
        title: "X is What % of Y?",
        label: "What Percentage",
        result,
        formula: "(Part ÷ Total) × 100",
        calculation: `(${value1} ÷ ${value2}) × 100`,
        explanation: `${value1} is ${result}% of ${value2}.`,
      };
    }

    case "increase": {
      if (value1 === 0) {
        throw new Error("Old value cannot be zero.");
      }

      const result = round(
        ((value2 - value1) / value1) * 100
      );

      return {
        mode,
        title: "Percentage Increase Calculator",
        label: "Percentage Increase",
        result,
        formula: "((New − Old) ÷ Old) × 100",
        calculation: `((${value2} - ${value1}) ÷ ${value1}) × 100`,
        explanation: `The value increased by ${result}%.`,
      };
    }

    case "decrease": {
      if (value1 === 0) {
        throw new Error("Old value cannot be zero.");
      }

      const result = round(
        ((value1 - value2) / value1) * 100
      );

      return {
        mode,
        title: "Percentage Decrease Calculator",
        label: "Percentage Decrease",
        result,
        formula: "((Old − New) ÷ Old) × 100",
        calculation: `((${value1} - ${value2}) ÷ ${value1}) × 100`,
        explanation: `The value decreased by ${result}%.`,
      };
    }

    case "marks": {
      if (value2 === 0) {
        throw new Error("Total marks cannot be zero.");
      }

      const result = round(
        (value1 / value2) * 100
      );

      return {
        mode,
        title: "Marks Percentage Calculator",
        label: "Marks Percentage",
        result,
        formula: "(Obtained ÷ Total) × 100",
        calculation: `(${value1} ÷ ${value2}) × 100`,
        explanation: `You scored ${result}% marks.`,
      };
    }

    default:
      throw new Error("Invalid calculation mode.");
  }
}