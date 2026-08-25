import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutz – Impova",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p className="border border-dashed border-zinc-800 p-4 font-mono text-xs uppercase tracking-wider text-accent">
        Platzhalter — vor Livegang durch einen Datenschutzbeauftragten /
        Generator (z. B. für das Kontaktformular, ggf. Analytics) prüfen und
        vervollständigen.
      </p>
      <section>
        <h2 className="text-zinc-200">1. Verantwortlicher</h2>
        <p>
          [Vollständiger Name / Firmenname]
          <br />
          [Anschrift]
          <br />
          E-Mail: [E-Mail-Adresse]
        </p>
      </section>
      <section>
        <h2 className="text-zinc-200">2. Erhebung von Daten über das Anfrageformular</h2>
        <p>
          Wenn du unser Anfrageformular nutzt, verarbeiten wir die von dir
          angegebenen Daten (Name, E-Mail-Adresse, Budget-Rahmen,
          Projekt-Details) ausschließlich zur Bearbeitung deiner Anfrage auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Eine Weitergabe an Dritte
          erfolgt nicht.
        </p>
      </section>
      <section>
        <h2 className="text-zinc-200">3. Hosting</h2>
        <p>
          Diese Website wird bei [Hosting-Anbieter, z. B. Vercel Inc.]
          gehostet. Details zur Auftragsverarbeitung: [Link/Angaben ergänzen].
        </p>
      </section>
      <section>
        <h2 className="text-zinc-200">4. Deine Rechte</h2>
        <p>
          Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung
          und Einschränkung der Verarbeitung deiner personenbezogenen Daten
          sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
        </p>
      </section>
    </LegalPage>
  );
}
