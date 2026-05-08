export type Car = {
  id: number;
  name: string;
  price: number;
  location: string;
};

export const cars: Car[] = [
  {
    id: 1,
    name: "BMW X5",
    price: 80,
    location: "Berlin",
  },
  {
    id: 2,
    name: "Audi A4",
    price: 65,
    location: "Hamburg",
  },
  {
    id: 3,
    name: "Tesla Model 3",
    price: 120,
    location: "Munich",
  },
];