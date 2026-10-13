import type { Metadata } from "next";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { CaseCard } from "@/components/CaseCard";
import { CASE_STUDIES } from "@/app/referenzen/case-studies";
import { ADDRESS, EMAIL, GOOGLE_REVIEWS, PHONE } from "@/config/site";
import { pageOpenGraph } from "@/lib/seo";

const TITLE = "Webdesign Landshut: Website erstellen lassen | Impova";
const DESCRIPTION =
  "Webdesign in Landshut mit Sitz in Essenbach: Websites für lokale Unternehmen, die bei Google gefunden werden. Persönlich vor Ort, 5,0 bei Google.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.impova.de/standorte/landshut",
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/standorte/landshut" }),
};

const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${ADDRESS.street}, ${ADDRESS.zip} ${ADDRESS.city}`
)}`;

const LOCAL_SIGNALS = [
  {
    title: "Google-Unternehmensprofil",
    text: "Vollständig, mit den richtigen Kategorien, Leistungen und Fotos. Oft der erste Kontakt, noch vor der Website.",
  },
  {
    title: "Suchbegriffe mit Ortsbezug",
    text: "Kunden suchen nach Leistung plus Ort, etwa „Friseur Landshut“. Genau darauf werden Seiten und Inhalte ausgerichtet.",
  },
  {
    title: "Bewertungen und einheitliche Angaben",
    text: "Echte Bewertungen und überall gleiche Angaben zu Name, Adresse und Telefon stärken das Vertrauen bei Kunden und bei Google.",
  },
];

const FAQS = [
  {
    question: "Kommst du für ein Gespräch auch zu mir nach Landshut?",
    answer:
      "Ja. Mein Sitz ist in Essenbach, direkt vor den Toren Landshuts. Persönliche Termine im Raum Landshut sind möglich, wenn es für dein Projekt hilft. Vieles lässt sich aber auch telefonisch oder per Videocall klären.",
  },
  {
    question: "Wie werde ich bei Google in Landshut besser gefunden?",
    answer:
      "Entscheidend sind ein gepflegtes Google-Unternehmensprofil, eine Website, die auf die Suchbegriffe deiner Kunden mit Ortsbezug ausgerichtet ist, echte Bewertungen und saubere technische Grundlagen. Wo du aktuell stehst, zeigt dir der kostenlose Sichtbarkeits-Check.",
  },
  {
    question: "Was kostet eine Website für ein Unternehmen in Landshut?",
    answer:
      "Es gibt zwei Bausteine: einen Einmalpreis für den Bau, individuell kalkuliert nach Umfang, und getrennt davon eine monatliche Pflege. Im ersten Gespräch bekommst du ein konkretes, unverbindliches Angebot.",
  },
  {
    question: "Arbeitest du nur mit Unternehmen aus Landshut?",
    answer:
      "Mein Schwerpunkt sind Unternehmen in Landshut und Niederbayern. Darüber hinaus ist die Zusammenarbeit auch komplett digital möglich.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: "https://www.impova.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Webdesign Landshut",
      item: "https://www.impova.de/standorte/landshut",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function LandshutPage() {
  const cases = [...CASE_STUDIES].sort(
    (a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="inhalt">
        <section className="border-b border-white/5 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal immediate>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Standort Landshut
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Webdesign in Landshut
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Websites für Unternehmen aus Landshut und Umgebung, die bei Google
                gefunden werden und Anfragen bringen. Persönlich betreut, mit Sitz
                in Essenbach direkt vor den Toren Landshuts.
              </p>
              <a
                href={GOOGLE_REVIEWS.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted hover:text-zinc-100"
              >
                <span className="flex gap-0.5 text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </span>
                <span>
                  <span className="text-zinc-200">{GOOGLE_REVIEWS.rating}</span> bei{" "}
                  {GOOGLE_REVIEWS.count} Google-Bewertungen ({GOOGLE_REVIEWS.asOf})
                </span>
              </a>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#sichtbarkeits-check">
                  Kostenlosen Sichtbarkeits-Check anfordern
                </MagneticButton>
                <MagneticButton href={PHONE.href} variant="outline">
                  Anrufen: {PHONE.display}
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-10">
            <Reveal className="lg:col-span-7">
              <Eyebrow index="01">Warum lokal</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Was ein Ansprechpartner aus der Region bringt
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Du sprichst mit jemandem, der die Region kennt. Ein
                  persönliches Treffen in oder um Landshut ist möglich, wenn es
                  für dein Projekt hilft, und die Betriebe in meinen Referenzen
                  kommen aus genau dieser Region.
                </p>
                <p>
                  Gleichzeitig arbeite ich auch komplett digital mit Kunden
                  außerhalb von Landshut. Die lokale Nähe ist ein Plus, keine
                  Voraussetzung.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <address className="card not-italic p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Kontakt und Anfahrt
                </p>
                <p className="mt-4 text-zinc-100">{ADDRESS.name}</p>
                <p className="mt-1 flex items-start gap-3 text-zinc-300">
                  <MapPin className="mt-1 size-4 shrink-0 text-zinc-600" aria-hidden="true" />
                  <span>
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.zip} {ADDRESS.city}
                  </span>
                </p>
                <a href={PHONE.href} className="mt-3 flex items-center gap-3 text-zinc-300 hover:text-accent">
                  <Phone className="size-4 shrink-0 text-zinc-600" aria-hidden="true" />
                  {PHONE.display}
                </a>
                <a href={`mailto:${EMAIL}`} className="mt-3 flex items-center gap-3 text-zinc-300 hover:text-accent">
                  <Mail className="size-4 shrink-0 text-zinc-600" aria-hidden="true" />
                  {EMAIL}
                </a>
                <div className="mt-6 flex flex-wrap gap-4 border-t border-white/5 pt-5 font-mono text-xs uppercase tracking-wider">
                  <a href={GOOGLE_REVIEWS.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    In Google Maps öffnen →
                  </a>
                  <a href={ROUTE_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Route planen →
                  </a>
                </div>
              </address>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Lokale Sichtbarkeit</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Worauf es bei Google in Landshut ankommt
              </h2>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {LOCAL_SIGNALS.map((signal) => (
                <li key={signal.title} className="card p-6">
                  <p className="font-medium text-zinc-100">{signal.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{signal.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Referenzen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Projekte aus Landshut und Umgebung
              </h2>
              <p className="mt-5 max-w-lg text-zinc-400">
                Jede Case Study zeigt Ausgangslage, Maßnahmen und, wo belegt, das
                Ergebnis bei Google.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {cases.map((caseStudy) => (
                <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="04">FAQ</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Häufige Fragen aus Landshut
              </h2>
            </Reveal>
            <div className="mt-10 flex max-w-3xl flex-col gap-3">
              {FAQS.map((faq) => (
                <details key={faq.question} className="card group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-zinc-50 marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 font-mono text-lg text-accent motion-safe:transition-transform motion-safe:duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-zinc-400">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <RelatedLinks current="/standorte/landshut" index="05" />
      </main>
      <Footer />
    </>
  );
}
