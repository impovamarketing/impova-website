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
    href: { label: "Website erstellen lassen in Landshut", url: "/standorte/landshut" },
  },
  {
    index: "03",
    title: "Besucher, die anfragen",
    description:
      "Klare Kontaktwege auf jeder Seite, Formulare, die nicht abschrecken, und Inhalte, die Fragen beantworten, bevor sie gestellt werden. Damit aus Besuchen Anfragen werden.",
    icon: Search,
  },
];

const CHANGE_POINTS = [
  { icon: PenLine, text: "Neue Texte und Angebote" },
  { icon: ImageIcon, text: "Neue Bilder und Referenzen" },
  { icon: Clock, text: "Aktuelle Öffnungszeiten und Termine" },
];

const MODULES = [
  {
    title: "Bau deiner Website",
    text: "Einmalpreis, individuell kalkuliert nach Umfang. Du bekommst vorab ein konkretes, unverbindliches Angebot.",
  },
  {
    title: "Monatliche Pflege",
    text: "Getrennt vom Bau: Änderungen an Texten, Bildern und Öffnungszeiten, technische Updates und Monitoring.",
  },
  {
    title: "SEO-Betreuung",
    text: "Baut auf der Pflege auf: laufende Arbeit an deiner Sichtbarkeit bei Google. Auf Wunsch mit Inhalten als Zusatz.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="border-b border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="05">Leistungen</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
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

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {OUTCOMES.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
              <Reveal key={outcome.index} delay={i * 0.06} className="card card-interactive flex flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted">{outcome.index}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-50">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{outcome.description}</p>
                {outcome.href && (
                  <Link
                    href={outcome.href.url}
                    className="mt-auto pt-5 text-sm font-medium text-accent hover:underline"
                  >
                    {outcome.href.label} →
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h3 className="text-2xl font-medium tracking-tight text-zinc-50">
              Individuell entwickelt, Änderungen übernehme ich
            </h3>
            <p className="mt-4 text-zinc-400">
              Du musst dich nicht in ein System einarbeiten. Du schickst mir
              kurz, was sich ändern soll, und ich setze es um, im Rahmen der
              monatlichen Pflege.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {CHANGE_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.text} className="card p-6">
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
          <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {MODULES.map((module, i) => (
              <li key={module.title} className="card p-6">
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
