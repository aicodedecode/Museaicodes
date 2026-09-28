"use client";

import { useState } from "react";
import { useToast } from "@/components/Toast";

/** One copy button; mirrors the clipboard pattern in PromptLibrary. */
export default function CopyPromptButton({ text }: { text: string }) {
  const { notify } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch {
      /* legacy fallback */
    }
    if (!ok) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      document.body.removeChild(ta);
    }
    if (ok) {
      setCopied(true);
      notify("Prompt copied");
      setTimeout(() => setCopied(false), 1400);
    } else {
      notify("Copy failed — select the text manually");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`mt-auto self-start rounded-lg px-3.5 py-2.5 text-sm font-bold transition-colors duration-150 ${
        copied ? "bg-moss text-moss-ink" : "bg-raised text-ink hover:bg-line"
      }`}
    >
      {copied ? "Copied ✓" : "Copy prompt"}
    </button>
  );
}
