import Link from "next/link";
import { Reveal } from "./Reveal";

const PROBLEMS = [
  {
    problem: "Meine Website sieht nicht mehr professionell aus.",
    solution: "Moderner, individueller Webauftritt statt Theme von der Stange.",
  },
  {
    problem: "Ich werde bei Google kaum gefunden.",
    solution: "SEO ist Teil der Konzeption, nicht nachträglich draufgesetzt.",
  },
  {
    problem: "Ich bekomme zu wenig Anfragen über meine Website.",
    solution: "Klare Nutzerführung und Inhalte, die gezielt zur Anfrage führen.",
  },
  {
    problem: "Meine Website sieht aus wie jede andere in meiner Branche.",
    solution: "Individuelles Design statt austauschbarem Template.",
  },
  {
    problem: "Meine Website lädt spürbar langsam.",
    solution: "Sauber gebaut, damit Besucher nicht abspringen, bevor sie was sehen.",
  },
];

export function Problem() {
  return (
    <section className="border-b border-zinc-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
            Vielleicht kennst du eines dieser Probleme
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col border-t border-zinc-900">
          {PROBLEMS.map((row, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className="grid grid-cols-1 gap-2 border-b border-zinc-900 py-6 sm:grid-cols-2 sm:gap-8"
            >
              <p className="text-zinc-500">„{row.problem}“</p>
              <p className="text-zinc-100">{row.solution}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/website-relaunch"
            className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
          >
            Mehr zum Website-Relaunch →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
