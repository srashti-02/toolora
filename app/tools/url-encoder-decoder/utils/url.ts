import {
  UrlInput,
  UrlResult,
} from "../types";

export function processUrl({
  text,
  mode,
}: UrlInput): UrlResult {
  const value = text.trim();

  if (!value) {
    throw new Error("Please enter a URL or text.");
  }

  let output = "";

  try {
    output =
      mode === "encode"
        ? encodeURIComponent(value)
        : decodeURIComponent(value);
  } catch {
    throw new Error(
      "Invalid encoded URL. Please check your input."
    );
  }

  return {
    input: value,
    output,
    mode,
    inputLength: value.length,
    outputLength: output.length,
  };
}