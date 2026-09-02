import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Blocks, Code2, Edit3, Gauge, SearchCode } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Webdesign Agentur – Individuelle Websites statt Baukasten | Impova",
  description:
    "Webdesign Agentur für Unternehmen, die online professionell wirken wollen: individuell entwickelt, mit SEO von Anfang an. Aus Landshut, für Kunden in ganz Deutschland.",
  alternates: {
    canonical: "https://www.impova.de/webdesign",
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
      name: "Webdesign",
      item: "https://www.impova.de/webdesign",
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
      "Design ist bei mir kein Selbstzweck. Struktur, Texte und Buttons sind so aufgebaut, dass Besucher in den ersten Sekunden verstehen, was du anbietest — und gezielt zur Anfrage geführt werden.",
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

type Path = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const PATHS: Path[] = [
  {
    title: "WordPress mit Oxygen Builder",
    description:
      "Für dich, wenn du Texte und Bilder nach dem Launch selbst ändern willst, ohne mich jedes Mal anzurufen. Sauber aufgesetzt, ohne den Page-Builder-Ballast, den du von typischen WordPress-Seiten kennst.",
    icon: Edit3,
  },
  {
    title: "Handgeschriebener Next.js-Code",
    description:
      "Für dich, wenn du willst, dass ich mich laufend um deine Seite kümmere und Design sowie Ladezeit ganz vorne mitspielen sollen. Jede Zeile Code von Hand geschrieben, für Performance, die sich messen lässt.",
    icon: Code2,
  },
];

export default function WebdesignPage() {
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
                Webdesign
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Webdesign, das nicht nach Baukasten aussieht.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ich baue Websites für Unternehmen, die online professionell
                wirken wollen — ohne Page-Builder-Ballast, ohne Template von
                der Stange. Ob in Landshut oder bundesweit remote.
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
                    <div className="grid grid-cols-1 gap-6 border-t border-zinc-900 px-2 py-10 md:grid-cols-12 md:items-center md:gap-8">
                      <div className="font-mono text-sm text-zinc-700 md:col-span-1">
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
                        className="size-8 text-zinc-600 md:col-span-1 md:justify-self-end"
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
              <Eyebrow index="02">Zwei Wege</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                WordPress oder Next.js — je nachdem, was du brauchst
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Du musst dich nicht vorab für ein System entscheiden. Ich sag
                dir ehrlich, welcher Weg zu deinem Vorhaben passt.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-zinc-900 bg-zinc-900 md:grid-cols-2">
              {PATHS.map((path, i) => {
                const Icon = path.icon;
                return (
                  <Reveal key={path.title} delay={i * 0.08} className="bg-base p-8">
                    <Icon
                      strokeWidth={1}
                      className="size-8 text-zinc-600 transition-colors duration-300 hover:text-accent"
                    />
                    <h3 className="mt-6 text-lg font-medium text-zinc-50">
                      {path.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {path.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>
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
                  Analyse deiner Ausgangssituation, Strategie und
                  Seitenstruktur, Entwicklung, Launch mit Tracking und
                  Monitoring — danach bin ich noch da, kein
                  Abschieds-Handshake. Je nach Umfang dauert das zwischen 1
                  und 4 Wochen.
                </p>
                <p>
                  Ein einfacher Onepager startet ab 999 €. Der genaue Preis
                  hängt vom Umfang deines Projekts ab — nach dem ersten
                  Gespräch bekommst du ein klares Angebot, keine versteckten
                  Zusatzkosten.
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
                Projekte für Handwerksbetriebe und lokale Dienstleister — mit
                der Herausforderung, die dahinterstand, und der Lösung, die
                daraus entstanden ist.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#referenzen">
                  Referenzen ansehen
                </MagneticButton>
                <MagneticButton href="/#kontakt" variant="outline">
                  Website-Projekt besprechen
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
