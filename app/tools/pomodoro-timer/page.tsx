"use client";

import { useEffect, useState } from "react";

import {
  Play,
  Pause,
  RotateCcw,
  Coffee,
  Timer,
} from "lucide-react";

export default function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);

  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] =
    useState(false);

  const [mode, setMode] = useState<
    "focus" | "short" | "long"
  >("focus");

  const [sessions, setSessions] =
    useState(0);

  // CUSTOM TIME SETTINGS
  const [focusInput, setFocusInput] =
    useState(25);

  const [shortBreakInput, setShortBreakInput] =
    useState(5);

  const [longBreakInput, setLongBreakInput] =
    useState(15);

  // TIMER LOGIC
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        }

        else if (minutes > 0) {
          setMinutes((prev) => prev - 1);

          setSeconds(59);
        }

        else {
          clearInterval(timer);

          setIsRunning(false);

          if (mode === "focus") {
            setSessions((prev) => prev + 1);

            alert(
              "Focus session completed 🎉"
            );
          }

          else {
            alert(
              "Break session completed ☕"
            );
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds, mode]);

  // START TIMER
  const startTimer = () => {
    setIsRunning(true);
  };

  // PAUSE TIMER
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // RESET TIMER
  const resetTimer = () => {
    setIsRunning(false);

    if (mode === "focus") {
      setMinutes(focusInput);
    }

    if (mode === "short") {
      setMinutes(shortBreakInput);
    }

    if (mode === "long") {
      setMinutes(longBreakInput);
    }

    setSeconds(0);
  };

  // CHANGE TIMER MODE
  const changeMode = (
    newMode: "focus" | "short" | "long"
  ) => {
    setMode(newMode);

    setIsRunning(false);

    if (newMode === "focus") {
      setMinutes(focusInput);
    }

    if (newMode === "short") {
      setMinutes(shortBreakInput);
    }

    if (newMode === "long") {
      setMinutes(longBreakInput);
    }

    setSeconds(0);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-sm text-red-300 mb-6">
            🍅 Productivity Timer
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Pomodoro Timer
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay focused, avoid burnout,
            and improve productivity using
            the Pomodoro technique.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">

          {/* MODES */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">

            <button
              onClick={() =>
                changeMode("focus")
              }
              className={`px-6 py-3 rounded-2xl font-medium transition ${
                mode === "focus"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              Focus
            </button>

            <button
              onClick={() =>
                changeMode("short")
              }
              className={`px-6 py-3 rounded-2xl font-medium transition ${
                mode === "short"
                  ? "bg-green-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              Short Break
            </button>

            <button
              onClick={() =>
                changeMode("long")
              }
              className={`px-6 py-3 rounded-2xl font-medium transition ${
                mode === "long"
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              Long Break
            </button>
          </div>

          {/* CUSTOM SETTINGS */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">

            {/* FOCUS */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5">

              <label className="text-sm text-zinc-400 block mb-3">
                Focus Time (minutes)
              </label>

              <input
                type="number"
                min={1}
                value={focusInput}
                onChange={(e) => {
                  const value =
                    Number(e.target.value);

                  setFocusInput(value);

                  if (mode === "focus") {
                    setMinutes(value);
                  }
                }}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            {/* SHORT BREAK */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5">

              <label className="text-sm text-zinc-400 block mb-3">
                Short Break
              </label>

              <input
                type="number"
                min={1}
                value={shortBreakInput}
                onChange={(e) => {
                  const value =
                    Number(e.target.value);

                  setShortBreakInput(value);

                  if (mode === "short") {
                    setMinutes(value);
                  }
                }}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            {/* LONG BREAK */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5">

              <label className="text-sm text-zinc-400 block mb-3">
                Long Break
              </label>

              <input
                type="number"
                min={1}
                value={longBreakInput}
                onChange={(e) => {
                  const value =
                    Number(e.target.value);

                  setLongBreakInput(value);

                  if (mode === "long") {
                    setMinutes(value);
                  }
                }}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* TIMER DISPLAY */}
          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full border-[10px] border-red-500/20 bg-gradient-to-br from-red-500/10 to-purple-500/10 flex flex-col items-center justify-center shadow-2xl">

              <div className="text-7xl font-extrabold tracking-wider">

                {String(minutes).padStart(
                  2,
                  "0"
                )}
                :
                {String(seconds).padStart(
                  2,
                  "0"
                )}
              </div>

              <p className="text-zinc-400 mt-4 text-lg capitalize">
                {mode} Mode
              </p>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex flex-wrap justify-center gap-5 mt-12">

            {!isRunning ? (
              <button
                onClick={startTimer}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-7 py-4 rounded-2xl font-semibold"
              >
                <Play size={20} />
                Start
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 transition px-7 py-4 rounded-2xl font-semibold"
              >
                <Pause size={20} />
                Pause
              </button>
            )}

            <button
              onClick={resetTimer}
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition px-7 py-4 rounded-2xl font-semibold"
            >
              <RotateCcw size={20} />
              Reset
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-5">

              <Timer className="text-red-400" />
            </div>

            <h3 className="text-4xl font-extrabold">
              {sessions}
            </h3>

            <p className="text-zinc-400 mt-3">
              Focus Sessions
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-5">

              <Coffee className="text-green-400" />
            </div>

            <h3 className="text-4xl font-extrabold">
              {shortBreakInput}m
            </h3>

            <p className="text-zinc-400 mt-3">
              Short Break
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-5">

              <Timer className="text-blue-400" />
            </div>

            <h3 className="text-4xl font-extrabold">
              {longBreakInput}m
            </h3>

            <p className="text-zinc-400 mt-3">
              Long Break
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}