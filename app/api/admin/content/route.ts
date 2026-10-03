import { NextResponse } from "next/server";
import { adminConfigured, isAdminRequest } from "@/lib/admin-auth";
import {
  readRemoteFile,
  writeRemoteFile,
  type ContentFile,
} from "@/lib/admin-github";

function isContentFile(v: unknown): v is ContentFile {
  return v === "updates" || v === "timelines";
}

async function guard() {
  if (!adminConfigured())
    return NextResponse.json(
      { error: "Admin is not configured on this deployment." },
      { status: 503 }
    );
  if (!(await isAdminRequest()))
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  return null;
}

export async function GET(req: Request) {
  const denied = await guard();
  if (denied) return denied;
  const file = new URL(req.url).searchParams.get("file");
  if (!isContentFile(file))
    return NextResponse.json({ error: "Unknown file." }, { status: 400 });
  try {
    const { sha, data } = await readRemoteFile(file);
    return NextResponse.json({ sha, data });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Read failed." },
      { status: 502 }
    );
  }
}

export async function PUT(req: Request) {
  const denied = await guard();
  if (denied) return denied;
  let body: { file?: unknown; sha?: unknown; data?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  if (
    !isContentFile(body.file) ||
    typeof body.sha !== "string" ||
    typeof body.message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const result = await writeRemoteFile(
    body.file,
    body.data,
    body.sha,
    body.message.slice(0, 200)
  );
  if (!result.ok) {
    const status = result.reason === "conflict" ? 409 : 502;
    const error =
      result.reason === "conflict"
        ? "The content changed since you loaded it. Reload and try again."
        : result.reason;
    return NextResponse.json({ error }, { status });
  }
  return NextResponse.json({ ok: true });
}
