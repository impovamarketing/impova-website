import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
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
    <section id="prozess" className="border-b border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="06">Prozess</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            So läuft die Zusammenarbeit ab
          </h2>
          <p className="mt-5 max-w-lg text-zinc-400">
            In vier Schritten setze ich das {METHOD_NAME} für dich um. Du
            weißt jederzeit, was als Nächstes passiert.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.08} className="card flex flex-col p-7">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs text-accent">
                    {step.index}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {step.status}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-50">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
