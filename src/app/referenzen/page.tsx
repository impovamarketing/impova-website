import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { pageOpenGraph } from "@/lib/seo";
import { CASE_STUDIES } from "./case-studies";

const TITLE = "Referenzen: Webdesign-Projekte aus Landshut | Impova";
const DESCRIPTION =
  "Webdesign-Projekte für lokale Unternehmen aus Landshut und Umgebung: mit Ausgangslage, Maßnahmen und belegten Ergebnissen bei Google, z. B. Platz 2.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.impova.de/referenzen",
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/referenzen" }),
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
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Referenzen
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Echte Projekte statt Portfolio-Vorlagen
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Lokale Unternehmen aus Landshut und Umgebung. Jedes Projekt
                mit Ausgangslage, Maßnahmen und, wo belegt, dem Ergebnis bei
                Google.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {CASE_STUDIES.map((caseStudy, i) => (
                <Reveal key={caseStudy.slug} delay={i * 0.06} className="h-full">
                  <CaseCard caseStudy={caseStudy} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <RelatedLinks current="/referenzen" index="01" />
      </main>
      <Footer />
    </>
  );
}
