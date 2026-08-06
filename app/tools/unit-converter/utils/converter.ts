import {
  ConverterInput,
  ConverterResult,
} from "../types";

const lengthUnits: Record<string, number> = {
  Millimeter: 0.001,
  Centimeter: 0.01,
  Meter: 1,
  Kilometer: 1000,
  Inch: 0.0254,
  Foot: 0.3048,
  Yard: 0.9144,
  Mile: 1609.344,
};

const weightUnits: Record<string, number> = {
  Milligram: 0.000001,
  Gram: 0.001,
  Kilogram: 1,
  Pound: 0.45359237,
  Ounce: 0.0283495,
};

const storageUnits: Record<string, number> = {
  Byte: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4,
};

const timeUnits: Record<string, number> = {
  Millisecond: 0.001,
  Second: 1,
  Minute: 60,
  Hour: 3600,
  Day: 86400,
  Week: 604800,
};

const speedUnits: Record<string, number> = {
  "m/s": 1,
  "km/h": 0.277777778,
  mph: 0.44704,
  Knot: 0.514444,
};

function round(value: number): number {
  return Number(value.toFixed(6));
}

function convertUsingMap(
  value: number,
  from: string,
  to: string,
  map: Record<string, number>
) {
  const base = value * map[from];
  return base / map[to];
}

function convertTemperature(
  value: number,
  from: string,
  to: string
): number {
  let celsius = value;

  if (from === "Fahrenheit") {
    celsius = ((value - 32) * 5) / 9;
  } else if (from === "Kelvin") {
    celsius = value - 273.15;
  }

  if (to === "Celsius") return celsius;

  if (to === "Fahrenheit") {
    return (celsius * 9) / 5 + 32;
  }

  return celsius + 273.15;
}

export function convertUnit({
  category,
  fromUnit,
  toUnit,
  value,
}: ConverterInput): ConverterResult {
  let converted = value;

  switch (category) {
    case "length":
      converted = convertUsingMap(
        value,
        fromUnit,
        toUnit,
        lengthUnits
      );
      break;

    case "weight":
      converted = convertUsingMap(
        value,
        fromUnit,
        toUnit,
        weightUnits
      );
      break;

    case "storage":
      converted = convertUsingMap(
        value,
        fromUnit,
        toUnit,
        storageUnits
      );
      break;

    case "time":
      converted = convertUsingMap(
        value,
        fromUnit,
        toUnit,
        timeUnits
      );
      break;

    case "speed":
      converted = convertUsingMap(
        value,
        fromUnit,
        toUnit,
        speedUnits
      );
      break;

    case "temperature":
      converted = convertTemperature(
        value,
        fromUnit,
        toUnit
      );
      break;
  }

  converted = round(converted);

  return {
    category,

    title: `${category
      .charAt(0)
      .toUpperCase()}${category.slice(1)} Converter`,

    value: converted,

    fromUnit,

    toUnit,

    formula: `1 ${fromUnit} → ${round(
      convertUnitSimple(category, fromUnit, toUnit)
    )} ${toUnit}`,

    explanation: `${value} ${fromUnit} equals ${converted} ${toUnit}.`,
  };
}

function convertUnitSimple(
  category: string,
  from: string,
  to: string
) {
  switch (category) {
    case "length":
      return convertUsingMap(
        1,
        from,
        to,
        lengthUnits
      );

    case "weight":
      return convertUsingMap(
        1,
        from,
        to,
        weightUnits
      );

    case "storage":
      return convertUsingMap(
        1,
        from,
        to,
        storageUnits
      );

    case "time":
      return convertUsingMap(
        1,
        from,
        to,
        timeUnits
      );

    case "speed":
      return convertUsingMap(
        1,
        from,
        to,
        speedUnits
      );

    case "temperature":
      return convertTemperature(
        1,
        from,
        to
      );

    default:
      return 1;
  }
}