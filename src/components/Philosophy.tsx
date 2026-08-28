import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const COMPARISON = [
  {
    baukasten: "Theme von der Stange, generisch angepasst",
    impova: "Individuelle Architektur, für dein Geschäftsmodell gebaut",
  },
  {
    baukasten: "5–8s Ladezeit, aufgeblähter Page-Builder-Code",
    impova: "Handgeschriebener Next.js-Code, < 1.2s LCP",
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
  { label: "Ladezeit", value: "< 1.2s" },
  { label: "Lighthouse Score", value: "100/100" },
  { label: "Serverantwort", value: "< 200ms" },
  { label: "Stabilität", value: "0.00" },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="02">Philosophie</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            08/15-Baukasten vs. Engineering, das rankt
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col border border-zinc-900">
          <div className="grid grid-cols-2 border-b border-zinc-900">
            <div className="p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                08/15 Baukasten
              </p>
            </div>
            <div className="border-l border-zinc-900 p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Impova Engineering
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
              <div className="p-8 text-zinc-600 line-through decoration-zinc-800">
                {row.baukasten}
              </div>
              <div className="border-l border-zinc-900 p-8 text-zinc-200">
                {row.impova}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 text-sm text-zinc-500">
            Was das für dich heißt: keine Ladebalken, keine wackelnde Seite,
            keine Besucher, die abspringen, bevor sie was gesehen haben.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 border-t border-zinc-900 pt-10 font-mono sm:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="text-2xl text-zinc-50">{m.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-zinc-600">
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
