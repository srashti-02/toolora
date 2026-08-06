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
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
        <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center shadow-xl">
          <h1 className="text-3xl font-bold text-red-500">
            Something went wrong
          </h1>

          <p className="mt-4 text-zinc-400">
            We couldn't load the GST Calculator.
            Please try again.
          </p>

          <button
            onClick={() => reset()}
            className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700"
          >
            Try Again
          </button>
        </div>
      </section>
    </main>
  );
}