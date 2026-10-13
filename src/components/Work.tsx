import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { CaseCard } from "./CaseCard";
import { CASE_STUDIES } from "@/app/referenzen/case-studies";

// Belegte Ergebnisse zuerst.
const ORDERED = [...CASE_STUDIES].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

export function Work() {
  return (
    <section id="referenzen" className="border-b border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="02">Referenzen</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            Echte Projekte aus der Region, mit Ergebnis
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            Jede Case Study zeigt Ausgangslage, Maßnahmen und, wo belegt, das
            Ergebnis bei Google.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {ORDERED.map((caseStudy, i) => (
            <Reveal key={caseStudy.slug} delay={i * 0.06} className="h-full">
              <CaseCard caseStudy={caseStudy} />
            </Reveal>
          ))}
        </div>

        <Link
          href="/referenzen"
          className="mt-10 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
        >
          Alle Referenzen ansehen →
        </Link>
      </div>
    </section>
  );
}
