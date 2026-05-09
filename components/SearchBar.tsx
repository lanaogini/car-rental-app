type Props = {
  location: string;
  maxPrice: string;
  onLocationChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
};

export default function SearchBar({
  location,
  maxPrice,
  onLocationChange,
  onMaxPriceChange,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-gray-900 border border-gray-800 p-4 rounded-xl">

      {/* LOCATION */}
      <input
        placeholder="City (Berlin...)"
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
      />

      {/* PRICE */}
      <input
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
        className="w-full md:w-40 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
      />

      {/* BUTTON (optional UX upgrade) */}
      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg font-medium">
        Search
      </button>

    </div>
  );
}