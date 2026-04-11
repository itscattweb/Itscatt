"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #3b82f6, #0ea5e9)" }}
            />
            <span
              className="text-[11px] font-medium uppercase tracking-[0.2em]"
              style={{
                backgroundImage: "linear-gradient(90deg, #1d4ed8, #0284c7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Admin Access
            </span>
          </div>
          <h1
            className="text-3xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              backgroundImage: "linear-gradient(160deg, #1e3a5f 0%, #1d4ed8 50%, #0ea5e9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-400">Sign in to manage Nashaath</p>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-blue-100 bg-blue-50/40 p-6 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-300 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-300 transition-colors"
          />

          {error && (
            <p className="text-xs text-red-500 text-center">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="mt-1 rounded-full py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:opacity-90 disabled:opacity-50"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #0284c7)" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>

      </div>
    </div>
  );
}