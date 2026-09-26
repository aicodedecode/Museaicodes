"use client";

import { useState } from "react";

/**
 * Privacy-friendly YouTube embed: shows a thumbnail + play button facade and
 * only loads the iframe (from youtube-nocookie.com) after the user clicks.
 */
export default function VideoEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink text-left"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-200 group-hover:opacity-60"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-[var(--shadow)] transition-transform duration-200 group-hover:scale-110">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1 h-7 w-7"
          >
            <path d="M8 5.5v13l11-6.5-11-6.5z" />
          </svg>
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-ink/70 p-3 text-sm font-semibold text-white">
        {title}
      </span>
    </button>
  );
}
