
import { cars } from "@/lib/cars";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="p-10 text-white">
        Car not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-10 text-white">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Car Details
      </h1>

      {/* INFO */}
      <div className="space-y-3 text-gray-300 mb-8">

        <p>
          <span className="text-white font-semibold">Car ID:</span> {car.id}
        </p>

        <h2 className="text-2xl font-semibold text-white">
          {car.name}
        </h2>

        <p>
          <span className="text-white font-semibold">Location:</span> {car.location}
        </p>

        <p>
          <span className="text-white font-semibold">Price:</span> {car.price}€/day
        </p>

      </div>

      {/* BUTTON */}
      <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold text-white">
        Book now
      </button>

    </div>
  );
}