"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Blocks, Code2, Edit3, Gauge, SearchCode } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Service = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
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
      "Du willst Texte und Bilder selbst ändern können, ohne mich anzurufen? Dann bau ich dir WordPress sauber und ohne Page-Builder-Ballast auf — schneller umsetzbar, trotzdem kein Baukasten-Look.",
    icon: Edit3,
  },
  {
    title: "Custom UI/UX & Next.js-Code",
    description:
      "Reicht dir WordPress nicht mehr, weil du bei Design und Ladezeit ganz vorne mitspielen willst? Dann schreib ich dir jede Zeile Code von Hand — für Performance, die man tatsächlich misst, nicht nur behauptet.",
    icon: Code2,
  },
];

const SERVICES: Service[] = [
  {
    index: "01",
    title: "Webdesign",
    description:
      "Ein moderner Auftritt, der zu dir und deiner Zielgruppe passt: individuell entwickelt statt auf ein fertiges Template gesetzt. Das gibt dir volle Kontrolle und eine Seite, die du in fünf Jahren noch problemlos erweitern kannst.",
    icon: Blocks,
    href: "/webdesign",
  },
  {
    index: "02",
    title: "Conversion & Nutzerführung",
    description:
      "Merkt ein Besucher in den ersten drei Sekunden nicht, was du anbietest, klickt er weg. Ich baue jede Seite so, dass Inhalte, Struktur und Buttons Besucher gezielt zur Anfrage führen.",
    icon: Gauge,
  },
  {
    index: "03",
    title: "SEO",
    description:
      "Rankst du aktuell auf Seite 3? SEO ist bei mir Teil der Konzeption, nicht nachträglich draufgesetzt: technisch sauber und inhaltlich auf deine Suchbegriffe ausgerichtet, damit dich Kunden bei Google finden.",
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
      <div className="md:col-span-6">
        <p className="text-zinc-400">{service.description}</p>
        {service.href && (
          <Link
            href={service.href}
            className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
          >
            Mehr zu Webdesign →
          </Link>
        )}
      </div>
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
            <Eyebrow index="03">Leistungen</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
              Webdesign, SEO und Conversion aus Landshut
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
              Du musst dich nicht für ein System entscheiden, bevor du weißt,
              was du brauchst. Ich sag dir ehrlich, welcher Weg zu deinem
              Budget und deinem Ziel passt.
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
