"use client";

import { useState } from "react";
import jsPDF from "jspdf";

export default function ImageToPDF() {
  const [images, setImages] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // HANDLE IMAGE UPLOAD
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(
      e.target.files || []
    );

    setImages(files);

    const imageUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreview(imageUrls);
  };

  // GENERATE PDF
  const generatePDF = async () => {
    if (images.length === 0) {
      alert("Please upload images");
      return;
    }

    setLoading(true);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    for (let i = 0; i < images.length; i++) {
      const file = images[i];

      const imageUrl =
        URL.createObjectURL(file);

      const img = new Image();

      img.src = imageUrl;

      await new Promise<void>((resolve) => {
        img.onload = () => {

          const canvas =
            document.createElement("canvas");

          const ctx =
            canvas.getContext("2d");

          if (!ctx) {
            resolve();
            return;
          }

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(
            img,
            0,
            0
          );

          const imgData =
            canvas.toDataURL(
              "image/jpeg",
              1.0
            );

          const pdfWidth = 210;

          const pdfHeight =
            (img.height * pdfWidth) /
            img.width;

          if (i > 0) {
            pdf.addPage();
          }

          pdf.addImage(
            imgData,
            "JPEG",
            0,
            0,
            pdfWidth,
            pdfHeight
          );

          resolve();
        };
      });
    }

    pdf.save("toolora-images.pdf");

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-sm text-pink-300 mb-6">
            🖼️ Smart PDF Converter
          </div>

          <h1 className="text-5xl font-extrabold">
            Image to PDF Converter
          </h1>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Convert JPG, PNG, and images
            into high-quality PDF files instantly.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">

            <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center">

              <div className="text-7xl mb-6">
                📄
              </div>

              <h2 className="text-2xl font-bold">
                Upload Images
              </h2>

              <p className="text-zinc-400 mt-4">
                Select multiple images
                to convert them into one PDF.
              </p>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />

              <label
                htmlFor="imageUpload"
                className="inline-block mt-8 bg-pink-600 hover:bg-pink-700 transition px-6 py-4 rounded-2xl font-semibold cursor-pointer"
              >
                Choose Images
              </label>
            </div>

            {/* INFO */}
            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5 text-center">

                <h3 className="text-3xl font-extrabold text-pink-400">
                  {images.length}
                </h3>

                <p className="text-zinc-400 mt-2 text-sm">
                  Images Selected
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5 text-center">

                <h3 className="text-3xl font-extrabold text-blue-400">
                  PDF
                </h3>

                <p className="text-zinc-400 mt-2 text-sm">
                  Output Format
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={generatePDF}
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition rounded-2xl py-4 font-semibold disabled:opacity-50"
            >
              {loading
                ? "Generating PDF..."
                : "Convert to PDF"}
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">

            <h2 className="text-2xl font-bold mb-8">
              Image Preview
            </h2>

            {preview.length > 0 ? (
              <div className="grid grid-cols-2 gap-5">

                {preview.map((src, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden"
                  >

                    <img
                      src={src}
                      alt="preview"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">

                <div>

                  <div className="text-7xl mb-6">
                    🖼️
                  </div>

                  <p className="text-zinc-400">
                    Uploaded images
                    will appear here
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-24 grid md:grid-cols-4 gap-6">

          {[
            "Multiple Image Support",
            "Fast PDF Conversion",
            "High Quality Output",
            "Mobile Friendly",
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