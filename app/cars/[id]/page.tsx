
import { cars } from "@/lib/cars";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <h1>Car Details</h1>

      <p>Car ID: {car.id}</p>

      <h2>{car.name}</h2>

      <p>Location: {car.location}</p>

      <p>Price: {car.price}€/day</p>

      <button
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Book now
      </button>
    </div>
  );
}