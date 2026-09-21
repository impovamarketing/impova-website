"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { StatusDot } from "./StatusDot";
import { MagneticButton } from "./MagneticButton";
import { HeroSignalField } from "./HeroSignalField";
import { CountUp } from "./CountUp";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT_EXPO },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-zinc-900 pt-16">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <HeroSignalField />
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

        <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
          Online Marketing
          <br />
          aus Landshut.
          <br />
          Websites, die neue
          <br />
          Kunden bringen.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
          Zu langsam, zu generisch, bei Google unsichtbar? Ich entwickle
          Websites für Unternehmen in Landshut und Umgebung, die dich
          professionell positionieren, gefunden werden und Besucher gezielt
          zur Anfrage führen.
        </p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
          <MagneticButton href="#kontakt">
            Website-Projekt besprechen
          </MagneticButton>
          <MagneticButton href="#kontakt" variant="outline">
            Website prüfen lassen
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-zinc-900 pt-6 font-mono text-xs uppercase tracking-wider text-muted"
        >
          <div>
            <div className="text-zinc-200">
              <CountUp to={1.2} decimals={1} prefix="< " suffix="s" />
            </div>
            Ladezeit
          </div>
          <div>
            <Link
              href="/standorte/landshut"
              className="text-zinc-200 hover:text-accent"
            >
              Landshut
            </Link>
            <div>Standort</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
