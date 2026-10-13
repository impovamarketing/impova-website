import { Check, X } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { MEASURED } from "@/config/site";

const COMPARISON = [
  {
    baukasten: "Eine Vorlage, die an dein Unternehmen angepasst wird",
    impova: "Struktur und Design, die für dein Unternehmen entwickelt werden",
  },
  {
    baukasten: "Du kümmerst dich selbst um Texte, Technik und Google",
    impova: "Ein fester Ansprechpartner kümmert sich um Technik, Texte und Google",
  },
  {
    baukasten: "SEO-Grundlagen hängen davon ab, was die Vorlage mitbringt",
    impova: "SEO-Grundlagen von Anfang an eingeplant: Struktur, Metadaten, lokale Signale",
  },
  {
    baukasten: "Ladezeit hängt von Vorlage und Erweiterungen ab",
    impova: "Ladezeit wird gemessen, nicht geschätzt",
  },
];

const METRICS = [
  { value: MEASURED.firstPaint, label: "bis zur ersten Anzeige auf dem Handy" },
  { value: MEASURED.serverResponse, label: "Antwortzeit des Servers" },
  { value: MEASURED.layoutShift, label: "verrutschte Elemente beim Laden (CLS)" },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="border-b border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="04">Philosophie</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            Baukasten-Website vs. individuell gebaut
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            Ein Baukasten ist für viele ein guter Start. Wenn deine Website
            aber regelmäßig Anfragen bringen soll, machen diese Unterschiede
            sich bemerkbar.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="card p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Baukasten-Website</p>
            <ul className="mt-6 flex flex-col gap-4">
              {COMPARISON.map((row) => (
                <li key={row.baukasten} className="flex gap-3 text-muted">
                  <X className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {row.baukasten}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="card p-7 ring-1 ring-accent/30 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">Impova</p>
            <ul className="mt-6 flex flex-col gap-4">
              {COMPARISON.map((row) => (
                <li key={row.impova} className="flex gap-3 text-zinc-200">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {row.impova}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 text-sm text-muted">
            Was das für dich heißt: Besucher sehen sofort etwas und springen
            nicht ab, bevor sie dein Angebot kennen. Gemessen an dieser Website:
          </p>
          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.label} className="card p-6">
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-3xl font-semibold tabular-nums text-zinc-50">{m.value}</dd>
                <dd className="mt-1 text-sm text-zinc-400">{m.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 font-mono text-[11px] text-muted">{MEASURED.source}</p>
        </Reveal>
      </div>
    </section>
  );
}
