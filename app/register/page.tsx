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
    <div>
      <h1>Register</h1>

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

      <button onClick={handleRegister}>
        Create account
      </button>
    </div>
  );
}