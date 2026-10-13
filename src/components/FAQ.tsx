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
      "Es gibt zwei Bausteine: einen Einmalpreis für den Bau deiner Website und, getrennt davon, eine monatliche Pflege. Den Einmalpreis kalkuliere ich individuell nach Umfang. Im ersten Gespräch bekommst du ein konkretes, unverbindliches Angebot.",
  },
  {
    question: "Was ist in der monatlichen Pflege enthalten?",
    answer:
      "Content-Änderungen, die du nicht selbst machen willst, technische Updates und Monitoring, damit Probleme auffallen, bevor Kunden sie merken. Wer zusätzlich laufend an seiner Sichtbarkeit bei Google arbeiten will, bucht darauf aufbauend die SEO-Betreuung, auf Wunsch mit Inhalten als Zusatz.",
  },
  {
    question: "Kann ich Inhalte selbst ändern?",
    answer:
      "Ja. Deine Website bekommt ein einfaches Redaktionssystem (Sanity). Texte, Bilder und Öffnungszeiten änderst du selbst, ohne mich anrufen zu müssen. Für größere Änderungen ist die monatliche Pflege da.",
  },
  {
    question: "Wie lange dauert der Bau einer Website?",
    answer:
      "In der Regel 2 bis 4 Wochen, je nach Umfang und Funktionsumfang des Projekts.",
  },
  {
    question: "Wie läuft ein Projekt konkret ab?",
    answer:
      "In vier Schritten: Erstgespräch zum Kennenlernen und Klären der Anforderungen, dann Konzept und Design, anschließend die Umsetzung und zum Abschluss die Übergabe. Live geht die Seite erst nach finaler Abstimmung mit dir.",
  },
  {
    question: "Was ist der kostenlose Sichtbarkeits-Check?",
    answer:
      "Du nennst mir deine Website, deine Branche und deinen Ort. Ich schaue mir persönlich an, wie gut dich Kunden in deiner Region bei Google finden, und schicke dir innerhalb von 24 Stunden eine kurze Einschätzung mit den wichtigsten Hebeln. Unverbindlich.",
  },
  {
    question: "Arbeitest du auch mit Kunden außerhalb von Landshut?",
    answer:
      "Mein Schwerpunkt sind Unternehmen in Landshut und Niederbayern, Vor-Ort-Termine sind hier möglich. Darüber hinaus arbeite ich auch komplett digital zusammen.",
  },
  {
    question: "Wer betreut mein Projekt konkret?",
    answer:
      "Ich, Tobias Springer. Ein fester Ansprechpartner von der ersten Anfrage bis nach dem Launch, Antwort innerhalb von 24 Stunden, kein Ticket-System und keine Weitergabe an Dritte.",
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
          <Eyebrow index="09">FAQ</Eyebrow>
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
