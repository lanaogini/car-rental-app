import Link from "next/link";

type CarCardProps = {
  id: number;
  name: string;
  price: number;
  location: string;
};

export default function CarCard({
  id,
  name,
  price,
  location,
}: CarCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        width: "250px",
      }}
    >
      <div
        style={{
          height: "140px",
          background: "#eee",
          borderRadius: "10px",
          marginBottom: "12px",
        }}
      />

      <h3>{name}</h3>

      <p>{location}</p>

      <p>
        <strong>{price}€/day</strong>
      </p>

      <Link href={`/cars/${id}`}>
        <button
          style={{
            padding: "8px 16px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View
        </button>
      </Link>
    </div>
  );
}