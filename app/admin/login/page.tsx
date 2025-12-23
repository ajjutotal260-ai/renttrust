"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_PASSWORD } from "../../config/admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-sm w-full border rounded-2xl p-8">

        <h1 className="text-2xl font-semibold mb-2">
          Admin login
        </h1>

        <p className="text-sm text-textSecondary mb-6">
          Enter admin password to continue
        </p>

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-3"
        />

        {error && (
          <p className="text-sm text-red-600 mb-3">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90"
        >
          Login
        </button>

      </div>
    </div>
  );
}
