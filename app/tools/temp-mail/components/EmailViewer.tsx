"use client";

import { ArrowLeft, User, Calendar } from "lucide-react";

import { TempMessageDetails } from "../types";

interface EmailViewerProps {
  email: TempMessageDetails | null;
  onBack: () => void;
}

export default function EmailViewer({
  email,
  onBack,
}: EmailViewerProps) {
  if (!email) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <div className="flex h-[500px] items-center justify-center text-center text-zinc-500">

          Select an email from your inbox to read it.

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 transition hover:border-violet-500"
        >
          <ArrowLeft size={18} />

          Back
        </button>

      </div>

      {/* Subject */}

      <h1 className="text-3xl font-bold break-words">

        {email.subject || "(No Subject)"}

      </h1>

      {/* Sender */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-zinc-800 bg-black p-5">

          <div className="flex items-center gap-2 text-violet-400">

            <User size={18} />

            <span className="font-semibold">

              Sender

            </span>

          </div>

          <p className="mt-3 break-all text-zinc-300">

            {email.from.name || "Unknown"}

          </p>

          <p className="mt-1 break-all text-sm text-zinc-500">

            {email.from.address}

          </p>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-black p-5">

          <div className="flex items-center gap-2 text-violet-400">

            <Calendar size={18} />

            <span className="font-semibold">

              Received

            </span>

          </div>

          <p className="mt-3 text-zinc-300">

            {new Date(email.createdAt).toLocaleString()}

          </p>

        </div>

      </div>

      {/* Body */}

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">

        <h2 className="mb-5 text-xl font-semibold">

          Email Content

        </h2>

        {email.html &&
        email.html.length > 0 ? (

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: email.html[0],
            }}
          />

        ) : (

          <pre className="whitespace-pre-wrap break-words font-sans text-zinc-300">

            {email.text || "No email content available."}

          </pre>

        )}

      </div>

    </div>
  );
}