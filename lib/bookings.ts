export type Booking = {
  id: number;
  carId: number;
  userId: number; // важно добавить связь с пользователем
  date: string;
};

export const bookings: Booking[] = [];