import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const COMPARISON = [
  {
    baukasten: "Theme von der Stange, generisch angepasst",
    impova: "Individuelle Architektur, für dein Geschäftsmodell gebaut",
  },
  {
    baukasten: "5–8s Ladezeit, aufgeblähter Page-Builder-Code",
    impova: "Schlanker, individueller Code, der spürbar schneller lädt",
  },
  {
    baukasten: "SEO als nachträgliches Plugin",
    impova: "SEO als Architekturprinzip von Tag eins",
  },
  {
    baukasten: "Sieht aus wie jede zweite Wix-Seite in der Branche",
    impova: "Visuell differenziert, technisch überlegen",
  },
];

const METRICS = [
  { label: "Erste Anzeige", to: 1.2, decimals: 1, prefix: "< ", suffix: "s" },
  { label: "Serverantwort", to: 200, decimals: 0, prefix: "< ", suffix: "ms" },
  { label: "Stabilität", to: 0, decimals: 2, prefix: "", suffix: "" },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="01">Philosophie</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Baukasten-Website vs. individuell gebaut
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col border border-zinc-900">
          <div className="grid grid-cols-2 border-b border-zinc-900">
            <div className="p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Baukasten-Website
              </p>
            </div>
            <div className="border-l border-zinc-900 p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Impova
              </p>
            </div>
          </div>

          {COMPARISON.map((row, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className={`grid grid-cols-2 ${
                i < COMPARISON.length - 1 ? "border-b border-zinc-900" : ""
              }`}
            >
              <div className="p-8 text-muted line-through decoration-zinc-800">
                {row.baukasten}
              </div>
              <div className="border-l border-zinc-900 p-8 text-zinc-200">
                {row.impova}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 text-sm text-muted">
            Was das für dich heißt: keine Ladebalken, keine wackelnde Seite,
            keine Besucher, die abspringen, bevor sie was gesehen haben.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-8 border-t border-zinc-900 pt-10 font-mono">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="text-2xl text-zinc-50">
                  <CountUp
                    to={m.to}
                    decimals={m.decimals}
                    prefix={m.prefix}
                    suffix={m.suffix}
                  />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
