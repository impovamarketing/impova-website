import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { pageOpenGraph } from "@/lib/seo";

const TITLE = "Website-Relaunch: alte Website modernisieren | Impova";
const DESCRIPTION =
  "Website-Relaunch für Unternehmen, deren aktuelle Seite nicht mehr überzeugt: neu gebaut statt geflickt, mit SEO-Absicherung für bestehende Rankings.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.impova.de/website-relaunch",
  },
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/website-relaunch" }),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Impova", item: "https://www.impova.de" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Website-Relaunch",
      item: "https://www.impova.de/website-relaunch",
    },
  ],
};

const SIGNS = [
  "Du schämst dich fast, wenn du deine eigene Website Kunden zeigst.",
  "Bei Google findest du dich selbst kaum noch, geschweige denn neue Kunden dich.",
  "Die Seite lädt spürbar langsam, vor allem auf dem Handy.",
  "Texte und Design sind seit Jahren nicht mehr angefasst worden.",
  "Anfragen kommen fast nur noch über Empfehlung, nicht über die Website.",
];

export default function WebsiteRelaunchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main id="inhalt">
        <section className="border-b border-white/5 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal immediate>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Website-Relaunch
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Wenn deine aktuelle Website dich mehr kostet als sie bringt.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ein Relaunch heißt bei mir: neu gebaut statt geflickt, aber
                ohne die Sichtbarkeit zu verlieren, die deine alte Seite sich
                bei Google schon erarbeitet hat.
              </p>
              <div className="mt-10">
                <MagneticButton href="/#kontakt">
                  Website-Projekt besprechen
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Anzeichen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Woran du merkst, dass ein Relaunch fällig ist
              </h2>
            </Reveal>
            <div className="mt-10 flex flex-col border-t border-white/5">
              {SIGNS.map((sign, i) => (
                <Reveal
                  key={sign}
                  delay={i * 0.05}
                  className="border-b border-white/5 py-5"
                >
                  <p className="text-zinc-300">{sign}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Ablauf</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Neu gebaut, ohne bei null anzufangen
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Bevor ich etwas Neues baue, schaue ich mir an, was an
                  deiner aktuellen Seite bereits funktioniert: welche
                  Inhalte bei Google ranken, welche Seiten Besucher
                  tatsächlich aufrufen. Das fließt in die neue Struktur ein,
                  statt verloren zu gehen.
                </p>
                <p>
                  Bestehende URLs, die bei Google gelistet sind, werden beim
                  Umzug sauber weitergeleitet, damit du nicht bei null
                  anfängst, sondern auf dem aufbaust, was schon da ist.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Umsetzung &amp; Preis</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
                Gleiche Transparenz wie bei einem Neubau
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Auch beim Relaunch gibt es zwei klar getrennte Bausteine:
                einen Einmalpreis für den Neubau, individuell kalkuliert nach
                Umfang, und auf Wunsch eine monatliche Pflege, in der ich
                Änderungen für dich übernehme. Details und
                den genauen Ablauf findest du auf der{" "}
                <Link href="/webdesign" className="text-accent underline underline-offset-4">
                  Webdesign-Seite
                </Link>
                .
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton href="/#kontakt">
                  Website-Projekt besprechen
                </MagneticButton>
                <MagneticButton href="/referenzen" variant="outline">
                  Referenzen ansehen
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>
        <RelatedLinks current="/website-relaunch" index="04" />
      </main>
      <Footer />
    </>
  );
}
