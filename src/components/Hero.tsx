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
    <section className="relative flex items-center overflow-hidden border-b border-zinc-900 pt-16 lg:min-h-screen">
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
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-12 sm:gap-8 sm:py-20 lg:py-32 lg:px-10"
      >
        <motion.div variants={item}>
          <StatusDot label="Aktuell 2 von 3 Projektplätzen frei" tone="green" />
        </motion.div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Webdesign &amp; Online Marketing aus Landshut
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.02] tracking-tight text-zinc-50 [text-wrap:balance] sm:text-6xl lg:text-7xl">
            Websites für Handwerker und Dienstleister, die neue Kunden bringen.
          </h1>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Zu langsam, zu generisch, bei Google unsichtbar? Ich baue Websites,
          die dich professionell zeigen, gefunden werden und Besucher gezielt
          zur Anfrage führen. Persönlich betreut, ohne Agentur-Pingpong.
        </p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
          <MagneticButton href="#kontakt">
            Website-Projekt besprechen
          </MagneticButton>
          <MagneticButton href="tel:+4915123819198" variant="outline">
            Anrufen: 0151 23819198
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 grid max-w-2xl sm:mt-16 grid-cols-2 gap-6 border-t border-zinc-900 pt-6 font-mono text-xs uppercase tracking-wider text-muted"
        >
          <div>
            <div className="text-zinc-200">
              <CountUp to={1.2} decimals={1} prefix="< " suffix="s" />
            </div>
            Erste Anzeige
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
