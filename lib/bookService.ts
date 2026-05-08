import { bookings } from "./bookings";

export function createBooking(carId: number) {
  const newBooking = {
    id: Date.now(),
    carId,
    date: new Date().toISOString(),
  };

  bookings.push(newBooking);

  return newBooking;
}
