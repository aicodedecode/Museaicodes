"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { UpdateEntry, UpdateTag } from "@/lib/updates";
import type { TimelineDay, TimelineEntry } from "@/lib/timelines";

const TAG_OPTIONS: UpdateTag[] = ["Launch", "Features", "Traction", "Security", "Policy"];

function todayIST(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const emptyNews = (): UpdateEntry => ({
  slug: "",
  date: todayIST(),
  title: "",
  summary: "",
  sourceName: "",
  sourceUrl: "",
  tags: [],
});

const emptyTimelineEntry = (): TimelineEntry => ({
  time: "",
  headline: "",
  summary: "",
  sourceName: "",
  sourceUrl: "",
  tag: "Launch",
});

const emptyTimeline = (): TimelineDay => ({
  date: todayIST(),
  title: `Today in AI — ${todayIST()}`,
  deck: "",
  entries: [emptyTimelineEntry()],
});

/* ---------------- icons (single 1.8px stroke set) ---------------- */

function Icon({ d, className = "h-4 w-4" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  plus: "M12 5v14M5 12h14",
  edit: "M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
  trash: "M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  external: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3",
  up: "m18 15-6-6-6 6",
  down: "m6 9 6 6 6-6",
  x: "M18 6 6 18M6 6l12 12",
  news: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2M18 14h-8M15 18h-5M10 6h8v4h-8V6Z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-14v6l4 2",
  check: "M20 6 9 17l-5-5",
};

/* ---------------- shared control styles ---------------- */

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-1 focus-visible:ring-offset-bg";

const btnPrimary = `inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-40 ${focusRing}`;
const btnSecondary = `inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink disabled:opacity-40 ${focusRing}`;
const btnDangerGhost = `inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-ink disabled:opacity-40 ${focusRing}`;
const btnRow = `inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] font-semibold text-muted transition-colors hover:bg-surface hover:text-ink ${focusRing}`;
const inputCls = `w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-faint transition-colors hover:border-muted focus:border-ink ${focusRing}`;

/* ---------------- small building blocks ---------------- */

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-ink">{label}</span>
      {children}
      {hint && <span className="mt-1.5 block text-xs leading-relaxed text-faint">{hint}</span>}
    </label>
  );
}

function Notice({
  kind,
  text,
  onDismiss,
}: {
  kind: "ok" | "err";
  text: string;
  onDismiss: () => void;
}) {
  return (
    <div
      role="status"
      className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-sm leading-relaxed ${
        kind === "ok"
          ? "border-moss/40 bg-moss/10 text-ink"
          : "border-accent/40 bg-accent-ink text-ink"
      }`}
    >
      <span
        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          kind === "ok" ? "bg-moss text-white" : "bg-accent text-white"
        }`}
      >
        <Icon d={kind === "ok" ? ICONS.check : ICONS.x} className="h-3 w-3" />
      </span>
      <p className="flex-1 font-medium">{text}</p>
      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        className={`rounded-md p-1 text-muted transition-colors hover:text-ink ${focusRing}`}
      >
        <Icon d={ICONS.x} className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function SkeletonRows({ rows = 6 }: { rows?: number }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface" aria-hidden>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 border-b border-line px-5 py-4 last:border-b-0">
          <div className="h-3.5 w-20 animate-pulse rounded bg-line" />
          <div className="h-3.5 flex-1 animate-pulse rounded bg-line" />
          <div className="h-3.5 w-24 animate-pulse rounded bg-line" />
        </div>
      ))}
    </div>
  );
}

function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-line bg-surface px-6 py-14 text-center">
      <p className="text-[15px] font-semibold text-ink">{title}</p>
      <p className="mt-1.5 max-w-[380px] text-sm leading-relaxed text-muted">{body}</p>
      <div className="mt-5">{action}</div>
    </div>
  );
}

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex rounded-md bg-surface px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted ring-1 ring-inset ring-line">
      {tag}
    </span>
  );
}

/* ================= main dashboard ================= */

type Tab = "news" | "timelines";

export default function Dashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("news");
  const [updates, setUpdates] = useState<UpdateEntry[] | null>(null);
  const [updatesSha, setUpdatesSha] = useState("");
  const [timelines, setTimelines] = useState<TimelineDay[] | null>(null);
  const [timelinesSha, setTimelinesSha] = useState("");
  const [loadError, setLoadError] = useState("");
  const [notice, setNotice] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const [newsDraft, setNewsDraft] = useState<UpdateEntry | null>(null);
  const [newsEditIndex, setNewsEditIndex] = useState<number | null>(null);
  const [timelineDraft, setTimelineDraft] = useState<TimelineDay | null>(null);
  const [timelineEditIndex, setTimelineEditIndex] = useState<number | null>(null);

  const editing = newsDraft !== null || timelineDraft !== null;

  const load = useCallback(async () => {
    setLoadError("");
    try {
      const [u, t] = await Promise.all([
        fetch("/api/admin/content?file=updates").then((r) => {
          if (!r.ok) throw new Error("news");
          return r.json();
        }),
        fetch("/api/admin/content?file=timelines").then((r) => {
          if (!r.ok) throw new Error("timelines");
          return r.json();
        }),
      ]);
      setUpdates(u.data);
      setUpdatesSha(u.sha);
      setTimelines(t.data);
      setTimelinesSha(t.sha);
    } catch {
      setLoadError("Couldn't load content from GitHub. Check the connection and try again.");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function saveFile(
    file: "updates" | "timelines",
    data: unknown,
    sha: string,
    message: string
  ): Promise<boolean> {
    setSaving(true);
    setNotice(null);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file, data, sha, message }),
      });
      const json = await res.json();
      if (!res.ok) {
        if (res.status === 409) {
          await load();
          setNotice({
            kind: "err",
            text: "The content changed since you loaded it — someone else saved first. Your edit was not saved; the latest version is now loaded. Please redo your change.",
          });
        } else {
          setNotice({ kind: "err", text: json.error || "Save failed." });
        }
        return false;
      }
      await load();
      setNotice({
        kind: "ok",
        text: "Saved. The site is redeploying and your change will be live in about 2 minutes.",
      });
      return true;
    } catch {
      setNotice({ kind: "err", text: "Network error while saving." });
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  /* ---------- news actions ---------- */
  function saveNewsDraft() {
    if (!newsDraft || !updates) return;
    const d = { ...newsDraft, slug: newsDraft.slug || slugify(newsDraft.title) };
    if (!d.title.trim() || !d.summary.trim() || !d.sourceUrl.trim() || d.tags.length === 0) {
      setNotice({ kind: "err", text: "Title, summary, source URL and at least one tag are required." });
      return;
    }
    if (!/^https?:\/\//.test(d.sourceUrl)) {
      setNotice({ kind: "err", text: "Source URL must start with http:// or https://." });
      return;
    }
    const next = [...updates];
    if (newsEditIndex === null) next.unshift(d);
    else next[newsEditIndex] = d;
    saveFile("updates", next, updatesSha, `Admin: ${newsEditIndex === null ? "add" : "edit"} news "${d.slug}"`).then(
      (ok) => {
        if (ok) {
          setNewsDraft(null);
          setNewsEditIndex(null);
        }
      }
    );
  }

  function deleteNews(index: number) {
    if (!updates) return;
    const item = updates[index];
    if (!window.confirm(`Delete "${item.title}"?\n\nThis publishes immediately.`)) return;
    const next = updates.filter((_, i) => i !== index);
    saveFile("updates", next, updatesSha, `Admin: delete news "${item.slug}"`);
  }

  /* ---------- timeline actions ---------- */
  function saveTimelineDraft() {
    if (!timelineDraft || !timelines) return;
    const d = timelineDraft;
    if (!d.title.trim() || d.entries.length === 0) {
      setNotice({ kind: "err", text: "Title and at least one entry are required." });
      return;
    }
    if (d.entries.some((e) => !e.headline.trim())) {
      setNotice({ kind: "err", text: "Every entry needs a headline." });
      return;
    }
    const next = [...timelines];
    if (timelineEditIndex === null) {
      if (next.some((x) => x.date === d.date)) {
        setNotice({ kind: "err", text: `A timeline for ${d.date} already exists — edit it instead.` });
        return;
      }
      next.unshift(d);
      next.sort((a, b) => (a.date < b.date ? 1 : -1));
    } else {
      next[timelineEditIndex] = d;
    }
    saveFile(
      "timelines",
      next,
      timelinesSha,
      `Admin: ${timelineEditIndex === null ? "add" : "edit"} timeline ${d.date}`
    ).then((ok) => {
      if (ok) {
        setTimelineDraft(null);
        setTimelineEditIndex(null);
      }
    });
  }

  function deleteTimeline(index: number) {
    if (!timelines) return;
    const day = timelines[index];
    if (!window.confirm(`Delete the timeline for ${day.date}?\n\nThis publishes immediately.`)) return;
    const next = timelines.filter((_, i) => i !== index);
    saveFile("timelines", next, timelinesSha, `Admin: delete timeline ${day.date}`);
  }

  function prefillTimelineFromNews() {
    if (!updates) return;
    const today = todayIST();
    const todays = updates.filter((u) => u.date === today);
    if (todays.length === 0) {
      setNotice({ kind: "err", text: `No news items dated ${today} to prefill from.` });
      return;
    }
    setTimelineDraft({
      date: today,
      title: `Today in AI — ${today}`,
      deck: "",
      entries: [...todays].reverse().map((u) => ({
        time: "",
        headline: u.title,
        summary: u.summary,
        sourceName: u.sourceName,
        sourceUrl: u.sourceUrl,
        tag: u.tags[0],
      })),
    });
    setTimelineEditIndex(null);
    setTab("timelines");
  }

  const loading = updates === null || timelines === null;

  const filteredNews = useMemo(() => {
    if (!updates) return [];
    const q = search.trim().toLowerCase();
    if (!q) return updates;
    return updates.filter((u) =>
      [u.title, u.slug, u.sourceName].some((f) => f.toLowerCase().includes(q))
    );
  }, [updates, search]);

  const lastNewsDate = updates && updates.length > 0 ? updates[0].date : "—";

  const pageTitle = editing
    ? newsDraft
      ? newsEditIndex === null
        ? "New news item"
        : "Edit news item"
      : timelineEditIndex === null
        ? "New timeline"
        : `Edit timeline`
    : tab === "news"
      ? "News"
      : "Timelines";

  const navItems: { id: Tab; label: string; icon: string; count: number | null }[] = [
    { id: "news", label: "News", icon: ICONS.news, count: updates?.length ?? null },
    { id: "timelines", label: "Timelines", icon: ICONS.clock, count: timelines?.length ?? null },
  ];

  return (
    <div id="main" className="min-h-screen bg-bg text-ink antialiased">
      <div className="mx-auto max-w-[1200px] px-4 pb-20 md:px-8">
        {/* top bar */}
        <header className="flex items-center justify-between border-b border-line py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-mono text-[13px] font-bold text-bg">
              m
            </span>
            <div className="leading-tight">
              <p className="text-[15px] font-bold tracking-tight">museaicodes</p>
              <p className="text-xs text-faint">Content admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary + " !px-3.5"}
            >
              <Icon d={ICONS.external} className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">View site</span>
            </a>
            <button onClick={logout} className={btnSecondary + " !px-3.5"}>
              <Icon d={ICONS.logout} className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </header>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:gap-8">
          {/* side nav (desktop) */}
          <nav aria-label="Admin sections" className="hidden w-52 shrink-0 md:block">
            <div className="sticky top-6 space-y-1">
              {navItems.map((item) => {
                const active = tab === item.id && !editing;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTab(item.id);
                      setNewsDraft(null);
                      setTimelineDraft(null);
                      setSearch("");
                    }}
                    aria-current={active ? "page" : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors ${focusRing} ${
                      active ? "bg-ink text-bg" : "text-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    <Icon d={item.icon} className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.count !== null && (
                      <span
                        className={`rounded-md px-1.5 py-0.5 font-mono text-[11px] tabular-nums ${
                          active ? "bg-bg/20 text-bg" : "bg-surface text-faint ring-1 ring-inset ring-line"
                        }`}
                      >
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* main column */}
          <main className="min-w-0 flex-1">
            {/* mobile nav */}
            <div className="mb-5 flex gap-2 md:hidden" role="tablist" aria-label="Admin sections">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={tab === item.id && !editing}
                  onClick={() => {
                    setTab(item.id);
                    setNewsDraft(null);
                    setTimelineDraft(null);
                    setSearch("");
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${focusRing} ${
                    tab === item.id && !editing
                      ? "bg-ink text-bg"
                      : "border border-line bg-surface text-muted"
                  }`}
                >
                  <Icon d={item.icon} className="h-4 w-4" />
                  {item.label}
                  {item.count !== null && (
                    <span className="font-mono text-[11px] tabular-nums opacity-70">{item.count}</span>
                  )}
                </button>
              ))}
            </div>

            {notice && (
              <div className="mb-5">
                <Notice kind={notice.kind} text={notice.text} onDismiss={() => setNotice(null)} />
              </div>
            )}

            {loadError ? (
              <div className="rounded-xl border border-accent/40 bg-accent-ink px-5 py-8 text-center">
                <p className="font-semibold text-ink">Couldn't load content</p>
                <p className="mt-1.5 text-sm text-muted">{loadError}</p>
                <button onClick={load} className={btnSecondary + " mt-4"}>
                  Try again
                </button>
              </div>
            ) : loading ? (
              <div>
                <div className="mb-5 h-9 w-48 animate-pulse rounded-lg bg-surface" />
                <SkeletonRows />
              </div>
            ) : editing ? (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <h1 className="text-xl font-bold tracking-tight">{pageTitle}</h1>
                  <button
                    onClick={() => {
                      setNewsDraft(null);
                      setTimelineDraft(null);
                    }}
                    className={btnRow}
                  >
                    <Icon d={ICONS.x} className="h-3.5 w-3.5" />
                    Back to list
                  </button>
                </div>
                {newsDraft && (
                  <NewsEditor
                    draft={newsDraft}
                    setDraft={setNewsDraft}
                    isNew={newsEditIndex === null}
                    saving={saving}
                    onSave={saveNewsDraft}
                    onCancel={() => {
                      setNewsDraft(null);
                      setNewsEditIndex(null);
                    }}
                  />
                )}
                {timelineDraft && (
                  <TimelineEditor
                    draft={timelineDraft}
                    setDraft={setTimelineDraft}
                    isNew={timelineEditIndex === null}
                    saving={saving}
                    onSave={saveTimelineDraft}
                    onCancel={() => {
                      setTimelineDraft(null);
                      setTimelineEditIndex(null);
                    }}
                  />
                )}
              </>
            ) : (
              <>
                {/* stats */}
                <dl className="mb-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "News items", value: updates!.length },
                    { label: "Timelines", value: timelines!.length },
                    { label: "Latest news date", value: lastNewsDate, mono: true },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-line bg-surface px-4 py-3.5">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">
                        {s.label}
                      </dt>
                      <dd
                        className={`mt-1 text-xl font-bold tabular-nums tracking-tight ${
                          "mono" in s ? "font-mono text-[15px]" : ""
                        }`}
                      >
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {tab === "news" && (
                  <NewsTable
                    items={filteredNews}
                    total={updates!.length}
                    search={search}
                    setSearch={setSearch}
                    onAdd={() => {
                      setNewsDraft(emptyNews());
                      setNewsEditIndex(null);
                    }}
                    onEdit={(i) => {
                      const item = filteredNews[i];
                      const realIndex = updates!.findIndex((u) => u.slug === item.slug);
                      setNewsDraft({ ...item, tags: [...item.tags] });
                      setNewsEditIndex(realIndex);
                    }}
                    onDelete={(i) => {
                      const item = filteredNews[i];
                      const realIndex = updates!.findIndex((u) => u.slug === item.slug);
                      deleteNews(realIndex);
                    }}
                  />
                )}
                {tab === "timelines" && (
                  <TimelineTable
                    items={timelines!}
                    onAdd={() => {
                      setTimelineDraft(emptyTimeline());
                      setTimelineEditIndex(null);
                    }}
                    onPrefill={prefillTimelineFromNews}
                    onEdit={(i) => {
                      const d = timelines![i];
                      setTimelineDraft({ ...d, entries: d.entries.map((e) => ({ ...e })) });
                      setTimelineEditIndex(i);
                    }}
                    onDelete={deleteTimeline}
                  />
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

/* ================= news table ================= */

function NewsTable({
  items,
  total,
  search,
  setSearch,
  onAdd,
  onEdit,
  onDelete,
}: {
  items: UpdateEntry[];
  total: number;
  search: string;
  setSearch: (s: string) => void;
  onAdd: () => void;
  onEdit: (i: number) => void;
  onDelete: (i: number) => void;
}) {
  return (
    <section aria-label="News items">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-xl font-bold tracking-tight">News</h1>
        <span className="font-mono text-xs tabular-nums text-faint">
          {items.length} of {total}
        </span>
        <div className="ml-auto flex flex-wrap items-center gap-2.5">
          <div className="relative">
            <Icon
              d={ICONS.search}
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, slug, source…"
              aria-label="Search news items"
              className={inputCls + " w-56 !pl-9 !py-2 text-sm"}
            />
          </div>
          <button onClick={onAdd} className={btnPrimary}>
            <Icon d={ICONS.plus} className="h-4 w-4" />
            Add item
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <EmptyState
          title={search ? "No matches" : "No news items yet"}
          body={
            search
              ? `Nothing matches "${search}". Try a different search.`
              : "Publish your first news item — it appears at the top of the /news feed."
          }
          action={
            !search ? (
              <button onClick={onAdd} className={btnPrimary}>
                <Icon d={ICONS.plus} className="h-4 w-4" />
                Add news item
              </button>
            ) : (
              <button onClick={() => setSearch("")} className={btnSecondary}>
                Clear search
              </button>
            )
          }
        />
      ) : (
        <div className="overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="w-28 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">
                  Date
                </th>
                <th scope="col" className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">
                  Title
                </th>
                <th scope="col" className="hidden w-40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-faint lg:table-cell">
                  Source
                </th>
                <th scope="col" className="w-36 px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {items.map((u, i) => (
                <tr key={u.slug} className="transition-colors hover:bg-bg/60">
                  <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs tabular-nums text-muted">
                    {u.date}
                  </td>
                  <td className="px-5 py-3.5">
                    <p className="font-semibold leading-snug text-ink">{u.title}</p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[11px] text-faint">{u.slug}</span>
                      {u.tags.map((t) => (
                        <TagPill key={t} tag={t} />
                      ))}
                    </div>
                  </td>
                  <td className="hidden px-5 py-3.5 text-muted lg:table-cell">{u.sourceName}</td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-right">
                    <button onClick={() => onEdit(i)} className={btnRow} aria-label={`Edit ${u.title}`}>
                      <Icon d={ICONS.edit} className="h-3.5 w-3.5" />
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(i)}
                      className={btnRow + " !text-accent hover:!bg-accent-ink"}
                      aria-label={`Delete ${u.title}`}
                    >
                      <Icon d={ICONS.trash} className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-3 text-xs leading-relaxed text-faint">
        Newest first. Saving publishes immediately — the site redeploys in about 2 minutes.
      </p>
    </section>
  );
}

/* ================= timeline table ================= */

function TimelineTable({
  items,
  onAdd,
  onPrefill,
  onEdit,
  onDelete,
}: {
  items: TimelineDay[];
  onAdd: () => void;
  onPrefill: () => void;
  onEdit: (i: number) => void;
  onDelete: (i: number) => void;
}) {
  return (
    <section aria-label="Daily timelines">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-xl font-bold tracking-tight">Timelines</h1>
        <span className="font-mono text-xs tabular-nums text-faint">{items.length} published</span>
        <div className="ml-auto flex flex-wrap gap-2.5">
          <button onClick={onPrefill} className={btnSecondary}>
            Prefill from today's news
          </button>
          <button onClick={onAdd} className={btnPrimary}>
            <Icon d={ICONS.plus} className="h-4 w-4" />
            New timeline
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="No timelines yet"
          body="A timeline strings one day's verified news into chronological order. Prefill one from today's news items, or start blank."
          action={
            <button onClick={onPrefill} className={btnPrimary}>
              Prefill from today's news
            </button>
          }
        />
      ) : (
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <ul className="divide-y divide-line">
            {items.map((d, i) => (
              <li key={d.date} className="flex flex-wrap items-center gap-3 px-5 py-4 transition-colors hover:bg-bg/60">
                <span className="w-28 shrink-0 font-mono text-xs tabular-nums text-muted">{d.date}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{d.title}</p>
                  <p className="mt-0.5 font-mono text-[11px] tabular-nums text-faint">
                    {d.entries.length} {d.entries.length === 1 ? "entry" : "entries"}
                  </p>
                </div>
                <div className="flex shrink-0 items-center">
                  <button onClick={() => onEdit(i)} className={btnRow} aria-label={`Edit timeline ${d.date}`}>
                    <Icon d={ICONS.edit} className="h-3.5 w-3.5" />
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(i)}
                    className={btnRow + " !text-accent hover:!bg-accent-ink"}
                    aria-label={`Delete timeline ${d.date}`}
                  >
                    <Icon d={ICONS.trash} className="h-3.5 w-3.5" />
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

/* ================= news editor ================= */

function NewsEditor({
  draft,
  setDraft,
  isNew,
  saving,
  onSave,
  onCancel,
}: {
  draft: UpdateEntry;
  setDraft: (d: UpdateEntry) => void;
  isNew: boolean;
  saving: boolean;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <Field label="Title" hint="The headline as it appears on the /news feed.">
            <input
              className={inputCls}
              value={draft.title}
              onChange={(e) => {
                const title = e.target.value;
                setDraft({
                  ...draft,
                  title,
                  slug: isNew ? slugify(title) : draft.slug,
                });
              }}
              placeholder="e.g. Apple tightens Mac disk-access rules…"
            />
          </Field>
        </div>
        <Field label="Slug" hint="URL-safe id. Auto-generated from the title for new items.">
          <input
            className={inputCls + " font-mono text-[0.9rem]"}
            value={draft.slug}
            onChange={(e) => setDraft({ ...draft, slug: slugify(e.target.value) })}
          />
        </Field>
        <Field label="News date" hint="The date the story broke, not the date you publish.">
          <input
            type="date"
            className={inputCls}
            value={draft.date}
            onChange={(e) => setDraft({ ...draft, date: e.target.value })}
          />
        </Field>
        <div className="md:col-span-2">
          <Field
            label="Summary"
            hint="2–4 sentences. Stick to what the source reports; label anything unconfirmed."
          >
            <textarea
              className={inputCls + " min-h-[120px] leading-relaxed"}
              value={draft.summary}
              onChange={(e) => setDraft({ ...draft, summary: e.target.value })}
            />
          </Field>
        </div>
        <Field label="Source name" hint="e.g. TechCrunch, Startup Fortune.">
          <input
            className={inputCls}
            value={draft.sourceName}
            onChange={(e) => setDraft({ ...draft, sourceName: e.target.value })}
          />
        </Field>
        <Field label="Source URL" hint="The article you verified the story against.">
          <input
            className={inputCls + " font-mono text-[0.85rem]"}
            value={draft.sourceUrl}
            onChange={(e) => setDraft({ ...draft, sourceUrl: e.target.value })}
            placeholder="https://…"
            inputMode="url"
          />
        </Field>
        <div className="md:col-span-2">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink">Tags</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Tags">
            {TAG_OPTIONS.map((t) => {
              const on = draft.tags.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() =>
                    setDraft({
                      ...draft,
                      tags: on ? draft.tags.filter((x) => x !== t) : [...draft.tags, t],
                    })
                  }
                  aria-pressed={on}
                  className={`rounded-lg border px-3.5 py-2 text-[13px] font-semibold transition-colors ${focusRing} ${
                    on
                      ? "border-ink bg-ink text-bg"
                      : "border-line bg-bg text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
        <button onClick={onSave} disabled={saving} className={btnPrimary}>
          {saving ? "Saving…" : isNew ? "Publish item" : "Save changes"}
        </button>
        <button onClick={onCancel} disabled={saving} className={btnSecondary}>
          Cancel
        </button>
        <p className="ml-auto text-xs text-faint">Saving publishes to the live site.</p>
      </div>
    </div>
  );
}

/* ================= timeline editor ================= */

function TimelineEditor({
  draft,
  setDraft,
  isNew,
  saving,
  onSave,
  onCancel,
}: {
  draft: TimelineDay;
  setDraft: (d: TimelineDay) => void;
  isNew: boolean;
  saving: boolean;
  onSave: () => void;
  onCancel: () => void;
}) {
  const setEntry = (i: number, patch: Partial<TimelineEntry>) => {
    setDraft({ ...draft, entries: draft.entries.map((e, j) => (j === i ? { ...e, ...patch } : e)) });
  };
  const moveEntry = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= draft.entries.length) return;
    const entries = [...draft.entries];
    [entries[i], entries[j]] = [entries[j], entries[i]];
    setDraft({ ...draft, entries });
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Date" hint="One timeline per date.">
          <input
            type="date"
            className={inputCls}
            value={draft.date}
            onChange={(e) => setDraft({ ...draft, date: e.target.value })}
          />
        </Field>
        <Field label="Title">
          <input
            className={inputCls}
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />
        </Field>
        <div className="md:col-span-2">
          <Field label="Deck" hint="One line summarising the day, shown under the title.">
            <input
              className={inputCls}
              value={draft.deck}
              onChange={(e) => setDraft({ ...draft, deck: e.target.value })}
              placeholder="The day's verified tech news, in chronological order."
            />
          </Field>
        </div>
      </div>

      <h2 className="mb-1 mt-8 text-[13px] font-bold uppercase tracking-[0.08em] text-faint">
        Entries · chronological order
      </h2>
      <ol className="divide-y divide-line border-y border-line">
        {draft.entries.map((e, i) => (
          <li key={i} className="py-6 first:pt-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                Entry {i + 1} of {draft.entries.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveEntry(i, -1)}
                  disabled={i === 0}
                  aria-label="Move entry earlier"
                  className={btnRow + " !px-2.5"}
                >
                  <Icon d={ICONS.up} className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => moveEntry(i, 1)}
                  disabled={i === draft.entries.length - 1}
                  aria-label="Move entry later"
                  className={btnRow + " !px-2.5"}
                >
                  <Icon d={ICONS.down} className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() =>
                    setDraft({ ...draft, entries: draft.entries.filter((_, j) => j !== i) })
                  }
                  className={btnDangerGhost}
                >
                  <Icon d={ICONS.trash} className="h-3.5 w-3.5" />
                  Remove
                </button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Time label" hint='e.g. "Morning", "14:30 IST". Never invent precise times.'>
                <input
                  className={inputCls}
                  value={e.time}
                  onChange={(ev) => setEntry(i, { time: ev.target.value })}
                />
              </Field>
              <Field label="Tag">
                <select
                  className={inputCls}
                  value={e.tag}
                  onChange={(ev) => setEntry(i, { tag: ev.target.value as UpdateTag })}
                >
                  {TAG_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="Headline">
                  <input
                    className={inputCls}
                    value={e.headline}
                    onChange={(ev) => setEntry(i, { headline: ev.target.value })}
                  />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Summary">
                  <textarea
                    className={inputCls + " min-h-[96px] leading-relaxed"}
                    value={e.summary}
                    onChange={(ev) => setEntry(i, { summary: ev.target.value })}
                  />
                </Field>
              </div>
              <Field label="Source name">
                <input
                  className={inputCls}
                  value={e.sourceName}
                  onChange={(ev) => setEntry(i, { sourceName: ev.target.value })}
                />
              </Field>
              <Field label="Source URL">
                <input
                  className={inputCls + " font-mono text-[0.85rem]"}
                  value={e.sourceUrl}
                  onChange={(ev) => setEntry(i, { sourceUrl: ev.target.value })}
                  placeholder="https://…"
                  inputMode="url"
                />
              </Field>
            </div>
          </li>
        ))}
      </ol>
      <button
        onClick={() => setDraft({ ...draft, entries: [...draft.entries, emptyTimelineEntry()] })}
        className={btnSecondary + " mt-5"}
      >
        <Icon d={ICONS.plus} className="h-4 w-4" />
        Add entry
      </button>

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
        <button onClick={onSave} disabled={saving} className={btnPrimary}>
          {saving ? "Saving…" : isNew ? "Publish timeline" : "Save changes"}
        </button>
        <button onClick={onCancel} disabled={saving} className={btnSecondary}>
          Cancel
        </button>
        <p className="ml-auto text-xs text-faint">Saving publishes to the live site.</p>
      </div>
    </div>
  );
}
