import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { LeadForm } from "@/components/LeadForm";
import { PROJECTS } from "@/components/Work";
import { CookieSettingsButton } from "@/components/CookieConsent";

// Zielseite für bezahlte Anzeigen: bewusst ohne Navigation und nicht im Index.
export const metadata: Metadata = {
  title: "Website, die Anfragen bringt – Impova",
  description:
    "Individuelle Websites für Handwerker und Dienstleister, persönlich betreut. Jetzt unverbindlich anfragen.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    title: "Anfrage",
    text: "Du beschreibst kurz, was du vorhast. Dauert zwei Minuten.",
  },
  {
    title: "Gespräch",
    text: "Wir klären Ziele, Umfang und Zeitrahmen. Danach bekommst du ein individuelles Angebot.",
  },
  {
    title: "Umsetzung",
    text: "Ich baue deine Website und betreue dich persönlich bis zum Launch.",
  },
];

const POINTS = [
  "Individuell entwickelt statt Baukasten-Vorlage",
  "Ein fester Ansprechpartner, kein Agentur-Pingpong",
  "Aufgebaut, um Anfragen zu bringen, nicht nur um gut auszusehen",
];

export default function AnfragePage() {
  return (
    <>
      <header className="border-b border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-100"
          >
            IMPOVA<span className="text-accent">.</span>
          </Link>
          <a
            href="#anfrage"
            className="font-mono text-xs uppercase tracking-wider text-accent hover:underline"
          >
            Anfragen →
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-zinc-900 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Webdesign für Handwerker &amp; Dienstleister
              </p>
              <h1 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-zinc-50 [text-wrap:balance] sm:text-5xl">
                Deine Website sollte Anfragen bringen. Nicht nur gut aussehen.
              </h1>
              <ul className="mt-8 flex flex-col gap-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-zinc-300">
                    <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#anfrage"
                className="mt-10 inline-flex bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wider text-base transition-colors hover:bg-white"
              >
                Unverbindlich anfragen
              </a>
            </div>
            <div className="flex items-end gap-4 lg:col-span-4 lg:flex-col lg:items-start">
              <div className="relative h-40 w-32 shrink-0 overflow-hidden border border-zinc-800 grayscale sm:h-56 sm:w-44">
                <Image
                  src="/images/portraits/founder-portrait.jpeg"
                  alt="Tobias Springer, Gründer von Impova"
                  fill
                  className="object-cover object-[50%_18%]"
                  sizes="176px"
                  priority
                />
              </div>
              <div>
                <p className="text-sm text-zinc-200">Tobias Springer</p>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Gründer, Impova
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow index="01">Referenzen</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50">
              Echte Projekte, keine Vorlagen
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PROJECTS.map((project) => (
                <div key={project.title} className="border border-zinc-900">
                  <div className="relative aspect-[3/2] border-b border-zinc-900 bg-zinc-950">
                    <Image
                      src={project.image}
                      alt={`Website-Projekt für ${project.title}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                      {project.category}
                    </p>
                    <p className="mt-2 font-medium text-zinc-50">{project.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {project.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow index="02">Ablauf</Eyebrow>
            <ol className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t border-zinc-800 pt-5">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-medium text-zinc-100">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="anfrage" className="scroll-mt-6 py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Eyebrow index="03">Anfrage</Eyebrow>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-zinc-50">
              Erzähl mir kurz von deinem Projekt
            </h2>
            <p className="mt-4 text-zinc-400">
              Mit Branche und Budget-Rahmen kann ich dir direkt sagen, was
              sinnvoll ist. Kein Verkaufsgespräch, sondern eine ehrliche
              Einschätzung.
            </p>
            <div className="mt-10">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 font-mono text-xs uppercase tracking-wider text-muted lg:px-10">
          <span>© Impova</span>
          <Link href="/impressum" className="hover:text-zinc-100">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-zinc-100">
            Datenschutz
          </Link>
          <CookieSettingsButton className="uppercase hover:text-zinc-100" />
        </div>
      </footer>
    </>
  );
}
