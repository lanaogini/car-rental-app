"use client";

import { useState } from "react";
import { register } from "@/lib/authService";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    try {
      register(email, password);
      router.push("/login");
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-900 rounded-xl text-white">

      <h1 className="text-3xl font-bold mb-6">
        Register
      </h1>

      <div className="flex flex-col gap-4">

        <input
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-blue-500 hover:bg-blue-600 transition py-3 rounded font-semibold"
        >
          Create account
        </button>

      </div>
    </div>
  );
}