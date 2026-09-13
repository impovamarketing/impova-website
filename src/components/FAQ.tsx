import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "Was kostet eine Website bei IMPOVA?",
    answer:
      "Es gibt keine Festpreis-Pakete, jedes Projekt wird individuell kalkuliert, abhängig von Umfang, Funktionsumfang und ob WordPress oder eine Custom-Next.js-Lösung passt. Im ersten Gespräch bekommst du ein konkretes, unverbindliches Angebot.",
  },
  {
    question: "Wie lange dauert der Bau einer Website?",
    answer:
      "In der Regel 2 bis 4 Wochen, je nach Umfang und Funktionsumfang des Projekts.",
  },
  {
    question: "Wie läuft ein Projekt konkret ab?",
    answer:
      "In vier Schritten: Erstgespräch zum Kennenlernen und Klären der Anforderungen, dann Konzept und Design, anschließend die technische Umsetzung, und zum Abschluss die Übergabe. Live geht die Seite erst nach 100% Zufriedenheit und finaler Abstimmung mit dir.",
  },
  {
    question: "WordPress oder Next.js, was ist der Unterschied und was passt zu mir?",
    answer:
      "WordPress mit Oxygen Builder eignet sich, wenn du Inhalte später selbst pflegen willst, ohne Entwickler-Wissen. Handgeschriebener Next.js-Code eignet sich, wenn Performance und Individualität im Vordergrund stehen und eine laufende Betreuung durch IMPOVA gewünscht ist. Die Entscheidung wird im Erstgespräch gemeinsam getroffen.",
  },
  {
    question: "Arbeitest du auch mit Kunden außerhalb von Landshut?",
    answer:
      "Ja. Der Standort ist Landshut/Niederbayern, gearbeitet wird komplett remote, deutschlandweit. Vor-Ort-Termine sind bei Bedarf im Raum Landshut möglich, für alle anderen läuft die Zusammenarbeit vollständig digital.",
  },
  {
    question: "Bekomme ich nach dem Launch weiter Unterstützung?",
    answer:
      "Ja. Neben laufender Wartung gibt es einen SEO-Retainer für kontinuierliche Sichtbarkeitsarbeit, und du hast einen festen Ansprechpartner mit einer Antwort innerhalb von 24 Stunden, kein Ticket-System, kein Wechsel zwischen Teammitgliedern.",
  },
  {
    question: "Wer betreut mein Projekt konkret?",
    answer:
      "Ein fester Ansprechpartner von der ersten Anfrage bis zum Launch und darüber hinaus, kein Agentur-Wasserkopf.",
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
                  <span className="shrink-0 font-mono text-xl text-muted motion-safe:transition-transform motion-safe:duration-300 group-open:rotate-45">
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
