import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Clock, Image as ImageIcon, MapPin, MousePointerClick, PenLine, Search } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { METHOD_NAME } from "@/config/site";

type Outcome = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: { label: string; url: string };
};

const OUTCOMES: Outcome[] = [
  {
    index: "01",
    title: "Eine Website, die überzeugt",
    description:
      "Ein Auftritt, der zu deinem Unternehmen passt und in wenigen Sekunden zeigt, was du anbietest und warum man dich wählen sollte. Individuell entwickelt, nicht aus einer Vorlage.",
    icon: MousePointerClick,
    href: { label: "Mehr zu Webdesign", url: "/webdesign" },
  },
  {
    index: "02",
    title: "Gefunden werden, wo deine Kunden suchen",
    description:
      "Lokale Sichtbarkeit bei Google: die Suchbegriffe, die Kunden in deiner Region wirklich eingeben, ein gepflegtes Google-Unternehmensprofil und saubere technische Grundlagen.",
    icon: MapPin,
    href: { label: "Webdesign in Landshut", url: "/standorte/landshut" },
  },
  {
    index: "03",
    title: "Besucher, die anfragen",
    description:
      "Klare Kontaktwege auf jeder Seite, Formulare, die nicht abschrecken, und Inhalte, die Fragen beantworten, bevor sie gestellt werden. Damit aus Besuchen Anfragen werden.",
    icon: Search,
  },
];

const CMS_POINTS = [
  { icon: PenLine, text: "Texte und Angebote selbst ändern" },
  { icon: ImageIcon, text: "Bilder austauschen, ohne etwas kaputt zu machen" },
  { icon: Clock, text: "Öffnungszeiten und Termine aktuell halten" },
];

const MODULES = [
  {
    title: "Bau deiner Website",
    text: "Einmalpreis, individuell kalkuliert nach Umfang. Du bekommst vorab ein konkretes, unverbindliches Angebot.",
  },
  {
    title: "Monatliche Pflege",
    text: "Getrennt vom Bau: Content-Änderungen, die du nicht selbst machen willst, technische Updates und Monitoring.",
  },
  {
    title: "SEO-Betreuung",
    text: "Baut auf der Pflege auf: laufende Arbeit an deiner Sichtbarkeit bei Google. Auf Wunsch mit Inhalten als Zusatz.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-8">
            <Eyebrow index="05">Leistungen</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
              Was du von mir bekommst: mehr Anfragen aus deiner Region
            </h2>
            <p className="mt-5 max-w-lg text-zinc-400">
              Dahinter steht das <span className="text-zinc-100">{METHOD_NAME}</span>:
              drei Bausteine, die zusammen wirken. Eine Website, die überzeugt,
              Sichtbarkeit bei Google in deiner Region und klare Wege zur
              Anfrage.
            </p>
            <p className="mt-4 max-w-lg text-zinc-400">
              Ein fester Ansprechpartner von der ersten Anfrage bis nach dem
              Launch. Antwort innerhalb von 24 Stunden, keine Weitergabe an
              Dritte.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-zinc-800 grayscale lg:ml-auto">
              <Image
                src="/images/portraits/founder-portrait.jpeg"
                alt="Tobias Springer, Gründer von Impova"
                fill
                className="object-cover object-[50%_18%]"
                sizes="(min-width: 1024px) 320px, 80vw"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-b border-zinc-900">
          {OUTCOMES.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <Reveal key={outcome.index}>
                <div className="grid grid-cols-1 gap-6 border-t border-zinc-900 px-2 py-10 md:grid-cols-12 md:items-center md:gap-8">
                  <div className="font-mono text-sm text-muted md:col-span-1">
                    {outcome.index}
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-50 sm:text-2xl md:col-span-4">
                    {outcome.title}
                  </h3>
                  <div className="md:col-span-6">
                    <p className="text-zinc-400">{outcome.description}</p>
                    {outcome.href && (
                      <Link
                        href={outcome.href.url}
                        className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
                      >
                        {outcome.href.label} →
                      </Link>
                    )}
                  </div>
                  <Icon
                    strokeWidth={1}
                    aria-hidden="true"
                    className="size-8 text-zinc-600 md:col-span-1 md:justify-self-end"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h3 className="text-2xl font-medium tracking-tight text-zinc-50">
              Individuell entwickelt, mit CMS zum Selbstpflegen
            </h3>
            <p className="mt-4 text-zinc-400">
              Deine Website wird für dich entwickelt. Kleine Änderungen machst
              du trotzdem selbst, in einem einfachen Redaktionssystem (Sanity),
              ohne mich anrufen zu müssen. Für alles Größere ist die Pflege da.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px border border-zinc-900 bg-zinc-900 sm:grid-cols-3">
              {CMS_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.text} className="bg-base p-6">
                    <Icon strokeWidth={1} aria-hidden="true" className="size-6 text-accent" />
                    <p className="mt-4 text-sm text-zinc-300">{point.text}</p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="text-2xl font-medium tracking-tight text-zinc-50">
            Klar getrennt: Bau, Pflege und Sichtbarkeit
          </h3>
          <ol className="mt-8 grid grid-cols-1 gap-px border border-zinc-900 bg-zinc-900 md:grid-cols-3">
            {MODULES.map((module, i) => (
              <li key={module.title} className="bg-base p-6">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-medium text-zinc-100">{module.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{module.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
