"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    nextBirthday: number;
    zodiac: string;
    bornDay: string;
  } | null>(null);

  const getZodiacSign = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18))
      return "Aquarius ♒";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20))
      return "Pisces ♓";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19))
      return "Aries ♈";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20))
      return "Taurus ♉";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
      return "Gemini ♊";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22))
      return "Cancer ♋";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22))
      return "Leo ♌";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22))
      return "Virgo ♍";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
      return "Libra ♎";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
      return "Scorpio ♏";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
      return "Sagittarius ♐";

    return "Capricorn ♑";
  };

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please select your birth date");
      return;
    }

    const today = new Date();
    const dob = new Date(birthDate);

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();

      days += previousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // NEXT BIRTHDAY
    const nextBirthday = new Date(
      today.getFullYear(),
      dob.getMonth(),
      dob.getDate()
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();

    const birthdayCountdown = Math.ceil(
      diffTime / (1000 * 60 * 60 * 24)
    );

    // DAY BORN
    const bornDay = dob.toLocaleDateString("en-US", {
      weekday: "long",
    });

    setResult({
      years,
      months,
      days,
      nextBirthday: birthdayCountdown,
      zodiac: getZodiacSign(dob),
      bornDay,
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-300 mb-6">
            🎂 Smart Age Calculator
          </div>

          <h1 className="text-5xl font-extrabold">
            Age Calculator
          </h1>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Calculate your exact age in years,
            months, and days instantly with
            birthday countdown and zodiac sign.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <label className="block text-sm text-zinc-400 mb-3">
              Select Your Birth Date
            </label>

            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500"
            />

            <button
              onClick={calculateAge}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 transition rounded-2xl py-4 font-semibold"
            >
              Calculate Age
            </button>

            {/* FEATURES */}
            <div className="mt-8 space-y-4 text-sm text-zinc-400">

              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4">
                ✔ Exact Age Calculation
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4">
                ✔ Birthday Countdown
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4">
                ✔ Zodiac Sign Included
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            {result ? (
              <div>

                {/* AGE RESULT */}
                <div className="text-center mb-10">

                  <p className="text-zinc-400 mb-3">
                    Your Exact Age
                  </p>

                  <h2 className="text-5xl font-extrabold text-blue-400">
                    {result.years}
                  </h2>

                  <p className="text-zinc-300 mt-3 text-lg">
                    Years • {result.months} Months • {result.days} Days
                  </p>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 gap-5">

                  <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">

                    <p className="text-zinc-400 text-sm">
                      🎉 Next Birthday
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                      {result.nextBirthday} Days
                    </h3>
                  </div>

                  <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">

                    <p className="text-zinc-400 text-sm">
                      ♈ Zodiac Sign
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                      {result.zodiac}
                    </h3>
                  </div>

                  <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:col-span-2">

                    <p className="text-zinc-400 text-sm">
                      📅 Day You Were Born
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                      {result.bornDay}
                    </h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">

                <div className="text-7xl mb-6">
                  🎂
                </div>

                <h2 className="text-2xl font-semibold">
                  Your Age Details
                </h2>

                <p className="text-zinc-400 mt-3 max-w-sm">
                  Select your birth date to calculate
                  your exact age and birthday insights.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* EXTRA INFO */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">

          {[
            "Exact Years, Months & Days",
            "Modern Mobile Friendly UI",
            "Instant Smart Calculations",
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