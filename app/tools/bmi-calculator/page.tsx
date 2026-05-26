"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmi, setBMI] = useState<number | null>(null);

  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w) {
      alert("Please enter valid values");
      return;
    }

    const result = w / (h * h);

    setBMI(Number(result.toFixed(2)));

    if (result < 18.5) {
      setStatus("Underweight");
    } else if (result < 25) {
      setStatus("Normal");
    } else if (result < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-sm text-pink-300 mb-6">
            🧮 Smart BMI Calculator
          </div>

          <h1 className="text-5xl font-extrabold">
            BMI Calculator
          </h1>

          <p className="text-zinc-400 mt-5">
            Calculate your Body Mass Index instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="space-y-6">

              <div>
                <label className="block text-sm text-zinc-400 mb-3">
                  Height (cm)
                </label>

                <input
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-3">
                  Weight (kg)
                </label>

                <input
                  type="number"
                  placeholder="65"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 outline-none focus:border-pink-500"
                />
              </div>

              <button
                onClick={calculateBMI}
                className="w-full bg-pink-600 hover:bg-pink-700 transition rounded-2xl py-4 font-semibold"
              >
                Calculate BMI
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center">

            {bmi !== null ? (
              <div className="text-center">

                <p className="text-zinc-400 mb-3">
                  Your BMI
                </p>

                <h2 className="text-6xl font-extrabold text-pink-400">
                  {bmi}
                </h2>

                <div className="mt-6 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 inline-block">
                  {status}
                </div>
              </div>
            ) : (
              <div className="text-center">

                <div className="text-7xl mb-6">
                  ⚖️
                </div>

                <p className="text-zinc-400">
                  Enter height and weight
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}