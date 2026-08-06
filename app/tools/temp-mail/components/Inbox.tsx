"use client";

import { RefreshCw, Mail } from "lucide-react";

import { TempMessage } from "../types";

interface InboxProps {
  messages: TempMessage[];
  loading: boolean;
  onRefresh: () => Promise<void>;
  onSelect: (id: string) => void;
}

export default function Inbox({
  messages,
  loading,
  onRefresh,
  onSelect,
}: InboxProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Inbox

        </h2>

        <button
          onClick={onRefresh}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 transition hover:border-violet-500 disabled:opacity-50"
        >

          <RefreshCw
            size={18}
            className={
              loading
                ? "animate-spin"
                : ""
            }
          />

          Refresh

        </button>

      </div>

      {/* Empty */}

      {messages.length === 0 ? (

        <div className="flex h-72 flex-col items-center justify-center text-center text-zinc-500">

          <Mail
            size={48}
            className="mb-4 opacity-50"
          />

          <h3 className="text-lg font-semibold">

            Inbox is Empty

          </h3>

          <p className="mt-2 max-w-xs">

            Incoming emails will appear here
            automatically.

          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {messages.map((message) => (

            <button
              key={message.id}
              onClick={() =>
                onSelect(message.id)
              }
              className="w-full rounded-2xl border border-zinc-800 bg-black p-5 text-left transition hover:border-violet-500"
            >

              {/* Sender */}

              <div className="flex items-center justify-between">

                <span className="font-semibold text-violet-400">

                  {message.from.address}

                </span>

                {!message.seen && (

                  <span className="rounded-full bg-green-600 px-3 py-1 text-xs">

                    New

                  </span>

                )}

              </div>

              {/* Subject */}

              <h3 className="mt-3 text-lg font-semibold">

                {message.subject || "(No Subject)"}

              </h3>

              {/* Preview */}

              <p className="mt-2 line-clamp-2 text-sm text-zinc-400">

                {message.intro}

              </p>

              {/* Time */}

              <p className="mt-4 text-xs text-zinc-500">

                {new Date(
                  message.createdAt
                ).toLocaleString()}

              </p>

            </button>

          ))}

        </div>

      )}

    </div>
  );
}