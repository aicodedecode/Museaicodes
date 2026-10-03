"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Login failed.");
        setBusy(false);
        return;
      }
      router.replace("/admin");
    } catch {
      setError("Network error. Try again.");
      setBusy(false);
    }
  }

  return (
    <main id="main">
      <div className="mx-auto flex min-h-[70vh] max-w-shell items-center justify-center px-5">
        <form
          onSubmit={submit}
          className="w-full max-w-[400px] rounded-[22px] border border-line bg-surface p-8"
        >
          <p className="kicker">museaicodes</p>
          <h1 className="font-display mt-3 text-[1.8rem] font-extrabold tracking-tight">
            Admin sign in
          </h1>
          <label className="mt-6 block text-sm font-semibold">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="mt-2 w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-[1rem] outline-none focus:border-ink"
            />
          </label>
          {error && (
            <p role="alert" className="mt-3 text-sm font-semibold text-accent">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={busy || !password}
            className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-bg transition-opacity disabled:opacity-40"
          >
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
