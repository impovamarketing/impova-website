import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Danke für deine Anfrage – Impova",
  description: "Deine Anfrage bei Impova ist angekommen.",
  robots: { index: false, follow: false },
};

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

export default function DankePage() {
  return (
    <>
      <Header />
      <main className="border-b border-zinc-900 pb-24 pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <CheckCircle2 className="size-10 text-accent" aria-hidden="true" />
          <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
            Danke, deine Anfrage ist angekommen.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            Sie liegt direkt in meinem Postfach, ich melde mich persönlich bei
            dir. Eine automatische Bestätigungsmail gibt es nicht.
          </p>

          <ol className="mt-14 flex flex-col gap-6 border-t border-zinc-900 pt-10">
            {STEPS.map((step, i) => (
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
