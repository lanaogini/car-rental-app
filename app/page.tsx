"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";
import Hero from "@/components/Hero";

export default function HomePage() {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredCars = cars
    .filter((car) => {
      const matchLocation =
        location === "" ||
        car.location.toLowerCase().includes(location.toLowerCase());

      const matchPrice =
        (minPrice === "" || car.price >= Number(minPrice)) &&
        (maxPrice === "" || car.price <= Number(maxPrice));

      return matchLocation && matchPrice;
    })
    .slice(0, 3);

  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <SearchBar
            location={location}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onLocationChange={setLocation}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
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

        <div className="text-center mt-10">
          <a href="/cars"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 transition text-white rounded-xl font-semibold">
            View all cars →
          </a>
        </div>
      </div>
    </>
  );
}
