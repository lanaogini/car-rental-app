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
      console.log("LOGIN CLICKED", email, password);

      const user = login(email, password);

      console.log("USER:", user);

      localStorage.setItem("user", JSON.stringify(user));

      router.push("/dashboard");
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}