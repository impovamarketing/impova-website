import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { CASE_STUDIES } from "@/app/referenzen/case-studies";

export const metadata: Metadata = {
  title: "Webdesign für Dienstleister – Website für lokale Dienstleistungen | Impova",
  description:
    "Website für lokale Dienstleister: individuelles Design statt Wix-Vorlage, Terminbuchung ohne Reibungsverlust. Mit echten Referenzen aus Landshut.",
  alternates: {
    canonical: "https://www.impova.de/branchen/dienstleister",
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
      name: "Webdesign für Dienstleister",
      item: "https://www.impova.de/branchen/dienstleister",
    },
  ],
};

const REFERENCE_SLUGS = ["barbershop-projekt-landshut", "tattoo-studio-projekt-landshut"];

export default function DienstleisterPage() {
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
                Webdesign für lokale Dienstleister
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ob Barbershop, Studio oder Praxis: Deine Website ist oft der
                erste Eindruck, bevor jemand überhaupt bei dir war. Der
                sollte nicht nach Baukasten aussehen.
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
                Was lokale Dienstleister online oft ausbremst
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Wer online nach einem Termin oder einer Empfehlung sucht,
                  entscheidet in Sekunden, ob eine Website vertrauenswürdig
                  wirkt. Eine Vorlagen-Seite, bei der Terminbuchung oder
                  Bewertungen versteckt sind, kostet dich genau diese
                  Entscheidung.
                </p>
                <p>
                  Gerade in sichtbarkeitsgetriebenen Branchen wie Barbershop,
                  Studio oder Praxis zählt ein Design, das sich von der
                  Konkurrenz im Stadtbild abhebt — nicht ein weiteres Theme,
                  das jeder kennt.
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
                Echte Dienstleister, echte Projekte
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
