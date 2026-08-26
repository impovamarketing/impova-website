"use client";

import { useRef } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Blocks, Code2, Edit3, Gauge, SearchCode } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Service = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type Path = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const PATHS: Path[] = [
  {
    title: "WordPress — individuell aufgesetzt",
    description:
      "Sauber programmiert statt Page-Builder-Ballast. Ideal, wenn du Inhalte selbst pflegen willst — flexibel erweiterbar, schneller umsetzbar als eine vollständige Custom-Lösung.",
    icon: Edit3,
  },
  {
    title: "Custom UI/UX & Next.js-Code",
    description:
      "Handgeschriebene Architektur für höchste Ansprüche an Design, Performance und Skalierbarkeit — für Unternehmen, die kompromisslos vorne mitspielen wollen.",
    icon: Code2,
  },
];

const SERVICES: Service[] = [
  {
    index: "01",
    title: "Custom Web Architecture",
    description:
      "Next.js-basierte Systeme statt Page-Builder. Sauberer Component-Aufbau, skalierbar, wartbar — für Unternehmen, die in fünf Jahren noch damit arbeiten wollen.",
    icon: Blocks,
  },
  {
    index: "02",
    title: "Modern UI/UX Engineering",
    description:
      "Interfaces, die sich technisch überlegen anfühlen. Mikrointeraktionen, Ladeverhalten und Typografie werden bis ins Detail durchdacht, nicht aus einem Theme kopiert.",
    icon: Gauge,
  },
  {
    index: "03",
    title: "Data-Driven SEO",
    description:
      "Technisches SEO als Fundament: strukturierte Daten, Core Web Vitals, semantisches HTML. Rankings entstehen durch Architektur, nicht durch Zufall.",
    icon: SearchCode,
  },
];

function ServiceRow({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="spotlight group relative grid grid-cols-1 gap-6 border-t border-zinc-900 px-2 py-10 transition-colors duration-300 hover:border-zinc-700 md:grid-cols-12 md:items-center md:gap-8"
    >
      <div className="font-mono text-sm text-zinc-700 md:col-span-1">
        {service.index}
      </div>
      <div className="md:col-span-4">
        <h3 className="text-xl font-medium tracking-tight text-zinc-50 sm:text-2xl">
          {service.title}
        </h3>
      </div>
      <p className="text-zinc-400 md:col-span-6">{service.description}</p>
      <Icon
        strokeWidth={1}
        className="size-8 text-zinc-600 transition-colors duration-300 group-hover:text-accent md:col-span-1 md:justify-self-end"
      />
    </div>
  );
}

export function Services() {
  return (
    <section id="leistungen" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-8">
            <Eyebrow index="02">Leistungen</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
              Custom Web Architecture & Data-Driven SEO aus Landshut
            </h2>
            <p className="mt-5 max-w-lg text-zinc-400">
              Kein Team aus Vertrieb, Projektmanagement und Praktikanten —
              dein Ansprechpartner ist auch der, der den Code schreibt.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="group relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-zinc-800 grayscale transition-all duration-500 hover:grayscale-0 lg:ml-auto">
              <Image
                src="/images/portraits/founder-lifestyle.jpeg"
                alt="Gründer von Impova bei der Arbeit"
                fill
                className="object-cover object-[50%_25%]"
                sizes="(min-width: 1024px) 320px, 80vw"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-zinc-800/80 bg-base/80 px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-zinc-400 backdrop-blur-sm">
                <span>Operator</span>
                <span className="text-accent">Online</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-b border-zinc-900">
          {SERVICES.map((service) => (
            <Reveal key={service.index}>
              <ServiceRow service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-xl font-medium text-zinc-100 sm:text-2xl">
              Zwei Wege, ein Ziel
            </h3>
            <p className="mt-3 max-w-lg text-zinc-400">
              Kein starres System — wir wählen die Lösung, die zu deinem
              Budget und deinem Anspruch passt.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-zinc-900 bg-zinc-900 md:grid-cols-2">
            {PATHS.map((path, i) => {
              const Icon = path.icon;
              return (
                <Reveal key={path.title} delay={i * 0.08} className="bg-base p-8">
                  <Icon
                    strokeWidth={1}
                    className="size-8 text-zinc-600 transition-colors duration-300 hover:text-accent"
                  />
                  <h4 className="mt-6 text-lg font-medium text-zinc-50">
                    {path.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {path.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
