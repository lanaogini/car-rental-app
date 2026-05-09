import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function CarsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-white">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-3">
        Cars
      </h1>

      <p className="text-gray-400 mb-10">
        {cars.length} available cars
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            price={car.price}
            location={car.location}
            image={car.image}
          />
        ))}
      </div>

    </div>
  );
}