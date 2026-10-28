import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { CaseCard } from "@/components/CaseCard";
import { PageFaq, type FaqItem } from "@/components/PageFaq";
import { Check } from "lucide-react";
import { CASE_STUDIES } from "@/app/referenzen/case-studies";
import { pageOpenGraph } from "@/lib/seo";

const TITLE = "Webdesign für Dienstleister in Landshut | Impova";
const DESCRIPTION =
  "Websites für lokale Dienstleister in Landshut und Niederbayern: gefunden werden, überzeugen, Anfragen bekommen. Persönlich betreut, mit Referenzen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.impova.de/branchen/dienstleister",
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/branchen/dienstleister" }),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: "https://www.impova.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Webdesign für Dienstleister",
      item: "https://www.impova.de/branchen/dienstleister",
    },
  ],
};

const REFERENCE_SLUGS = [
  "barbershop-projekt-landshut",
  "tattoo-studio-projekt-landshut",
  "custom-tattoo-studio-projekt-landshut",
  "grillhaus-projekt-attenkirchen",
];

const NEEDS = [
  "Termin- oder Reservierungsweg sofort sichtbar, etwa per WhatsApp, Telefon oder Anfrage",
  "Echte Google-Bewertungen weit oben statt versteckt",
  "Eigene Bildsprache, die zu deinem Laden passt, statt einer Vorlage, die jeder kennt",
  "Portfolio oder Bilder deiner Arbeit im Mittelpunkt, wo es darauf ankommt",
  "Öffnungszeiten und Anfahrt mit einem Tipp erreichbar",
  "Für das Handy gebaut, weil Termine meist unterwegs gesucht werden",
  "Ausrichtung auf Suchbegriffe wie Leistung plus Ort, etwa „Barbershop Landshut“",
  "Schnelle Ladezeit, damit niemand abspringt, bevor die Seite steht",
];

const FAQS: FaqItem[] = [
  {
    question: "Ich bekomme meine Kunden über Instagram. Brauche ich trotzdem eine Website?",
    answer:
      "Instagram zeigt deine Arbeit, aber wer bei Google nach deiner Leistung in Landshut sucht, findet dort deine Website und dein Google-Profil. Die Website ist der Ort, an dem Bewertungen, Leistungen, Öffnungszeiten und Terminweg zusammenkommen.",
  },
  {
    question: "Kann ich meine Terminbuchung oder WhatsApp einbinden?",
    answer:
      "Ja. Bei Sero's Barbershop läuft die Terminanfrage zum Beispiel direkt über WhatsApp. Welcher Weg zu dir passt, klären wir im Erstgespräch.",
  },
  {
    question: "Wie zeige ich meine Arbeit am besten?",
    answer:
      "Mit eigenen Bildern im Mittelpunkt der Seite, ruhig gestaltet, damit die Arbeit wirkt. Bei Nox Aeterna und Matthias Tattooz ist das Portfolio deshalb das Herzstück der Seite.",
  },
  {
    question: "Was kostet eine Website für meinen Laden?",
    answer:
      "Es gibt zwei getrennte Bausteine: einen Einmalpreis für den Bau, individuell kalkuliert nach Umfang, und auf Wunsch eine monatliche Pflege. Vor dem Start bekommst du ein schriftliches Angebot mit Festpreis für den vereinbarten Umfang.",
  },
  {
    question: "Wie schnell ist die Website online?",
    answer:
      "In der Regel 2 bis 4 Wochen, je nach Umfang. Den Go-Live-Termin legen wir gemeinsam fest und halten ihn schriftlich fest.",
  },
];

export default function DienstleisterPage() {
  const references = CASE_STUDIES.filter((c) => REFERENCE_SLUGS.includes(c.slug));

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
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Branche
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Webdesign für lokale Dienstleister
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ob Barbershop, Studio oder Praxis: Deine Website ist oft der
                erste Eindruck, bevor jemand überhaupt bei dir war. Der
                sollte nicht nach Baukasten aussehen.
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
              <Eyebrow index="01">Herausforderung</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Was lokale Dienstleister online oft ausbremst
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Wer online nach einem Termin oder einer Empfehlung sucht,
                  entscheidet in Sekunden, ob eine Website vertrauenswürdig
                  wirkt. Eine Vorlagen-Seite, bei der Terminbuchung oder
                  Bewertungen versteckt sind, kostet dich genau diese
                  Entscheidung.
                </p>
                <p>
                  Gerade in sichtbarkeitsgetriebenen Branchen wie Barbershop,
                  Studio oder Praxis zählt ein Design, das sich von der
                  Konkurrenz im Stadtbild abhebt, nicht ein weiteres Theme,
                  das jeder kennt.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow>Worauf es ankommt</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Was eine Website für lokale Dienstleister leisten muss
              </h2>
              <p className="mt-5 max-w-2xl text-zinc-400">
                Ob Barbershop, Tattoo-Studio oder Restaurant: Besucher wollen schnell wissen, ob du zu ihnen passt und wie sie einen Termin bekommen. Diese Punkte stecken in jeder Dienstleister-Website, die ich baue.
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {NEEDS.map((need) => (
                <li key={need} className="card flex gap-3 p-5 text-zinc-300">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  {need}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Referenzen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Echte Dienstleister, echte Projekte
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {references.map((caseStudy, i) => (
                <Reveal key={caseStudy.slug} delay={i * 0.06} className="h-full">
                  <CaseCard caseStudy={caseStudy} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <PageFaq title="Häufige Fragen von Dienstleistern" faqs={FAQS} />

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Umsetzung</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Wie deine Website aussehen könnte
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Wie ein Projekt abläuft und was es kostet, steht auf der Seite{" "}
                <Link href="/webdesign" className="text-accent underline underline-offset-4">
                  Webdesign
                </Link>
                . Wenn du aus der Region kommst, findest du alles Weitere unter{" "}
                <Link href="/standorte/landshut" className="text-accent underline underline-offset-4">
                  Website erstellen lassen in Landshut
                </Link>
                . Und wenn du schon eine Website hast, lies dir den{" "}
                <Link href="/website-relaunch" className="text-accent underline underline-offset-4">
                  Website-Relaunch
                </Link>{" "}
                durch.
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
        <RelatedLinks current="/branchen/dienstleister" index="04" />
      </main>
      <Footer />
    </>
  );
}
