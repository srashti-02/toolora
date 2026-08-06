"use client";

import { Trash2, RotateCcw } from "lucide-react";

import { HistoryItem } from "../types";

interface HistoryPanelProps {
  history: HistoryItem[];
  onReuse: (expression: string) => void;
  onClearHistory: () => void;
}

export default function HistoryPanel({
  history,
  onReuse,
  onClearHistory,
}: HistoryPanelProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          History
        </h2>

        <button
          onClick={onClearHistory}
          className="rounded-xl border border-red-500 p-2 text-red-400 transition hover:bg-red-500 hover:text-white"
          title="Clear History"
        >
          <Trash2 size={18} />
        </button>

      </div>

      {/* Empty State */}

      {history.length === 0 && (
        <div className="flex h-60 items-center justify-center text-center text-zinc-500">

          No calculations yet.

        </div>
      )}

      {/* History List */}

      <div className="space-y-3">

        {history
          .slice()
          .reverse()
          .map((item, index) => (

            <button
              key={index}
              onClick={() =>
                onReuse(item.expression)
              }
              className="w-full rounded-2xl border border-zinc-800 bg-black p-4 text-left transition hover:border-violet-500"
            >

              <div className="text-sm text-zinc-500">

                {item.expression}

              </div>

              <div className="mt-2 flex items-center justify-between">

                <span className="text-xl font-semibold text-violet-400">

                  {item.result}

                </span>

                <RotateCcw
                  size={18}
                  className="text-zinc-400"
                />

              </div>

            </button>

          ))}

      </div>

    </div>
  );
}