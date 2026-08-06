"use client";

import { useState } from "react";

import { Copy, RefreshCw, Check } from "lucide-react";

import { TempMailbox } from "../types";

interface MailGeneratorProps {
  mailbox: TempMailbox | null;
  loading: boolean;
  onGenerate: () => Promise<void>;
}

export default function MailGenerator({
  mailbox,
  loading,
  onGenerate,
}: MailGeneratorProps) {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    if (!mailbox) return;

    await navigator.clipboard.writeText(
      mailbox.address
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-2 text-3xl font-bold">
        Temporary Email
      </h2>

      <p className="mb-8 text-zinc-400">
        Generate a disposable email address and
        receive emails instantly.
      </p>

      {/* Email Box */}

      <div className="rounded-2xl border border-zinc-700 bg-black p-5">

        <p className="text-sm text-zinc-500">
          Your Temporary Email
        </p>

        <div className="mt-3 break-all text-xl font-semibold text-violet-400">

          {mailbox
            ? mailbox.address
            : "Click Generate Email"}

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={onGenerate}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500 disabled:opacity-50"
        >

          <RefreshCw
            size={18}
            className={
              loading
                ? "animate-spin"
                : ""
            }
          />

          {loading
            ? "Generating..."
            : mailbox
            ? "New Email"
            : "Generate Email"}

        </button>

        <button
          onClick={handleCopy}
          disabled={!mailbox}
          className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
        >

          {copied ? (
            <>
              <Check
                size={18}
                className="text-green-400"
              />
              Copied
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy
            </>
          )}

        </button>

      </div>

    </div>
  );
}