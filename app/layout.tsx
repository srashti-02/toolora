import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import Navbar from "./components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import NewsletterSection from "@/app/components/layout/NewsletterSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toolora.vercel.app"),

  title: {
    default: "Toolora - Free Online Utility Tools",
    template: "%s | Toolora",
  },

  description:
    "Toolora offers free online utility tools including calculators, productivity tools, password generators, QR generators, PDF tools, image tools, and more.",

  keywords: [
    "online tools",
    "free utility tools",
    "toolora",
    "password generator",
    "QR code generator",
    "PDF merger",
    "image compressor",
    "CGPA calculator",
    "BMI calculator",
    "student productivity tools",
    "developer tools",
    "online calculators",
  ],

  authors: [
    {
      name: "Toolora",
    },
  ],

  creator: "Toolora",

  publisher: "Toolora",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Toolora - Free Online Utility Tools",

    description:
      "Explore modern online tools for productivity, calculations, file utilities, education, and more.",

    url: "https://toolora.vercel.app",

    siteName: "Toolora",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toolora",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Toolora - Free Online Utility Tools",

    description:
      "Modern productivity and utility tools for students, developers, creators, and professionals.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3431503765432271"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-full flex flex-col bg-black text-white">
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* NEWSLETTER */}
        <NewsletterSection />

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}