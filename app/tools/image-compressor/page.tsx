"use client";

import { useState } from "react";

import imageCompression from "browser-image-compression";

import {
  Upload,
  Download,
  ImageIcon,
  Trash2,
  SlidersHorizontal,
} from "lucide-react";

export default function ImageCompressor() {
  const [originalImage, setOriginalImage] =
    useState<File | null>(null);

  const [compressedImage, setCompressedImage] =
    useState<File | null>(null);

  const [originalPreview, setOriginalPreview] =
    useState("");

  const [compressedPreview, setCompressedPreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // SETTINGS
  const [quality, setQuality] =
    useState(0.7);

  const [maxSizeMB, setMaxSizeMB] =
    useState(0.5);

  const [maxWidth, setMaxWidth] =
    useState(1920);

  const [maxHeight, setMaxHeight] =
    useState(1920);

  // IMAGE DIMENSIONS
  const [originalDimensions, setOriginalDimensions] =
    useState({
      width: 0,
      height: 0,
    });

  const [compressedDimensions, setCompressedDimensions] =
    useState({
      width: 0,
      height: 0,
    });

  // GET IMAGE SIZE
  const getImageDimensions = (
    file: File
  ): Promise<{
    width: number;
    height: number;
  }> => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
        });
      };

      img.src =
        URL.createObjectURL(file);
    });
  };

  // HANDLE UPLOAD
  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setOriginalImage(file);

    setOriginalPreview(
      URL.createObjectURL(file)
    );

    const dimensions =
      await getImageDimensions(file);

    setOriginalDimensions(dimensions);

    compressImage(file);
  };

  // COMPRESS IMAGE
  const compressImage = async (
    file: File
  ) => {
    setLoading(true);

    try {
      const options = {
        maxSizeMB,
        maxWidthOrHeight: Math.max(
          maxWidth,
          maxHeight
        ),
        useWebWorker: true,
        initialQuality: quality,
      };

      const compressed =
        await imageCompression(
          file,
          options
        );

      setCompressedImage(compressed);

      const preview =
        URL.createObjectURL(compressed);

      setCompressedPreview(preview);

      const dimensions =
        await getImageDimensions(
          compressed
        );

      setCompressedDimensions(
        dimensions
      );
    }

    catch (error) {
      console.error(error);

      alert(
        "Compression failed"
      );
    }

    setLoading(false);
  };

  // RE-COMPRESS
  const recompress = async () => {
    if (!originalImage) return;

    compressImage(originalImage);
  };

  // REMOVE IMAGE
  const removeImage = () => {
    setOriginalImage(null);

    setCompressedImage(null);

    setOriginalPreview("");

    setCompressedPreview("");

    setOriginalDimensions({
      width: 0,
      height: 0,
    });

    setCompressedDimensions({
      width: 0,
      height: 0,
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-300 mb-6">
            🖼️ Advanced Image Tool
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Image Compressor
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Compress images by size,
            quality, width, and height.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">

            {/* UPLOAD */}
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center">

              <ImageIcon
                size={70}
                className="mx-auto text-blue-400 mb-6"
              />

              <h2 className="text-2xl font-bold">
                Upload Image
              </h2>

              <p className="text-zinc-400 mt-4">
                JPG, PNG & WEBP supported
              </p>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="upload"
                onChange={handleUpload}
              />

              <label
                htmlFor="upload"
                className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-2xl font-semibold cursor-pointer"
              >
                <Upload size={20} />
                Choose Image
              </label>
            </div>

            {/* SETTINGS */}
            {originalImage && (
              <div className="mt-8 bg-zinc-900 border border-white/10 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-6">

                  <SlidersHorizontal className="text-blue-400" />

                  <h3 className="text-xl font-bold">
                    Compression Settings
                  </h3>
                </div>

                {/* QUALITY */}
                <div className="mb-6">

                  <label className="text-sm text-zinc-400">
                    Quality:
                    {" "}
                    {Math.round(
                      quality * 100
                    )}
                    %
                  </label>

                  <input
                    type="range"
                    min={0.1}
                    max={1}
                    step={0.1}
                    value={quality}
                    onChange={(e) =>
                      setQuality(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="w-full mt-2"
                  />
                </div>

                {/* MAX SIZE */}
                <div className="mb-6">

                  <label className="text-sm text-zinc-400">
                    Max Size (MB)
                  </label>

                  <input
                    type="number"
                    value={maxSizeMB}
                    onChange={(e) =>
                      setMaxSizeMB(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="w-full mt-2 bg-zinc-950 border border-white/10 rounded-xl px-4 py-3"
                  />
                </div>

                {/* WIDTH & HEIGHT */}
                <div className="grid grid-cols-2 gap-4">

                  <div>

                    <label className="text-sm text-zinc-400">
                      Max Width
                    </label>

                    <input
                      type="number"
                      value={maxWidth}
                      onChange={(e) =>
                        setMaxWidth(
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-full mt-2 bg-zinc-950 border border-white/10 rounded-xl px-4 py-3"
                    />
                  </div>

                  <div>

                    <label className="text-sm text-zinc-400">
                      Max Height
                    </label>

                    <input
                      type="number"
                      value={maxHeight}
                      onChange={(e) =>
                        setMaxHeight(
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-full mt-2 bg-zinc-950 border border-white/10 rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                {/* APPLY BUTTON */}
                <button
                  onClick={recompress}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-semibold"
                >
                  Apply Compression
                </button>
              </div>
            )}

            {/* RESULT */}
            {originalImage &&
              compressedImage && (
                <div className="mt-8 bg-zinc-900 border border-white/10 rounded-2xl p-6">

                  <h3 className="text-xl font-bold mb-5">
                    Compression Result
                  </h3>

                  <div className="space-y-3 text-zinc-400">

                    <p>
                      Original:
                      {" "}
                      {(
                        originalImage.size /
                        1024
                      ).toFixed(0)}
                      KB
                    </p>

                    <p>
                      Compressed:
                      {" "}
                      {(
                        compressedImage.size /
                        1024
                      ).toFixed(0)}
                      KB
                    </p>

                    <p>
                      Original Dimensions:
                      {" "}
                      {
                        originalDimensions.width
                      }
                      x
                      {
                        originalDimensions.height
                      }
                    </p>

                    <p>
                      Compressed Dimensions:
                      {" "}
                      {
                        compressedDimensions.width
                      }
                      x
                      {
                        compressedDimensions.height
                      }
                    </p>

                    <p className="text-green-400 font-medium">
                      Saved:
                      {" "}
                      {Math.round(
                        (1 -
                          compressedImage.size /
                            originalImage.size) *
                          100
                      )}
                      %
                    </p>
                  </div>
                </div>
              )}

            {/* ACTIONS */}
            {compressedPreview && (
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href={compressedPreview}
                  download="toolora-compressed.jpg"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-6 py-4 rounded-2xl font-semibold"
                >
                  <Download size={20} />
                  Download
                </a>

                <button
                  onClick={removeImage}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-2xl font-semibold"
                >
                  <Trash2 size={20} />
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">

            <h2 className="text-2xl font-bold mb-8">
              Preview
            </h2>

            {compressedPreview ? (
              <div className="space-y-8">

                <div>

                  <h3 className="text-lg font-semibold mb-4">
                    Original Image
                  </h3>

                  <img
                    src={originalPreview}
                    alt="Original"
                    className="rounded-3xl w-full border border-white/10"
                  />
                </div>

                <div>

                  <h3 className="text-lg font-semibold mb-4">
                    Compressed Image
                  </h3>

                  <img
                    src={compressedPreview}
                    alt="Compressed"
                    className="rounded-3xl w-full border border-white/10"
                  />
                </div>
              </div>
            ) : (
              <div className="h-96 flex items-center justify-center text-zinc-500">
                No image uploaded
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}