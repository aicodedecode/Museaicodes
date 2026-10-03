"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * HeroField — "the field notes desk".
 *
 * A calm, shallow 3D field of editorial index cards drifting behind the hero,
 * each letterpressed with a word from the site's own vocabulary. Paper, ink,
 * and one accent card — no particles, no wireframes, no glow.
 *
 * Respects: prefers-reduced-motion (renders one static frame), offscreen
 * pause, tab-hidden pause, theme changes (dark/light), DPR clamp.
 */

const WORDS = [
  "invite code", "prompt", "token", "compare",
  "whatsapp", "voice", "news", "guide",
  "quiz", "tools", "referral", "redeem",
  "meta ai", "chatgpt", "claude", "field notes",
  "how-to", "setup", "privacy", "update",
  "ideas", "library",
];

type Theme = {
  card: string;
  cardEdge: string;
  ink: string;
  faint: string;
};

const DARK: Theme = { card: "#35312a", cardEdge: "#57503f", ink: "#ece4cf", faint: "#a49c85" };
const LIGHT: Theme = { card: "#fffdf6", cardEdge: "#d9d0b8", ink: "#2b2d29", faint: "#8a8471" };
const ACCENT_BG = "#ff6b47";
const ACCENT_INK = "#241005";

function makeCardTexture(word: string, n: number, theme: Theme, accent: boolean): THREE.CanvasTexture {
  const W = 512;
  const H = 320;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d")!;

  const bg = accent ? ACCENT_BG : theme.card;
  const ink = accent ? ACCENT_INK : theme.ink;
  const faint = accent ? "rgba(36,16,5,0.62)" : theme.faint;
  const edge = accent ? "rgba(36,16,5,0.35)" : theme.cardEdge;

  // paper
  g.fillStyle = bg;
  g.fillRect(0, 0, W, H);

  // subtle top light (paper, not glow)
  const grad = g.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "rgba(255,255,255,0.10)");
  grad.addColorStop(0.35, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, W, H);

  // frame
  g.strokeStyle = edge;
  g.lineWidth = 5;
  g.strokeRect(14, 14, W - 28, H - 28);

  // index №
  g.fillStyle = faint;
  g.font = "600 26px ui-monospace, SFMono-Regular, Menlo, monospace";
  g.textBaseline = "alphabetic";
  g.fillText(`№ ${String(n + 1).padStart(2, "0")}`, 40, 66);

  // word — Georgia, the site's display voice
  g.fillStyle = ink;
  g.font = "italic 600 62px Georgia, 'Times New Roman', serif";
  g.textAlign = "center";
  // shrink long words to fit
  const maxW = W - 120;
  let size = 62;
  while (g.measureText(word).width > maxW && size > 30) {
    size -= 4;
    g.font = `italic 600 ${size}px Georgia, 'Times New Roman', serif`;
  }
  g.fillText(word, W / 2, H / 2 + size * 0.28);

  // footer rule + site mark
  g.strokeStyle = faint;
  g.lineWidth = 2;
  g.beginPath();
  g.moveTo(40, H - 62);
  g.lineTo(W - 40, H - 62);
  g.stroke();
  g.fillStyle = faint;
  g.font = "600 22px ui-monospace, SFMono-Regular, Menlo, monospace";
  g.textAlign = "left";
  g.fillText("museaicodes · field notes", 40, H - 30);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

type Card = {
  mesh: THREE.Mesh;
  mat: THREE.MeshStandardMaterial;
  word: string;
  index: number;
  accent: boolean;
  baseX: number;
  baseY: number;
  phase: number;
  speed: number;
  depth: number; // 0 near … 1 far
};

export default function HeroField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = () => document.documentElement.classList.contains("dark");
    let theme: Theme = isDark() ? DARK : LIGHT;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return; // no WebGL — hero simply renders without the card field
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    host.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
    camera.position.set(0, 0, 11);

    // warm editorial lighting — one key, one soft fill
    const key = new THREE.DirectionalLight(0xfff2dd, 1.15);
    key.position.set(4, 6, 8);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffd9c4, 0.35);
    fill.position.set(-6, -2, 4);
    scene.add(fill);
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const isMobile = host.clientWidth < 640;
    const COUNT = isMobile ? 13 : WORDS.length;

    const cards: Card[] = [];
    const geo = new THREE.PlaneGeometry(2.5, 1.5625);

    const buildCard = (word: string, i: number, accent: boolean): Card => {
      const tex = makeCardTexture(word, i, theme, accent);
      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.92,
        metalness: 0,
        transparent: true,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // spread wider than the viewport; z layers give the parallax depth
      const depth = Math.random(); // 0 near … 1 far
      const z = -1.5 - depth * 6;
      const spanX = 11 - depth * 3;
      const spanY = 6.5 - depth * 2;
      const baseX = (Math.random() * 2 - 1) * spanX;
      const baseY = (Math.random() * 2 - 1) * spanY;
      mesh.position.set(baseX, baseY, z);
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.22,
        (Math.random() - 0.5) * 0.35,
        (Math.random() - 0.5) * 0.16
      );
      const s = 0.75 + Math.random() * 0.6 - depth * 0.25;
      mesh.scale.setScalar(Math.max(0.45, s));
      mat.opacity = 0.88 - depth * 0.48;

      scene.add(mesh);
      return {
        mesh, mat, word, index: i, accent,
        baseX, baseY,
        phase: Math.random() * Math.PI * 2,
        speed: 0.35 + Math.random() * 0.5,
        depth,
      };
    };

    for (let i = 0; i < COUNT; i++) {
      cards.push(buildCard(WORDS[i % WORDS.length], i, i === 3));
    }

    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    // gentle mouse parallax (pointer only; harmless on touch)
    const target = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = host.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      target.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // pause when offscreen / tab hidden
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced) tick();
    });
    io.observe(host);
    const onVis = () => {
      visible = !document.hidden && visible !== false ? !document.hidden : visible;
      if (!document.hidden && !reduced) tick();
    };
    document.addEventListener("visibilitychange", onVis);

    // theme switch: repaint card faces
    const mo = new MutationObserver(() => {
      const next = isDark() ? DARK : LIGHT;
      if (next === theme) return;
      theme = next;
      for (const card of cards) {
        const old = card.mat.map;
        card.mat.map = makeCardTexture(card.word, card.index, theme, card.accent);
        card.mat.needsUpdate = true;
        old?.dispose();
      }
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const clock = new THREE.Clock();
    let raf = 0;
    let running = false;

    const render = () => {
      const t = clock.getElapsedTime();
      for (const card of cards) {
        const w = Math.sin(t * card.speed + card.phase);
        const w2 = Math.cos(t * card.speed * 0.7 + card.phase * 1.7);
        card.mesh.position.y = card.baseY + w * 0.28 * (1 - card.depth * 0.5);
        card.mesh.position.x = card.baseX + w2 * 0.18 * (1 - card.depth * 0.5);
        card.mesh.rotation.z += Math.sin(t * 0.2 + card.phase) * 0.0004;
      }
      // ease camera toward the pointer
      camera.position.x += (target.x * 1.1 - camera.position.x) * 0.045;
      camera.position.y += (target.y * 0.7 - camera.position.y) * 0.045;
      camera.lookAt(0, 0, -2);
      renderer.render(scene, camera);
    };

    const tick = () => {
      if (running) return;
      running = true;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        render();
      };
      loop();
    };

    if (reduced) {
      render(); // one static frame — composition without motion
    } else {
      tick();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      for (const card of cards) {
        card.mat.map?.dispose();
        card.mat.dispose();
        scene.remove(card.mesh);
      }
      geo.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
}
