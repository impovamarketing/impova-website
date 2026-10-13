import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function AdsPilot() {
  return (
    <section id="ads-pilot" className="border-b border-zinc-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 border border-zinc-800 bg-surface p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <Eyebrow index="06">Neu</Eyebrow>
              <h2 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-3xl">
                Anzeigen bei Google und Meta: aktuell im Pilot, begrenzte Plätze
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-400">
                Zusätzlich zu Website und lokaler Sichtbarkeit teste ich gerade
                Anzeigen bei Google sowie auf Facebook und Instagram, mit
                wenigen Kunden und kleinen Budgets. Das ist für mich neu.
                Deshalb gibt es keine Versprechen zu Kosten pro Anfrage, sondern
                einen ehrlichen Test mit offenen Zahlen. Das gilt auch für die
                Mitarbeitersuche per{" "}
                <Link href="/recruiting" className="text-accent underline underline-offset-4">
                  Social Recruiting
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <a
                href="#kontakt"
                className="inline-flex border border-zinc-600 px-5 py-3 font-mono text-xs uppercase tracking-wider text-zinc-100 transition-colors hover:border-accent hover:text-accent"
              >
                Interesse am Pilot melden
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
