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

  return {
    title: `${caseStudy.title} – Impova`,
    description: `${caseStudy.challenge} ${caseStudy.solution}`,
    alternates: {
      canonical: `https://www.impova.de/referenzen/${caseStudy.slug}`,
    },
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
        name: caseStudy.title,
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
      <main>
        <section className="border-b border-zinc-900 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Link
                href="/referenzen"
                className="font-mono text-xs uppercase tracking-wider text-zinc-500 hover:text-accent"
              >
                ← Alle Referenzen
              </Link>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">
                {caseStudy.category}
              </p>
              <h1 className="mt-3 max-w-2xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                {caseStudy.title}
              </h1>
              <div className="mt-8">
                <LivePreview url={caseStudy.liveUrl} label="Website live ansehen" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative mt-12 aspect-[16/9] overflow-hidden border border-zinc-900 grayscale transition-all duration-500 hover:grayscale-0">
                <Image
                  src={caseStudy.image}
                  alt={`Website-Projekt: ${caseStudy.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Ausgangssituation</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Die Herausforderung
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                {caseStudy.challenge}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Lösung</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Was sich geändert hat
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                {caseStudy.solution}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Ergebnis</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Live im Einsatz
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Die Website ist seitdem live — wirf oben über die
                Live-Vorschau selbst einen Blick drauf.
              </p>
              <Link
                href={`/branchen/${caseStudy.branche.slug}`}
                className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
              >
                Weitere Projekte für {caseStudy.branche.label} →
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="04">Nächster Schritt</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Ähnliches Projekt im Kopf?
              </h2>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#kontakt">
                  Website-Projekt besprechen
                </MagneticButton>
                <MagneticButton href="/referenzen" variant="outline">
                  Weitere Referenzen
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
