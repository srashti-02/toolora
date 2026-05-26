"use client";

import { useMemo, useState } from "react";

import pageHero from "../../components/ui/pageHero";

import {
  Type,
  Copy,
  Trash2,
  Clock3,
  BookOpen,
  Hash,
 AlignLeft,
} from "lucide-react";
import PageHero from "../../components/ui/pageHero";

export default function TextCounter() {

  const [text, setText] =
    useState("");

  // CALCULATIONS
  const stats = useMemo(() => {

    const words =
      text.trim() === ""
        ? 0
        : text
            .trim()
            .split(/\s+/).length;

    const characters =
      text.length;

    const charactersNoSpaces =
      text.replace(/\s/g, "")
        .length;

    const sentences =
      text.trim() === ""
        ? 0
        : text
            .split(/[.!?]+/)
            .filter(Boolean).length;

    const paragraphs =
      text.trim() === ""
        ? 0
        : text
            .split(/\n+/)
            .filter(Boolean).length;

    const readingTime =
      Math.max(
        1,
        Math.ceil(words / 200)
      );

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };

  }, [text]);

  // COPY
  const copyText = async () => {

    try {

      await navigator.clipboard.writeText(
        text
      );

      alert("Text copied successfully!");

    }

    catch {

      alert("Copy failed");

    }
  };

  // CLEAR
  const clearText = () => {

    setText("");

  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <PageHero
        badge="✨ Smart Writing Tool"
        title="Free Online"
        gradientText="Text Counter"
        description="Instantly count words, characters, sentences, paragraphs, and reading time using Toolora's free online text counter tool."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* MAIN */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* TEXT AREA */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[2rem] p-8">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">

              <div className="flex items-center gap-3">

                <Type className="text-purple-400" />

                <h2 className="text-2xl font-bold">
                  Enter Your Text
                </h2>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={copyText}
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition px-4 py-3 rounded-xl"
                >

                  <Copy size={18} />

                  Copy

                </button>

                <button
                  onClick={clearText}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-3 rounded-xl"
                >

                  <Trash2 size={18} />

                  Clear

                </button>

              </div>

            </div>

            <textarea
              value={text}
              onChange={(e) =>
                setText(
                  e.target.value
                )
              }
              placeholder="Start typing or paste your text here..."
              className="w-full h-[500px] bg-zinc-900 border border-white/10 rounded-3xl p-6 text-lg resize-none outline-none focus:border-purple-500 transition"
            />

          </div>

          {/* STATS */}
          <div className="space-y-6">

            {/* WORDS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">

                <BookOpen className="text-purple-400" />

                <h3 className="text-lg font-semibold">
                  Words
                </h3>

              </div>

              <p className="text-4xl font-bold">

                {stats.words}

              </p>

            </div>

            {/* CHARACTERS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">

                <Hash className="text-purple-400" />

                <h3 className="text-lg font-semibold">
                  Characters
                </h3>

              </div>

              <p className="text-4xl font-bold">

                {stats.characters}

              </p>

              <p className="text-zinc-400 mt-2">

                Without spaces:
                {" "}
                {stats.charactersNoSpaces}

              </p>

            </div>

            {/* SENTENCES */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">

                <AlignLeft className="text-purple-400" />

                <h3 className="text-lg font-semibold">
                  Sentences
                </h3>

              </div>

              <p className="text-4xl font-bold">

                {stats.sentences}

              </p>

            </div>

            {/* PARAGRAPHS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">

                <AlignLeft className="text-purple-400" />

                <h3 className="text-lg font-semibold">
                  Paragraphs
                </h3>

              </div>

              <p className="text-4xl font-bold">

                {stats.paragraphs}

              </p>

            </div>

            {/* READING TIME */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6">

              <div className="flex items-center gap-3 mb-4">

                <Clock3 />

                <h3 className="text-lg font-semibold">
                  Reading Time
                </h3>

              </div>

              <p className="text-4xl font-bold">

                {stats.readingTime}
                {" "}
                min

              </p>

            </div>

          </div>

        </div>

        {/* EXTRA INFO */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {[
            "Live Word Counter",
            "Character Count",
            "Reading Time Estimator",
          ].map((item) => (

            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >

              <h3 className="font-semibold">

                {item}

              </h3>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}