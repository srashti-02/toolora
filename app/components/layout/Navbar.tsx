"use client";

import Link from "next/link";

import {
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <header className="sticky top-0 z-50 bg-black border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-4xl font-bold text-purple-500"
        >
          Toolora
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-lg text-white">

          <Link
            href="/"
            className="hover:text-purple-500 transition"
          >
            Home
          </Link>

          <Link
            href="/tools"
            className="hover:text-purple-500 transition"
          >
            Tools
          </Link>

          <Link
            href="/blog"
            className="hover:text-purple-500 transition"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="hover:text-purple-500 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-purple-500 transition"
          >
            Contact
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-white"
        >

          {menuOpen ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-zinc-950 border-t border-white/10 px-6 py-6 space-y-5 text-lg text-white">

          <Link
            href="/"
            className="block hover:text-purple-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </Link>

          <Link
            href="/tools"
            className="block hover:text-purple-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Tools
          </Link>

          <Link
            href="/blog"
            className="block hover:text-purple-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="block hover:text-purple-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            About
          </Link>

          <Link
            href="/contact"
            className="block hover:text-purple-500"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Contact
          </Link>

        </div>
      )}

    </header>
  );
}