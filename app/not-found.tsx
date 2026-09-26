import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-shell px-5 py-32 text-center md:px-6">
      <p className="kicker">404</p>
      <h1 className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight">
        This page wandered off.
      </h1>
      <p className="mx-auto mt-5 max-w-[520px] text-muted">
        The guide you&rsquo;re looking for doesn&rsquo;t exist — but 15 real
        ones do.
      </p>
      <Link
        href="/guides"
        className="mt-8 inline-flex rounded-xl bg-accent px-6 py-3.5 font-bold text-accent-ink transition-transform duration-150 hover:-translate-y-0.5"
      >
        Browse all guides
      </Link>
    </main>
  );
}
