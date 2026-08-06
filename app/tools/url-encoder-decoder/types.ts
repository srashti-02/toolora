export type UrlMode = "encode" | "decode";

export interface UrlInput {
  text: string;
  mode: UrlMode;
}

export interface UrlResult {
  input: string;
  output: string;
  mode: UrlMode;
  inputLength: number;
  outputLength: number;
}