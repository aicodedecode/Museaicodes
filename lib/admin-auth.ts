import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "muse_admin";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

/** True when all admin env vars are present. */
export function adminConfigured(): boolean {
  return Boolean(
    process.env.ADMIN_PASSWORD &&
      process.env.ADMIN_SESSION_SECRET &&
      process.env.ADMIN_GITHUB_TOKEN
  );
}

function getSecret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET is not set");
  return s;
}

export function verifyPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !password) return false;
  const a = Buffer.from(password, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export async function createSessionCookie(): Promise<string> {
  const payload = Buffer.from(
    JSON.stringify({ exp: Date.now() + SESSION_TTL_MS })
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export async function isAdminRequest(): Promise<boolean> {
  try {
    const jar = await cookies();
    const raw = jar.get(COOKIE_NAME)?.value;
    if (!raw) return false;
    const [payload, sig] = raw.split(".");
    if (!payload || !sig) return false;
    const expected = sign(payload);
    const a = Buffer.from(sig, "utf8");
    const b = Buffer.from(expected, "utf8");
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
    const { exp } = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );
    return typeof exp === "number" && exp > Date.now();
  } catch {
    return false;
  }
}

export function sessionCookieHeader(value: string): string {
  return `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=${
    SESSION_TTL_MS / 1000
  }`;
}

export function clearSessionCookieHeader(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=0`;
}

// --- login rate limiting (best-effort, per serverless instance) ---
const attempts = new Map<string, { count: number; resetAt: number }>();

export function loginAllowed(ip: string): boolean {
  const now = Date.now();
  const rec = attempts.get(ip);
  if (!rec || rec.resetAt < now) {
    attempts.set(ip, { count: 0, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  return rec.count < 10;
}

export function recordFailedLogin(ip: string): void {
  const rec = attempts.get(ip);
  if (rec) rec.count += 1;
  else attempts.set(ip, { count: 1, resetAt: Date.now() + 10 * 60 * 1000 });
}

export function recordSuccessfulLogin(ip: string): void {
  attempts.delete(ip);
}
