import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Blocks, Clock, Gauge, Image as ImageIcon, PenLine, SearchCode } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { ORGANIZATION_ID, SITE_URL, pageOpenGraph } from "@/lib/seo";

const TITLE = "Webdesign: individuelle Websites statt Baukasten | Impova";
const DESCRIPTION =
  "Individuell entwickelte Websites für lokale Unternehmen in Landshut und Niederbayern: SEO-Grundlagen von Anfang an und ein CMS zum Selbstpflegen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.impova.de/webdesign",
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/webdesign" }),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: "https://www.impova.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Webdesign",
      item: "https://www.impova.de/webdesign",
    },
  ],
};

const areaServed = [
  { "@type": "City", name: "Landshut" },
  { "@type": "AdministrativeArea", name: "Niederbayern" },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/webdesign#service-webdesign`,
      name: "Webdesign",
      serviceType: "Webdesign",
      description:
        "Individuell entwickelte Websites für Unternehmen, die online professionell wirken und Anfragen gewinnen wollen.",
      provider: { "@id": ORGANIZATION_ID },
      areaServed,
      url: `${SITE_URL}/webdesign`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/webdesign#service-seo`,
      name: "SEO",
      serviceType: "Suchmaschinenoptimierung",
      description:
        "SEO als Teil der Konzeption: technisch sauber und inhaltlich auf die Suchbegriffe ausgerichtet, die Kunden in der Region eingeben.",
      provider: { "@id": ORGANIZATION_ID },
      areaServed,
      url: `${SITE_URL}/webdesign`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/webdesign#service-conversion`,
      name: "Conversion & Nutzerführung",
      serviceType: "Conversion-Optimierung",
      description:
        "Struktur, Inhalte und Buttons so aufgebaut, dass Besucher gezielt zur Anfrage geführt werden statt abzuspringen.",
      provider: { "@id": ORGANIZATION_ID },
      areaServed,
      url: `${SITE_URL}/webdesign`,
    },
  ],
};

type Pillar = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  {
    index: "01",
    title: "Individuell entwickelt",
    description:
      "Kein Theme, das du an zehn anderen Websites in deiner Branche wiedererkennst. Jede Seite wird für dein Geschäftsmodell konzipiert, nicht in ein fertiges Raster gepresst.",
    icon: Blocks,
  },
  {
    index: "02",
    title: "Auf Anfragen ausgerichtet",
    description:
      "Design ist bei mir kein Selbstzweck. Struktur, Texte und Buttons sind so aufgebaut, dass Besucher in den ersten Sekunden verstehen, was du anbietest, und gezielt zur Anfrage geführt werden.",
    icon: Gauge,
  },
  {
    index: "03",
    title: "SEO von Anfang an mitgedacht",
    description:
      "SEO wird nicht nachträglich draufgesetzt, sondern ist Teil der Konzeption: saubere technische Grundlage, sinnvolle Struktur, Inhalte auf deine Suchbegriffe ausgerichtet.",
    icon: SearchCode,
  },
];

const CMS_POINTS = [
  { icon: PenLine, text: "Texte und Angebote selbst ändern" },
  { icon: ImageIcon, text: "Bilder austauschen, ohne etwas kaputt zu machen" },
  { icon: Clock, text: "Öffnungszeiten und Termine aktuell halten" },
];

export default function WebdesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Header />
      <main>
        <section className="border-b border-zinc-900 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Webdesign
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Webdesign, das nicht nach Baukasten aussieht.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ich baue Websites für Unternehmen in Landshut und
                Niederbayern, die professionell wirken und Anfragen bringen
                sollen: individuell entwickelt, mit einem CMS, in dem du Inhalte
                selbst pflegst.
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
              <Eyebrow index="01">Was du bekommst</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Drei Dinge, auf die es bei einer Website wirklich ankommt
              </h2>
            </Reveal>
            <div className="mt-16 border-b border-zinc-900">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={i * 0.06}>
                    <div className="group grid grid-cols-1 gap-6 border-t border-zinc-900 px-2 py-10 transition-colors duration-300 hover:border-zinc-700 md:grid-cols-12 md:items-center md:gap-8">
                      <div className="font-mono text-sm text-muted md:col-span-1">
                        {pillar.index}
                      </div>
                      <div className="md:col-span-4">
                        <h3 className="text-xl font-medium tracking-tight text-zinc-50 sm:text-2xl">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-zinc-400 md:col-span-6">
                        {pillar.description}
                      </p>
                      <Icon
                        strokeWidth={1}
                        className="size-8 text-zinc-600 transition-all duration-300 group-hover:text-accent motion-safe:group-hover:scale-110 md:col-span-1 md:justify-self-end"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Selbst pflegen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Individuell entwickelt, mit CMS zum Selbstpflegen
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Deine Website wird für dich entwickelt. Kleine Änderungen
                machst du trotzdem selbst, in einem einfachen
                Redaktionssystem (Sanity), ohne mich anrufen zu müssen.
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-zinc-900 bg-zinc-900 md:grid-cols-3">
              {CMS_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.text} className="bg-base p-8">
                    <Icon strokeWidth={1} aria-hidden="true" className="size-8 text-accent" />
                    <p className="mt-6 text-zinc-300">{point.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Ablauf &amp; Preis</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Vier Schritte, ein klares Angebot
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Vier Schritte: Erstgespräch zum Kennenlernen und Klären
                  der Anforderungen, dann Konzept und Design, anschließend
                  die Umsetzung, zum Abschluss die Übergabe. Live geht die
                  Seite erst nach finaler Abstimmung mit dir. In der Regel
                  dauert das 2 bis 4 Wochen, je nach Umfang.
                </p>
                <p>
                  Die Kosten bestehen aus zwei Bausteinen: einem Einmalpreis
                  für den Bau, individuell kalkuliert nach Umfang, und
                  getrennt davon einer monatlichen Pflege mit
                  Content-Änderungen, Updates und Monitoring. Wer laufend an
                  seiner Sichtbarkeit bei Google arbeiten will, bucht darauf
                  aufbauend die SEO-Betreuung. Im ersten Gespräch bekommst du
                  ein konkretes, unverbindliches Angebot.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="04">Beweis</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Echte Projekte statt Stock-Beispiele
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Statt generischer Vorlagen-Screenshots zeige ich dir reale
                Projekte für lokale Unternehmen aus der Region, mit der
                Ausgangslage, dem, was ich gemacht habe, und dem Ergebnis.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/referenzen">
                  Referenzen ansehen
                </MagneticButton>
                <MagneticButton href="/#kontakt" variant="outline">
                  Website-Projekt besprechen
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>
        <RelatedLinks current="/webdesign" index="05" />
      </main>
      <Footer />
    </>
  );
}
