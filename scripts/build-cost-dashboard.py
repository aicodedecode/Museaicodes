#!/usr/bin/env python3
"""Build the interactive AI model cost dashboard.

Reads the verified price snapshot from data/token-prices.csv with pandas
and writes a self-contained interactive HTML dashboard (Plotly via CDN) to
public/dashboards/ai-cost-dashboard.html, embedded by
app/tools/ai-cost-dashboard/page.tsx.

Design: matches the site's warm-paper theme tokens exactly, in both dark
(the site default) and light modes. The iframe is same-origin, so a small
JS theme engine reads the parent page's next-themes class and re-skins the
dashboard live when the visitor toggles.

Charts:
  1. Per-million-token rates — grouped input/output bars (log scale).
  2. Monthly bill explorer — sliders + workload presets, bars re-sorted live.
  3. Cost vs volume curves — total monthly cost as input volume scales.
Plus a price table with official pricing links and the verification date.

Re-run after any price update:
    ~/workspace/.venvs/scrape/bin/python scripts/build-cost-dashboard.py
"""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
import pandas as pd
import plotly.graph_objects as go

ROOT = Path(__file__).resolve().parent.parent
CSV_PATH = ROOT / "data" / "token-prices.csv"
OUT_PATH = ROOT / "public" / "dashboards" / "ai-cost-dashboard.html"

# Exact site tokens (app/globals.css). Dark is the site default.
THEMES = {
    "dark": {
        "bg": "#0c0d0a", "surface": "#141611", "raised": "#1b1e16",
        "ink": "#f2efe4", "muted": "#a6ab99", "faint": "#7c8172",
        "line": "#2a2e24", "accent": "#ff6b47",
        "grid": "#23281d",
    },
    "light": {
        "bg": "#f4f1e6", "surface": "#fcfbf5", "raised": "#efe9d8",
        "ink": "#171510", "muted": "#5f5b4c", "faint": "#8a8471",
        "line": "#dcd5bf", "accent": "#c23f14",
        "grid": "#e7dfc9",
    },
}
DARK = THEMES["dark"]

PALETTE = ["#ff6b47", "#9ed7b4", "#8fb4ff", "#e8b93e", "#c98ae0", "#7fd4c1", "#e07a9a"]
SERIF = "Georgia, 'Times New Roman', serif"
SANS = "system-ui, -apple-system, 'Segoe UI', sans-serif"


def load() -> pd.DataFrame:
    df = pd.read_csv(CSV_PATH, dtype=str).fillna("")
    df["input_per_million"] = pd.to_numeric(df["input_per_million"])
    df["output_per_million"] = pd.to_numeric(df["output_per_million"])
    df["verified_date"] = pd.to_datetime(df["verified_date"]).dt.strftime("%B %d, %Y")
    return df


def base_layout(title: str, height: int) -> dict:
    return dict(
        title=dict(text=title, font=dict(family=SERIF, size=19, color=DARK["ink"]),
                   x=0, xanchor="left"),
        template="plotly_white",
        font=dict(family=SANS, color=DARK["muted"], size=12),
        paper_bgcolor=DARK["surface"], plot_bgcolor=DARK["surface"],
        margin=dict(t=64, b=90, l=64, r=20), height=height,
        hoverlabel=dict(bgcolor=DARK["raised"], font=dict(color=DARK["ink"], family=SANS),
                        bordercolor=DARK["line"]),
    )


def axis_style(layout: dict, **kwargs) -> dict:
    for ax in ("xaxis", "yaxis"):
        layout.setdefault(ax, {}).update(
            dict(gridcolor=DARK["grid"], zerolinecolor=DARK["line"],
                 tickfont=dict(color=DARK["muted"]), title_font=dict(color=DARK["muted"]))
        )
    layout.update(kwargs)
    return layout


def chart_rates(df: pd.DataFrame) -> str:
    fig = go.Figure()
    fig.add_bar(
        x=df["model"], y=df["input_per_million"], name="Input $/MTok",
        marker=dict(color=PALETTE[2], cornerradius=6),
        hovertemplate="<b>%{x}</b><br>Input: $%{y:.3f} / MTok<extra></extra>",
    )
    out = df["output_per_million"].replace(0, 0.001)  # visible hairline on log axis
    fig.add_bar(
        x=df["model"], y=out, name="Output $/MTok",
        marker=dict(color=PALETTE[0], cornerradius=6),
        hovertemplate="<b>%{x}</b><br>Output: %{customdata} / MTok<extra></extra>",
        customdata=["FREE" if v == 0 else f"${v:.2f}" for v in df["output_per_million"]],
    )
    layout = base_layout("Price per million tokens", 400)
    layout.update(barmode="group",
                  legend=dict(orientation="h", y=1.12, font=dict(color=DARK["muted"])))
    axis_style(layout, yaxis_type="log")
    layout["yaxis"]["title"] = "$ / MTok"
    fig.update_layout(layout)
    return fig.to_html(full_html=False, include_plotlyjs=False, div_id="rates-chart")


def chart_curves(df: pd.DataFrame) -> str:
    vols = np.logspace(-1, 2, 60)  # 0.1M → 100M input
    fig = go.Figure()
    for i, r in df.iterrows():
        cost = vols * r["input_per_million"] + (vols / 2) * r["output_per_million"]
        fig.add_trace(go.Scatter(
            x=vols, y=cost, mode="lines", name=r["model"],
            line=dict(color=PALETTE[i % len(PALETTE)], width=2.5),
            hovertemplate=f"<b>{r['model']}</b><br>%{{x:.1f}}M in → $%{{y:,.2f}}/mo<extra></extra>",
        ))
    layout = base_layout("How the bill grows with volume", 430)
    layout.update(legend=dict(orientation="h", y=-0.30, font=dict(color=DARK["muted"])))
    axis_style(layout, xaxis_type="log", yaxis_type="log")
    layout["xaxis"]["title"] = "Input tokens / month (M)"
    layout["yaxis"]["title"] = "$ / month"
    fig.update_layout(layout)
    return fig.to_html(full_html=False, include_plotlyjs=False, div_id="curves-chart")


STYLE = """
<style>
:root{color-scheme:dark light}
body[data-theme="dark"]{--bg:#0c0d0a;--surface:#141611;--raised:#1b1e16;--ink:#f2efe4;--muted:#a6ab99;--faint:#7c8172;--line:#2a2e24;--accent:#ff6b47;--accent-ink:#1b0c06}
body[data-theme="light"]{--bg:#f4f1e6;--surface:#fcfbf5;--raised:#efe9d8;--ink:#171510;--muted:#5f5b4c;--faint:#8a8471;--line:#dcd5bf;--accent:#c23f14;--accent-ink:#fff7ef}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
.dash-wrap{max-width:980px;margin:0 auto;padding:10px 14px 30px}
.dash-card{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:26px;margin:22px 0;box-shadow:0 24px 64px rgba(0,0,0,.18)}
.kicker{font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin:0 0 8px}
.dash-card h3{font-family:Georgia,"Times New Roman",serif;font-size:1.45rem;letter-spacing:-0.01em;margin:0 0 6px;font-weight:700}
.dash-sub{margin:0 0 18px;color:var(--muted);font-size:.94rem;line-height:1.55;max-width:62ch}
.dash-note{margin:14px 0 0;color:var(--muted);font-size:.92rem;line-height:1.6}
.dash-note strong{color:var(--ink)}
.dash-caveat{color:var(--faint);font-size:.8rem}
.dash-controls{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:8px}
@media(max-width:640px){.dash-controls{grid-template-columns:1fr}}
.slider-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px}
.slider-head label{font-size:.82rem;font-weight:700;letter-spacing:.02em}
.slider-head output{font-family:Georgia,serif;font-size:1.25rem;font-weight:700;color:var(--accent)}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:999px;background:var(--raised);outline:none;cursor:pointer}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:var(--accent);border:3px solid var(--surface);box-shadow:0 2px 10px rgba(0,0,0,.35);cursor:grab}
input[type=range]::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:3px solid var(--surface);cursor:grab}
.dash-presets{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.dash-presets button{border:1px solid var(--line);background:transparent;border-radius:999px;padding:8px 16px;font-size:.82rem;font-weight:600;cursor:pointer;color:var(--muted);transition:all .18s ease}
.dash-presets button:hover,.dash-presets button.active{border-color:var(--accent);color:var(--accent)}
.dash-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:14px}
.dash-table{width:100%;border-collapse:collapse;font-size:.9rem}
.dash-table th{text-align:left;padding:12px 14px;background:var(--raised);font-size:.74rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);white-space:nowrap}
.dash-table td{padding:12px 14px;border-top:1px solid var(--line);vertical-align:top}
.dash-table tr:hover td{background:var(--raised)}
.dash-table a{color:var(--accent);font-weight:600;text-decoration:none}
.dash-table a:hover{text-decoration:underline}
.rate-pill{display:inline-block;min-width:64px;font-variant-numeric:tabular-nums;font-weight:700}
.free-pill{display:inline-block;background:var(--accent);color:var(--accent-ink);font-size:.72rem;font-weight:800;letter-spacing:.06em;border-radius:999px;padding:3px 10px}
.dash-foot{color:var(--faint);font-size:.84rem;margin:20px 4px 0;line-height:1.7}
.modebar{display:none!important}
</style>
"""


THEME_JS = """
<script>
const THEMES = __THEMES_JSON__;
let themeName = "dark";
function detectTheme() {
  try {
    if (window.parent && window.parent.document) {
      return window.parent.document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
  } catch (e) {}
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function applyTheme(name) {
  themeName = name;
  const t = THEMES[name];
  document.body.dataset.theme = name;
  ["rates-chart", "curves-chart"].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.data) {
      Plotly.relayout(el, {
        "paper_bgcolor": t.surface, "plot_bgcolor": t.surface,
        "font.color": t.muted,
        "title.font.color": t.ink,
        "xaxis.gridcolor": t.grid, "xaxis.zerolinecolor": t.line,
        "xaxis.tickfont.color": t.muted, "xaxis.title.font.color": t.muted,
        "yaxis.gridcolor": t.grid, "yaxis.zerolinecolor": t.line,
        "yaxis.tickfont.color": t.muted, "yaxis.title.font.color": t.muted,
        "legend.font.color": t.muted,
        "hoverlabel.bgcolor": t.raised, "hoverlabel.font.color": t.ink,
        "hoverlabel.bordercolor": t.line,
      });
    }
  });
  renderExplorer(); // re-skin the JS-driven chart
}
function watchParentTheme() {
  try {
    const root = window.parent.document.documentElement;
    new MutationObserver(() => {
      const n = root.classList.contains("dark") ? "dark" : "light";
      if (n !== themeName) applyTheme(n);
    }).observe(root, { attributes: true, attributeFilter: ["class"] });
  } catch (e) {}
}
</script>
"""


def explorer_block(df: pd.DataFrame) -> str:
    records = df[["id", "model", "provider", "input_per_million",
                  "output_per_million"]].to_dict(orient="records")
    colors = {r["id"]: PALETTE[i % len(PALETTE)] for i, r in enumerate(records)}
    return f"""
<div class="dash-card">
  <p class="kicker">Bill explorer</p>
  <h3>What would you pay?</h3>
  <p class="dash-sub">Drag the sliders — every bar re-sorts instantly, cheapest first.</p>
  <div class="dash-controls">
    <div>
      <div class="slider-head"><label for="ex-in">Input tokens / month</label><output id="ex-in-val">2M</output></div>
      <input id="ex-in" type="range" min="0" max="50" step="0.5" value="2" aria-label="Input tokens per month in millions">
    </div>
    <div>
      <div class="slider-head"><label for="ex-out">Output tokens / month</label><output id="ex-out-val">1M</output></div>
      <input id="ex-out" type="range" min="0" max="20" step="0.25" value="1" aria-label="Output tokens per month in millions">
    </div>
  </div>
  <div class="dash-presets">
    <button data-in="2" data-out="1" class="active">Chat-like · 2:1</button>
    <button data-in="5" data-out="5">Balanced · 1:1</button>
    <button data-in="2" data-out="8">Output-heavy · 1:4</button>
  </div>
  <div id="explorer-chart"></div>
  <p id="explorer-note" class="dash-note"></p>
</div>
<script>
const MODELS = {json.dumps(records)};
const COLORS = {json.dumps(colors)};
function money(v) {{
  return v < 0.01 ? "$" + v.toFixed(4) : v < 10 ? "$" + v.toFixed(2) : "$" + v.toFixed(0);
}}
function renderExplorer() {{
  const t = THEMES[themeName] || THEMES.dark;
  const inM = parseFloat(document.getElementById("ex-in").value);
  const outM = parseFloat(document.getElementById("ex-out").value);
  document.getElementById("ex-in-val").textContent = inM + "M";
  document.getElementById("ex-out-val").textContent = outM + "M";
  const rows = MODELS.map(m => ({{
    model: m.model,
    cost: inM * m.input_per_million + outM * m.output_per_million,
    color: COLORS[m.id],
  }})).sort((a, b) => a.cost - b.cost);
  const trace = {{
    x: rows.map(r => r.model),
    y: rows.map(r => r.cost),
    type: "bar",
    marker: {{ color: rows.map(r => r.color), cornerradius: 8 }},
    hovertemplate: "<b>%{{x}}</b><br>%{{y:$,.2f}} / month<extra></extra>",
  }};
  Plotly.react("explorer-chart", [trace], {{
    title: {{ text: "Estimated monthly bill", font: {{ family: "Georgia, serif", size: 17, color: t.ink }}, x: 0, xanchor: "left" }},
    font: {{ family: "system-ui, sans-serif", color: t.muted, size: 12 }},
    paper_bgcolor: t.surface, plot_bgcolor: t.surface,
    yaxis: {{ title: "$ / month", gridcolor: t.grid, zerolinecolor: t.line, tickfont: {{ color: t.muted }} }},
    xaxis: {{ tickfont: {{ color: t.muted }} }},
    hoverlabel: {{ bgcolor: t.raised, font: {{ color: t.ink }}, bordercolor: t.line }},
    margin: {{ t: 56, b: 110, l: 70, r: 20 }}, height: 420,
  }}, {{ displayModeBar: false, responsive: true }});
  const c = rows[0], p = rows[rows.length - 1];
  document.getElementById("explorer-note").innerHTML =
    "<strong>" + c.model + "</strong> wins at " + money(c.cost) + "/mo — saving " +
    money(p.cost - c.cost) + "/mo vs <strong>" + p.model + "</strong> (" + money(p.cost) + "/mo).";
}}
document.getElementById("ex-in").addEventListener("input", renderExplorer);
document.getElementById("ex-out").addEventListener("input", renderExplorer);
document.querySelectorAll(".dash-presets button").forEach(b => b.addEventListener("click", () => {{
  document.querySelectorAll(".dash-presets button").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  document.getElementById("ex-in").value = b.dataset.in;
  document.getElementById("ex-out").value = b.dataset.out;
  renderExplorer();
}}));
</script>
"""


def price_table(df: pd.DataFrame) -> str:
    rows = []
    for _, r in df.iterrows():
        out = ('<span class="free-pill">FREE</span>' if r["output_per_million"] == 0
               else f'<span class="rate-pill">${r["output_per_million"]:.2f}</span>')
        note = f"<br><span class='dash-caveat'>{r['pricing_note']}</span>" if r["pricing_note"] else ""
        rows.append(
            f"<tr><td><strong>{r['model']}</strong><br><span class='dash-caveat'>{r['provider']}</span></td>"
            f"<td><span class='rate-pill'>${r['input_per_million']:.3f}</span></td><td>{out}</td>"
            f"<td>{r['context_window']}{note}</td>"
            f"<td><a href='{r['pricing_url']}' target='_blank' rel='noopener'>Official pricing ↗</a></td></tr>"
        )
    return f"""
<div class="dash-card">
  <p class="kicker">Source table</p>
  <h3>The numbers behind the charts</h3>
  <p class="dash-sub">Every figure verified against the provider's official pricing page.</p>
  <div class="dash-table-wrap"><table class="dash-table">
    <thead><tr><th>Model</th><th>Input $/MTok</th><th>Output $/MTok</th><th>Context</th><th>Source</th></tr></thead>
    <tbody>{''.join(rows)}</tbody>
  </table></div>
</div>
"""


def main() -> None:
    df = load()
    verified = df["verified_date"].iloc[0]
    theme_js = THEME_JS.replace("__THEMES_JSON__", json.dumps(THEMES))
    body = "\n".join([
        '<div class="dash-card"><p class="kicker">Rates</p>'
        '<h3>Price per million tokens</h3>'
        '<p class="dash-sub">Log scale — the only way to see $0.042 and $10 in one view. '
        'Jev\'s output bar is a hairline: outputs are free.</p>'
        + chart_rates(df) + "</div>",
        explorer_block(df),
        '<div class="dash-card"><p class="kicker">Scale</p>'
        '<h3>How the bill grows with volume</h3>'
        '<p class="dash-sub">Monthly cost as input tokens scale from 100K to 100M '
        '(output fixed at half of input).</p>'
        + chart_curves(df) + "</div>",
        price_table(df),
        f"<p class='dash-foot'>Prices verified against official provider pricing pages on "
        f"{verified}. Planning estimates only — they ignore prompt-caching discounts, batch "
        f"rates, tool-call charges, and regional premiums. Jev's outputs are free because they "
        f"are tiny typed decisions, not generated text; it can't do what chat models do, so "
        f"“cheaper” only applies to decision-shaped work.</p>",
    ])
    html = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI Model Cost Dashboard</title>
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
{STYLE}</head>
<body data-theme="dark"><div class="dash-wrap">{body}</div>
{theme_js}
<script>
function fitFrame() {{
  try {{
    const f = window.frameElement;
    if (f) f.style.height = Math.ceil(document.documentElement.scrollHeight) + "px";
  }} catch (e) {{}}
}}
applyTheme(detectTheme());
watchParentTheme();
window.addEventListener("load", fitFrame);
setTimeout(fitFrame, 600);
setTimeout(fitFrame, 2500);
</script>
</body></html>"""
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(html, encoding="utf-8")
    print(f"Wrote {OUT_PATH} ({len(html)/1024:.0f} KB, {len(df)} models)")


if __name__ == "__main__":
    main()
