import { bookings } from "./bookings";

export function createBooking(carId: number, userId: number) {
  const alreadyBooked = bookings.some((b) => b.carId === carId);

  if (alreadyBooked) {
    throw new Error("Car already booked");
  }

  const newBooking = {
    id: Date.now(),
    carId,
    userId,
    date: new Date().toISOString(),
  };

  bookings.push(newBooking);

  return newBooking;
}
