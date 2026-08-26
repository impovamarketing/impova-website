import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum – Impova",
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
          E-Mail-Adresse:{" "}
          <a
            href="mailto:impovamarketing@gmail.com"
            className="text-accent hover:underline"
          >
            impovamarketing@gmail.com
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

      <p className="border-t border-zinc-900 pt-6 text-xs text-zinc-600">
        <a
          href="https://datenschutz-generator.de/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-accent hover:underline"
        >
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
          Schwenke
        </a>
      </p>
    </LegalPage>
  );
}
