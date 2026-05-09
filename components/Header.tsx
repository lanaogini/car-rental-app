"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800">
      
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="text-xl font-bold">
          Car Rental
        </div>

        {/* RIGHT - LINKS */}
        <nav className="flex items-center gap-6 text-gray-300 text-sm">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/cars" className="hover:text-white transition">
            Cars
          </Link>

          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>

          <Link href="/login" className="hover:text-white transition">
            Login
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </Link>

        </nav>

      </div>

    </header>
  );
}
