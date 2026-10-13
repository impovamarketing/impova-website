import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum | Impova",
  description:
    "Impressum von Impova: Tobias Springer, Hauptstraße 21a, 84051 Essenbach bei Landshut. Kontakt per Telefon 0151 23819198 und per E-Mail an info@impova.de.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <section>
        <h2 className="text-xl font-medium text-zinc-100">Diensteanbieter</h2>
        <p className="mt-2">
          Tobias Springer
          <br />
          Impova
          <br />
          Hauptstraße 21a, 84051 Essenbach
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-zinc-100">Kontaktmöglichkeiten</h2>
        <p className="mt-2">
          Telefon:{" "}
          <a href="tel:+4915123819198" className="text-accent underline underline-offset-4">
            0151 23819198
          </a>
          <br />
          E-Mail-Adresse:{" "}
          <a
            href="mailto:info@impova.de"
            className="text-accent underline underline-offset-4"
          >
            info@impova.de
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-zinc-100">Angaben zum Unternehmen</h2>
        <p className="mt-2">
          Umsatzsteuer-Identifikationsnummer (USt-ID): DE454917891
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium text-zinc-100">
          Social Media und andere Onlinepräsenzen
        </h2>
        <p className="mt-2">
          Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen
          und Onlineprofile:
        </p>
        <p className="mt-2">Instagram: tobias.sprngr</p>
        <p>LinkedIn: Tobias Springer</p>
      </section>

      <p className="border-t border-white/5 pt-6 text-xs text-muted">
        <a
          href="https://datenschutz-generator.de/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-accent underline underline-offset-4"
        >
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
          Schwenke
        </a>
      </p>
    </LegalPage>
  );
}
