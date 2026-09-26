import { Fragment, type ReactNode } from "react";
import type { Guide } from "@/lib/guides";
import CompareTable from "./CompareTable";

/**
 * Renders the tiny inline-link syntax used in article content:
 * [anchor text](https://url) — no raw HTML in content, external links
 * get rel="noopener noreferrer" and open in a new tab.
 */
function renderInline(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return <Fragment key={i}>{part}</Fragment>;
    const [, label, url] = m;
    const external = /^https?:\/\//.test(url);
    return (
      <a
        key={i}
        href={url}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    );
  });
}

export default function ArticleBody({ guide }: { guide: Guide }) {
  return (
    <div className="prose-muse">
      <div className="not-prose my-8 rounded-2xl border border-line bg-raised p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          Short answer
        </p>
        <p className="mt-2 text-[1.05rem] leading-relaxed text-ink">
          {renderInline(guide.shortAnswer)}
        </p>
      </div>

      <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-line">
        <img
          src={guide.image}
          alt={guide.imageAlt}
          width={1200}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
        <figcaption className="border-t border-line bg-raised px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          Illustration: Muse Hub
        </figcaption>
      </figure>

      {guide.sections.map((section) => (
        <section key={section.heading} aria-label={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p, i) => (
            <p key={i}>{renderInline(p)}</p>
          ))}
          {section.list && (
            section.list.ordered ? (
              <ol>
                {section.list.items.map((item, i) => (
                  <li key={i}>{renderInline(item)}</li>
                ))}
              </ol>
            ) : (
              <ul>
                {section.list.items.map((item, i) => (
                  <li key={i}>{renderInline(item)}</li>
                ))}
              </ul>
            )
          )}
        </section>
      ))}

      {guide.table && (
        <section aria-label="Comparison table" className="mt-10">
          <CompareTable table={guide.table} />
        </section>
      )}
    </div>
  );
}
