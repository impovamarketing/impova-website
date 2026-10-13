import { Check, X } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const FITS = [
  "Du willst mehr Anfragen aus deiner Region, nicht nur eine schöne Visitenkarte im Netz.",
  "Du willst einen festen Ansprechpartner statt Ticket-System und Callcenter.",
  "Du lieferst Infos und Fotos zu deinem Unternehmen, wenn ich danach frage.",
  "Du bist offen für Empfehlungen, auch wenn sie anders sind als gedacht.",
];

const NO_FITS = [
  "Du suchst vor allem das günstigste Angebot. Dafür ist ein Baukasten die bessere Wahl.",
  "Du erwartest eine Garantie auf feste Platzierungen bei Google. Die kann niemand seriös geben.",
  "Deine Website muss in wenigen Tagen stehen. Für einen guten Auftritt plane ich 2 bis 4 Wochen ein.",
];

export function Fit() {
  return (
    <section className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Passt das?</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            Für wen ich der Richtige bin, und für wen nicht
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="card p-7 ring-1 ring-accent/30 sm:p-8">
            <p className="text-lg font-semibold text-zinc-50">Wir passen zusammen, wenn …</p>
            <ul className="mt-6 flex flex-col gap-4">
              {FITS.map((fit) => (
                <li key={fit} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {fit}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="card p-7 sm:p-8">
            <p className="text-lg font-semibold text-zinc-50">Eher nicht, wenn …</p>
            <ul className="mt-6 flex flex-col gap-4">
              {NO_FITS.map((noFit) => (
                <li key={noFit} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                  <X className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                  {noFit}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
