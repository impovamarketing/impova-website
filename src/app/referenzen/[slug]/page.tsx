import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { LivePreview } from "@/components/LivePreview";
import { CaseVisual } from "@/components/CaseVisual";
import { CaseResults } from "@/components/CaseResults";
import { pageOpenGraph } from "@/lib/seo";
import { CASE_STUDIES, getCaseStudy } from "../case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/referenzen/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  const title = caseStudy.seoTitle;
  const description = caseStudy.seoDescription;
  const path = `/referenzen/${caseStudy.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.impova.de${path}`,
    },
    ...pageOpenGraph({ title, description, path, image: caseStudy.image }),
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/referenzen/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();
  const hasResults = caseStudy.kpis.length > 0 || caseStudy.screenshots.length > 0;

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
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.name,
        item: `https://www.impova.de/referenzen/${caseStudy.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main id="inhalt">
        <section className="border-b border-white/5 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal immediate>
              <Link
                href="/referenzen"
                className="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent"
              >
                ← Alle Referenzen
              </Link>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">
                {caseStudy.category}
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                {caseStudy.name}
              </h1>
              {caseStudy.highlight && (
                <div className="mt-5 max-w-2xl">
                  <p className="text-xl leading-snug text-zinc-200">{caseStudy.highlight.text}</p>
                  <p className="mt-2 font-mono text-[11px] text-muted">
                    {caseStudy.highlight.source}, {caseStudy.highlight.period}
                  </p>
                </div>
              )}
              {caseStudy.liveUrl && (
                <div className="mt-8">
                  <LivePreview url={caseStudy.liveUrl} label="Website live ansehen" />
                </div>
              )}
            </Reveal>

            <Reveal immediate delay={0.1}>
              <div className="card mt-12 overflow-hidden">
                <CaseVisual
                  caseStudy={caseStudy}
                  aspect="aspect-[16/9]"
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-3 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Ausgangslage</Eyebrow>
              <p className="mt-6 leading-relaxed text-zinc-300">{caseStudy.situation}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <Eyebrow index="02">Maßnahmen</Eyebrow>
              <ul className="mt-6 flex flex-col gap-3">
                {caseStudy.measures.map((measure) => (
                  <li key={measure} className="flex gap-3 text-zinc-300">
                    <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    {measure}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow index="03">Ergebnis</Eyebrow>
              {caseStudy.highlight ? (
                <>
                  <p className="mt-6 text-xl font-medium leading-snug text-zinc-50">
                    {caseStudy.highlight.text}
                  </p>
                  <p className="mt-4 font-mono text-[11px] text-muted">
                    {caseStudy.highlight.source}, {caseStudy.highlight.period}
                  </p>
                </>
              ) : (
                // TODO: Kennzahlen mit Zeitraum und Quelle in case-studies.ts ergänzen.
                <p className="mt-6 leading-relaxed text-zinc-300">
                  Die Website ist live im Einsatz.
                  {caseStudy.liveUrl && " Wirf oben über die Live-Vorschau selbst einen Blick drauf."}
                </p>
              )}
            </Reveal>
          </div>
        </section>

        {hasResults && (
          <section className="border-b border-white/5 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <Reveal>
                <Eyebrow index="04">Ergebnisse in Zahlen</Eyebrow>
                <h2 className="mt-5 text-3xl font-medium tracking-tight text-zinc-50">
                  Was bei Google messbar passiert ist
                </h2>
              </Reveal>
              <div className="mt-10">
                <CaseResults
                  kpis={caseStudy.kpis}
                  note={caseStudy.kpiNote}
                  screenshots={caseStudy.screenshots}
                  name={caseStudy.name}
                />
              </div>
            </div>
          </section>
        )}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index={hasResults ? "05" : "04"}>
                Nächster Schritt
              </Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Wie sichtbar ist dein Unternehmen?
              </h2>
              <p className="mt-5 max-w-xl text-zinc-400">
                Im kostenlosen Sichtbarkeits-Check schaue ich mir an, wie gut
                dich Kunden in deiner Region finden.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#sichtbarkeits-check">
                  Kostenlosen Sichtbarkeits-Check anfordern
                </MagneticButton>
                <MagneticButton href="/referenzen" variant="outline">
                  Weitere Referenzen
                </MagneticButton>
              </div>
              <Link
                href={`/branchen/${caseStudy.branche.slug}`}
                className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
              >
                Webdesign für {caseStudy.branche.label} →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
