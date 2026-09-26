import Link from "next/link";
import { GUIDES, guideUrl, type Guide } from "@/lib/guides";

/** One guide card — shared by the homepage featured section and /guides. */
export default function GuideCard({ guide }: { guide: Guide }) {
  const num = String(GUIDES.indexOf(guide) + 1).padStart(2, "0");
  return (
    <Link
      href={guideUrl(guide.slug)}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
        {num} · {guide.category}
      </span>
      <span className="mt-4 font-display text-[1.45rem] font-semibold leading-snug tracking-tight group-hover:text-accent">
        {guide.title}
      </span>
      <span className="mt-2 text-[0.95rem] text-muted">{guide.deck}</span>
      <span className="mt-auto pt-5 text-sm font-bold text-ink">
        Read guide{" "}
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}
