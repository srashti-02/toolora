"use client";

import { useState } from "react";

import {
  Check,
  Copy,
} from "lucide-react";

import { UrlResult as UrlResultType } from "../types";

interface UrlResultProps {
  result: UrlResultType | null;
}

export default function UrlResult({
  result,
}: UrlResultProps) {
  const [copied, setCopied] =
    useState(false);

  async function handleCopy() {
    if (!result) return;

    await navigator.clipboard.writeText(
      result.output
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  if (!result) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">

          Result

        </h2>

        <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-center text-zinc-500">

          Enter your text and click
          <br />
          <span className="font-semibold text-white">
            Convert
          </span>

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Result

        </h2>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 transition hover:border-violet-500"
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

      <div className="rounded-2xl border border-violet-500/30 bg-violet-600/10 p-5">

        <p className="mb-2 text-sm text-zinc-400">

          Output

        </p>

        <textarea
          readOnly
          value={result.output}
          rows={8}
          className="w-full resize-none bg-transparent text-lg outline-none"
        />

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <InfoCard
          title="Mode"
          value={
            result.mode === "encode"
              ? "URL Encoded"
              : "URL Decoded"
          }
        />

        <InfoCard
          title="Input Characters"
          value={String(result.inputLength)}
        />

        <InfoCard
          title="Output Characters"
          value={String(result.outputLength)}
        />

        <InfoCard
          title="Status"
          value="Success"
        />

      </div>

    </div>
  );
}

interface InfoCardProps {
  title: string;
  value: string;
}

function InfoCard({
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-5">

      <p className="text-sm text-zinc-500">

        {title}

      </p>

      <p className="mt-2 text-lg">

        {value}

      </p>

    </div>
  );
}