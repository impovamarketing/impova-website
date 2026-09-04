import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { CASE_STUDIES } from "@/app/referenzen/case-studies";

export const metadata: Metadata = {
  title: "Webdesign für Handwerker – Website für Handwerksbetriebe | Impova",
  description:
    "Website für Handwerksbetriebe: klare Leistungsübersicht, Vertrauenssignale statt Textwüste, direkt zur Anfrage geführt. Mit echten Referenzen aus Landshut.",
  alternates: {
    canonical: "https://www.impova.de/branchen/handwerker",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: "https://www.impova.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Webdesign für Handwerker",
      item: "https://www.impova.de/branchen/handwerker",
    },
  ],
};

const REFERENCE_SLUGS = ["gebaeudeservice-projekt-landshut", "baumpflege-projekt-landshut"];

export default function HandwerkerPage() {
  const references = CASE_STUDIES.filter((c) => REFERENCE_SLUGS.includes(c.slug));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <section className="border-b border-zinc-900 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                Branche
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Webdesign für Handwerksbetriebe
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Deine Arbeit spricht für sich — deine Website oft nicht. Ich
                baue Websites, die zeigen, was du kannst, statt es zu
                verstecken.
              </p>
              <div className="mt-10">
                <MagneticButton href="/#kontakt">
                  Website-Projekt besprechen
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Herausforderung</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Was Handwerksbetriebe online oft ausbremst
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Viele Handwerksbetriebe haben jahrelange Erfahrung und
                  zufriedene Kunden — aber online ist davon nichts zu sehen.
                  Die Website wirkt wie ein digitales Visitenkärtchen statt
                  wie ein Beweis für Kompetenz.
                </p>
                <p>
                  Gerade wenn du Gewerbekunden oder Hausverwaltungen
                  überzeugen willst, zählt der erste Eindruck: klare
                  Leistungsübersicht, sichtbare Erfahrung, ein fester
                  Ansprechpartner statt eines anonymen Kontaktformulars.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Referenzen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Echte Handwerksbetriebe, echte Projekte
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-zinc-900 bg-zinc-900 sm:grid-cols-2">
              {references.map((caseStudy, i) => (
                <Reveal key={caseStudy.slug} delay={i * 0.06} className="bg-base p-6">
                  <Link href={`/referenzen/${caseStudy.slug}`} className="group block">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                      {caseStudy.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-zinc-50 group-hover:text-accent">
                      {caseStudy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {caseStudy.challenge}
                    </p>
                    <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-zinc-500 group-hover:text-accent">
                      Case Study lesen →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Umsetzung</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Wie deine Website aussehen könnte
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Ablauf, Preis und die Wahl zwischen WordPress und Next.js
                stehen auf der{" "}
                <Link href="/webdesign" className="text-accent hover:underline">
                  Webdesign-Seite
                </Link>
                .
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#kontakt">
                  Website-Projekt besprechen
                </MagneticButton>
                <MagneticButton href="/webdesign" variant="outline">
                  Mehr zu Webdesign
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
