"use client";

import { useState } from "react";

/**
 * Brand icon for a connector: the service's own favicon with a letter-tile
 * fallback if it fails to load (ad blockers and offline favicons included).
 */
export default function ConnectorIcon({
  website,
  name,
  size = 40,
  className = "",
}: {
  website: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const origin = (() => {
    try {
      return new URL(website).origin;
    } catch {
      return "";
    }
  })();

  const style: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: 10,
    flexShrink: 0,
  };

  if (failed || !origin) {
    return (
      <span
        aria-hidden="true"
        className={`flex items-center justify-center bg-surface font-display font-extrabold text-accent ${className}`}
        style={{ ...style, border: "1px solid var(--border)" }}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={`${origin}/favicon.ico`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  );
}
