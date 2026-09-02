import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Website-Relaunch – Alte Website modernisieren | Impova",
  description:
    "Website-Relaunch für Unternehmen, deren aktuelle Seite nicht mehr überzeugt: neu gebaut statt geflickt, mit SEO-Absicherung für bestehende Rankings.",
  alternates: {
    canonical: "https://www.impova.de/website-relaunch",
  },
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
      <main>
        <section className="border-b border-zinc-900 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                Website-Relaunch
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                Wenn deine aktuelle Website dich mehr kostet als sie bringt.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ein Relaunch heißt bei mir: neu gebaut statt geflickt — aber
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

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="01">Anzeichen</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Woran du merkst, dass ein Relaunch fällig ist
              </h2>
            </Reveal>
            <div className="mt-10 flex flex-col border-t border-zinc-900">
              {SIGNS.map((sign, i) => (
                <Reveal
                  key={sign}
                  delay={i * 0.05}
                  className="border-b border-zinc-900 py-5"
                >
                  <p className="text-zinc-300">{sign}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="02">Ablauf</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Neu gebaut, ohne bei null anzufangen
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Bevor ich etwas Neues baue, schaue ich mir an, was an
                  deiner aktuellen Seite bereits funktioniert — welche
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

        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <Eyebrow index="03">Umsetzung &amp; Preis</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Gleiche Transparenz wie bei einem Neubau
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Ob WordPress mit Oxygen Builder oder handgeschriebener
                Next.js-Code — welcher Weg zu deinem Relaunch passt, bespreche
                ich ehrlich mit dir. Details dazu, Ablauf und Preis (ab 999 €
                für einen einfachen Onepager, je nach Umfang mehr), findest du
                auf der{" "}
                <Link href="/webdesign" className="text-accent hover:underline">
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
      </main>
      <Footer />
    </>
  );
}
