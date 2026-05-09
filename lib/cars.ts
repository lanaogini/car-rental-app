export type Car = {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
};

export const cars: Car[] = [
  {
    id: 1,
    name: "BMW X5",
    price: 80,
    location: "Berlin",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
  },
  {
    id: 2,
    name: "Audi A4",
    price: 65,
    location: "Hamburg",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
  },
  {
    id: 3,
    name: "Tesla Model 3",
    price: 120,
    location: "Munich",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    price: 95,
    location: "Frankfurt",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
  },
  {
    id: 5,
    name: "Volkswagen Golf",
    price: 45,
    location: "Cologne",
    image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&q=80",
  },
  {
    id: 6,
    name: "Porsche 911",
    price: 250,
    location: "Stuttgart",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    id: 7,
    name: "Ford Mustang",
    price: 110,
    location: "Berlin",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=600&q=80",
  },
  {
    id: 8,
    name: "Range Rover Sport",
    price: 180,
    location: "Munich",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80",
  },
  {
    id: 9,
    name: "Toyota Camry",
    price: 55,
    location: "Hamburg",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
  },
];