import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { EntwurfForm } from "@/components/EntwurfForm";
import { CookieSettingsButton } from "@/components/CookieConsent";

// Zielseite für Meta-Anzeigen (kalter Traffic): ohne Navigation und nicht im Index,
// damit sie Google nicht gegen die Startseite um "Webdesign Landshut" antreten lässt.
export const metadata: Metadata = {
  title: "Kostenloser Startseiten-Entwurf in 24 Stunden | Impova",
  description:
    "Für Handwerker und Dienstleister in der Region Landshut: Du bekommst einen individuellen Startseiten-Entwurf für deinen Betrieb, kostenlos und unverbindlich.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    title: "Kurz eintragen (30 Sek.)",
    text: "Schick mir deine aktuelle Website oder deinen Firmennamen.",
  },
  {
    title: "Ich designe deinen Entwurf (24h)",
    text: "Du erhältst einen modernen, maßgeschneiderten Startseiten-Entwurf per E-Mail.",
  },
  {
    title: "Du entscheidest in Ruhe",
    text: "Gefällt dir der Entwurf, setzen wir ihn um. Wenn nicht, behältst du die Ideen einfach.",
  },
];

export default function EntwurfPage() {
  return (
    <div className="relative overflow-x-clip">
      <div className="glow -top-56 left-[-15%] h-[620px] w-[620px]" aria-hidden="true" />
      <header className="relative px-3 pt-3 sm:px-4">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-base/75 pl-5 pr-2 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.8)] backdrop-blur-md sm:pl-6">
          <Link
            href="/"
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-zinc-100"
          >
            IMPOVA<span className="text-accent">.</span>
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300 sm:px-4">
            <MapPin className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
            <span className="hidden sm:inline">Für Betriebe aus Landshut &amp; Umgebung</span>
            <span className="sm:hidden">Landshut &amp; Umgebung</span>
          </span>
        </div>
      </header>

      <main id="inhalt">
        <section className="relative border-b border-white/5 pb-20 pt-14 sm:pb-28 sm:pt-20">
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
            <div className="lg:col-span-6 lg:pt-6">
              <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                Für Handwerker &amp; Dienstleister in der Region Landshut
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 [text-wrap:balance] sm:text-5xl lg:text-[3.4rem]">
                Dein neuer Startseiten-Entwurf in 24 Stunden.{" "}
                <span className="text-accent">100 % kostenlos &amp; unverbindlich.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Sieh schwarz auf weiß, wie dein Betrieb online wirkt und mehr
                Kunden gewinnt, bevor du einen Cent investierst.
              </p>
              <div className="mt-10 hidden items-center gap-4 lg:flex">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src="/images/portraits/founder-portrait.jpeg"
                    alt="Tobias Springer, Gründer von Impova"
                    fill
                    className="object-cover object-[50%_18%]"
                    sizes="56px"
                  />
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  <span className="text-zinc-100">Tobias Springer</span>
                  <br />
                  Gründer von Impova, aus Essenbach bei Landshut
                </p>
              </div>
            </div>

            <div id="formular" className="scroll-mt-6 lg:col-span-6">
              <EntwurfForm />
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Eyebrow index="01">So funktioniert&apos;s</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.5rem]">
              In drei Schritten zu deinem Entwurf
            </h2>
            <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className="card card-interactive flex flex-col p-7">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-lg font-medium text-zinc-50">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-white/5 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 lg:px-10">
            <div className="md:col-span-5">
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[1.25rem] border border-white/10">
                <Image
                  src="/images/portraits/founder-portrait.jpeg"
                  alt="Tobias Springer, Gründer von Impova aus Essenbach"
                  fill
                  className="object-cover object-[50%_18%]"
                  sizes="(min-width: 768px) 384px, 90vw"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <Eyebrow index="02">Warum ich das anbiete</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.5rem]">
                Erst sehen, dann entscheiden.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-zinc-400">
                <p>
                  Ich bin Tobias, Gründer von Impova aus Essenbach bei Landshut.
                  Eine neue Website ist eine Investition, und niemand kauft
                  gern die Katze im Sack.
                </p>
                <p>
                  Deshalb zeige ich dir lieber direkt, wie deine Startseite
                  aussehen könnte, statt dich mit langen Verkaufsgesprächen
                  aufzuhalten. Du siehst ein konkretes Ergebnis und entscheidest
                  dann selbst.
                </p>
                <p>
                  Und wenn wir zusammenarbeiten, hast du einen festen
                  Ansprechpartner aus der Region, keine Hotline und kein
                  wechselndes Team.
                </p>
              </div>
              <a
                href="#formular"
                className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white"
              >
                Kostenlosen Entwurf anfordern
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 font-mono text-xs uppercase tracking-wider text-muted lg:px-10">
          <span>© {new Date().getFullYear()} Impova</span>
          <Link href="/impressum" className="hover:text-zinc-100">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-zinc-100">
            Datenschutz
          </Link>
          <CookieSettingsButton className="uppercase hover:text-zinc-100" />
        </div>
      </footer>
    </div>
  );
}
