#!/usr/bin/env python3
"""Build the interactive AI model cost dashboard.

Reads the verified price snapshot from data/token-prices.csv with pandas
and writes a self-contained interactive HTML dashboard (Plotly via CDN) to
public/dashboards/ai-cost-dashboard.html, embedded by
app/tools/ai-cost-dashboard/page.tsx.

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
from plotly.subplots import make_subplots  # noqa: F401  (kept for future layouts)

ROOT = Path(__file__).resolve().parent.parent
CSV_PATH = ROOT / "data" / "token-prices.csv"
OUT_PATH = ROOT / "public" / "dashboards" / "ai-cost-dashboard.html"

# Warm-paper palette matching the site.
INK = "#211a12"
MUTED = "#6f6455"
ACCENT = "#c97b1e"  # marigold
PAPER = "#faf6ef"
LINE = "#e5dccb"
PALETTE = [
    "#c97b1e",  # marigold
    "#2f6f6a",  # teal
    "#8a4b8f",  # plum
    "#3e6fb0",  # blue
    "#b0433a",  # brick
    "#5a7d2a",  # olive
    "#7a6ff0",  # iris
]


def load() -> pd.DataFrame:
    df = pd.read_csv(CSV_PATH, dtype=str).fillna("")
    df["input_per_million"] = pd.to_numeric(df["input_per_million"])
    df["output_per_million"] = pd.to_numeric(df["output_per_million"])
    df["verified_date"] = pd.to_datetime(df["verified_date"]).dt.strftime("%B %d, %Y")
    return df


def chart_rates(df: pd.DataFrame) -> str:
    """Grouped input/output $/MTok bars, log y-axis so Jev stays visible."""
    fig = go.Figure()
    fig.add_bar(
        x=df["model"], y=df["input_per_million"], name="Input $/MTok",
        marker_color=PALETTE[1],
        hovertemplate="<b>%{x}</b><br>Input: $%{y:.3f} / MTok<extra></extra>",
    )
    # Jev's 0 output would vanish on a log axis; show a hairline epsilon instead.
    out = df["output_per_million"].replace(0, 0.001)
    fig.add_bar(
        x=df["model"], y=out, name="Output $/MTok",
        marker_color=PALETTE[0],
        hovertemplate="<b>%{x}</b><br>Output: %{customdata} / MTok<extra></extra>",
        customdata=["FREE" if v == 0 else f"${v:.2f}" for v in df["output_per_million"]],
    )
    fig.update_layout(
        title="Price per million tokens (log scale)",
        barmode="group", template="plotly_white",
        font=dict(family="system-ui", color=INK),
        yaxis=dict(type="log", title="$ / MTok"),
        xaxis=dict(title=""),
        legend=dict(orientation="h", y=1.08),
        margin=dict(t=70, b=90, l=60, r=20), height=400,
        paper_bgcolor=PAPER, plot_bgcolor=PAPER,
    )
    return fig.to_html(full_html=False, include_plotlyjs=False, div_id="rates-chart")


def explorer_block(df: pd.DataFrame) -> str:
    """Monthly bill explorer: empty plotly div + custom sliders wired in JS."""
    records = df[
        ["id", "model", "provider", "input_per_million", "output_per_million"]
    ].to_dict(orient="records")
    data_json = json.dumps(records)
    colors = {r["id"]: PALETTE[i % len(PALETTE)] for i, r in enumerate(records)}
    return f"""
<div class="dash-card">
  <h3>Monthly bill explorer</h3>
  <p class="dash-sub">Drag the sliders — every bar re-sorts instantly, cheapest first.</p>
  <div class="dash-controls">
    <label>Input tokens / month (M)
      <input id="ex-in" type="range" min="0" max="50" step="0.5" value="2">
      <span id="ex-in-val">2M</span>
    </label>
    <label>Output tokens / month (M)
      <input id="ex-out" type="range" min="0" max="20" step="0.25" value="1">
      <span id="ex-out-val">1M</span>
    </label>
    <div class="dash-presets">
      <button data-in="2" data-out="1">Chat-like 2:1</button>
      <button data-in="5" data-out="5">Balanced 1:1</button>
      <button data-in="2" data-out="8">Output-heavy 1:4</button>
    </div>
  </div>
  <div id="explorer-chart"></div>
  <p id="explorer-note" class="dash-note"></p>
</div>
<script>
const MODELS = {data_json};
const COLORS = {json.dumps(colors)};
function money(v) {{
  return v < 0.01 ? "$" + v.toFixed(4) : v < 10 ? "$" + v.toFixed(2) : "$" + v.toFixed(0);
}}
function renderExplorer() {{
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
    marker: {{ color: rows.map(r => r.color) }},
    hovertemplate: "<b>%{{x}}</b><br>%{{y:$,.2f}} / month<extra></extra>",
  }};
  const layout = {{
    title: "Estimated monthly bill at " + inM + "M in / " + outM + "M out",
    template: "plotly_white",
    font: {{ family: "system-ui", color: "{INK}" }},
    yaxis: {{ title: "$ / month" }},
    margin: {{ t: 60, b: 110, l: 70, r: 20 }},
    height: 420,
    paper_bgcolor: "{PAPER}", plot_bgcolor: "{PAPER}",
  }};
  Plotly.react("explorer-chart", [trace], layout, {{ displayModeBar: false }});
  const c = rows[0], p = rows[rows.length - 1];
  document.getElementById("explorer-note").textContent =
    "Cheapest: " + c.model + " (" + money(c.cost) + "/mo) — saves " +
    money(p.cost - c.cost) + "/mo vs " + p.model + " (" + money(p.cost) + "/mo).";
}}
document.getElementById("ex-in").addEventListener("input", renderExplorer);
document.getElementById("ex-out").addEventListener("input", renderExplorer);
document.querySelectorAll(".dash-presets button").forEach(b => b.addEventListener("click", () => {{
  document.getElementById("ex-in").value = b.dataset.in;
  document.getElementById("ex-out").value = b.dataset.out;
  renderExplorer();
}}));
renderExplorer();
</script>
"""


def chart_curves(df: pd.DataFrame) -> str:
    """Total monthly cost as input volume scales (output = half of input)."""
    vols = np.logspace(-1, 2, 60)  # 0.1M → 100M input
    fig = go.Figure()
    for i, r in df.iterrows():
        cost = vols * r["input_per_million"] + (vols / 2) * r["output_per_million"]
        fig.add_trace(go.Scatter(
            x=vols, y=cost, mode="lines", name=r["model"],
            line=dict(color=PALETTE[i % len(PALETTE)], width=2.5),
            hovertemplate=f"<b>{r['model']}</b><br>%{{x:.1f}}M in → $%{{y:,.2f}}/mo<extra></extra>",
        ))
    fig.update_layout(
        title="How the bill grows with volume (output = ½ input)",
        template="plotly_white",
        font=dict(family="system-ui", color=INK),
        xaxis=dict(type="log", title="Input tokens / month (M)"),
        yaxis=dict(type="log", title="$ / month"),
        legend=dict(orientation="h", y=-0.28),
        margin=dict(t=60, b=110, l=70, r=20), height=430,
        paper_bgcolor=PAPER, plot_bgcolor=PAPER,
    )
    return fig.to_html(full_html=False, include_plotlyjs=False, div_id="curves-chart")


def price_table(df: pd.DataFrame) -> str:
    rows = []
    for _, r in df.iterrows():
        out = "FREE" if r["output_per_million"] == 0 else f"${r['output_per_million']:.2f}"
        note = f"<br><span class='dash-caveat'>{r['pricing_note']}</span>" if r["pricing_note"] else ""
        rows.append(
            f"<tr><td><strong>{r['model']}</strong><br><span class='dash-caveat'>{r['provider']}</span></td>"
            f"<td>${r['input_per_million']:.3f}</td><td>{out}</td>"
            f"<td>{r['context_window']}{note}</td>"
            f"<td><a href='{r['pricing_url']}' target='_blank' rel='noopener'>Official pricing ↗</a></td></tr>"
        )
    return f"""
<div class="dash-card">
  <h3>Price table</h3>
  <p class="dash-sub">Every figure verified against the provider's official pricing page.</p>
  <div class="dash-table-wrap"><table class="dash-table">
    <thead><tr><th>Model</th><th>Input $/MTok</th><th>Output $/MTok</th><th>Context</th><th>Source</th></tr></thead>
    <tbody>{''.join(rows)}</tbody>
  </table></div>
</div>
"""


STYLE = """
<style>
.dash-wrap{font-family:system-ui,sans-serif;color:#211a12;background:#faf6ef;padding:8px 4px 24px;max-width:960px;margin:0 auto}
.dash-card{background:#fff;border:1px solid #e5dccb;border-radius:18px;padding:20px;margin:22px 0}
.dash-card h3{margin:0 0 4px;font-size:1.15rem;letter-spacing:-0.01em}
.dash-sub{margin:0 0 14px;color:#6f6455;font-size:.92rem}
.dash-note{margin:12px 0 0;color:#6f6455;font-size:.92rem}
.dash-caveat{color:#6f6455;font-size:.82rem}
.dash-controls{display:flex;flex-wrap:wrap;gap:18px;align-items:end;margin-bottom:6px}
.dash-controls label{font-size:.85rem;font-weight:600;display:flex;flex-direction:column;gap:6px;min-width:220px;flex:1}
.dash-controls input[type=range]{width:100%;accent-color:#c97b1e}
.dash-controls span{font-weight:700;color:#c97b1e}
.dash-presets{display:flex;gap:8px}
.dash-presets button{border:1px solid #e5dccb;background:#faf6ef;border-radius:999px;padding:7px 14px;font-size:.82rem;font-weight:600;cursor:pointer;color:#211a12}
.dash-presets button:hover{border-color:#c97b1e;color:#c97b1e}
.dash-table-wrap{overflow-x:auto}
.dash-table{width:100%;border-collapse:collapse;font-size:.9rem}
.dash-table th{text-align:left;padding:10px 12px;border-bottom:2px solid #e5dccb;white-space:nowrap}
.dash-table td{padding:10px 12px;border-bottom:1px solid #f0e9d9;vertical-align:top}
.dash-table a{color:#c97b1e;font-weight:600}
.dash-foot{color:#6f6455;font-size:.85rem;margin-top:18px;line-height:1.6}
</style>
"""


def main() -> None:
    df = load()
    verified = df["verified_date"].iloc[0]
    body = "\n".join([
        chart_rates(df),
        explorer_block(df),
        chart_curves(df),
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
<body><div class="dash-wrap">{body}</div></body></html>"""
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(html, encoding="utf-8")
    print(f"Wrote {OUT_PATH} ({len(html)/1024:.0f} KB, {len(df)} models)")


if __name__ == "__main__":
    main()
