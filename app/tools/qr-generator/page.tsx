"use client";

import { useState } from "react";
// Using external QR package caused type/module errors in this environment.
// Use a public QR image API instead to avoid dependency on 'qrcode.react'.

const qrTypes = [
  "URL",
  "Phone",
  "Email",
  "WhatsApp",
  "Instagram",
  "Facebook",
  "Text",
];

export default function QRGenerator() {
  const [type, setType] = useState("URL");
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");

  const generateQR = () => {
    if (!input.trim()) {
      alert("Please enter a value");
      return;
    }

    let finalValue = input;

    switch (type) {
      case "Phone":
        finalValue = `tel:${input}`;
        break;

      case "Email":
        finalValue = `mailto:${input}`;
        break;

      case "WhatsApp":
        finalValue = `https://wa.me/${input}`;
        break;

      case "Instagram":
        finalValue = `https://instagram.com/${input}`;
        break;

      case "Facebook":
        finalValue = `https://facebook.com/${input}`;
        break;

      default:
        finalValue = input;
    }

    setQrValue(finalValue);
  };

  const downloadQR = async () => {
    if (!qrValue) return;

    const src = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(
      qrValue
    )}`;

    try {
      const res = await fetch(src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "toolora-qr.png";
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("Failed to download QR");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-sm text-purple-300 mb-6">
            ⚡ Smart QR Generator
          </div>

          <h1 className="text-5xl font-extrabold">
            QR Code Generator
          </h1>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Create QR codes for URLs, phone numbers,
            WhatsApp, Instagram, Facebook, emails,
            and custom text instantly.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            {/* TYPE SELECT */}
            <label className="block text-sm text-zinc-400 mb-3">
              QR Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 outline-none focus:border-purple-500 mb-6"
            >
              {qrTypes.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            {/* INPUT */}
            <label className="block text-sm text-zinc-400 mb-3">
              Enter Value
            </label>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                type === "URL"
                  ? "https://example.com"
                  : type === "Phone"
                  ? "9876543210"
                  : type === "Email"
                  ? "hello@example.com"
                  : type === "WhatsApp"
                  ? "919876543210"
                  : type === "Instagram"
                  ? "username"
                  : type === "Facebook"
                  ? "profile"
                  : "Enter text"
              }
              className="w-full h-40 bg-zinc-900 border border-white/10 rounded-2xl p-4 outline-none focus:border-purple-500 resize-none"
            />

            {/* BUTTON */}
            <button
              onClick={generateQR}
              className="w-full mt-6 bg-purple-600 hover:bg-purple-700 transition rounded-2xl py-4 font-semibold"
            >
              Generate QR Code
            </button>

            {/* INFO */}
            <div className="mt-6 text-sm text-zinc-500 leading-relaxed">
              ✔ High Quality QR <br />
              ✔ Instant Download <br />
              ✔ Mobile Friendly <br />
              ✔ Multiple QR Types
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center">

            {qrValue ? (
              <>
                <div className="bg-white p-6 rounded-2xl">
                  <img
                    id="qr-code"
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(
                      qrValue
                    )}`}
                    alt="QR Code"
                    width={230}
                    height={230}
                  />
                </div>

                <button
                  onClick={downloadQR}
                  className="mt-8 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-2xl font-medium"
                >
                  Download QR
                </button>
              </>
            ) : (
              <div className="text-center">

                <div className="text-7xl mb-6">
                  🔳
                </div>

                <h2 className="text-2xl font-semibold">
                  Your QR Code
                </h2>

                <p className="text-zinc-400 mt-3">
                  Select a type and generate your QR code.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}