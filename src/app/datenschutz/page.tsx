import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutz – Impova",
  robots: { index: false, follow: true },
};

const TOC = [
  { id: "m716", label: "Präambel" },
  { id: "m3", label: "Verantwortlicher" },
  { id: "mOverview", label: "Übersicht der Verarbeitungen" },
  { id: "m2427", label: "Maßgebliche Rechtsgrundlagen" },
  { id: "m27", label: "Sicherheitsmaßnahmen" },
  { id: "m25", label: "Übermittlung von personenbezogenen Daten" },
  { id: "m12", label: "Allgemeine Informationen zur Datenspeicherung und Löschung" },
  { id: "m10", label: "Rechte der betroffenen Personen" },
  { id: "m225", label: "Bereitstellung des Onlineangebots und Webhosting" },
  { id: "m15", label: "Änderung und Aktualisierung" },
  { id: "m42", label: "Begriffsdefinitionen" },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-2 scroll-mt-8 text-xl font-medium text-zinc-100">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-4 text-base font-medium text-zinc-200">{children}</h3>;
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <section id="m716">
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
          aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
          auch kurz als &bdquo;Daten&ldquo; bezeichnet) wir zu welchen Zwecken
          und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für
          alle von uns durchgeführten Verarbeitungen personenbezogener Daten,
          sowohl im Rahmen der Erbringung unserer Leistungen als auch
          insbesondere auf unseren Webseiten, in mobilen Applikationen sowie
          innerhalb externer Onlinepräsenzen, wie z. B. unserer
          Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
          &bdquo;Onlineangebot&ldquo;).
        </p>
        <p className="mt-4">Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-zinc-600">
          Stand: 26. August 2026
        </p>
      </section>

      <section>
        <H2 id="toc">Inhaltsübersicht</H2>
        <List>
          {TOC.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-accent hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </List>
      </section>

      <section id="m3">
        <H2 id="m3-h">Verantwortlicher</H2>
        <p>
          Tobias Springer
          <br />
          Impova
          <br />
          Hauptstraße 21a, 84051 Essenbach
        </p>
        <p className="mt-4">
          E-Mail-Adresse:{" "}
          <a
            href="mailto:impovamarketing@gmail.com"
            className="text-accent hover:underline"
          >
            impovamarketing@gmail.com
          </a>
        </p>
      </section>

      <section id="mOverview">
        <H2 id="mOverview-h">Übersicht der Verarbeitungen</H2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
          und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>

        <H3>Arten der verarbeiteten Daten</H3>
        <List>
          <li>Bestandsdaten.</li>
          <li>Beschäftigtendaten.</li>
          <li>Kontaktdaten.</li>
          <li>Inhaltsdaten.</li>
          <li>Nutzungsdaten.</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
          <li>Protokolldaten.</li>
        </List>

        <H3>Kategorien betroffener Personen</H3>
        <List>
          <li>Leistungsempfänger und Auftraggeber.</li>
          <li>Beschäftigte.</li>
          <li>Nutzer.</li>
          <li>Dritte Personen.</li>
        </List>

        <H3>Zwecke der Verarbeitung</H3>
        <List>
          <li>Sicherheitsmaßnahmen.</li>
          <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
          <li>
            Informationstechnische Infrastruktur (Betrieb und Bereitstellung
            von Informationssystemen und technischen Geräten (Computer,
            Server etc.)).
          </li>
        </List>
      </section>

      <section id="m2427">
        <H2 id="m2427-h">Maßgebliche Rechtsgrundlagen</H2>
        <p>
          <strong className="font-medium text-zinc-200">
            Maßgebliche Rechtsgrundlagen nach der DSGVO:
          </strong>{" "}
          Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
          DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
          Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
          nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
          Sitzland gelten können. Sollten ferner im Einzelfall speziellere
          Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
          Datenschutzerklärung mit.
        </p>
        <List>
          <li>
            <strong className="font-medium text-zinc-200">
              Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)
            </strong>{" "}
            – Die betroffene Person hat ihre Einwilligung in die Verarbeitung
            der sie betreffenden personenbezogenen Daten für einen
            spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
            </strong>{" "}
            – Die Verarbeitung ist zur Erfüllung einer rechtlichen
            Verpflichtung erforderlich, der der Verantwortliche unterliegt.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
            </strong>{" "}
            – die Verarbeitung ist zur Wahrung der berechtigten Interessen
            des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt,
            dass die Interessen, Grundrechte und Grundfreiheiten der
            betroffenen Person, die den Schutz personenbezogener Daten
            verlangen, nicht überwiegen.
          </li>
        </List>
        <p className="mt-4">
          <strong className="font-medium text-zinc-200">
            Nationale Datenschutzregelungen in Deutschland:
          </strong>{" "}
          Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale
          Regelungen zum Datenschutz in Deutschland. Hierzu gehört
          insbesondere das Bundesdatenschutzgesetz (BDSG). Das BDSG enthält
          insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht
          auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer
          Kategorien personenbezogener Daten, zur Verarbeitung für andere
          Zwecke und zur Übermittlung sowie automatisierten
          Entscheidungsfindung im Einzelfall einschließlich Profiling.
          Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer
          zur Anwendung gelangen.
        </p>
        <p className="mt-4">
          <strong className="font-medium text-zinc-200">
            Geltung der Datenschutzvorgaben im Sitzland:
          </strong>{" "}
          In dem Land, in dem der Verantwortliche seinen Sitz hat, gelten
          neben der Datenschutz-Grundverordnung (DSGVO) auch nationale
          Datenschutzvorschriften.
        </p>
      </section>

      <section id="m27">
        <H2 id="m27-h">Sicherheitsmaßnahmen</H2>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der
          Implementierungskosten und der Art, des Umfangs, der Umstände und
          der Zwecke der Verarbeitung sowie der unterschiedlichen
          Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
          Rechte und Freiheiten natürlicher Personen geeignete technische und
          organisatorische Maßnahmen, um ein dem Risiko angemessenes
          Schutzniveau zu gewährleisten.
        </p>
        <p className="mt-4">
          Zu den Maßnahmen gehören insbesondere die Sicherung der
          Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
          Kontrolle des physischen und elektronischen Zugangs zu den Daten
          als auch des sie betreffenden Zugriffs, der Eingabe, der
          Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
          Des Weiteren haben wir Verfahren eingerichtet, die eine
          Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
          Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
          berücksichtigen wir den Schutz personenbezogener Daten bereits bei
          der Entwicklung bzw. Auswahl von Hardware, Software sowie
          Verfahren entsprechend dem Prinzip des Datenschutzes, durch
          Technikgestaltung und durch datenschutzfreundliche
          Voreinstellungen.
        </p>
        <p className="mt-4">
          Sicherung von Online-Verbindungen durch TLS-/SSL-
          Verschlüsselungstechnologie (HTTPS): Um die Daten der Nutzer, die
          über unsere Online-Dienste übertragen werden, vor unerlaubten
          Zugriffen zu schützen, setzen wir auf die TLS-/SSL-
          Verschlüsselungstechnologie. Wenn eine Website durch ein
          SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von
          HTTPS in der URL signalisiert. Dies dient als ein Indikator für die
          Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.
        </p>
      </section>

      <section id="m25">
        <H2 id="m25-h">Übermittlung von personenbezogenen Daten</H2>
        <p>
          Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
          vor, dass diese an andere Stellen, Unternehmen, rechtlich
          selbstständige Organisationseinheiten oder Personen übermittelt
          beziehungsweise ihnen gegenüber offengelegt werden. Zu den
          Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte
          Dienstleister gehören oder Anbieter von Diensten und Inhalten, die
          in eine Website eingebunden sind. In solchen Fällen beachten wir
          die gesetzlichen Vorgaben und schließen insbesondere entsprechende
          Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen,
          mit den Empfängern Ihrer Daten ab.
        </p>
      </section>

      <section id="m12">
        <H2 id="m12-h">
          Allgemeine Informationen zur Datenspeicherung und Löschung
        </H2>
        <p>
          Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den
          gesetzlichen Bestimmungen, sobald die zugrundeliegenden
          Einwilligungen widerrufen werden oder keine weiteren rechtlichen
          Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in
          denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten
          nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen,
          wenn gesetzliche Pflichten oder besondere Interessen eine längere
          Aufbewahrung oder Archivierung der Daten erfordern.
        </p>
        <p className="mt-4">
          Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen
          Gründen aufbewahrt werden müssen oder deren Speicherung notwendig
          ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer
          natürlicher oder juristischer Personen, entsprechend archiviert
          werden.
        </p>
        <p className="mt-4">
          Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen
          eines Datums, ist stets die längste Frist maßgeblich. Daten, die
          nicht mehr für den ursprünglich vorgesehenen Zweck, sondern
          aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt
          werden, verarbeiten wir ausschließlich zu den Gründen, die ihre
          Aufbewahrung rechtfertigen.
        </p>
        <p className="mt-4">
          Aufbewahrung und Löschung von Daten: Die folgenden allgemeinen
          Fristen gelten für die Aufbewahrung und Archivierung nach deutschem
          Recht:
        </p>
        <List>
          <li>
            10 Jahre – Aufbewahrungsfrist für Bücher und Aufzeichnungen,
            Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie
            die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und
            sonstigen Organisationsunterlagen (§ 147 Abs. 1 Nr. 1 i.V.m. Abs.
            3 AO, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).
          </li>
          <li>
            8 Jahre – Buchungsbelege, wie z. B. Rechnungen und Kostenbelege
            (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO, § 14b Abs. 1
            UStG sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).
          </li>
          <li>
            6 Jahre – Übrige Geschäftsunterlagen: empfangene Handels- oder
            Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder
            Geschäftsbriefe, sonstige Unterlagen, soweit sie für die
            Besteuerung von Bedeutung sind (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m.
            Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4 HGB).
          </li>
          <li>
            3 Jahre – Daten, die erforderlich sind, um potenzielle
            Gewährleistungs- und Schadensersatzansprüche oder ähnliche
            vertragliche Ansprüche und Rechte zu berücksichtigen sowie damit
            verbundene Anfragen zu bearbeiten, werden für die Dauer der
            regulären gesetzlichen Verjährungsfrist von drei Jahren
            gespeichert (§§ 195, 199 BGB).
          </li>
        </List>
      </section>

      <section id="m10">
        <H2 id="m10-h">Rechte der betroffenen Personen</H2>
        <p>
          Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
          die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
        </p>
        <List>
          <li>
            <strong className="font-medium text-zinc-200">
              Widerspruchsrecht:
            </strong>{" "}
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen die Verarbeitung der Sie
            betreffenden personenbezogenen Daten, die aufgrund von Art. 6
            Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
            gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Widerrufsrecht bei Einwilligungen:
            </strong>{" "}
            Sie haben das Recht, erteilte Einwilligungen jederzeit zu
            widerrufen.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Auskunftsrecht:
            </strong>{" "}
            Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
            betreffende Daten verarbeitet werden und auf Auskunft über diese
            Daten sowie auf weitere Informationen und Kopie der Daten
            entsprechend den gesetzlichen Vorgaben.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Recht auf Berichtigung:
            </strong>{" "}
            Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die
            Vervollständigung der Sie betreffenden Daten oder die
            Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Recht auf Löschung und Einschränkung der Verarbeitung:
            </strong>{" "}
            Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
            verlangen, dass Sie betreffende Daten unverzüglich gelöscht
            werden, bzw. alternativ eine Einschränkung der Verarbeitung der
            Daten zu verlangen.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Recht auf Datenübertragbarkeit:
            </strong>{" "}
            Sie haben das Recht, Sie betreffende Daten, die Sie uns
            bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in
            einem strukturierten, gängigen und maschinenlesbaren Format zu
            erhalten oder deren Übermittlung an einen anderen Verantwortlichen
            zu fordern.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Beschwerde bei Aufsichtsbehörde:
            </strong>{" "}
            Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde,
            insbesondere in dem Mitgliedstaat ihres gewöhnlichen
            Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
            Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
            die Vorgaben der DSGVO verstößt.
          </li>
        </List>
      </section>

      <section id="m225">
        <H2 id="m225-h">Bereitstellung des Onlineangebots und Webhosting</H2>
        <p>
          Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste
          zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir
          die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und
          Funktionen unserer Online-Dienste an den Browser oder das Endgerät
          der Nutzer zu übermitteln.
        </p>
        <List>
          <li>
            <strong className="font-medium text-zinc-200">
              Verarbeitete Datenarten:
            </strong>{" "}
            Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade,
            verwendete Gerätetypen und Betriebssysteme); Meta-,
            Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
            Zeitangaben, Identifikationsnummern); Protokolldaten (z. B.
            Logfiles betreffend Logins oder den Abruf von Daten oder
            Zugriffszeiten).
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Betroffene Personen:
            </strong>{" "}
            Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Zwecke der Verarbeitung:
            </strong>{" "}
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit;
            informationstechnische Infrastruktur; Sicherheitsmaßnahmen.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Rechtsgrundlagen:
            </strong>{" "}
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
          </li>
        </List>
        <p className="mt-4">
          <strong className="font-medium text-zinc-200">
            Bereitstellung Onlineangebot auf gemietetem Speicherplatz:
          </strong>{" "}
          Für die Bereitstellung unseres Onlineangebotes nutzen wir
          Speicherplatz, Rechenkapazität und Software, die wir von einem
          entsprechenden Serveranbieter (Vercel Inc.) mieten oder anderweitig
          beziehen.
        </p>
        <p className="mt-4">
          <strong className="font-medium text-zinc-200">
            Erhebung von Zugriffsdaten und Logfiles:
          </strong>{" "}
          Der Zugriff auf unser Onlineangebot wird in Form von sogenannten
          &bdquo;Server-Logfiles&ldquo; protokolliert. Zu den Serverlogfiles
          können die Adresse und der Name der abgerufenen Webseiten und
          Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen,
          Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das
          Betriebssystem des Nutzers, Referrer URL und im Regelfall
          IP-Adressen und der anfragende Provider gehören. Logfile-
          Informationen werden für die Dauer von maximal 30 Tagen gespeichert
          und danach gelöscht oder anonymisiert. Daten, deren weitere
          Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur
          endgültigen Klärung des jeweiligen Vorfalls von der Löschung
          ausgenommen.
        </p>
        <p className="mt-4">
          <strong className="font-medium text-zinc-200">
            Anfrageformular:
          </strong>{" "}
          Wenn du unser Kontaktformular nutzt, verarbeiten wir die von dir
          angegebenen Daten (Name, E-Mail-Adresse, Budget-Rahmen,
          Projekt-Details) ausschließlich zur Bearbeitung deiner Anfrage auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Eine Weitergabe an Dritte
          erfolgt nicht.
        </p>
      </section>

      <section id="m15">
        <H2 id="m15-h">Änderung und Aktualisierung</H2>
        <p>
          Wir bitten Sie, sich regelmäßig über den Inhalt unserer
          Datenschutzerklärung zu informieren. Wir passen die
          Datenschutzerklärung an, sobald die Änderungen der von uns
          durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
          informieren Sie, sobald durch die Änderungen eine
          Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine
          sonstige individuelle Benachrichtigung erforderlich wird.
        </p>
      </section>

      <section id="m42">
        <H2 id="m42-h">Begriffsdefinitionen</H2>
        <p>
          In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
          Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die
          Begrifflichkeiten gesetzlich definiert sind, gelten deren
          gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen
          dagegen vor allem dem Verständnis dienen.
        </p>
        <List>
          <li>
            <strong className="font-medium text-zinc-200">
              Personenbezogene Daten:
            </strong>{" "}
            &bdquo;Personenbezogene Daten&ldquo; sind alle Informationen, die
            sich auf eine identifizierte oder identifizierbare natürliche
            Person (im Folgenden &bdquo;betroffene Person&ldquo;) beziehen;
            als identifizierbar wird eine natürliche Person angesehen, die
            direkt oder indirekt identifiziert werden kann.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Verantwortlicher:
            </strong>{" "}
            Die natürliche oder juristische Person, die allein oder
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
            von personenbezogenen Daten entscheidet.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Verarbeitung:
            </strong>{" "}
            Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte
            Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
            personenbezogenen Daten, wie z. B. Erheben, Auswerten, Speichern,
            Übermitteln oder Löschen.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Nutzungsdaten:
            </strong>{" "}
            Informationen, die erfassen, wie Nutzer mit digitalen Produkten,
            Dienstleistungen oder Plattformen interagieren.
          </li>
          <li>
            <strong className="font-medium text-zinc-200">
              Kontaktdaten:
            </strong>{" "}
            Informationen, die die Kommunikation mit Personen oder
            Organisationen ermöglichen, z. B. Telefonnummern, postalische
            Adressen und E-Mail-Adressen.
          </li>
        </List>
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
