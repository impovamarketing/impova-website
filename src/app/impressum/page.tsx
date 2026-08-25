import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum – Impova",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <p className="border border-dashed border-zinc-800 p-4 font-mono text-xs uppercase tracking-wider text-accent">
        Platzhalter — bitte mit echten Firmendaten ersetzen (Angaben gemäß §
        5 TMG).
      </p>
      <section>
        <h2 className="text-zinc-200">Angaben gemäß § 5 TMG</h2>
        <p>
          [Vollständiger Name / Firmenname]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort — Landshut]
        </p>
      </section>
      <section>
        <h2 className="text-zinc-200">Kontakt</h2>
        <p>
          Telefon: [Telefonnummer]
          <br />
          E-Mail: [E-Mail-Adresse]
        </p>
      </section>
      <section>
        <h2 className="text-zinc-200">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          <br />
          [USt-IdNr., falls vorhanden]
        </p>
      </section>
      <section>
        <h2 className="text-zinc-200">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          [Name]
          <br />
          [Anschrift wie oben]
        </p>
      </section>
    </LegalPage>
  );
}
