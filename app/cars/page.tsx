export default function CarsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-3">
        Cars
      </h1>

      <p className="text-gray-400 mb-10">
        All available cars
      </p>

      {/* GRID PLACEHOLDER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* MOCK CARD */}
        <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">BMW M3</h2>
          <p className="text-gray-400 mb-4">Berlin</p>
          <p className="font-bold mb-4">120€/day</p>

          <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
            View details
          </button>
        </div>

      </div>
    </div>
  );
}