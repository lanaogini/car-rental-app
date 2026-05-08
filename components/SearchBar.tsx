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
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <input
        placeholder="City (Berlin...)"
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        style={{ padding: 8 }}
      />

      <input
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
        style={{ padding: 8 }}
      />
    </div>
  );
}
