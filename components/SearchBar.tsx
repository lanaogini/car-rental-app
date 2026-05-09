type Props = {
  location: string;
  minPrice: string;
  maxPrice: string;
  onLocationChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
};

export default function SearchBar({
  location,
  minPrice,
  maxPrice,
  onLocationChange,
  onMinPriceChange,
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

      {/* MIN PRICE */}
      <input
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => onMinPriceChange(e.target.value)}
        className="w-full md:w-36 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
      />

      {/* MAX PRICE */}
      <input
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
        className="w-full md:w-36 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition"
      />

      {/* BUTTON */}
      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg font-medium">
        Search
      </button>

    </div>
  );
}