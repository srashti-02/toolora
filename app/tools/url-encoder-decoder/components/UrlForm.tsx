"use client";

import { useState } from "react";

import {
  Clipboard,
  Trash2,
  Link,
} from "lucide-react";

import {
  UrlInput,
  UrlMode,
} from "../types";

interface UrlFormProps {
  onConvert: (
    values: UrlInput
  ) => void;
}

export default function UrlForm({
  onConvert,
}: UrlFormProps) {
  const [text, setText] =
    useState("");

  const [mode, setMode] =
    useState<UrlMode>("encode");

  async function handlePaste() {
    try {
      const clipboard =
        await navigator.clipboard.readText();

      setText(clipboard);
    } catch {
      alert(
        "Unable to access clipboard."
      );
    }
  }

  function handleClear() {
    setText("");
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    onConvert({
      text,
      mode,
    });
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold">

        <Link className="text-violet-500" />

        URL Encoder / Decoder

      </h2>

      <p className="mb-8 text-zinc-400">

        Encode or decode URLs instantly using
        your browser.

      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Mode */}

        <div>

          <label className="mb-3 block font-medium">

            Mode

          </label>

          <div className="flex gap-4">

            <button
              type="button"
              onClick={() =>
                setMode("encode")
              }
              className={`rounded-xl px-5 py-3 transition ${
                mode === "encode"
                  ? "bg-violet-600 text-white"
                  : "border border-zinc-700"
              }`}
            >

              Encode

            </button>

            <button
              type="button"
              onClick={() =>
                setMode("decode")
              }
              className={`rounded-xl px-5 py-3 transition ${
                mode === "decode"
                  ? "bg-violet-600 text-white"
                  : "border border-zinc-700"
              }`}
            >

              Decode

            </button>

          </div>

        </div>

        {/* Input */}

        <div>

          <label className="mb-3 block font-medium">

            Input

          </label>

          <textarea
            rows={8}
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            placeholder="Paste your URL or encoded text..."
            className="w-full rounded-2xl border border-zinc-700 bg-black p-4 outline-none transition focus:border-violet-500"
          />

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4">

          <button
            type="submit"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
          >

            Convert

          </button>

          <button
            type="button"
            onClick={handlePaste}
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-violet-500"
          >

            <Clipboard size={18} />

            Paste

          </button>

          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-2 rounded-xl border border-red-600 px-6 py-3 text-red-400 transition hover:bg-red-600 hover:text-white"
          >

            <Trash2 size={18} />

            Clear

          </button>

        </div>

      </form>

    </div>
  );
}