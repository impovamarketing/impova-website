"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { StatusDot } from "./StatusDot";
import { MagneticButton } from "./MagneticButton";
import { HeroSignalField } from "./HeroSignalField";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { GOOGLE_REVIEWS, PHONE, PROJECT_SLOTS } from "@/config/site";

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
        {PROJECT_SLOTS.show && (
          <motion.div variants={item}>
            <StatusDot
              label={`Aktuell ${PROJECT_SLOTS.free} von ${PROJECT_SLOTS.total} Projektplätzen frei`}
              tone="green"
            />
          </motion.div>
        )}

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Webdesign und lokale Sichtbarkeit in Landshut und Niederbayern
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.02] tracking-tight text-zinc-50 [text-wrap:balance] sm:text-6xl lg:text-7xl">
            Mehr Anfragen für dein Unternehmen aus der Region.
          </h1>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Ich baue Websites, die bei Google gefunden werden und Besucher zur
          Anfrage führen. Bewertet mit {GOOGLE_REVIEWS.rating} von 5 bei
          Google, und Kunden wie Nikolli Gartenbau stehen für ihre wichtigsten
          Suchbegriffe auf Platz 2 und 3.
        </p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
          <MagneticButton href="#sichtbarkeits-check">
            Kostenlosen Sichtbarkeits-Check anfordern
          </MagneticButton>
          <MagneticButton href={PHONE.href} variant="outline">
            Anrufen: {PHONE.display}
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-zinc-900 pt-6 font-mono text-xs uppercase tracking-wider text-muted sm:mt-12"
        >
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 hover:text-zinc-100"
          >
            <span className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </span>
            <span>
              <span className="text-zinc-200">{GOOGLE_REVIEWS.rating}</span> bei{" "}
              {GOOGLE_REVIEWS.count} Google-Bewertungen
            </span>
          </a>
          <span>
            <span className="text-zinc-200">Persönlich</span> aus Essenbach bei
            Landshut
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
