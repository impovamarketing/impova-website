import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { CASE_STUDIES } from "@/app/referenzen/case-studies";

export const metadata: Metadata = {
  title: "Webdesign Agentur Landshut – Website erstellen lassen | Impova",
  description:
    "Webdesign und SEO für Unternehmen in Landshut: mit Sitz in Essenbach, direkt vor Ort erreichbar. Individuell entwickelt statt Baukasten, mit echten Referenzen aus der Region.",
  alternates: {
    canonical: "https://www.impova.de/standorte/landshut",
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
      name: "Webdesign Landshut",
      item: "https://www.impova.de/standorte/landshut",
    },
  ],
};

export default function LandshutPage() {
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
                Standort
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Webdesign Agentur Landshut
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Mit Sitz in Essenbach, direkt vor den Toren Landshuts. Websites
                für Unternehmen aus der Region — individuell entwickelt,
                nicht aus dem Baukasten.
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
              <Eyebrow index="01">Warum lokal</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Was ein Ansprechpartner aus der Region bringt
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Du sprichst nicht mit einer Agentur irgendwo in
                  Deutschland, die deine Region nicht kennt. Ein persönliches
                  Treffen in oder um Landshut ist möglich, wenn es für dein
                  Projekt hilft — und die Betriebe, die ich bisher umgesetzt
                  habe, kommen aus genau dieser Region.
                </p>
                <p>
                  Gleichzeitig arbeite ich remote genauso zuverlässig mit
                  Kunden außerhalb von Landshut — die lokale Nähe ist ein
                  Plus, keine Voraussetzung.
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
                Echte Projekte aus Landshut
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Vier Betriebe aus der Region, vier Branchen — mit echter
                Herausforderung, echter Lösung und Live-Vorschau der
                fertigen Seite.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-zinc-900 bg-zinc-900 sm:grid-cols-2">
              {CASE_STUDIES.map((caseStudy, i) => (
                <Reveal key={caseStudy.slug} delay={i * 0.06} className="bg-base p-6">
                  <Link
                    href={`/referenzen/${caseStudy.slug}`}
                    className="group block"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                      {caseStudy.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-zinc-50 group-hover:text-accent">
                      {caseStudy.title}
                    </h3>
                    <span className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-zinc-500 group-hover:text-accent">
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
              <Eyebrow index="03">Leistungen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Webdesign, SEO und Conversion
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Wie das im Detail aussieht — inklusive Ablauf, Preis und der
                Wahl zwischen WordPress und Next.js — steht auf der{" "}
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
