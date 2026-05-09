"use client";

import { useState } from "react";
import { login } from "@/lib/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    try {
      const user = login(email, password);

      localStorage.setItem("user", JSON.stringify(user));

      router.push("/dashboard");
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-900 rounded-xl text-white">

      <h1 className="text-3xl font-bold mb-6">
        Login
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
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 transition py-3 rounded font-semibold"
        >
          Login
        </button>

      </div>
    </div>
  );
}