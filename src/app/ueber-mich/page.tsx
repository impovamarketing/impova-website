import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Über mich – Impova",
  description:
    "Tobias Springer, Gründer von Impova: warum ich Webdesign & SEO für Unternehmen in Landshut und Umgebung persönlich umsetze, statt als Agentur mit Baukastensystem.",
  alternates: {
    canonical: "https://www.impova.de/ueber-mich",
  },
};

export default function UeberMichPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-zinc-900 pb-20 pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-7">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                  Über mich
                </p>
                <h1 className="mt-5 max-w-xl text-4xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                  Ich bin Tobias — dein einziger Ansprechpartner bei Impova.
                </h1>
                <div className="mt-6 flex max-w-lg flex-col gap-4 text-lg leading-relaxed text-zinc-400">
                  <p>
                    Seit November 2025 baue ich Websites für Unternehmen in
                    Landshut und Umgebung. Die Grundlagen im
                    Online-Marketing habe ich mir über eine Weiterbildung
                    bei HeyFreiheit angeeignet — von dort kommt mein Blick
                    auf SEO, Conversion und Nutzerführung, nicht nur auf
                    Design.
                  </p>
                  <p>
                    Umgesetzt wird jedes Projekt so, wie es für dich am
                    meisten Sinn ergibt: WordPress mit Oxygen Builder, wenn
                    du schnell live gehen und Inhalte später selbst pflegen
                    willst, oder handgeschriebener Next.js-Code, wenn
                    Design und Ladezeit ganz vorne mitspielen sollen. Wie
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
              <Eyebrow index="01">Warum Impova</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                Was mich an typischen Agentur-Websites stört
              </h2>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-zinc-400">
                <p>
                  Viele Websites von kleinen und mittleren Unternehmen sehen
                  aus, als kämen sie aus demselben Baukasten: austauschbar,
                  langsam, unspektakulär. Und wenn du als Kunde anrufst,
                  landest du oft bei einem von mehreren Ansprechpartnern, die
                  dein Projekt gar nicht wirklich kennen.
                </p>
                <p>
                  Genau das wollte ich anders machen: eine Website, die
                  wirklich individuell gebaut ist — und ein Ansprechpartner,
                  der dein Projekt von Anfang bis Ende selbst betreut.
                </p>
              </div>
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
              <div className="mt-6 max-w-2xl text-zinc-400">
                <p>
                  Du schreibst mir dein Anliegen über das Kontaktformular oder
                  rufst direkt an — ich melde mich innerhalb von 24 Stunden
                  persönlich zurück. Kein Callcenter, kein Projektmanager
                  dazwischen: Fragen zu deinem Projekt beantworte ich selbst,
                  weil ich es auch selbst umsetze.
                </p>
              </div>
              <div className="mt-10">
                <MagneticButton href="/#kontakt">
                  Website-Projekt besprechen
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
