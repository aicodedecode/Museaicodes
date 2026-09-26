"use client";

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

interface ToastContextValue {
  notify: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue>({ notify: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback((msg: string) => {
    setMessage(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), 1800);
  }, []);

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`fixed left-1/2 bottom-6 z-[100] -translate-x-1/2 rounded-lg bg-ink text-bg px-4 py-2.5 font-semibold text-sm shadow-[var(--shadow)] transition-all duration-200 ${
          message ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {message ?? ""}
      </div>
    </ToastContext.Provider>
  );
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function CopyButton({
  text,
  label,
  className = "",
}: {
  text: string;
  label: string;
  className?: string;
}) {
  const { notify } = useToast();
  const [copied, setCopied] = useState(false);

  const handle = async () => {
    const ok = await copyText(text);
    if (ok) {
      setCopied(true);
      notify(`Copied ${text}`);
      setTimeout(() => setCopied(false), 1400);
    } else {
      notify(`Copy manually: ${text}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handle}
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-ink text-bg px-4 py-2.5 text-sm font-bold transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10.5 5.5v-2a1.5 1.5 0 00-1.5-1.5H4.5A1.5 1.5 0 003 3.5v4.5a1.5 1.5 0 001.5 1.5h1" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}
