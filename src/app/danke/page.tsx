import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Danke für deine Anfrage | Impova",
  description:
    "Deine Anfrage bei Impova ist angekommen. Ich melde mich innerhalb von 24 Stunden persönlich bei dir, per E-Mail oder Telefon, ohne Standardtext.",
  robots: { index: false, follow: false },
};

const CHECK_STEPS = [
  {
    title: "Ich schaue mir deine Sichtbarkeit an",
    text: "Website, Google-Unternehmensprofil und wie du in deiner Region bei Google gefunden wirst.",
  },
  {
    title: "Du bekommst meine Einschätzung",
    text: "Innerhalb von 24 Stunden per E-Mail, mit den wichtigsten Hebeln für dein Unternehmen.",
  },
  {
    title: "Du entscheidest in Ruhe",
    text: "Wenn du willst, sprechen wir danach über die Umsetzung. Wenn nicht, ist das völlig in Ordnung.",
  },
];

const ENTWURF_STEPS = [
  {
    title: "Ich schaue mir deinen Betrieb an",
    text: "Deine aktuelle Website, deine Branche und wie Kunden aus der Region dich finden.",
  },
  {
    title: "Ich designe deinen Entwurf",
    text: "Eine moderne Startseite, zugeschnitten auf deinen Betrieb. Sie kommt innerhalb von 24 Stunden per E-Mail.",
  },
  {
    title: "Du entscheidest in Ruhe",
    text: "Gefällt dir der Entwurf, setzen wir ihn um. Wenn nicht, behältst du die Ideen einfach.",
  },
];

const STEPS = [
  {
    title: "Ich lese deine Anfrage",
    text: "Ich schaue mir an, was du vorhast, und bereite mich auf das Gespräch vor.",
  },
  {
    title: "Ich melde mich persönlich",
    text: "Per E-Mail oder Telefon, zeitnah und ohne Standardtext.",
  },
  {
    title: "Wir klären dein Projekt",
    text: "Ziele, Umfang und Zeitrahmen. Danach bekommst du ein individuelles Angebot.",
  },
];

export default async function DankePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const anfrage = (await searchParams).anfrage;
  const variant = anfrage === "check" || anfrage === "entwurf" ? anfrage : "default";
  const content = {
    check: {
      title: "Danke, dein Sichtbarkeits-Check ist angefragt.",
      text: "Sie liegt direkt in meinem Postfach, ich melde mich persönlich bei dir. Eine automatische Bestätigungsmail gibt es nicht.",
      steps: CHECK_STEPS,
    },
    entwurf: {
      title: "Perfekt! Deine Anfrage ist eingegangen.",
      text: "Ich schaue mir deinen Betrieb jetzt persönlich an. Dein individueller Startseiten-Entwurf landet innerhalb der nächsten 24 Stunden in deinem E-Mail-Postfach.",
      steps: ENTWURF_STEPS,
    },
    default: {
      title: "Danke, deine Anfrage ist angekommen.",
      text: "Sie liegt direkt in meinem Postfach, ich melde mich persönlich bei dir. Eine automatische Bestätigungsmail gibt es nicht.",
      steps: STEPS,
    },
  }[variant];

  /*
   * ================================================================
   * META PIXEL: LEAD-EVENT
   * ----------------------------------------------------------------
   * Hier würde klassisch fbq("track", "Lead") stehen. Das Lead-Event
   * wird aber bewusst NICHT auf dieser Seite gefeuert, sondern direkt
   * beim erfolgreichen Absenden des Formulars:
   *   - /entwurf:  src/components/EntwurfForm.tsx  -> trackLead("entwurf_form")
   *   - Kontakt:   trackLead("contact_form") / trackLead("landing_form")
   *   - Check:     trackLead("visibility_check")
   * trackLead (src/lib/meta.ts) schickt Pixel + Conversions API mit
   * derselben event_id (Deduplizierung) und nur mit Meta-Einwilligung.
   * Vorteil: Ein Neuladen oder direkter Aufruf von /danke zählt keinen
   * falschen Lead. Bitte hier also KEIN zweites Lead-Event einbauen.
   * ================================================================
   */

  return (
    <>
      <Header />
      <main id="inhalt" className="border-b border-white/5 pb-24 pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <CheckCircle2 className="size-10 text-accent" aria-hidden="true" />
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            {content.text}
          </p>

          <ol className="mt-14 flex flex-col gap-6 border-t border-white/5 pt-10">
            {content.steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium text-zinc-100">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-wrap items-center gap-6">
            <Link
              href="/"
              className="bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wider text-base transition-colors hover:bg-white"
            >
              Zur Startseite
            </Link>
            <Link
              href="/referenzen"
              className="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent"
            >
              Referenzen ansehen →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
