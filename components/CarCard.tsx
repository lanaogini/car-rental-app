import Link from "next/link";
import Image from "next/image";

type CarCardProps = {
  id: number;
  name: string;
  price: number;
  location: string;
  image: string;
};

export default function CarCard({ id, name, price, location, image }: CarCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden w-full hover:shadow-lg transition">

      {/* IMAGE */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* INFO */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">📍 {location}</p>
        <p className="text-xl font-bold text-gray-900 mb-4">
          {price}€
          <span className="text-sm font-normal text-gray-400">/day</span>
        </p>

        <Link
          href={`/cars/${id}`}
          className="block text-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition text-sm font-medium"
        >
          View details
        </Link>
      </div>

    </div>
  );
}
