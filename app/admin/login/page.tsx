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
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 text-ink antialiased">
      <div className="w-full max-w-[380px]">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-mono text-sm font-bold text-bg">
            m
          </span>
          <div className="leading-tight">
            <p className="text-[15px] font-bold tracking-tight">museaicodes</p>
            <p className="text-xs text-faint">Content admin</p>
          </div>
        </div>
        <form
          onSubmit={submit}
          className="rounded-xl border border-line bg-surface p-7"
        >
          <h1 className="text-lg font-bold tracking-tight">Sign in</h1>
          <p className="mt-1 text-sm text-muted">
            Enter your admin password to manage news and timelines.
          </p>
          <label className="mt-5 block text-[13px] font-semibold">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="mt-1.5 w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors placeholder:text-faint hover:border-muted focus:border-ink focus-visible:ring-2 focus-visible:ring-accent/50"
            />
          </label>
          {error && (
            <p role="alert" className="mt-3 text-sm font-medium text-accent">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={busy || !password}
            className="mt-5 w-full rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <p className="mt-5 text-center text-xs text-faint">
          Protected area. Unauthorized access attempts are rate-limited.
        </p>
      </div>
    </div>
  );
}
