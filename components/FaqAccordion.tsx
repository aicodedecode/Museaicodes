"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";

/** Accessible accordion: button + aria-expanded + aria-controls, one open at a time. */
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="ml-auto max-w-[850px]">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={i} className="border-t border-line last:border-b">
            <h3 className="m-0">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 py-5 text-left text-[1.1rem] font-bold"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-2xl font-normal text-accent transition-transform duration-200 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              hidden={!open}
              className="max-w-[720px] pb-6 pr-10 text-muted"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
