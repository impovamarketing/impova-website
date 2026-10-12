// Einzige Datenquelle für alle Referenzen (Startseite, Referenzen-Seite, Case Studies, Landingpage).
// Ergebnisse nur mit Beleg eintragen. Fehlende Angaben sind als TODO markiert.

export type CaseResult = {
  headline: string;
  detail: string;
  source: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  image?: string;
  logo?: string;
  liveUrl?: string;
  situation: string;
  measures: string[];
  result?: CaseResult;
  // Pfade zu Ranking-Screenshots in /public. Leer: Platzhalter-Slot wird angezeigt.
  rankingScreenshots: string[];
  branche: { slug: string; label: string };
  featured?: boolean;
  // Entwürfe erscheinen nirgends und sind nicht indexierbar, bis die Daten vollständig sind.
  draft?: boolean;
};

const ALL_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "thai-massage-projekt",
    name: "Zentara Thai Massage",
    // TODO: Ort, Ausgangslage, Maßnahmen, Suchbegriff für Platz 1, Screenshots und Live-URL liefern. Danach draft entfernen.
    title: "Thai-Massage-Projekt",
    category: "Thai-Massage",
    seoTitle: "Zentara Thai Massage: Case Study | Impova",
    seoDescription:
      "TODO: Description mit 140 bis 155 Zeichen, sobald Daten vorliegen.",
    logo: "/images/logos/logo-zentarak-white.png",
    situation: "TODO: Ausgangslage von Zentara Thai Massage",
    measures: ["TODO: Was wurde umgesetzt?"],
    result: {
      headline: "Platz 1 bei Google",
      detail: "TODO: für welchen Suchbegriff?",
      source: "TODO: Beleg (Ranking-Screenshot mit Datum)",
    },
    rankingScreenshots: [],
    branche: { slug: "dienstleister", label: "Dienstleister" },
    featured: true,
    draft: true,
  },
  {
    slug: "gebaeudeservice-projekt-landshut",
    name: "MA Hausmeisterei & Gebäudeservice",
    title: "Gebäudeservice-Projekt in Landshut",
    category: "Gebäudeservice, Landshut",
    seoTitle: "MA Gebäudeservice: Case Study | Impova",
    seoDescription:
      "Case Study MA Hausmeisterei & Gebäudeservice aus Landshut: Website mit Vertrauenssignalen und SEO. Laut Kunde Platz 1 bis 2 bei wichtigen Suchbegriffen.",
    image: "/images/work/ma-gebaeudeservice.jpg",
    liveUrl: "https://ma-objektservice.de",
    situation:
      "20 Jahre Erfahrung, aber online für Hausverwaltungen kaum als vertrauenswürdiger Ansprechpartner erkennbar.",
    measures: [
      "Website komplett neu gestaltet, mit Vertrauenssignalen wie Erfahrung und festem Ansprechpartner im ersten Blick",
      "Klare Leistungsübersicht für Gewerbe und Hausverwaltungen",
      "Suchmaschinenoptimierung",
    ],
    result: {
      headline: "Platz 1 bis 2 bei Google",
      // TODO: Konkrete Suchbegriffe ergänzen und Ranking-Screenshot ablegen.
      detail: "bei wichtigen Suchbegriffen, die Sichtbarkeit bei Google hat sich deutlich verbessert.",
      source: "Laut Google-Bewertung des Kunden, Oktober 2026",
    },
    rankingScreenshots: [],
    branche: { slug: "handwerker", label: "Handwerker" },
    featured: true,
  },
  {
    slug: "barbershop-projekt-landshut",
    name: "Sero's Barbershop",
    title: "Barbershop-Projekt in Landshut",
    category: "Barbershop, Landshut",
    seoTitle: "Sero's Barbershop: Case Study | Impova",
    seoDescription:
      "Case Study Sero's Barbershop in Landshut: Terminbuchung per WhatsApp, Bewertungen im Header und ein eigenständiges Design statt Friseur-Baukasten.",
    image: "/images/work/seros-barbershop.jpg",
    liveUrl: "https://serosbarbershop.de",
    situation:
      "Bewertungen und Terminbuchung waren für Kunden schwer zu finden, die Seite wirkte wie jeder andere Friseur-Baukasten.",
    measures: [
      "Terminbuchung direkt per WhatsApp",
      "Bewertungen im Header statt versteckt",
      "Eigenständiges, dunkles Editorial-Design statt Standard-Vorlage",
    ],
    // TODO: Ergebnis mit Zahl (z. B. Buchungen, Anrufe, Rankings) liefern.
    rankingScreenshots: [],
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
  {
    slug: "tattoo-studio-projekt-landshut",
    name: "Nox Aeterna",
    title: "Tattoo-Studio-Projekt in Landshut",
    category: "Tattoo-Studio, Landshut",
    seoTitle: "Nox Aeterna Tattoo-Studio: Case Study | Impova",
    seoDescription:
      "Case Study Nox Aeterna, Tattoo-Studio in Landshut: Editorial-Typografie statt Klischee, Portfolio im Mittelpunkt und Terminanfrage ohne Umwege.",
    image: "/images/work/nox-aeterna.jpg",
    liveUrl: "https://nox-aeterna.de",
    situation:
      "Ein Tattoo-Studio, das sich optisch kaum von jedem anderen im Stadtbild unterschied.",
    measures: [
      "Editorial-Typografie statt Tattoo-Klischee",
      "Portfolio als Herzstück der Seite",
      "Terminanfrage ohne Umwege",
    ],
    // TODO: Ergebnis mit Zahl liefern.
    rankingScreenshots: [],
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
  {
    slug: "custom-tattoo-studio-projekt-landshut",
    name: "Matthias Tattooz",
    title: "Custom-Tattoo-Studio-Projekt in Landshut",
    category: "Tattoo-Studio, Landshut",
    seoTitle: "Matthias Tattooz: Case Study | Impova",
    seoDescription:
      "Case Study Matthias Tattooz aus Landshut: sechs Stile unter einer Nadel, ruhiges Layout, große Portfolio-Präsenz und Terminanfrage in einem Klick.",
    image: "/images/work/matthias-tattooz.jpg",
    // TODO: Live-URL ergänzen.
    situation:
      "Ein Tattoo-Studio mit sechs verschiedenen Stilen unter einer Nadel: Das sollte sich auf der Website widerspiegeln, statt in einem austauschbaren Portfolio-Theme unterzugehen.",
    measures: [
      "Ruhiges Layout mit Editorial-Typografie statt Tattoo-Klischee",
      "Große Portfolio-Präsenz direkt im Header",
      "Terminanfrage in einem Klick",
    ],
    // TODO: Ergebnis mit Zahl liefern.
    rankingScreenshots: [],
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
];

export const CASE_STUDIES = ALL_CASE_STUDIES.filter((c) => !c.draft);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
