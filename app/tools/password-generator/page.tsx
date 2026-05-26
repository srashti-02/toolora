"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let chars = "";

    if (includeUppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeLowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeNumbers) {
      chars += "0123456789";
    }

    if (includeSymbols) {
      chars += "!@#$%^&*()_+";
    }

    if (!chars) {
      alert("Please select at least one option");
      return;
    }

    let generated = "";

    for (let i = 0; i < length; i++) {
      generated += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(generated);
  };

  const copyPassword = async () => {
    if (!password) return;

    await navigator.clipboard.writeText(password);

    alert("Password copied!");
  };

  const getStrength = () => {
    if (length < 8) return "Weak";
    if (length < 14) return "Medium";
    return "Strong";
  };

  const strengthColor =
    getStrength() === "Weak"
      ? "text-red-400"
      : getStrength() === "Medium"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-300 mb-6">
            🔐 Secure Password Generator
          </div>

          <h1 className="text-5xl font-extrabold">
            Password Generator
          </h1>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Generate secure strong passwords instantly
            with customizable length and advanced options.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            {/* LENGTH */}
            <div className="mb-8">

              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-zinc-400">
                  Password Length
                </label>

                <span className="text-purple-400 font-semibold">
                  {length}
                </span>
              </div>

              <input
                type="range"
                min="4"
                max="32"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* OPTIONS */}
            <div className="space-y-5">

              <label className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-2xl px-4 py-4">
                <span>Uppercase Letters</span>

                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={() =>
                    setIncludeUppercase(!includeUppercase)
                  }
                />
              </label>

              <label className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-2xl px-4 py-4">
                <span>Lowercase Letters</span>

                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={() =>
                    setIncludeLowercase(!includeLowercase)
                  }
                />
              </label>

              <label className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-2xl px-4 py-4">
                <span>Numbers</span>

                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() =>
                    setIncludeNumbers(!includeNumbers)
                  }
                />
              </label>

              <label className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-2xl px-4 py-4">
                <span>Symbols</span>

                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() =>
                    setIncludeSymbols(!includeSymbols)
                  }
                />
              </label>
            </div>

            {/* BUTTON */}
            <button
              onClick={generatePassword}
              className="w-full mt-8 bg-green-600 hover:bg-green-700 transition rounded-2xl py-4 font-semibold"
            >
              Generate Password
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center">

            {password ? (
              <>
                <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 break-all">

                  <p className="text-zinc-400 text-sm mb-3">
                    Generated Password
                  </p>

                  <h2 className="text-2xl font-bold leading-relaxed">
                    {password}
                  </h2>
                </div>

                {/* STRENGTH */}
                <div className="mt-6">

                  <p className="text-zinc-400 text-sm mb-2">
                    Password Strength
                  </p>

                  <h3 className={`text-xl font-bold ${strengthColor}`}>
                    {getStrength()}
                  </h3>
                </div>

                {/* COPY BUTTON */}
                <button
                  onClick={copyPassword}
                  className="mt-8 bg-purple-600 hover:bg-purple-700 transition px-6 py-4 rounded-2xl font-medium"
                >
                  Copy Password
                </button>
              </>
            ) : (
              <div className="text-center">

                <div className="text-7xl mb-6">
                  🔐
                </div>

                <h2 className="text-2xl font-semibold">
                  Your Secure Password
                </h2>

                <p className="text-zinc-400 mt-3">
                  Select your options and generate
                  a secure password instantly.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">

          {[
            "Strong Encryption Style Passwords",
            "Instant Copy Feature",
            "Fully Customizable",
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