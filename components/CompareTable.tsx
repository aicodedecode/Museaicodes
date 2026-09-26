import type { GuideTable } from "@/lib/guides";

/** Responsive comparison table: real <table> on desktop, labeled cards on mobile. */
export default function CompareTable({ table }: { table: GuideTable }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-[0.92rem]">
        <caption className="sr-only">
          Comparison of Muse AI, ChatGPT, Claude, and Meta AI
        </caption>
        <thead className="max-md:hidden">
          <tr>
            {table.headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="border-b border-line px-3 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-b border-line last:border-0 align-top max-md:block max-md:py-5">
              {row.map((cell, i) => (
                <td
                  key={i}
                  data-label={table.headers[i]}
                  className={`px-3 py-4 text-muted max-md:block max-md:border-0 max-md:px-0 ${
                    i === 0
                      ? "font-display font-bold text-ink max-md:py-0 max-md:text-[1.35rem] max-md:tracking-tight"
                      : "max-md:py-1.5"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mb-0.5 hidden font-mono text-[10px] uppercase tracking-[0.08em] text-faint max-md:block ${
                      i === 0 ? "max-md:hidden" : ""
                    }`}
                  >
                    {table.headers[i]}
                  </span>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
