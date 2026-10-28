import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Blocks, Check, Clock, Gauge, Image as ImageIcon, PenLine, SearchCode } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { PageFaq, type FaqItem } from "@/components/PageFaq";
import { ORGANIZATION_ID, SITE_URL, pageOpenGraph } from "@/lib/seo";

const TITLE = "Webdesign: individuelle Websites statt Baukasten | Impova";
const DESCRIPTION =
  "Individuell entwickelte Websites für lokale Unternehmen in Landshut und Niederbayern: SEO-Grundlagen von Anfang an, Änderungen übernehme ich für dich.";

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

// Was in jeder Website steckt. Nur Punkte, die in den Referenzprojekten tatsächlich umgesetzt sind.
const INCLUDED = [
  "Klare Startseite: in wenigen Sekunden ist erkennbar, was du anbietest, wo und für wen",
  "Leistungen übersichtlich gegliedert, damit Besucher und Google verstehen, was du machst",
  "Kontaktwege, die zu deinem Geschäft passen: Anruf mit einem Tipp, Anfrageformular oder Terminanfrage",
  "Echte Google-Bewertungen sichtbar eingebunden statt versteckt",
  "Für das Handy gebaut, weil die meisten Besucher dort zuerst landen",
  "Schnelle Ladezeit und saubere Technik als Grundlage für Google",
  "SEO-Grundlagen: Seitentitel, Beschreibungen, strukturierte Daten und Sitemap",
  "Cookie-Banner mit echter Einwilligung, Impressum und Datenschutz eingebunden",
];

const STEPS = [
  {
    title: "Erstgespräch",
    text: "Wir klären, was du anbietest, wen du erreichen willst und wo du heute stehst. Danach bekommst du ein schriftliches Angebot mit Festpreis für den vereinbarten Umfang.",
  },
  {
    title: "Konzept und Design",
    text: "Aus dem Gespräch entstehen Seitenstruktur, Suchbegriffe und Design. Du siehst den Entwurf, bevor die Umsetzung startet.",
  },
  {
    title: "Umsetzung",
    text: "Deine Website wird gebaut: schnell, für das Handy optimiert und mit SEO-Grundlagen von Anfang an.",
  },
  {
    title: "Launch und danach",
    text: "Live geht die Seite erst nach deiner finalen Freigabe, zum schriftlich vereinbarten Termin. In den ersten 30 Tagen bessere ich kostenlos nach, falls etwas nicht wie vereinbart funktioniert.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "Wie lange dauert es, bis meine neue Website online ist?",
    answer:
      "In der Regel 2 bis 4 Wochen, je nach Umfang. Den Go-Live-Termin legen wir gemeinsam fest und halten ihn schriftlich fest.",
  },
  {
    question: "Was kostet eine Website bei dir?",
    answer:
      "Es gibt zwei getrennte Bausteine: einen Einmalpreis für den Bau, individuell kalkuliert nach Umfang, und auf Wunsch eine monatliche Pflege. Vor dem Start bekommst du ein schriftliches Angebot, und für den darin vereinbarten Umfang gilt der Preis fest.",
  },
  {
    question: "Was muss ich für die Website liefern?",
    answer:
      "Infos zu deinen Leistungen, dein Logo, falls vorhanden, und am besten eigene Fotos von dir, deinem Team oder deiner Arbeit. Was fehlt, klären wir im Erstgespräch.",
  },
  {
    question: "Wer kümmert sich nach dem Launch um Änderungen?",
    answer:
      "Das übernehme ich. Du schickst mir kurz, was sich ändern soll, und ich setze es um. Das ist Teil der monatlichen Pflege, zusammen mit technischen Updates und Monitoring.",
  },
  {
    question: "Werde ich mit der neuen Website automatisch bei Google gefunden?",
    answer:
      "Die Website bekommt saubere SEO-Grundlagen und wird auf die Suchbegriffe deiner Kunden ausgerichtet. Feste Platzierungen kann niemand seriös garantieren. Wo du heute stehst, zeigt dir der kostenlose Sichtbarkeits-Check.",
  },
  {
    question: "Ich habe schon eine Website. Brauche ich eine neue?",
    answer:
      "Nicht unbedingt. Oft lohnt sich ein Relaunch, bei dem Inhalte und Sichtbarkeit, die schon funktionieren, erhalten bleiben. Was in deinem Fall sinnvoll ist, klären wir im Erstgespräch.",
  },
];

const CHANGE_POINTS = [
  { icon: PenLine, text: "Neue Texte und Angebote" },
  { icon: ImageIcon, text: "Neue Bilder und Referenzen" },
  { icon: Clock, text: "Aktuelle Öffnungszeiten und Termine" },
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
      <main id="inhalt">
        <section className="border-b border-white/5 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal immediate>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Webdesign
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Webdesign, das nicht nach Baukasten aussieht.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ich baue Websites für Unternehmen in Landshut und
                Niederbayern, die professionell wirken und Anfragen bringen
                sollen: individuell entwickelt, und Änderungen übernehme ich
                danach für dich.
              </p>
              <div className="mt-10">
                <MagneticButton href="/#kontakt">
                  Website-Projekt besprechen
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Was du bekommst</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Drei Dinge, auf die es bei einer Website wirklich ankommt
              </h2>
            </Reveal>
            <div className="mt-16 border-b border-white/5">
              {PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={i * 0.06}>
                    <div className="group grid grid-cols-1 gap-6 border-t border-white/5 px-2 py-10 transition-colors duration-300 hover:border-zinc-700 md:grid-cols-12 md:items-center md:gap-8">
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

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow>Inhalt</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Was in jeder Website steckt
              </h2>
              <p className="mt-5 max-w-2xl text-zinc-400">
                Egal ob Handwerksbetrieb, Studio oder Restaurant: Diese Grundlagen
                bekommt jede Website, weil sie entscheiden, ob Besucher bleiben und
                ob Google deine Seite versteht.
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="card flex gap-3 p-5 text-zinc-300">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Änderungen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Änderungen übernehme ich für dich
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Du musst dich nicht in ein System einarbeiten. Du schickst mir
                kurz, was sich ändern soll, und ich setze es um, im Rahmen der
                monatlichen Pflege.
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {CHANGE_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.text} className="card p-8">
                    <Icon strokeWidth={1} aria-hidden="true" className="size-8 text-accent" />
                    <p className="mt-6 text-zinc-300">{point.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Ablauf &amp; Preis</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Vier Schritte, ein klares Angebot
              </h2>
              <p className="mt-6 max-w-2xl text-zinc-400">
                In der Regel dauert ein Projekt 2 bis 4 Wochen, je nach Umfang.
                Die Kosten bestehen aus zwei Bausteinen: einem Einmalpreis für den
                Bau und getrennt davon einer monatlichen Pflege mit Änderungen,
                Updates und Monitoring. Wer laufend an seiner Sichtbarkeit bei
                Google arbeiten will, bucht darauf aufbauend die SEO-Betreuung.
              </p>
            </Reveal>
            <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="card p-6">
                  <span className="flex size-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 font-medium text-zinc-100">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <PageFaq title="Häufige Fragen zum Webdesign" faqs={FAQS} />

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="04">Beweis</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Echte Projekte statt Stock-Beispiele
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Statt generischer Vorlagen-Screenshots zeige ich dir reale
                Projekte für lokale Unternehmen aus der Region, mit der
                Ausgangslage, dem, was ich gemacht habe, und dem Ergebnis.
                Passend zu deiner Branche:{" "}
                <Link href="/branchen/handwerker" className="text-accent underline underline-offset-4">
                  Webdesign für Handwerker
                </Link>{" "}
                und{" "}
                <Link href="/branchen/dienstleister" className="text-accent underline underline-offset-4">
                  Webdesign für Dienstleister
                </Link>
                . Aus der Region:{" "}
                <Link href="/standorte/landshut" className="text-accent underline underline-offset-4">
                  Website erstellen lassen in Landshut
                </Link>
                .
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
