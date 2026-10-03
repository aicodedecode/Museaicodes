import { UPDATE_TAGS, type UpdateEntry, type UpdateTag } from "./updates";
import type { TimelineDay } from "./timelines";

const OWNER = process.env.ADMIN_GITHUB_OWNER || "aicodedecode";
const REPO = process.env.ADMIN_GITHUB_REPO || "Museaicodes";
const BRANCH = "main";

export type ContentFile = "updates" | "timelines";

export const CONTENT_PATHS: Record<ContentFile, string> = {
  updates: "content/updates.json",
  timelines: "content/timelines.json",
};

function headers(): Record<string, string> {
  const token = process.env.ADMIN_GITHUB_TOKEN;
  if (!token) throw new Error("ADMIN_GITHUB_TOKEN is not set");
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function api(path: string): string {
  return `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;
}

export interface RemoteFile {
  sha: string;
  data: unknown;
}

/** Fetch the current file from GitHub (source of truth for the admin). */
export async function readRemoteFile(file: ContentFile): Promise<RemoteFile> {
  const res = await fetch(api(CONTENT_PATHS[file]), { headers: headers() });
  if (!res.ok) throw new Error(`GitHub read failed: ${res.status}`);
  const json = await res.json();
  if (json.type !== "file" || typeof json.content !== "string") {
    throw new Error("Unexpected GitHub response shape");
  }
  const text = Buffer.from(json.content, "base64").toString("utf8");
  return { sha: json.sha as string, data: JSON.parse(text) };
}

const UPDATE_TAG_SET = new Set<string>(UPDATE_TAGS.filter((t) => t !== "All"));

function isValidUpdate(e: unknown): e is UpdateEntry {
  if (typeof e !== "object" || e === null) return false;
  const o = e as Record<string, unknown>;
  return (
    typeof o.slug === "string" &&
    o.slug.length > 0 &&
    typeof o.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(o.date) &&
    typeof o.title === "string" &&
    o.title.length > 0 &&
    typeof o.summary === "string" &&
    typeof o.sourceName === "string" &&
    typeof o.sourceUrl === "string" &&
    /^https?:\/\//.test(o.sourceUrl) &&
    Array.isArray(o.tags) &&
    o.tags.length > 0 &&
    o.tags.every((t) => UPDATE_TAG_SET.has(t as string))
  );
}

function isValidTimeline(d: unknown): d is TimelineDay {
  if (typeof d !== "object" || d === null) return false;
  const o = d as Record<string, unknown>;
  return (
    typeof o.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(o.date) &&
    typeof o.title === "string" &&
    typeof o.deck === "string" &&
    Array.isArray(o.entries) &&
    o.entries.every((en) => {
      const x = en as Record<string, unknown>;
      return (
        typeof x.time === "string" &&
        typeof x.headline === "string" &&
        x.headline.length > 0 &&
        typeof x.summary === "string" &&
        typeof x.sourceName === "string" &&
        typeof x.sourceUrl === "string" &&
        UPDATE_TAG_SET.has(x.tag as string)
      );
    })
  );
}

export function validateContent(file: ContentFile, data: unknown): string | null {
  if (!Array.isArray(data)) return "Content must be an array";
  if (data.length > 500) return "Content array too large";
  const valid = file === "updates" ? data.every(isValidUpdate) : data.every(isValidTimeline);
  if (!valid) return "One or more entries failed validation";
  if (file === "updates") {
    const slugs = (data as UpdateEntry[]).map((e) => e.slug);
    if (new Set(slugs).size !== slugs.length) return "Duplicate slugs found";
  } else {
    const dates = (data as TimelineDay[]).map((d) => d.date);
    if (new Set(dates).size !== dates.length) return "Duplicate timeline dates found";
  }
  return null;
}

/**
 * Commit updated JSON to GitHub. Uses optimistic concurrency: fails with
 * "conflict" if the file changed since the admin loaded it.
 */
export async function writeRemoteFile(
  file: ContentFile,
  data: unknown,
  baseSha: string,
  message: string
): Promise<{ ok: true } | { ok: false; reason: "conflict" | string }> {
  const validationError = validateContent(file, data);
  if (validationError) return { ok: false, reason: validationError };

  let current: RemoteFile;
  try {
    current = await readRemoteFile(file);
  } catch (e) {
    return { ok: false, reason: e instanceof Error ? e.message : "read failed" };
  }
  if (current.sha !== baseSha) return { ok: false, reason: "conflict" };

  const content = Buffer.from(JSON.stringify(data, null, 2) + "\n", "utf8").toString("base64");
  const res = await fetch(api(CONTENT_PATHS[file]), {
    method: "PUT",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ message, content, sha: baseSha, branch: BRANCH }),
  });
  if (res.status === 422) return { ok: false, reason: "conflict" };
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { ok: false, reason: `GitHub write failed: ${res.status} ${text.slice(0, 120)}` };
  }
  return { ok: true };
}
