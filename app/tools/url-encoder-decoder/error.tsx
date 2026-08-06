"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">

      <div className="max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center">

        <h1 className="text-3xl font-bold text-red-500">
          Something went wrong
        </h1>

        <p className="mt-4 text-zinc-400">
          Unable to load URL Encoder / Decoder.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}