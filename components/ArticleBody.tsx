import { Fragment, type ReactNode } from "react";
import type { Guide } from "@/lib/guides";
import CompareTable from "./CompareTable";
import Reveal from "./Reveal";

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
      {/* Each block gets its own Reveal: a single Reveal around the whole
          article never triggers its IntersectionObserver on small viewports,
          because 14% of a multi-thousand-px element exceeds the viewport. */}
      <Reveal>
        <div className="not-prose my-8 rounded-2xl border border-line bg-raised p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            Short answer
          </p>
          <p className="mt-2 text-[1.05rem] leading-relaxed text-ink">
            {renderInline(guide.shortAnswer)}
          </p>
        </div>
      </Reveal>

      <Reveal delay={40}>
        <figure className="figure-drift not-prose my-8 overflow-hidden rounded-2xl border border-line">
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
      </Reveal>

      {guide.sections.map((section, si) => (
        <Reveal key={section.heading} delay={Math.min(si, 3) * 40}>
          <section aria-label={section.heading}>
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
        </Reveal>
      ))}

      {guide.table && (
        <Reveal>
          <section aria-label="Comparison table" className="mt-10">
            <CompareTable table={guide.table} />
          </section>
        </Reveal>
      )}
    </div>
  );
}
