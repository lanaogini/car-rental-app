import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Car Rental" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Rent luxury and affordable cars with ease. Fast booking, premium support, and the best prices.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white transition text-sm">Home</Link>
              <Link href="/cars" className="text-gray-400 hover:text-white transition text-sm">Cars</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition text-sm">About</Link>
              <Link href="/dashboard" className="text-gray-400 hover:text-white transition text-sm">Dashboard</Link>
            </div>
          </div>

          {/* CONTACTS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <p>📧 info@carrental.com</p>
              <p>📞 +49 123 456 789</p>
              <p>📍 Berlin, Germany</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Car Rental. All rights reserved.
        </div>

      </div>
    </footer>
  );
}