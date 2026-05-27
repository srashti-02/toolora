"use client";

import { useState } from "react";
import {
  Download,
  ImageIcon,
  UploadCloud,
  CheckCircle2,
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function JPGtoPNGPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [convertedImage, setConvertedImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const [originalSize, setOriginalSize] = useState("");

  const [convertedSize, setConvertedSize] = useState("");

  const [dimensions, setDimensions] = useState("");

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/jpg"
    ) {
      toast.error("Please upload JPG image only");
      return;
    }

    const imageURL = URL.createObjectURL(file);

    setSelectedImage(imageURL);

    setConvertedImage(null);

    setOriginalSize(
      (file.size / 1024).toFixed(2) + " KB"
    );

    const img = new Image();

    img.src = imageURL;

    img.onload = () => {
      setDimensions(
        `${img.width} × ${img.height}`
      );
    };

    toast.success("Image uploaded successfully!");
  };

  const convertToPNG = async () => {
    if (!selectedImage) return;

    setLoading(true);

    try {
      const img = new Image();

      img.src = selectedImage;

      img.onload = () => {
        const canvas = document.createElement("canvas");

        canvas.width = img.width;

        canvas.height = img.height;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          toast.error("Canvas not supported");
          return;
        }

        ctx.drawImage(img, 0, 0);

        const pngURL = canvas.toDataURL("image/png");

        setConvertedImage(pngURL);

        const base64Length =
          pngURL.length -
          "data:image/png;base64,".length;

        const sizeInBytes =
          (base64Length * 3) / 4;

        setConvertedSize(
          (sizeInBytes / 1024).toFixed(2) +
            " KB"
        );

        toast.success("Converted to PNG!");

        setLoading(false);
      };
    } catch (error) {
      console.error(error);

      toast.error("Conversion failed");

      setLoading(false);
    }
  };

  const downloadPNG = () => {
    if (!convertedImage) return;

    const link = document.createElement("a");

    link.href = convertedImage;

    link.download = "toolora-image.png";

    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white px-5 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300 text-sm mb-6">
            <ImageIcon size={16} />
            JPG to PNG Converter
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Convert JPG to{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              PNG
            </span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Convert JPG and JPEG images into
            high-quality PNG files instantly —
            free, fast, and secure.
          </p>
        </div>

        {/* MAIN CARD */}

        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl">

          {/* UPLOAD */}

          <label className="border-2 border-dashed border-white/10 hover:border-fuchsia-500/40 transition-all rounded-3xl p-10 flex flex-col items-center justify-center text-center cursor-pointer bg-white/[0.02]">

            <UploadCloud
              size={60}
              className="text-fuchsia-400 mb-5"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Upload JPG Image
            </h2>

            <p className="text-zinc-400 mb-6">
              Only JPG and JPEG images supported
            </p>

            <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-105 transition-all px-7 py-3 rounded-xl font-semibold">
              Choose File
            </div>

            <input
              type="file"
              accept=".jpg,.jpeg"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          {/* IMAGE PREVIEW */}

          {selectedImage && (
            <div className="grid md:grid-cols-2 gap-8 mt-12">

              {/* ORIGINAL */}

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold">
                    Original JPG
                  </h3>

                  <div className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    JPG
                  </div>
                </div>

                <img
                  src={selectedImage}
                  alt="Original"
                  className="rounded-2xl w-full max-h-[420px] object-cover"
                />

                <div className="grid grid-cols-2 gap-4 mt-6">

                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <p className="text-zinc-500 text-sm">
                      File Size
                    </p>

                    <p className="text-lg font-semibold mt-1">
                      {originalSize}
                    </p>
                  </div>

                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <p className="text-zinc-500 text-sm">
                      Dimensions
                    </p>

                    <p className="text-lg font-semibold mt-1">
                      {dimensions}
                    </p>
                  </div>
                </div>
              </div>

              {/* CONVERTED */}

              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">

                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold">
                    Converted PNG
                  </h3>

                  <div className="text-xs px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300">
                    PNG
                  </div>
                </div>

                {convertedImage ? (
                  <img
                    src={convertedImage}
                    alt="PNG"
                    className="rounded-2xl w-full max-h-[420px] object-cover"
                  />
                ) : (
                  <div className="h-[420px] rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center text-zinc-500">
                    <ImageIcon
                      size={50}
                      className="mb-4"
                    />

                    PNG Preview
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mt-6">

                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <p className="text-zinc-500 text-sm">
                      PNG Size
                    </p>

                    <p className="text-lg font-semibold mt-1">
                      {convertedSize || "--"}
                    </p>
                  </div>

                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4">
                    <p className="text-zinc-500 text-sm">
                      Status
                    </p>

                    <p className="text-lg font-semibold mt-1 text-green-400">
                      {convertedImage
                        ? "Converted"
                        : "Waiting"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ACTION BUTTONS */}

          {selectedImage && (
            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <button
                onClick={convertToPNG}
                disabled={loading}
                className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-105 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-fuchsia-500/20"
              >
                {loading
                  ? "Converting..."
                  : "Convert to PNG"}
              </button>

              {convertedImage && (
                <button
                  onClick={downloadPNG}
                  className="border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3"
                >
                  <Download size={20} />
                  Download PNG
                </button>
              )}
            </div>
          )}
        </div>

        {/* FEATURES */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
            <CheckCircle2 className="text-fuchsia-400 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              Instant Conversion
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Convert images instantly without
              any waiting time or uploads.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
            <CheckCircle2 className="text-fuchsia-400 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              100% Secure
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Your files never leave your device.
              Everything works locally.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
            <CheckCircle2 className="text-fuchsia-400 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              Completely Free
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Unlimited JPG to PNG conversions
              with no sign-up required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}