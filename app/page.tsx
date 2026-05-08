"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

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
    <div>
      <h1>Find your perfect car</h1>

      {/* SEARCH BAR */}
      <SearchBar
        location={location}
        maxPrice={maxPrice}
        onLocationChange={setLocation}
        onMaxPriceChange={setMaxPrice}
      />

      {/* LIST */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
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
  );
}
