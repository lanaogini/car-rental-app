"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Car Rental" className="h-8 w-auto" />
          <span className="text-lg font-bold">Car Rental</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-gray-300 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/cars" className="hover:text-white transition">Cars</Link>
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/login" className="hover:text-white transition">Login</Link>
          <Link href="/register" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </Link>
        </nav>

        {/* BURGER BUTTON - mobile only */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-gray-300 text-sm">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Home</Link>
          <Link href="/cars" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Cars</Link>
          <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Dashboard</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white transition">About</Link>
          <Link href="/login" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Login</Link>
          <Link href="/register" onClick={() => setMenuOpen(false)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}