// Einzige Datenquelle für alle Referenzen (Startseite, Referenzen-Seite, Case Studies, Landingpage).
// Regel: Jede Zahl mit Zeitraum und Quelle. Nichts eintragen, was nicht belegt ist.
// Leere Felder werden nirgends angezeigt. Fehlende Angaben sind als TODO markiert.

// Eine Kennzahl, z. B. { value: "2,9", label: "Ø Position für „hausmeister landshut“", period: "14.10. bis 23.10.2026", source: "Google Search Console" }.
export type CaseKpi = {
  value: string;
  label: string;
  period: string;
  source: string;
};

// Kurze Kernaussage für Karten und Startseite, belegt wie eine Kennzahl.
export type CaseHighlight = {
  text: string;
  period: string;
  source: string;
};

export type CaseScreenshot = {
  src: string;
  caption: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  image?: string;
  // Handy-Screenshot der Website (Startseite, iPhone-Format) für das Geräte-Mockup.
  mobileImage?: string;
  logo?: string;
  liveUrl?: string;
  situation: string;
  measures: string[];
  highlight?: CaseHighlight;
  kpis: CaseKpi[];
  // Kontext zu den Kennzahlen, z. B. wie lange die Website zu dem Zeitpunkt online war.
  kpiNote?: string;
  // Screenshots als Beleg (Pfade in /public), jeweils mit Bildunterschrift.
  screenshots: CaseScreenshot[];
  branche: { slug: string; label: string };
  featured?: boolean;
  // Entwürfe erscheinen nirgends und sind nicht indexierbar, bis die Daten vollständig sind.
  draft?: boolean;
};

const ALL_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "thai-massage-projekt",
    name: "Zentara Thai Massage",
    // TODO: Ort, Ausgangslage, Maßnahmen, Kennzahlen mit Zeitraum und Quelle, Screenshots und Live-URL liefern. Danach draft entfernen.
    title: "Thai-Massage-Projekt",
    category: "Thai-Massage",
    seoTitle: "Zentara Thai Massage: Case Study | Impova",
    seoDescription:
      "TODO: Description mit 140 bis 155 Zeichen, sobald Daten vorliegen.",
    logo: "/images/logos/logo-zentarak-white.png",
    situation: "TODO: Ausgangslage von Zentara Thai Massage",
    measures: ["TODO: Was wurde umgesetzt?"],
    kpis: [],
    screenshots: [],
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
      "Case Study MA Hausmeisterei & Gebäudeservice, Landshut: neue Website und SEO. Ø Position 2,9 für „hausmeister landshut“ (Search Console, 14.10. bis 23.10.2026).",
    image: "/images/work/ma-gebaeudeservice.jpg",
    mobileImage: "/images/work/ma-gebaeudeservice-mobile.jpg",
    liveUrl: "https://ma-objektservice.de",
    situation:
      "20 Jahre Erfahrung, aber online für Hausverwaltungen kaum als vertrauenswürdiger Ansprechpartner erkennbar.",
    measures: [
      "Website komplett neu gestaltet, mit Vertrauenssignalen wie Erfahrung und festem Ansprechpartner im ersten Blick",
      "Klare Leistungsübersicht für Gewerbe und Hausverwaltungen",
      "Suchmaschinenoptimierung",
    ],
    highlight: {
      text: "Ø Position 2,9 bei Google für „hausmeister landshut“",
      period: "14.10. bis 23.10.2026",
      source: "Google Search Console",
    },
    kpis: [
      { value: "2,9", label: "Ø Position für „hausmeister landshut“", period: "14.10. bis 23.10.2026", source: "Google Search Console" },
      { value: "3,3", label: "Ø Position für „hausmeisterservice landshut“", period: "14.10. bis 23.10.2026", source: "Google Search Console" },
      { value: "14,3 → 7,7", label: "Ø Position für „winterdienst landshut“", period: "12.09. bis 21.09.2026 verglichen mit 14.10. bis 23.10.2026", source: "Google Search Console" },
      { value: "+55 %", label: "Impressionen in der Google-Suche (854 statt 552)", period: "12.09. bis 21.09.2026 verglichen mit 14.10. bis 23.10.2026", source: "Google Search Console" },
    ],
    // TODO: Screenshot aus der Search Console ablegen, z. B. /images/results/ma-search-console.png,
    // und hier eintragen: { src: "...", caption: "Google Search Console, 14.10. bis 23.10.2026" }
    screenshots: [],
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
    mobileImage: "/images/work/seros-barbershop-mobile.jpg",
    liveUrl: "https://serosbarbershop.de",
    situation:
      "Bewertungen und Terminbuchung waren für Kunden schwer zu finden, die Seite wirkte wie jeder andere Friseur-Baukasten.",
    measures: [
      "Terminbuchung direkt per WhatsApp",
      "Bewertungen im Header statt versteckt",
      "Eigenständiges, dunkles Editorial-Design statt Standard-Vorlage",
    ],
    // TODO: Kennzahlen mit Zeitraum und Quelle liefern (z. B. Search Console, Buchungen, Anrufe).
    kpis: [],
    screenshots: [],
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
  {
    slug: "tattoo-studio-projekt-landshut",
    name: "Nox Aeterna",
    title: "Tattoo-Studio-Projekt in Landshut",
    category: "Tattoo-Studio, Landshut",
    seoTitle: "Nox Aeterna Tattoo-Studio: Case Study | Impova",
    seoDescription:
      "Case Study Nox Aeterna, Tattoo-Studio in Landshut: Ø Position 4,7 für „tattoo landshut“ (Google Search Console, 01.09. bis 24.10.2026).",
    image: "/images/work/nox-aeterna.jpg",
    mobileImage: "/images/work/nox-aeterna-mobile.jpg",
    liveUrl: "https://nox-aeterna.de",
    situation:
      "Ein Tattoo-Studio, das sich optisch kaum von jedem anderen im Stadtbild unterschied.",
    measures: [
      "Editorial-Typografie statt Tattoo-Klischee",
      "Portfolio als Herzstück der Seite",
      "Terminanfrage ohne Umwege",
    ],
    highlight: {
      text: "Ø Position 4,7 bei Google für „tattoo landshut“ (497 Impressionen, 15 Klicks)",
      period: "01.09. bis 24.10.2026",
      source: "Google Search Console",
    },
    kpis: [
      { value: "4,7", label: "Ø Position für „tattoo landshut“ (497 Impressionen, 15 Klicks)", period: "01.09. bis 24.10.2026", source: "Google Search Console" },
      { value: "79", label: "Klicks aus der Google-Suche", period: "01.09. bis 24.10.2026", source: "Google Search Console" },
      { value: "2.040", label: "Impressionen in der Google-Suche", period: "01.09. bis 24.10.2026", source: "Google Search Console" },
      { value: "4,8", label: "Ø Position, alle Suchbegriffe", period: "01.09. bis 24.10.2026", source: "Google Search Console" },
      { value: "160", label: "Routenanfragen", period: "August bis Oktober 2026 (Oktober unvollständig)", source: "Google-Unternehmensprofil" },
      { value: "89", label: "Website-Klicks aus dem Unternehmensprofil", period: "August bis Oktober 2026 (Oktober unvollständig)", source: "Google-Unternehmensprofil" },
    ],
    kpiNote: "Website-Launch: 10.08.2026.",
    screenshots: [],
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
    mobileImage: "/images/work/matthias-tattooz-mobile.jpg",
    liveUrl: "https://matthias-tattooz.com",
    situation:
      "Ein Tattoo-Studio mit sechs verschiedenen Stilen unter einer Nadel: Das sollte sich auf der Website widerspiegeln, statt in einem austauschbaren Portfolio-Theme unterzugehen.",
    measures: [
      "Ruhiges Layout mit Editorial-Typografie statt Tattoo-Klischee",
      "Große Portfolio-Präsenz direkt im Header",
      "Terminanfrage in einem Klick",
    ],
    // TODO: Kennzahlen mit Zeitraum und Quelle liefern.
    kpis: [],
    screenshots: [],
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
];

export const CASE_STUDIES = ALL_CASE_STUDIES.filter((c) => !c.draft);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
