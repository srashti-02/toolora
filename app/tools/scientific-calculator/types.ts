export interface HistoryItem {
  expression: string;

  result: string;
}

export interface CalculatorState {
  expression: string;

  result: string;

  memory: number;

  history: HistoryItem[];
}