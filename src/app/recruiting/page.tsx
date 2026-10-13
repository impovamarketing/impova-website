import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { PHONE } from "@/config/site";
import { ORGANIZATION_ID, SITE_URL, pageOpenGraph } from "@/lib/seo";

const TITLE = "Social Recruiting Landshut: Mitarbeiter finden | Impova";
const DESCRIPTION =
  "Social Recruiting für Betriebe in Landshut und Niederbayern: Stellenanzeigen auf Facebook und Instagram, mit Bewerbung in wenigen Klicks am Handy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/recruiting`,
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/recruiting" }),
};

const PAINS = [
  "Deine Stellenanzeige im Jobportal bringt kaum oder keine passenden Bewerbungen.",
  "Gute Leute arbeiten längst woanders und suchen gar nicht aktiv nach einem neuen Job.",
  "Du musst Aufträge verschieben oder absagen, weil dir Leute fehlen.",
  "Anschreiben und Lebenslauf schrecken genau die Bewerber ab, die du eigentlich willst.",
];

const STEPS = [
  {
    title: "Gespräch",
    text: "Wir klären, wen du suchst, was die Stelle ausmacht und was deinen Betrieb als Arbeitgeber attraktiv macht.",
  },
  {
    title: "Bewerbungsseite",
    text: "Eine kurze Seite, die am Handy funktioniert: Bewerbung in wenigen Klicks, ohne Pflicht zu Anschreiben oder Lebenslauf.",
  },
  {
    title: "Anzeigen",
    text: "Stellenanzeigen auf Facebook und Instagram, gezielt für Menschen in deiner Region.",
  },
  {
    title: "Bewerbungen",
    text: "Die Bewerbungen kommen direkt bei dir an. Du bekommst einen Zwischenstand mit offenen Zahlen.",
  },
];

const FAQS = [
  {
    question: "Für welche Stellen eignet sich Social Recruiting?",
    answer:
      "Vor allem für Stellen, bei denen gute Leute selten aktiv suchen, zum Beispiel im Handwerk, in der Pflege, in der Gastronomie oder im Büro. Ob es für deine Stelle passt, klären wir im ersten Gespräch.",
  },
  {
    question: "Brauche ich dafür eine neue Website?",
    answer:
      "Nein. Die Anzeigen führen auf eine eigene, kurze Bewerbungsseite. Deine bestehende Website bleibt, wie sie ist.",
  },
  {
    question: "Wie viele Bewerbungen bekomme ich?",
    answer:
      "Das hängt von Stelle, Region und Budget ab. Weil Social Recruiting für mich neu ist und ich es gerade mit wenigen Betrieben teste, nenne ich bewusst keine Zahlen im Voraus. Du siehst während der Kampagne offen, was ankommt.",
  },
  {
    question: "Was kostet Social Recruiting?",
    answer:
      "Das besprechen wir im ersten Gespräch. Die Kosten hängen von der Stelle, der Region und dem Werbebudget ab. Du bekommst vorab ein konkretes, unverbindliches Angebot.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Social Recruiting",
      item: `${SITE_URL}/recruiting`,
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Social Recruiting",
  name: "Social Recruiting über Facebook und Instagram",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: [
    { "@type": "City", name: "Landshut" },
    { "@type": "AdministrativeArea", name: "Niederbayern" },
  ],
  url: `${SITE_URL}/recruiting`,
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

export default function RecruitingPage() {
  return (
    <>
      {[breadcrumbJsonLd, serviceJsonLd, faqJsonLd].map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Header />
      <main id="inhalt">
        <section className="border-b border-zinc-900 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal immediate>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Social Recruiting in Landshut und Niederbayern
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Mitarbeiter finden, die gar nicht aktiv suchen.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Viele gute Fachkräfte schauen nie auf Jobportale, sind aber
                jeden Tag auf Facebook und Instagram. Mit Social Recruiting
                erreichst du genau diese Menschen in deiner Region, mit einer
                Bewerbung, die am Handy in wenigen Minuten erledigt ist.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#kontakt">Recruiting-Gespräch anfragen</MagneticButton>
                <MagneticButton href={PHONE.href} variant="outline">
                  Anrufen: {PHONE.display}
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Ausgangslage</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Kommt dir das bekannt vor?
              </h2>
            </Reveal>
            <div className="mt-10 flex flex-col border-t border-zinc-900">
              {PAINS.map((pain, i) => (
                <Reveal key={pain} delay={i * 0.05} className="border-b border-zinc-900 py-5">
                  <p className="text-zinc-300">{pain}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Ablauf</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                So kommst du zu Bewerbungen
              </h2>
            </Reveal>
            <ol className="mt-10 grid grid-cols-1 gap-px border border-zinc-900 bg-zinc-900 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="bg-base p-6">
                  <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-3 font-medium text-zinc-100">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="border border-zinc-800 bg-surface p-8 sm:p-10">
                <Eyebrow index="03">Ehrlich gesagt</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-3xl">
                  Neu bei mir: Social Recruiting im Pilot
                </h2>
                <p className="mt-4 max-w-2xl text-zinc-400">
                  Anzeigen auf Facebook und Instagram, auch für die
                  Mitarbeitersuche, teste ich gerade mit wenigen Betrieben und
                  kleinen Budgets. Deshalb gibt es von mir keine Versprechen zu
                  Kosten pro Bewerbung oder zur Zahl der Bewerbungen, sondern
                  einen ehrlichen Test mit offenen Zahlen.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="04">FAQ</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Häufige Fragen zum Social Recruiting
              </h2>
            </Reveal>
            <div className="mt-10 flex max-w-3xl flex-col border-t border-zinc-900">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group border-b border-zinc-900 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-zinc-50 marker:content-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 font-mono text-xl text-muted motion-safe:transition-transform motion-safe:duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-zinc-400">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticButton href="/#kontakt">Recruiting-Gespräch anfragen</MagneticButton>
            </div>
          </div>
        </section>
        <RelatedLinks current="/recruiting" index="05" />
      </main>
      <Footer />
    </>
  );
}
