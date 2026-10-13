import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { SITE_URL, pageOpenGraph } from "@/lib/seo";

const TITLE = "Anzeigen bei Google und Meta im Pilot | Impova";
const DESCRIPTION =
  "Google-Anzeigen und Werbung auf Facebook und Instagram für lokale Unternehmen in Landshut: aktuell im Pilot, mit kleinen Budgets und offenen Zahlen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/anzeigen`,
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/anzeigen" }),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Anzeigen", item: `${SITE_URL}/anzeigen` },
  ],
};

const CHANNELS = [
  {
    title: "Google-Anzeigen",
    text: "Anzeigen für die Suchbegriffe, die Kunden in deiner Region eingeben, wenn sie genau dein Angebot brauchen.",
  },
  {
    title: "Facebook und Instagram",
    text: "Anzeigen für Menschen in deiner Region, die noch nicht aktiv suchen, aber zu deinen Kunden passen.",
  },
  {
    title: "Social Recruiting",
    text: "Stellenanzeigen auf Facebook und Instagram, wenn du statt Kunden Mitarbeiter suchst.",
    href: "/recruiting",
  },
];

export default function AnzeigenPage() {
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
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Neu: Anzeigen im Pilot
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Anzeigen bei Google und Meta, ehrlich als Test
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Zusätzlich zu Website und lokaler Sichtbarkeit teste ich gerade
                Anzeigen bei Google sowie auf Facebook und Instagram, mit wenigen
                Kunden und kleinen Budgets.
              </p>
              <div className="mt-10">
                <MagneticButton href="/#kontakt">Interesse am Pilot melden</MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Kanäle</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Was ich im Pilot teste
              </h2>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-px border border-zinc-900 bg-zinc-900 md:grid-cols-3">
              {CHANNELS.map((channel) => (
                <li key={channel.title} className="bg-base p-6">
                  <p className="font-medium text-zinc-100">{channel.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{channel.text}</p>
                  {channel.href && (
                    <Link
                      href={channel.href}
                      className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
                    >
                      Mehr zu Social Recruiting →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="border border-zinc-800 bg-surface p-8 sm:p-10">
                <Eyebrow index="02">Ehrlich gesagt</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-3xl">
                  Neu für mich, deshalb keine Versprechen
                </h2>
                <p className="mt-4 max-w-2xl text-zinc-400">
                  Anzeigen sind für mich neu. Deshalb gibt es keine Versprechen
                  zu Kosten pro Anfrage, sondern einen ehrlichen Test mit offenen
                  Zahlen. Die Grundlage bleibt eine Website, die überzeugt: Ohne
                  sie verpufft auch das beste Werbebudget.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton href="/#kontakt">Interesse am Pilot melden</MagneticButton>
                  <MagneticButton href="/webdesign" variant="outline">
                    Zuerst die Website
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <RelatedLinks current="/anzeigen" index="03" />
      </main>
      <Footer />
    </>
  );
}
