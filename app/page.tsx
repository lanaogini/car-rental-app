"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";
import Hero from "@/components/Hero";

export default function HomePage() {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchLocation =
      location === "" ||
      car.location.toLowerCase().includes(location.toLowerCase());

    const matchPrice = maxPrice === "" || car.price <= Number(maxPrice);

    return matchLocation && matchPrice;
  });

  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* SEARCH */}
        <div className="mb-10">
          <SearchBar
            location={location}
            maxPrice={maxPrice}
            onLocationChange={setLocation}
            onMaxPriceChange={setMaxPrice}
          />
        </div>

        {/* LIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              name={car.name}
              price={car.price}
              location={car.location}
            />
          ))}
        </div>

      </div>
    </>
  );
}