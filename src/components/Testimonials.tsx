import { Star } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

// Wörtliche Auszüge aus Google-Bewertungen (Stand Oktober 2026). Kürzungen nur mit „…“.
const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=9249107226053014283";
const RATING = "5,0";
const REVIEW_COUNT = 8;

const QUOTES = [
  {
    text: "Tobias von Impova hat unsere neue Website gebaut und die SEO übernommen. Ergebnis: Wir stehen jetzt auf Platz 2 und 3 bei Google für Gartenbau Landshut, Gartenbauer Landshut und Garten- und Landschaftsbau Landshut. Vorher waren wir nirgends zu finden.",
    name: "Nikolas N.",
    context: "Garten- und Landschaftsbau",
  },
  {
    text: "Er hat unsere Homepage komplett gestaltet und sich auch um SEO und alles, was dazugehört, gekümmert – wirklich von A bis Z. … Unsere Sichtbarkeit bei Google hat sich deutlich verbessert und wir stehen mittlerweile bei wichtigen Suchbegriffen auf Platz 1 bzw. Platz 2.",
    name: "Misala A.",
    context: "Google-Bewertung",
  },
  {
    text: "Der gesamte Kontakt war von Anfang bis Ende reibungslos, freundlich und professionell. Tobias ist auf alle meine Wünsche und Vorstellungen eingegangen. … Klare Empfehlung, vielen Dank für die tolle Arbeit!",
    name: "Maria W.",
    context: "Google-Bewertung",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 text-accent ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </span>
  );
}

export function Testimonials({ index = "03" }: { index?: string }) {
  return (
    <section id="kundenstimmen" className="border-b border-zinc-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Eyebrow index={index}>Kundenstimmen</Eyebrow>
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Was Kunden über die Zusammenarbeit sagen
          </h2>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-zinc-300 hover:text-accent"
          >
            <Stars />
            <span>
              <span className="font-medium text-zinc-50">{RATING}</span> bei{" "}
              {REVIEW_COUNT} Google-Bewertungen →
            </span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {QUOTES.map((quote) => (
            <figure
              key={quote.name}
              className="flex flex-col justify-between border border-zinc-900 bg-surface p-6"
            >
              <div>
                <Stars className="mb-4" />
                <blockquote className="text-sm leading-relaxed text-zinc-300">
                  „{quote.text}“
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-zinc-900 pt-4">
                <p className="text-sm text-zinc-100">{quote.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {quote.context}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
