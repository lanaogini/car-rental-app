import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-10 pb-5 border-b border-gray-200">

      {/* LOGO */}
      <Link
        href="/"
        className="text-2xl font-bold text-black no-underline"
      >
        Car Rental
      </Link>

      {/* LINKS */}
      <div className="flex gap-6 items-center">

        <Link href="/" className="text-gray-700 font-medium hover:text-black transition">
          Home
        </Link>

        <Link href="/cars" className="text-gray-700 font-medium hover:text-black transition">
          Cars
        </Link>

        <Link href="/dashboard" className="text-gray-700 font-medium hover:text-black transition">
          Dashboard
        </Link>

        <Link href="/login" className="text-gray-700 font-medium hover:text-black transition">
          Login
        </Link>

        <Link
          href="/register"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </Link>

      </div>
    </nav>
  );
}