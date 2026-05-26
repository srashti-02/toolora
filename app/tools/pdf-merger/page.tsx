"use client";

import { useState } from "react";

import { PDFDocument } from "pdf-lib";

import {
  Upload,
  FileText,
  Trash2,
  Download,
} from "lucide-react";

export default function PDFMerger() {
  const [files, setFiles] = useState<File[]>([]);

  const [loading, setLoading] =
    useState(false);

  // HANDLE FILE UPLOAD
  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(
      e.target.files || []
    );

    setFiles((prev) => [
      ...prev,
      ...selectedFiles,
    ]);
  };

  // REMOVE FILE
  const removeFile = (index: number) => {
    setFiles(
      files.filter((_, i) => i !== index)
    );
  };

  // MERGE PDFs
  const mergePDFs = async () => {
    if (files.length < 2) {
      alert(
        "Please upload at least 2 PDF files"
      );

      return;
    }

    setLoading(true);

    try {
      // CREATE NEW PDF
      const mergedPdf =
        await PDFDocument.create();

      // LOOP FILES
      for (const file of files) {

        // READ FILE
        const fileBytes =
          await file.arrayBuffer();

        // LOAD PDF
        const pdf =
          await PDFDocument.load(
            fileBytes
          );

        // COPY PAGES
        const copiedPages =
          await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          );

        // ADD PAGES
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      // SAVE PDF
      const mergedPdfFile =
        await mergedPdf.save();

      // CREATE BLOB
      const blob = new Blob(
        [
          new Uint8Array(
            mergedPdfFile
          ),
        ],
        {
          type: "application/pdf",
        }
      );

      // CREATE DOWNLOAD URL
      const url =
        URL.createObjectURL(blob);

      // DOWNLOAD FILE
      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        "toolora-merged.pdf";

      link.click();

      // CLEANUP
      URL.revokeObjectURL(url);
    }

    catch (error) {
      console.error(error);

      alert(
        "Failed to merge PDFs"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-sm text-red-300 mb-6">
            📄 PDF Utility Tool
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold">
            PDF Merger
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Merge multiple PDF files
            into a single professional
            document instantly.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">

            {/* UPLOAD AREA */}
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center">

              <FileText
                size={70}
                className="mx-auto text-red-400 mb-6"
              />

              <h2 className="text-2xl font-bold">
                Upload PDF Files
              </h2>

              <p className="text-zinc-400 mt-4">
                Select multiple PDFs to merge
              </p>

              <input
                type="file"
                accept=".pdf"
                multiple
                className="hidden"
                id="upload"
                onChange={handleUpload}
              />

              <label
                htmlFor="upload"
                className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-2xl font-semibold cursor-pointer"
              >
                <Upload size={20} />
                Choose PDFs
              </label>
            </div>

            {/* INFO */}
            <div className="mt-8 bg-zinc-900 border border-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-4">
                Selected Files
              </h3>

              <p className="text-zinc-400">
                {files.length} PDF file(s)
                selected
              </p>
            </div>

            {/* MERGE BUTTON */}
            <button
              onClick={mergePDFs}
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-red-600 to-pink-600 hover:opacity-90 transition rounded-2xl py-4 font-semibold disabled:opacity-50"
            >
              {loading
                ? "Merging PDFs..."
                : "Merge PDFs"}
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">

            <h2 className="text-2xl font-bold mb-8">
              Uploaded PDFs
            </h2>

            {files.length > 0 ? (
              <div className="space-y-4">

                {files.map(
                  (file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-2xl p-5"
                    >

                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">

                          <FileText className="text-red-400" />
                        </div>

                        <div>

                          <h3 className="font-semibold">
                            {file.name}
                          </h3>

                          <p className="text-zinc-500 text-sm mt-1">
                            {(
                              file.size /
                              1024 /
                              1024
                            ).toFixed(2)}
                            MB
                          </p>
                        </div>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() =>
                          removeFile(index)
                        }
                        className="text-red-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="h-80 flex items-center justify-center text-zinc-500">

                No PDFs uploaded
              </div>
            )}
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">

          {[
            "Merge Multiple PDFs",
            "Fast Processing",
            "Secure Browser-Based Tool",
            "Download Instantly",
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