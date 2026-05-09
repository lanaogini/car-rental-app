export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="space-y-6 pr-6">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find The Perfect Car For Your Journey
          </h1>

          <p className="text-gray-400 text-lg">
            Rent luxury and affordable cars with ease. Fast booking, premium support, and the best prices.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-8 pt-6">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold">
              Browse Cars
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-xl font-semibold">
              Learn More
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
            alt="Car"
            className="relative rounded-3xl shadow-2xl w-full max-w-md"
          />

        </div>

      </div>
    </section>
  );
}