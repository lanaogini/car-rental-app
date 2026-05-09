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
  }, [router]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      {/* TEXT */}
      <p className="text-gray-400 mb-8">
        Welcome to your panel
      </p>

      {/* CARD */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">
          Your account
        </h2>

        <p className="text-gray-400">
          Here you will manage your bookings and profile.
        </p>
      </div>

    </div>
  );
}