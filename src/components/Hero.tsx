import Image from "next/image";
import { Search, Star } from "lucide-react";
import { StatusDot } from "./StatusDot";
import { MagneticButton } from "./MagneticButton";
import { HeroSignalField } from "./HeroSignalField";
import { BOOKING, GOOGLE_REVIEWS, PROJECT_SLOTS } from "@/config/site";
import { getCaseStudy } from "@/app/referenzen/case-studies";

// Beleg im Startbereich: Kernaussage einer Case Study mit Zeitraum und Quelle.
const PROOF_CASE = getCaseStudy("gebaeudeservice-projekt-landshut");
const PROOF_KPI = PROOF_CASE?.kpis[0];

const PORTRAIT = "/images/portraits/founder-portrait.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-48 sm:pt-64 lg:min-h-screen lg:pt-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.03]" />
      <HeroSignalField />

      {/* Porträt als Hintergrund, läuft zur Textseite hin ins Schwarz aus. */}
      <div className="pointer-events-none absolute right-0 top-0 h-[560px] w-full sm:h-[640px] lg:inset-y-0 lg:h-auto lg:w-[56%]">
        <Image
          src={PORTRAIT}
          alt="Tobias Springer, Gründer von Impova"
          fill
          preload
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover object-[50%_0%] opacity-80 lg:object-[45%_14%] lg:opacity-100"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-base via-base/25 to-transparent lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/80 to-base [background-size:100%_100%] lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-base via-base/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-base/60 to-transparent" />
      </div>
      <div className="glow -top-48 left-[-15%] h-[560px] w-[560px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-7">
          {PROJECT_SLOTS.show && (
            <div className="animate-rise">
              <StatusDot
                label={`Aktuell ${PROJECT_SLOTS.free} von ${PROJECT_SLOTS.total} Projektplätzen frei`}
                tone="green"
              />
            </div>
          )}

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Webdesign und lokale Sichtbarkeit in Landshut und Niederbayern
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-50 [text-wrap:balance] sm:text-6xl lg:text-[4.25rem]">
              Mehr Anfragen für dein Unternehmen aus der Region.
            </h1>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              Ich baue Websites, die bei Google gefunden werden und Besucher zur
              Anfrage führen.
              {PROOF_CASE?.highlight && (
                <>
                  {" "}Ein Beispiel aus der Region, {PROOF_CASE.name}:{" "}
                  <span className="text-zinc-200">{PROOF_CASE.highlight.text}.</span>
                </>
              )}
            </p>
            {PROOF_CASE?.highlight && (
              <p className="mt-2 font-mono text-[11px] text-muted">
                Quelle: {PROOF_CASE.highlight.source}, {PROOF_CASE.highlight.period}
              </p>
            )}
          </div>

          <div className="animate-rise flex flex-wrap items-center gap-3 pt-1 [animation-delay:0.1s] sm:gap-4">
            <MagneticButton href="#sichtbarkeits-check">
              Kostenlosen Sichtbarkeits-Check anfordern
            </MagneticButton>
            <MagneticButton href={BOOKING.href} variant="outline">
              {BOOKING.label}
            </MagneticButton>
          </div>

          <div className="animate-rise flex flex-wrap items-center gap-x-8 gap-y-4 pt-2 text-sm text-zinc-400 [animation-delay:0.2s]">
            <a
              href={GOOGLE_REVIEWS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-zinc-100"
            >
              <span className="flex gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span>
                <span className="font-medium text-zinc-100">{GOOGLE_REVIEWS.rating}</span> bei{" "}
                {GOOGLE_REVIEWS.count} Google-Bewertungen ({GOOGLE_REVIEWS.asOf})
              </span>
            </a>
            <span>
              <span className="font-medium text-zinc-100">Tobias Springer</span>, persönlich aus
              Essenbach bei Landshut
            </span>
          </div>
        </div>

        <div className="relative hidden h-[520px] lg:col-span-5 lg:block">
          <div className="card absolute right-4 top-6 flex items-center gap-3 rounded-full bg-base/80 px-5 py-3 shadow-[0_16px_40px_-12px_rgb(0_0_0/0.9)]">
            <Search className="size-4 text-zinc-400" aria-hidden="true" />
            <span className="text-sm text-zinc-200">webdesign landshut</span>
          </div>

          {PROOF_CASE && PROOF_KPI && (
            <div className="card absolute bottom-6 left-0 max-w-[270px] bg-base/90 p-5 shadow-[0_16px_40px_-12px_rgb(0_0_0/0.9)]">
              <p className="text-3xl font-semibold tabular-nums text-zinc-50">{PROOF_KPI.value}</p>
              <p className="mt-1 text-sm leading-snug text-zinc-300">{PROOF_KPI.label}</p>
              <p className="mt-3 font-mono text-[10px] leading-relaxed text-muted">
                {PROOF_CASE.name}
                <br />
                {PROOF_KPI.source}, {PROOF_KPI.period}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
