import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "Was kostet eine Website bei Impova?",
    answer:
      "Ein einfacher Onepager startet ab 999 €. Der genaue Preis hängt vom Umfang deines Projekts ab — nach dem ersten Gespräch bekommst du ein klares Angebot, keine versteckten Zusatzkosten.",
  },
  {
    question: "Wie lange dauert ein Projekt von Anfang bis Launch?",
    answer:
      "Je nach Umfang zwischen 1 und 4 Wochen — von der Analyse bis zum Go-Live.",
  },
  {
    question: "WordPress oder Next.js — was ist der Unterschied für mich?",
    answer:
      "Willst du Texte und Bilder später selbst ändern können? Dann WordPress mit Oxygen Builder, sauber und ohne Page-Builder-Ballast. Willst du, dass ich mich laufend um deine Seite kümmere? Dann handgeschriebener Next.js-Code.",
  },
  {
    question: "Ist SEO im Preis enthalten?",
    answer:
      "Ja. SEO ist bei mir Teil der Konzeption von Anfang an, kein nachträgliches Extra, das du separat dazubuchen musst.",
  },
  {
    question: "Wie schnell bekomme ich eine Antwort auf meine Anfrage?",
    answer:
      "Innerhalb von 24 Stunden, persönlich von mir — kein Callcenter, kein Ticketsystem.",
  },
  {
    question:
      "Baust du auch bestehende Websites neu, oder nur komplett neue Projekte?",
    answer:
      "Beides. Ob Neubau oder Website-Relaunch einer bestehenden Seite, der Ablauf ist derselbe: Analyse, Strategie, Entwicklung, Launch.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="border-b border-zinc-900 py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="06">FAQ</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Häufige Fragen
          </h2>
          <p className="mt-5 max-w-lg text-zinc-400">
            Die Antworten, die dir sonst erst im Erstgespräch jemand geben
            würde.
          </p>
        </Reveal>

        <div className="mt-16 flex max-w-3xl flex-col border-t border-zinc-900">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <details className="group border-b border-zinc-900 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-zinc-50 marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="shrink-0 font-mono text-xl text-zinc-600 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
