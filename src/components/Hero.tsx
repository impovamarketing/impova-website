"use client";

import { motion, type Variants } from "framer-motion";
import { StatusDot } from "./StatusDot";
import { MagneticButton } from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-zinc-900 pt-16">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "var(--color-accent)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-32 lg:px-10"
      >
        <motion.div variants={item}>
          <StatusDot label="PROJECT_SLOTS: 2/3 AVAILABLE" tone="green" />
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
        >
          Webdesign für Landshut,
          <br />
          das nicht wie Webdesign
          <br />
          aussieht.
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-xl text-lg leading-relaxed text-zinc-400"
        >
          Individuell entwickelte Websites für Unternehmen, die auf
          Performance und Rankings optimiert sind.{" "}
          <span className="text-zinc-200">Kein Theme. Kein Baukasten.</span>
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
          <MagneticButton href="#kontakt">Projekt anfragen</MagneticButton>
          <a
            href="#leistungen"
            className="font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Leistungen ansehen ↓
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-zinc-900 pt-6 font-mono text-xs uppercase tracking-wider text-zinc-600"
        >
          <div>
            <div className="text-zinc-200">100/100</div>
            Lighthouse Score
          </div>
          <div>
            <div className="text-zinc-200">&lt; 1.2s</div>
            LCP
          </div>
          <div>
            <div className="text-zinc-200">Landshut</div>
            Standort
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
