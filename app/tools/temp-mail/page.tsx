"use client";

import { useEffect, useState } from "react";

import MailGenerator from "./components/MailGenerator";
import Inbox from "./components/Inbox";
import EmailViewer from "./components/EmailViewer";
import TempMailSummary from "./components/TempMailSummary";
import FAQ from "./components/FAQ";

import {
  createMailbox,
  getInbox,
  getMessage,
} from "./utils/tempMail";

import {
  TempMailbox,
  TempMessage,
  TempMessageDetails,
} from "./types";

export default function TempMailPage() {
  const [mailbox, setMailbox] =
    useState<TempMailbox | null>(null);

  const [messages, setMessages] =
    useState<TempMessage[]>([]);

  const [selectedEmail, setSelectedEmail] =
    useState<TempMessageDetails | null>(
      null
    );

  const [loading, setLoading] =
    useState(false);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] =
    useState("");

  async function generateMailbox() {
    try {
      setLoading(true);
      setError("");

      const mail =
        await createMailbox();

      setMailbox(mail);

      const inbox =
        await getInbox(mail.token);

      setMessages(inbox);

      setSelectedEmail(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create mailbox."
      );
    } finally {
      setLoading(false);
    }
  }

  async function refreshInbox() {
    if (!mailbox) return;

    try {
      setRefreshing(true);

      const inbox =
        await getInbox(mailbox.token);

      setMessages(inbox);
    } finally {
      setRefreshing(false);
    }
  }

  async function openEmail(id: string) {
    if (!mailbox) return;

    try {
      const email =
        await getMessage(
          id,
          mailbox.token
        );

      setSelectedEmail(email);
    } catch {
      setError(
        "Unable to open email."
      );
    }
  }

  useEffect(() => {
    generateMailbox();
  }, []);

  useEffect(() => {
    if (!mailbox) return;

    const timer = setInterval(() => {
      refreshInbox();
    }, 10000);

    return () =>
      clearInterval(timer);
  }, [mailbox]);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="border-b border-zinc-800 bg-gradient-to-b from-violet-950/30 to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <h1 className="text-center text-5xl font-extrabold">

            Temporary Email

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-zinc-400">

            Create a disposable email
            address instantly to receive
            verification emails, OTPs and
            temporary messages.

          </p>

        </div>

      </section>

      {/* MAIN */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <MailGenerator
          mailbox={mailbox}
          loading={loading}
          onGenerate={generateMailbox}
        />

        {error && (

          <div className="mt-6 rounded-xl border border-red-500 bg-red-500/10 p-4 text-center text-red-400">

            {error}

          </div>

        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <Inbox
            messages={messages}
            loading={refreshing}
            onRefresh={refreshInbox}
            onSelect={openEmail}
          />

          <EmailViewer
            email={selectedEmail}
            onBack={() =>
              setSelectedEmail(null)
            }
          />

        </div>

        <TempMailSummary />

        <FAQ />

      </section>

    </main>
  );
}