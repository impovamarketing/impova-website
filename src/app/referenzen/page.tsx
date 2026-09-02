import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CASE_STUDIES } from "./case-studies";

export const metadata: Metadata = {
  title: "Referenzen – Webdesign-Projekte aus Landshut | Impova",
  description:
    "Echte Webdesign-Projekte für Handwerksbetriebe und lokale Dienstleister aus Landshut und Umgebung — mit Herausforderung, Lösung und Live-Vorschau.",
  alternates: {
    canonical: "https://www.impova.de/referenzen",
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
      name: "Referenzen",
      item: "https://www.impova.de/referenzen",
    },
  ],
};

export default function ReferenzenPage() {
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
                Referenzen
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Echte Projekte statt Portfolio-Vorlagen
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Handwerksbetriebe und lokale Dienstleister aus Landshut und
                Umgebung — jedes Projekt mit echter Herausforderung, echter
                Lösung und einer Live-Vorschau der fertigen Seite.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {CASE_STUDIES.map((caseStudy, i) => (
                <Reveal key={caseStudy.slug} delay={i * 0.08}>
                  <Link
                    href={`/referenzen/${caseStudy.slug}`}
                    className="group block border border-zinc-900 transition-colors duration-300 hover:border-zinc-700"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden border-b border-zinc-900 grayscale transition-all duration-500 group-hover:grayscale-0">
                      <Image
                        src={caseStudy.image}
                        alt={`Website-Projekt: ${caseStudy.title}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                        {caseStudy.category}
                      </p>
                      <h2 className="mt-2 text-lg font-medium text-zinc-50">
                        {caseStudy.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                        {caseStudy.challenge}
                      </p>
                      <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-zinc-400 group-hover:text-accent">
                        Case Study lesen →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
