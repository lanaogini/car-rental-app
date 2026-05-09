"use client";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[50vh] flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-6 pr-6 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find The Perfect Car For Your Journey
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed">
            Rent luxury and affordable cars with ease. Fast booking, premium
            support, and the best prices.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-8 pt-6">
            <button
              className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold"
              onClick={() => (window.location.href = "/cars")}
            >
              Browse Cars
            </button>

            <button
              className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-xl font-semibold"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
