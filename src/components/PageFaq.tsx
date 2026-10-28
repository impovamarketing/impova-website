import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export type FaqItem = { question: string; answer: string };

// Fragen-Abschnitt für Unterseiten, inklusive FAQPage-Schema aus denselben Texten.
export function PageFaq({ title, faqs }: { title: string; faqs: FaqItem[] }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="border-b border-white/5 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10 flex max-w-3xl flex-col gap-3">
          {faqs.map((faq) => (
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
  );
}
