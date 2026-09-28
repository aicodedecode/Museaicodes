"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

/** Countries where Muse is officially available (as of September 2026). */
const AVAILABLE_COUNTRIES = ["United States", "Canada"];

/** Static country list — no API dependency. */
const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Democratic Republic of the)",
  "Congo (Republic of the)",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Réunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Barthélemy",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "São Tomé and Príncipe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Virgin Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const STORAGE_KEY = "museaicodes-watch-launch";

const linkClass =
  "font-bold text-accent underline-offset-4 hover:underline";

export default function AvailabilityChecker() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [country, setCountry] = useState<string | null>(null);
  const [watched, setWatched] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter((c) => c.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && COUNTRIES.includes(saved)) setWatched(saved);
    } catch {
      /* storage unavailable — banner just won't persist */
    }
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    if (open && activeIndex >= 0 && listRef.current) {
      const el = listRef.current.children[activeIndex] as
        | HTMLElement
        | undefined;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [open, activeIndex]);

  const select = (name: string) => {
    setCountry(name);
    setQuery(name);
    setOpen(false);
    setActiveIndex(-1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      if (open && filtered.length > 0) {
        e.preventDefault();
        select(filtered[activeIndex >= 0 ? activeIndex : 0]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const watch = () => {
    if (!country) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, country);
    } catch {
      /* storage unavailable — show banner for this session only */
    }
    setWatched(country);
  };

  const stopWatching = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setWatched(null);
  };

  const isAvailable = country !== null && AVAILABLE_COUNTRIES.includes(country);

  return (
    <div className="max-w-[760px]">
      {watched && (
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[22px] border border-line bg-surface px-5 py-4">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0 text-accent"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <p className="flex-1 text-[0.95rem] leading-relaxed text-muted">
            You&rsquo;re watching:{" "}
            <strong className="text-ink">{watched}</strong> — saved on this
            device only. We won&rsquo;t email you; check{" "}
            <Link href="/news" className={linkClass}>
              /news
            </Link>{" "}
            for launch announcements.
          </p>
          <button
            type="button"
            onClick={stopWatching}
            className="shrink-0 text-sm font-bold text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Stop watching
          </button>
        </div>
      )}

      <Reveal>
        <div
          ref={boxRef}
          className="relative rounded-[22px] border border-line bg-surface p-5 md:p-6"
        >
          <label
            htmlFor="country-search"
            className="font-bold text-[1.05rem]"
          >
            Where are you?
          </label>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Type to search the full country list, then pick yours.
          </p>
          <div className="relative mt-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="country-search"
              type="text"
              role="combobox"
              aria-expanded={open}
              aria-controls="country-listbox"
              aria-autocomplete="list"
              autoComplete="off"
              placeholder="Start typing a country…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
                setActiveIndex(-1);
              }}
              onFocus={() => setOpen(true)}
              onKeyDown={onKeyDown}
              className="w-full rounded-lg border border-line bg-bg py-3 pl-11 pr-4 text-lg placeholder:text-faint focus:border-accent focus:outline-none"
            />
            {open && (
              <ul
                id="country-listbox"
                ref={listRef}
                role="listbox"
                aria-label="Countries"
                className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-lg border border-line bg-surface shadow-lg"
              >
                {filtered.length === 0 && (
                  <li className="px-4 py-3 text-sm text-muted">
                    No country matches that search.
                  </li>
                )}
                {filtered.map((c, i) => (
                  <li
                    key={c}
                    role="option"
                    aria-selected={i === activeIndex}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      select(c);
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`cursor-pointer px-4 py-2.5 text-[0.95rem] ${
                      i === activeIndex ? "bg-raised text-ink" : "text-muted"
                    }`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Reveal>

      <div aria-live="polite" className="mt-6">
        {country && (
          <Reveal key={country}>
            {isAvailable ? (
              <div className="rounded-[26px] border border-line bg-ink p-6 text-bg md:p-8">
                <p className="inline-flex items-center gap-2 rounded-full bg-moss px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-moss-ink">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Available
                </p>
                <h2 className="font-display mt-4 text-[1.7rem] font-extrabold leading-tight tracking-tight">
                  Yes — Muse is available in {country}.
                </h2>
                <p className="mt-3 leading-relaxed text-bg/80">
                  You can download the official app and sign up today. Skip
                  unofficial downloads — if it isn&rsquo;t from Meta&rsquo;s
                  own listing, don&rsquo;t install it.
                </p>
                <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-relaxed">
                  <li>
                    <strong className="text-bg">Get the apps:</strong>{" "}
                    <Link
                      href="/apps/android"
                      className="font-bold text-moss underline-offset-4 hover:underline"
                    >
                      Android
                    </Link>
                    {" · "}
                    <Link
                      href="/apps/iphone"
                      className="font-bold text-moss underline-offset-4 hover:underline"
                    >
                      iPhone
                    </Link>
                    {" · "}
                    <Link
                      href="/apps/web"
                      className="font-bold text-moss underline-offset-4 hover:underline"
                    >
                      Web
                    </Link>
                  </li>
                  <li>
                    <strong className="text-bg">Need an invite?</strong> Check
                    the{" "}
                    <Link
                      href="/codes"
                      className="font-bold text-moss underline-offset-4 hover:underline"
                    >
                      codes board
                    </Link>{" "}
                    for how invite codes work.
                  </li>
                  <li>
                    <strong className="text-bg">Start right:</strong> read the{" "}
                    <Link
                      href="/guides/muse-ai-tutorial"
                      className="font-bold text-moss underline-offset-4 hover:underline"
                    >
                      Muse tutorial
                    </Link>{" "}
                    before your first session.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="rounded-[26px] border border-line bg-surface p-6 md:p-8">
                <p className="inline-flex items-center rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-accent-ink">
                  Not yet
                </p>
                <h2 className="font-display mt-4 text-[1.7rem] font-extrabold leading-tight tracking-tight">
                  Not yet — Muse isn&rsquo;t available in {country}.
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  As of September 2026, Muse only operates in the United
                  States and Canada, and Meta has announced no launch dates
                  for other countries. One hard rule while you wait:{" "}
                  <strong className="text-ink">
                    don&rsquo;t try VPNs or other workarounds
                  </strong>{" "}
                  — bypassing region checks violates Meta&rsquo;s terms and
                  can get an account banned.
                </p>
                {country === "Mexico" && (
                  <p className="mt-3 rounded-2xl border border-line bg-bg px-4 py-3 text-[0.92rem] leading-relaxed text-muted">
                    <strong className="text-ink">A note on Mexico:</strong>{" "}
                    a few press outlets report Muse is available here, but
                    we couldn&rsquo;t find any direct confirmation from Meta
                    — so we list it as unconfirmed for now. This page updates
                    the moment Meta says otherwise.
                  </p>
                )}
                <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                  <li>
                    <strong className="text-ink">Watch for the launch:</strong>{" "}
                    follow{" "}
                    <Link href="/news" className={linkClass}>
                      /news
                    </Link>{" "}
                    for official rollout announcements.
                  </li>
                  <li>
                    <strong className="text-ink">Be ready on day one:</strong>{" "}
                    read the{" "}
                    <Link
                      href="/guides/muse-ai-availability"
                      className={linkClass}
                    >
                      full availability guide
                    </Link>{" "}
                    and the{" "}
                    <Link href="/guides/muse-ai-tutorial" className={linkClass}>
                      Muse tutorial
                    </Link>
                    .
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={watch}
                  disabled={watched === country}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-bg transition-opacity disabled:cursor-default disabled:opacity-50 hover:opacity-90"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  {watched === country ? "You're watching this" : "Watch this launch"}
                </button>
                <p className="mt-3 text-xs leading-relaxed text-faint">
                  Saved on this device only — no email, no account, no spam.
                </p>
              </div>
            )}
          </Reveal>
        )}
      </div>
    </div>
  );
}
