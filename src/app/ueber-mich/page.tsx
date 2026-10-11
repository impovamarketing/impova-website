import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { pageOpenGraph } from "@/lib/seo";
import { GOOGLE_REVIEWS, PHONE } from "@/config/site";
import { CASE_STUDIES } from "@/app/referenzen/case-studies";

const TITLE = "Über mich – Impova";
const DESCRIPTION =
  "Tobias Springer, Gründer von Impova: warum ich Webdesign & SEO für Unternehmen in Landshut und Umgebung persönlich umsetze, statt mit Baukastensystem.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.impova.de/ueber-mich",
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/ueber-mich" }),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: "https://www.impova.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Über mich",
      item: "https://www.impova.de/ueber-mich",
    },
  ],
};

export default function UeberMichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <section className="border-b border-zinc-900 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-7">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Über mich
                </p>
                <h1 className="mt-5 max-w-xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                  Ich bin Tobias, dein fester Ansprechpartner bei Impova.
                </h1>
                <div className="mt-6 flex max-w-lg flex-col gap-4 text-lg leading-relaxed text-zinc-400">
                  <p>
                    Seit November 2025 baue ich Websites für Unternehmen in
                    Landshut und Umgebung. Die Grundlagen im
                    Online-Marketing habe ich mir über eine Weiterbildung
                    bei HeyFreiheit angeeignet. Von dort kommt mein Blick
                    auf SEO, Conversion und Nutzerführung, nicht nur auf
                    Design.
                  </p>
                  <p>
                    Jede Website wird individuell für dein Unternehmen
                    entwickelt und bekommt ein einfaches CMS, in dem du
                    Texte, Bilder und Öffnungszeiten selbst pflegst. Wie
                    das konkret aussieht, siehst du an den{" "}
                    <Link
                      href="/#referenzen"
                      className="text-accent hover:underline"
                    >
                      echten Projekten in meinen Referenzen
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="group relative aspect-[4/5] overflow-hidden border border-zinc-900 grayscale transition-all duration-500 hover:grayscale-0">
                  <Image
                    src="/images/portraits/founder-lifestyle.jpeg"
                    alt="Tobias Springer, Gründer von Impova"
                    // TODO: Eigenes, neues Foto für Über mich, das sonst nirgends verwendet wird.
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Mein Weg</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Vom Lager in die Selbstständigkeit
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                {/* TODO: Eigene Story ergänzen: wie lange im Lager, was der Auslöser für den Schritt war, was dich antreibt. */}
                <p>
                  Bevor ich mich selbstständig gemacht habe, habe ich im Lager
                  gearbeitet. Seit November 2025 baue ich Websites für
                  Unternehmen in Landshut und Niederbayern.
                </p>
                <p>
                  Was mich dabei antreibt: Viele gute Betriebe in der Region
                  sind online kaum zu finden, obwohl ihre Arbeit überzeugt.
                  Genau das will ich ändern, mit Websites, die gefunden werden
                  und Anfragen bringen, und mit einem Ansprechpartner, der dein
                  Projekt von Anfang bis Ende verantwortet.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-8 border-t border-zinc-900 pt-10 sm:grid-cols-3">
                <div>
                  <dt className="sr-only">Selbstständig seit</dt>
                  <dd className="font-mono text-2xl text-zinc-50">Nov. 2025</dd>
                  <dd className="mt-1 text-sm text-zinc-400">selbstständig mit Impova</dd>
                </div>
                <div>
                  <dt className="sr-only">Google-Bewertung</dt>
                  <dd className="font-mono text-2xl text-zinc-50">{GOOGLE_REVIEWS.rating}</dd>
                  <dd className="mt-1 text-sm text-zinc-400">
                    bei {GOOGLE_REVIEWS.count} Google-Bewertungen
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Referenzprojekte</dt>
                  <dd className="font-mono text-2xl text-zinc-50">{CASE_STUDIES.length}</dd>
                  <dd className="mt-1 text-sm text-zinc-400">Referenzprojekte mit Case Study</dd>
                </div>
              </dl>
              {/* TODO: Weitere belegbare Zahlen ergänzen, z. B. umgesetzte Projekte insgesamt. */}
            </Reveal>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Zusammenarbeit</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Wie wir zusammenarbeiten
              </h2>
              <ul className="mt-8 flex max-w-2xl flex-col gap-3 text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  Ein fester Ansprechpartner von der ersten Anfrage bis nach dem Launch
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  Antwort innerhalb von 24 Stunden, kein Callcenter, kein Ticket-System
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  Keine Weitergabe deines Projekts an Dritte
                </li>
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#sichtbarkeits-check">
                  Kostenlosen Sichtbarkeits-Check anfordern
                </MagneticButton>
                <MagneticButton href={PHONE.href} variant="outline">
                  Anrufen: {PHONE.display}
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
