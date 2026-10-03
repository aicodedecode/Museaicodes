import { NextResponse } from "next/server";
import {
  adminConfigured,
  verifyPassword,
  createSessionCookie,
  sessionCookieHeader,
  loginAllowed,
  recordFailedLogin,
  recordSuccessfulLogin,
} from "@/lib/admin-auth";

export async function POST(req: Request) {
  if (!adminConfigured()) {
    return NextResponse.json(
      { error: "Admin is not configured on this deployment." },
      { status: 503 }
    );
  }
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!loginAllowed(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in a few minutes." },
      { status: 429 }
    );
  }
  let password = "";
  try {
    password = ((await req.json()) as { password?: string }).password || "";
  } catch {
    /* ignore */
  }
  if (!verifyPassword(password)) {
    recordFailedLogin(ip);
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }
  recordSuccessfulLogin(ip);
  const res = NextResponse.json({ ok: true });
  res.headers.set("Set-Cookie", sessionCookieHeader(await createSessionCookie()));
  return res;
}
