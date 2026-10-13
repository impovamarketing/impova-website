"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { METHOD_NAME } from "@/config/site";

const STEPS = [
  {
    index: "01",
    title: "Analyse",
    status: "Ausgangssituation",
    description:
      "Ich schau mir an, wo du aktuell stehst: deine Seite, deine Zielgruppe, deine Konkurrenz, und wo du gerade Kunden verlierst.",
  },
  {
    index: "02",
    title: "Strategie",
    status: "Konzeption",
    description:
      "Daraus entsteht die Positionierung, die Seitenstruktur und die SEO-Ziele für deine neue Website, abgestimmt darauf, dass du gefunden wirst und Kunden gewinnst.",
  },
  {
    index: "03",
    title: "Entwicklung",
    status: "Umsetzung",
    description:
      "Deine Website entsteht: schnell geladen, sauber strukturiert und mit SEO-Grundlagen von Anfang an.",
  },
  {
    index: "04",
    title: "Launch",
    status: "Go-Live",
    description:
      "Deine Seite geht live, mit Monitoring, damit Probleme auffallen, bevor Kunden sie merken. Danach bleibe ich dein Ansprechpartner, auf Wunsch mit monatlicher Pflege.",
  },
];

export function Pipeline() {
  return (
    <section id="prozess" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="06">Prozess</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            So läuft die Zusammenarbeit ab
          </h2>
          <p className="mt-5 max-w-lg text-zinc-400">
            In vier Schritten setze ich das {METHOD_NAME} für dich um. Du
            weißt jederzeit, was als Nächstes passiert.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-zinc-900 lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-5 hidden h-px bg-accent lg:block"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.12}>
                <div className="relative">
                  <div className="relative z-10 mb-6 flex size-10 items-center justify-center border border-zinc-700 bg-base font-mono text-xs text-zinc-300">
                    {step.index}
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {step.status}
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-zinc-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
