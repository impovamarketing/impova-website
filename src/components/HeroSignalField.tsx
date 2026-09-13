"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  baseAlpha: number;
  alpha: number;
};

const SPACING_DESKTOP = 72;
const SPACING_MOBILE = 96;
const PULSE_INTERVAL_MS = 4800;
const PULSE_SPEED = 620; // px/s
const PULSE_WIDTH = 220;
const CURSOR_RADIUS = 160;
const MAX_DPR = 2;
// Ambient background motion — 24fps reads as smooth here and cuts the
// per-dot work (measured as the dominant main-thread cost on load) by
// more than half versus driving it every rAF tick.
const FRAME_INTERVAL_MS = 1000 / 24;

/**
 * Signature background piece for the hero: a grid of "signal" points that
 * periodically pulses outward from the same corner as the accent glow (a
 * nod to scanning/measuring — the core of the Impova pitch) and brightens
 * near the cursor. Falls back to a static grid when the OS asks for
 * reduced motion, and pauses entirely once the hero scrolls out of view.
 */
export function HeroSignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let idleId = 0;
    let usesIdleCallback = false;
    let started = false;
    let visible = true;
    let lastDraw = 0;
    let pulseOrigin = { x: 0, y: 0 };
    let pulseStart = performance.now();
    const mouse = { x: -9999, y: -9999 };

    function buildGrid() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const spacing = width < 640 ? SPACING_MOBILE : SPACING_DESKTOP;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: c * spacing,
            y: r * spacing,
            baseAlpha: 0.05 + Math.random() * 0.04,
            alpha: 0.05,
          });
        }
      }
      pulseOrigin = { x: width * 0.92, y: height * -0.05 };
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.fillStyle = "#c6ff00";
      for (const dot of dots) {
        ctx!.globalAlpha = dot.baseAlpha;
        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function frame(now: number) {
      if (!visible) return;
      rafId = requestAnimationFrame(frame);
      if (now - lastDraw < FRAME_INTERVAL_MS) return;
      lastDraw = now;

      ctx!.clearRect(0, 0, width, height);

      const elapsed = (now - pulseStart) % PULSE_INTERVAL_MS;
      const pulseRadius = (elapsed / 1000) * PULSE_SPEED;
      const pulseActive = pulseRadius < Math.hypot(width, height) + PULSE_WIDTH;

      ctx!.fillStyle = "#c6ff00";
      for (const dot of dots) {
        let target = dot.baseAlpha;

        if (pulseActive) {
          const distToPulse = Math.hypot(
            dot.x - pulseOrigin.x,
            dot.y - pulseOrigin.y
          );
          const ring = Math.abs(distToPulse - pulseRadius);
          if (ring < PULSE_WIDTH) {
            target += (1 - ring / PULSE_WIDTH) * 0.5;
          }
        }

        if (!isCoarsePointer) {
          const distToCursor = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
          if (distToCursor < CURSOR_RADIUS) {
            target += (1 - distToCursor / CURSOR_RADIUS) * 0.55;
          }
        }

        dot.alpha += (target - dot.alpha) * 0.18;
        ctx!.globalAlpha = dot.alpha;
        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleResize() {
      buildGrid();
      drawStatic();
    }

    buildGrid();
    drawStatic();

    function startLoop() {
      started = true;
      pulseStart = performance.now();
      if (visible) rafId = requestAnimationFrame(frame);
    }

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      // Defer the continuous loop until the browser is idle so it doesn't
      // compete with hydration for main-thread time right after load.
      if (typeof window.requestIdleCallback === "function") {
        usesIdleCallback = true;
        idleId = window.requestIdleCallback(startLoop, { timeout: 2000 });
      } else {
        idleId = window.setTimeout(startLoop, 500);
      }
    }

    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!started || prefersReducedMotion) return;
        if (visible && !rafId) {
          rafId = requestAnimationFrame(frame);
        } else if (!visible && rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      if (usesIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
