import { users } from "./users";

export function register(email: string, password: string) {
  const exists = users.some((u) => u.email === email);

  if (exists) {
    throw new Error("User already exists");
  }

  const newUser = {
    id: Date.now(),
    email,
    password,
  };

  users.push(newUser);

  return newUser;
}

export function login(email: string, password: string) {
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return user;
}