"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your panel</p>
    </div>
  );
}