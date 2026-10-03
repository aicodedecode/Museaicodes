"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * HeroField — a soft dot swarm ("fireflies over field notes").
 *
 * Replaces the earlier index-card field: ~140 light, soft dots drift on
 * wander currents, and on desktop (fine pointer) they swarm gently toward
 * the cursor, trailing it like fireflies. Procedural soft-dot shader —
 * no textures. Theme-aware, DPR-clamped, pauses offscreen, and renders a
 * single static frame under prefers-reduced-motion.
 */
export default function HeroField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const isDark = () => document.documentElement.classList.contains("dark");

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return; // no WebGL — hero simply renders without the swarm
    }
    renderer.setClearColor(0x000000, 0); // transparent: site bg shows through
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
    camera.position.set(0, 0, 11);

    // ---- palette (repainted on theme switch) ----
    interface Palette { base: THREE.Color; baseA: [number, number]; accent: THREE.Color; accentA: [number, number]; }
    const palettes = {
      dark: {
        base: new THREE.Color("#c9b992"), baseA: [0.22, 0.5],
        accent: new THREE.Color("#ff8a66"), accentA: [0.45, 0.75],
      } as Palette,
      light: {
        base: new THREE.Color("#a89a7c"), baseA: [0.25, 0.52],
        accent: new THREE.Color("#ff6b47"), accentA: [0.5, 0.8],
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
      const count = Math.round(THREE.MathUtils.clamp((w * h) / 4500, 90, 230));
      const rand = (a: number, b: number) => a + Math.random() * (b - a);
      for (let i = 0; i < count; i++) {
        const tone = Math.random() < 0.12 ? 1 : 0; // ~12% coral accents
        const halo = Math.random() < 0.08; // a few large faint halos for depth
        dots.push({
          x: rand(-W / 2 - 0.5, W / 2 + 0.5),
          y: rand(-H / 2 - 0.5, H / 2 + 0.5),
          z: 0, baseZ: rand(-1.4, 1.2),
          vx: rand(-0.1, 0.1), vy: rand(-0.1, 0.1),
          size: halo ? rand(0.42, 0.6) : rand(0.1, 0.26),
          phase: rand(0, Math.PI * 2),
          tone, social: rand(0.6, 1.4),
          halo, alphaT: Math.random(),
        });
        dots[i].z = dots[i].baseZ;
      }
    };

    // ---- geometry + soft-dot shader ----
    const geo = new THREE.BufferGeometry();
    const posArr = new Float32Array(230 * 3);
    const colArr = new Float32Array(230 * 3);
    const sizeArr = new Float32Array(230);
    const alphaArr = new Float32Array(230);
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
          float a = smoothstep(0.5, 0.06, d);
          a *= a; // soft falloff, no hard edge
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
      const p = isDark() ? palettes.dark : palettes.light;
      const c = new THREE.Color();
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let range: [number, number];
        if (d.tone === 1) {
          c.copy(p.accent);
          range = p.accentA;
        } else {
          c.copy(p.base);
          range = d.halo ? [0.08, 0.14] : p.baseA;
        }
        colArr[i * 3] = c.r; colArr[i * 3 + 1] = c.g; colArr[i * 3 + 2] = c.b;
        alphaArr[i] = range[0] + (range[1] - range[0]) * d.alphaT;
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

    // ---- pointer (desktop swarm) ----
    const mouse = { x: 0, y: 0 };
    let hasPointer = false;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = host.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * W;
      mouse.y = -((e.clientY - r.top) / r.height - 0.5) * H;
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
      const R = 2.6; // mouse influence radius (world units)
      const bx = W / 2 + 0.6;
      const by = H / 2 + 0.6;
      for (const d of dots) {
        // wander currents
        const wx = Math.sin(t * 0.4 + d.phase) * 0.25 + Math.sin(t * 0.17 + d.phase * 1.7) * 0.15;
        const wy = Math.cos(t * 0.33 + d.phase * 1.3) * 0.25 + Math.cos(t * 0.21 + d.phase * 2.1) * 0.15;
        let ax = wx * 0.35;
        let ay = wy * 0.35;
        // desktop swarm: drift toward the cursor
        if (finePointer && hasPointer) {
          const dx = mouse.x - d.x;
          const dy = mouse.y - d.y;
          const dist = Math.hypot(dx, dy);
          if (dist < R && dist > 0.001) {
            const pull = 1 - dist / R;
            const s = pull * pull * 2.4 * d.social;
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
        d.vx = (d.vx + ax * dt) * 0.96;
        d.vy = (d.vy + ay * dt) * 0.96;
        const sp = Math.hypot(d.vx, d.vy);
        const max = 1.6;
        if (sp > max) { d.vx = (d.vx / sp) * max; d.vy = (d.vy / sp) * max; }
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.z = d.baseZ + Math.sin(t * 0.3 + d.phase) * 0.3;
      }
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
