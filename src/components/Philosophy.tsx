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
    impova: "Ein fester Ansprechpartner kümmert sich, du pflegst nur, was du willst",
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
    <section id="philosophie" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="02">Philosophie</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Baukasten-Website vs. individuell gebaut
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            Ein Baukasten ist für viele ein guter Start. Wenn deine Website
            aber regelmäßig Anfragen bringen soll, machen diese Unterschiede
            sich bemerkbar.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col border border-zinc-900">
          <div className="grid grid-cols-2 border-b border-zinc-900">
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Baukasten-Website
              </p>
            </div>
            <div className="border-l border-zinc-900 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Impova
              </p>
            </div>
          </div>

          {COMPARISON.map((row, i) => (
            <Reveal
              key={row.impova}
              delay={i * 0.05}
              className={`grid grid-cols-2 ${
                i < COMPARISON.length - 1 ? "border-b border-zinc-900" : ""
              }`}
            >
              <div className="p-6 text-muted sm:p-8">{row.baukasten}</div>
              <div className="border-l border-zinc-900 p-6 text-zinc-200 sm:p-8">
                {row.impova}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 text-sm text-muted">
            Was das für dich heißt: Besucher sehen sofort etwas und springen
            nicht ab, bevor sie dein Angebot kennen. Gemessen an dieser Website:
          </p>
          <dl className="mt-6 grid grid-cols-1 gap-8 border-t border-zinc-900 pt-10 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-mono text-2xl text-zinc-50">{m.value}</dd>
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
