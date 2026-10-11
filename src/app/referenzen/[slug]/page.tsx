import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { LivePreview } from "@/components/LivePreview";
import { CaseVisual } from "@/components/CaseVisual";
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
        <section className="border-b border-zinc-900 pb-20 pt-40">
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
              <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                {caseStudy.name}
              </h1>
              {caseStudy.result && (
                <p className="mt-5 max-w-2xl text-xl leading-snug text-zinc-200">
                  <span className="text-accent">{caseStudy.result.headline}</span>{" "}
                  {caseStudy.result.detail}
                </p>
              )}
              {caseStudy.liveUrl && (
                <div className="mt-8">
                  <LivePreview url={caseStudy.liveUrl} label="Website live ansehen" />
                </div>
              )}
            </Reveal>

            <Reveal immediate delay={0.1}>
              <div className="mt-12 overflow-hidden border border-zinc-900">
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

        <section className="border-b border-zinc-900 py-24">
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
              {caseStudy.result ? (
                <>
                  <p className="mt-6 text-2xl font-medium leading-snug text-zinc-50">
                    {caseStudy.result.headline}
                  </p>
                  <p className="mt-2 leading-relaxed text-zinc-300">{caseStudy.result.detail}</p>
                  <p className="mt-4 font-mono text-[11px] text-muted">{caseStudy.result.source}</p>
                </>
              ) : (
                // TODO: Ergebnis mit Zahl in case-studies.ts ergänzen.
                <p className="mt-6 leading-relaxed text-zinc-300">
                  Die Website ist live im Einsatz.
                  {caseStudy.liveUrl && " Wirf oben über die Live-Vorschau selbst einen Blick drauf."}
                </p>
              )}
            </Reveal>
          </div>
        </section>

        {caseStudy.rankingScreenshots.length > 0 && (
          <section className="border-b border-zinc-900 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <Reveal>
                <Eyebrow index="04">Beleg</Eyebrow>
                <h2 className="mt-5 text-3xl font-medium tracking-tight text-zinc-50">
                  So sieht das bei Google aus
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {caseStudy.rankingScreenshots.map((src) => (
                  <div key={src} className="relative aspect-[4/3] border border-zinc-900 bg-zinc-950">
                    <Image
                      src={src}
                      alt={`Google-Suchergebnis mit ${caseStudy.name}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index={caseStudy.rankingScreenshots.length > 0 ? "05" : "04"}>
                Nächster Schritt
              </Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
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
