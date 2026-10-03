"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * HeroField — dust motes in warm light.
 *
 * Thesis: the hero background should feel like sunlit dust over a desk —
 * calm, soft, ignorable. ~120 fine dots drift on barely-there currents;
 * near the cursor they breathe aside softly and settle back. No glow,
 * no gathering blobs, no perpetual showboating. Theme-aware, DPR-clamped,
 * pauses offscreen, single static frame under prefers-reduced-motion.
 *
 * Props let a section band reuse the field as a quieter echo of the hero:
 * densityScale trims the dot count, alphaScale dims it further.
 * invertPanel is for panels that invert against the page theme (like the
 * dark skills banner in light mode): dots go bright-warm when the panel
 * itself is dark, so they stay visible instead of washing out.
 */
export default function HeroField({
  densityScale = 1,
  alphaScale = 1,
  invertPanel = false,
}: {
  densityScale?: number;
  alphaScale?: number;
  invertPanel?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const isDark = () => document.documentElement.classList.contains("dark");

    let renderer: THREE.WebGLRenderer;
    try {
      // soft feathered dots gain nothing from MSAA — skip it for GPU headroom
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // no WebGL — hero simply renders without the swarm
    }
    renderer.setClearColor(0x000000, 0); // transparent: site bg shows through
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
    camera.position.set(0, 0, 11);

    // ---- palette (repainted on theme switch) ----
    interface Palette { base: THREE.Color; baseA: [number, number]; accent: THREE.Color; accentA: [number, number]; haloA: [number, number]; }
    const palettes = {
      dark: {
        base: new THREE.Color("#a79c85"), baseA: [0.22, 0.5],
        accent: new THREE.Color("#c98f6f"), accentA: [0.24, 0.5],
        haloA: [0.09, 0.16],
      } as Palette,
      light: {
        base: new THREE.Color("#a89d88"), baseA: [0.2, 0.48],
        accent: new THREE.Color("#c07a58"), accentA: [0.22, 0.48],
        haloA: [0.09, 0.16],
      } as Palette,
      // for a dark panel (banner in light page-mode): warm paper dots that
      // read clearly on near-black without glowing
      panel: {
        base: new THREE.Color("#d9cfb6"), baseA: [0.2, 0.4],
        accent: new THREE.Color("#d69a6b"), accentA: [0.22, 0.4],
        haloA: [0.08, 0.14],
      } as Palette,
    };

    // ---- dot state ----
    interface Dot {
      x: number; y: number; z: number; baseZ: number;
      vx: number; vy: number;
      size: number; phase: number; tone: number; social: number;
      halo: boolean; alphaT: number; // alphaT: 0..1 position within the theme's alpha range
    }
    let W = 10; // visible width at z=0, recomputed on resize
    let H = 6;
    const dots: Dot[] = [];

    const seed = () => {
      dots.length = 0;
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      const count = Math.round(
        THREE.MathUtils.clamp(((w * h) / 6000) * densityScale, 8, 150)
      );
      const rand = (a: number, b: number) => a + Math.random() * (b - a);
      for (let i = 0; i < count; i++) {
        const tone = Math.random() < 0.04 ? 1 : 0; // whisper of clay, not neon
        const halo = Math.random() < 0.04; // a few large faint halos for depth
        dots.push({
          x: rand(-W / 2 - 0.5, W / 2 + 0.5),
          y: rand(-H / 2 - 0.5, H / 2 + 0.5),
          z: 0, baseZ: rand(-1.4, 1.2),
          vx: rand(-0.05, 0.05), vy: rand(-0.05, 0.05),
          size: halo ? rand(0.34, 0.5) : rand(0.1, 0.26),
          phase: rand(0, Math.PI * 2),
          tone, social: rand(0.6, 1.4),
          halo, alphaT: Math.random(),
        });
        dots[i].z = dots[i].baseZ;
      }
    };

    // ---- geometry + soft-dot shader ----
    const MAX_DOTS = 160; // seed() clamps count to 150; small headroom
    const geo = new THREE.BufferGeometry();
    const posArr = new Float32Array(MAX_DOTS * 3);
    const colArr = new Float32Array(MAX_DOTS * 3);
    const sizeArr = new Float32Array(MAX_DOTS);
    const alphaArr = new Float32Array(MAX_DOTS);
    geo.setAttribute("position", new THREE.BufferAttribute(posArr, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(colArr, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizeArr, 1));
    geo.setAttribute("aAlpha", new THREE.BufferAttribute(alphaArr, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uFactor: { value: 1000 } },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aAlpha;
        attribute vec3 aColor;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uFactor;
        void main() {
          vAlpha = aAlpha;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uFactor / -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d); // wide feather, no edge at all
          a = pow(a, 1.6);
          float alpha = a * vAlpha;
          if (alpha < 0.004) discard;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    scene.add(points);

    const paint = () => {
      // the banner panel inverts against the page theme: dark panel in light
      // mode, cream panel in dark mode — pick dots for the PANEL, not the page
      const panelDark = invertPanel ? !isDark() : isDark();
      const p = panelDark && invertPanel ? palettes.panel : isDark() ? palettes.dark : palettes.light;
      const c = new THREE.Color();
      const qx = W * 0.08; // quiet zone: keep the headline area calm
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let range: [number, number];
        if (d.tone === 1) {
          c.copy(p.accent);
          range = p.accentA;
        } else {
          c.copy(p.base);
          range = d.halo ? p.haloA : p.baseA;
        }
        colArr[i * 3] = c.r; colArr[i * 3 + 1] = c.g; colArr[i * 3 + 2] = c.b;
        let a = range[0] + (range[1] - range[0]) * d.alphaT;
        if (d.x < qx) a *= 0.45;
        alphaArr[i] = a * alphaScale;
      }
      (geo.getAttribute("aColor") as THREE.BufferAttribute).needsUpdate = true;
      (geo.getAttribute("aAlpha") as THREE.BufferAttribute).needsUpdate = true;
    };

    const syncAttributes = () => {
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        posArr[i * 3] = d.x; posArr[i * 3 + 1] = d.y; posArr[i * 3 + 2] = d.z;
        sizeArr[i] = d.size;
      }
      geo.setDrawRange(0, dots.length);
      (geo.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
      (geo.getAttribute("aSize") as THREE.BufferAttribute).needsUpdate = true;
    };

    // ---- sizing ----
    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const dist = camera.position.z;
      H = 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      W = H * camera.aspect;
      // worldSize -> px: size * (h*dpr) / (2*tan(fov/2)) / dist
      (mat.uniforms.uFactor as THREE.Uniform).value =
        (h * dpr) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    };

    // ---- pointer (desktop): whisper of parallax + soft local disturbance ----
    const mouse = { x: 0, y: 0 };
    const ndc = { x: 0, y: 0 };
    let hasPointer = false;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = host.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      // clamp: a pointer far outside this instance must not swing the camera
      ndc.x = THREE.MathUtils.clamp(nx * 2, -1.5, 1.5);
      ndc.y = THREE.MathUtils.clamp(-ny * 2, -1.5, 1.5);
      mouse.x = nx * W;
      mouse.y = -ny * H;
      hasPointer = true;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // ---- pause when offscreen / tab hidden ----
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced) tick();
    });
    io.observe(host);
    const onVis = () => {
      if (!document.hidden && !reduced) tick();
    };
    document.addEventListener("visibilitychange", onVis);

    // ---- theme switch: repaint dot colors ----
    const mo = new MutationObserver(paint);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // ---- animation ----
    const clock = new THREE.Clock();
    let raf = 0;
    let running = false;

    const step = (t: number, dt: number) => {
      const R = 2.2; // disturbance radius (world units)
      const R2 = R * R; // squared — avoids a sqrt per dot per frame
      const bx = W / 2 + 0.6;
      const by = H / 2 + 0.6;
      for (const d of dots) {
        // barely-there currents: slow directional drift + faint wobble.
        // Calm by design — this loop runs forever, so it must whisper.
        const wx = Math.sin(t * 0.07 + d.phase) * 0.5 + Math.sin(t * 0.23 + d.phase * 1.7) * 0.12;
        const wy = Math.cos(t * 0.06 + d.phase * 1.3) * 0.5 + Math.cos(t * 0.19 + d.phase * 2.1) * 0.12;
        let ax = wx * 0.22;
        let ay = wy * 0.22;
        // soft disturbance: dots breathe aside near the cursor, settle back after
        if (finePointer && hasPointer) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < R2 && dist2 > 1e-6) {
            const dist = Math.sqrt(dist2); // only sqrt when inside the radius
            const push = 1 - dist / R;
            const s = push * push * 1.4 * d.social;
            ax += (dx / dist) * s;
            ay += (dy / dist) * s;
          }
        }
        // soft containment
        if (d.x > bx) ax -= (d.x - bx) * 3;
        else if (d.x < -bx) ax -= (d.x + bx) * 3;
        if (d.y > by) ay -= (d.y - by) * 3;
        else if (d.y < -by) ay -= (d.y + by) * 3;
        // integrate + damp
        d.vx = (d.vx + ax * dt) * 0.97;
        d.vy = (d.vy + ay * dt) * 0.97;
        const sp = Math.hypot(d.vx, d.vy);
        const max = 0.9;
        if (sp > max) { d.vx = (d.vx / sp) * max; d.vy = (d.vy / sp) * max; }
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.z = d.baseZ + Math.sin(t * 0.3 + d.phase) * 0.3;
      }
      // whisper of camera parallax for depth — felt, not seen
      camera.position.x += (ndc.x * 0.35 - camera.position.x) * 0.03;
      camera.position.y += (ndc.y * 0.25 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, -2);
    };

    const render = () => {
      syncAttributes();
      renderer.render(scene, camera);
    };

    const tick = () => {
      if (running) return;
      running = true;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        const dt = Math.min(clock.getDelta(), 0.05);
        step(clock.elapsedTime, dt);
        render();
      };
      loop();
    };

    // ---- boot ----
    resize();
    seed();
    paint();
    syncAttributes();
    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(host);

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
      scene.remove(points);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === host) host.removeChild(renderer.domElement);
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
