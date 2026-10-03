"use client";

import { useCallback, useEffect, useState } from "react";
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

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold">
      <span className="mb-1.5 block text-muted">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-[0.95rem] outline-none focus:border-ink";

export default function Dashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<"news" | "timelines">("news");
  const [updates, setUpdates] = useState<UpdateEntry[] | null>(null);
  const [updatesSha, setUpdatesSha] = useState("");
  const [timelines, setTimelines] = useState<TimelineDay[] | null>(null);
  const [timelinesSha, setTimelinesSha] = useState("");
  const [loadError, setLoadError] = useState("");
  const [notice, setNotice] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  // editing state
  const [newsDraft, setNewsDraft] = useState<UpdateEntry | null>(null);
  const [newsEditIndex, setNewsEditIndex] = useState<number | null>(null); // null = new
  const [timelineDraft, setTimelineDraft] = useState<TimelineDay | null>(null);
  const [timelineEditIndex, setTimelineEditIndex] = useState<number | null>(null);

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
  }, [load ]);

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
            text: "The content changed since you loaded it (someone else saved). Your edit was NOT saved — the latest version is now loaded. Please redo your change.",
          });
        } else {
          setNotice({ kind: "err", text: json.error || "Save failed." });
        }
        return false;
      }
      await load();
      setNotice({
        kind: "ok",
        text: "Saved — the site is redeploying and will be live in about 2 minutes.",
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

  // ---------- news actions ----------
  function saveNewsDraft() {
    if (!newsDraft || !updates) return;
    const d = { ...newsDraft, slug: newsDraft.slug || slugify(newsDraft.title) };
    if (!d.title.trim() || !d.summary.trim() || !d.sourceUrl.trim() || d.tags.length === 0) {
      setNotice({ kind: "err", text: "Title, summary, source URL and at least one tag are required." });
      return;
    }
    const next = [...updates];
    if (newsEditIndex === null) next.unshift(d); // newest first
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
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    const next = updates.filter((_, i) => i !== index);
    saveFile("updates", next, updatesSha, `Admin: delete news "${item.slug}"`);
  }

  // ---------- timeline actions ----------
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
    if (!window.confirm(`Delete the timeline for ${day.date}?`)) return;
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

  return (
    <main id="main">
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="kicker">museaicodes</p>
            <h1 className="font-display mt-2 text-[2rem] font-extrabold tracking-tight">
              Content admin
            </h1>
          </div>
          <button
            onClick={logout}
            className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink"
          >
            Sign out
          </button>
        </div>

        {notice && (
          <div
            role="status"
            className={`mt-6 rounded-[16px] border px-5 py-4 text-sm font-semibold ${
              notice.kind === "ok"
                ? "border-moss bg-moss text-moss-ink"
                : "border-accent bg-accent-ink text-accent"
            }`}
          >
            {notice.text}
          </div>
        )}

        {loadError ? (
          <p className="mt-10 text-accent font-semibold">{loadError}</p>
        ) : loading ? (
          <p className="mt-10 text-muted">Loading content…</p>
        ) : (
          <>
            <div className="mt-8 flex gap-2" role="tablist" aria-label="Content type">
              {(["news", "timelines"] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => {
                    setTab(t);
                    setNewsDraft(null);
                    setTimelineDraft(null);
                  }}
                  className={`rounded-full border px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors ${
                    tab === t
                      ? "border-ink bg-ink text-bg"
                      : "border-line bg-surface text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {t === "news" ? `News (${updates!.length})` : `Timelines (${timelines!.length})`}
                </button>
              ))}
            </div>

            {tab === "news" && !newsDraft && (
              <NewsList
                items={updates!}
                onAdd={() => {
                  setNewsDraft(emptyNews());
                  setNewsEditIndex(null);
                }}
                onEdit={(i) => {
                  setNewsDraft({ ...updates![i], tags: [...updates![i].tags] });
                  setNewsEditIndex(i);
                }}
                onDelete={deleteNews}
              />
            )}
            {tab === "news" && newsDraft && (
              <NewsForm
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

            {tab === "timelines" && !timelineDraft && (
              <TimelineList
                items={timelines!}
                onAdd={() => {
                  setTimelineDraft(emptyTimeline());
                  setTimelineEditIndex(null);
                }}
                onPrefill={prefillTimelineFromNews}
                onEdit={(i) => {
                  const d = timelines![i];
                  setTimelineDraft({
                    ...d,
                    entries: d.entries.map((e) => ({ ...e })),
                  });
                  setTimelineEditIndex(i);
                }}
                onDelete={deleteTimeline}
              />
            )}
            {tab === "timelines" && timelineDraft && (
              <TimelineForm
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
        )}
      </div>
    </main>
  );
}

/* ---------------- news list + form ---------------- */

function NewsList({
  items,
  onAdd,
  onEdit,
  onDelete,
}: {
  items: UpdateEntry[];
  onAdd: () => void;
  onEdit: (i: number) => void;
  onDelete: (i: number) => void;
}) {
  return (
    <div className="mt-8">
      <button
        onClick={onAdd}
        className="rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-bg"
      >
        + Add news item
      </button>
      <div className="mt-6 divide-y divide-line rounded-[18px] border border-line bg-surface">
        {items.map((u, i) => (
          <div key={u.slug} className="flex flex-wrap items-center gap-3 px-5 py-4">
            <span className="font-mono w-[100px] shrink-0 text-[11px] uppercase tracking-[0.08em] text-faint">
              {u.date}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{u.title}</p>
              <p className="font-mono mt-0.5 text-[11px] text-faint">
                {u.slug} · {u.tags.join(", ")}
              </p>
            </div>
            <button
              onClick={() => onEdit(i)}
              className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold hover:border-ink"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(i)}
              className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-accent hover:border-accent"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsForm({
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
  const set = (k: keyof UpdateEntry, v: string | string[]) =>
    setDraft({ ...draft, [k]: v });
  return (
    <div className="mt-8 rounded-[22px] border border-line bg-surface p-6 md:p-8">
      <h2 className="font-display text-[1.4rem] font-extrabold tracking-tight">
        {isNew ? "New news item" : "Edit news item"}
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label="Title">
          <input
            className={inputCls}
            value={draft.title}
            onChange={(e) => {
              const title = e.target.value;
              setDraft({
                ...draft,
                title,
                slug: isNew || !draft.slug ? slugify(title) : draft.slug,
              });
            }}
          />
        </Field>
        <Field label="Slug (URL id)">
          <input
            className={inputCls + " font-mono"}
            value={draft.slug}
            onChange={(e) => set("slug", slugify(e.target.value))}
          />
        </Field>
        <Field label="Date">
          <input
            type="date"
            className={inputCls}
            value={draft.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </Field>
        <Field label="Source name">
          <input
            className={inputCls}
            value={draft.sourceName}
            onChange={(e) => set("sourceName", e.target.value)}
          />
        </Field>
        <div className="md:col-span-2">
          <Field label="Summary (2–4 lines, stick to what the source reports)">
            <textarea
              className={inputCls + " min-h-[110px]"}
              value={draft.summary}
              onChange={(e) => set("summary", e.target.value)}
            />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="Source URL">
            <input
              className={inputCls + " font-mono text-[0.85rem]"}
              value={draft.sourceUrl}
              onChange={(e) => set("sourceUrl", e.target.value)}
              placeholder="https://…"
            />
          </Field>
        </div>
        <div className="md:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-muted">Tags</span>
          <div className="flex flex-wrap gap-2">
            {TAG_OPTIONS.map((t) => {
              const on = draft.tags.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() =>
                    set(
                      "tags",
                      on ? draft.tags.filter((x) => x !== t) : [...draft.tags, t]
                    )
                  }
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] ${
                    on ? "border-ink bg-ink text-bg" : "border-line text-muted hover:border-ink"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        <button
          onClick={onSave}
          disabled={saving}
          className="rounded-full bg-ink px-8 py-3 text-sm font-bold uppercase tracking-[0.08em] text-bg disabled:opacity-40"
        >
          {saving ? "Saving…" : "Save & publish"}
        </button>
        <button
          onClick={onCancel}
          className="rounded-full border border-line px-8 py-3 text-sm font-semibold hover:border-ink"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ---------------- timeline list + form ---------------- */

function TimelineList({
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
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onAdd}
          className="rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-bg"
        >
          + New timeline
        </button>
        <button
          onClick={onPrefill}
          className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold hover:border-ink"
        >
          Prefill from today's news
        </button>
      </div>
      <div className="mt-6 divide-y divide-line rounded-[18px] border border-line bg-surface">
        {items.map((d, i) => (
          <div key={d.date} className="flex flex-wrap items-center gap-3 px-5 py-4">
            <span className="font-mono w-[100px] shrink-0 text-[11px] uppercase tracking-[0.08em] text-faint">
              {d.date}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{d.title}</p>
              <p className="font-mono mt-0.5 text-[11px] text-faint">
                {d.entries.length} {d.entries.length === 1 ? "entry" : "entries"}
              </p>
            </div>
            <button
              onClick={() => onEdit(i)}
              className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold hover:border-ink"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(i)}
              className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-accent hover:border-accent"
            >
              Delete
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="px-5 py-8 text-center text-muted">No timelines yet.</p>
        )}
      </div>
    </div>
  );
}

function TimelineForm({
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
    const entries = draft.entries.map((e, j) => (j === i ? { ...e, ...patch } : e));
    setDraft({ ...draft, entries });
  };
  const moveEntry = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= draft.entries.length) return;
    const entries = [...draft.entries];
    [entries[i], entries[j]] = [entries[j], entries[i]];
    setDraft({ ...draft, entries });
  };

  return (
    <div className="mt-8 rounded-[22px] border border-line bg-surface p-6 md:p-8">
      <h2 className="font-display text-[1.4rem] font-extrabold tracking-tight">
        {isNew ? "New timeline" : `Edit timeline — ${draft.date}`}
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field label="Date">
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
          <Field label="Deck (one-line summary of the day)">
            <input
              className={inputCls}
              value={draft.deck}
              onChange={(e) => setDraft({ ...draft, deck: e.target.value })}
            />
          </Field>
        </div>
      </div>

      <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.08em] text-muted">
        Entries (in chronological order)
      </h3>
      <div className="mt-4 space-y-5">
        {draft.entries.map((e, i) => (
          <div key={i} className="rounded-[16px] border border-line bg-bg p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                Entry {i + 1}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => moveEntry(i, -1)}
                  disabled={i === 0}
                  className="rounded-full border border-line px-3 py-1 text-xs font-bold disabled:opacity-30"
                  aria-label="Move entry up"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveEntry(i, 1)}
                  disabled={i === draft.entries.length - 1}
                  className="rounded-full border border-line px-3 py-1 text-xs font-bold disabled:opacity-30"
                  aria-label="Move entry down"
                >
                  ↓
                </button>
                <button
                  onClick={() =>
                    setDraft({ ...draft, entries: draft.entries.filter((_, j) => j !== i) })
                  }
                  className="rounded-full border border-line px-3 py-1 text-xs font-bold text-accent"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Time label (e.g. Morning, 14:30 IST)">
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
                    className={inputCls + " min-h-[90px]"}
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
                />
              </Field>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setDraft({ ...draft, entries: [...draft.entries, emptyTimelineEntry()] })}
        className="mt-4 rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:border-ink"
      >
        + Add entry
      </button>

      <div className="mt-8 flex gap-3">
        <button
          onClick={onSave}
          disabled={saving}
          className="rounded-full bg-ink px-8 py-3 text-sm font-bold uppercase tracking-[0.08em] text-bg disabled:opacity-40"
        >
          {saving ? "Saving…" : "Save & publish"}
        </button>
        <button
          onClick={onCancel}
          className="rounded-full border border-line px-8 py-3 text-sm font-semibold hover:border-ink"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
