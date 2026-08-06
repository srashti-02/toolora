function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Invalid factorial.");
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function preprocess(expression: string): string {
  return expression
    .replace(/π/g, `${Math.PI}`)
    .replace(/e/g, `${Math.E}`)
    .replace(/÷/g, "/")
    .replace(/×/g, "*")
    .replace(/\^/g, "**")
    .replace(/√\(/g, "Math.sqrt(")
    .replace(/sqrt\(/g, "Math.sqrt(")
    .replace(/sin\(/g, "Math.sin(")
    .replace(/cos\(/g, "Math.cos(")
    .replace(/tan\(/g, "Math.tan(")
    .replace(/asin\(/g, "Math.asin(")
    .replace(/acos\(/g, "Math.acos(")
    .replace(/atan\(/g, "Math.atan(")
    .replace(/log\(/g, "Math.log10(")
    .replace(/ln\(/g, "Math.log(")
    .replace(/abs\(/g, "Math.abs(");
}

export function calculateExpression(
  expression: string
): string {
  try {
    let exp = preprocess(expression);

    exp = exp.replace(
      /(\d+)!/g,
      (_, value) =>
        factorial(Number(value)).toString()
    );

    exp = exp.replace(
      /1\/\((.*?)\)/g,
      "1/($1)"
    );

    const result = Function(
      `"use strict"; return (${exp})`
    )();

    if (
      result === Infinity ||
      Number.isNaN(result)
    ) {
      return "Error";
    }

    return Number(result.toFixed(10)).toString();
  } catch {
    return "Error";
  }
}