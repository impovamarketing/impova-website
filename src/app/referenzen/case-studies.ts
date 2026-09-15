export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  image: string;
  liveUrl?: string;
  challenge: string;
  solution: string;
  branche: { slug: string; label: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "barbershop-projekt-landshut",
    title: "Barbershop-Projekt in Landshut",
    category: "Barbershop — Landshut",
    image: "/images/work/seros-barbershop.png",
    liveUrl: "https://serosbarbershop.de",
    challenge:
      "Bewertungen und Terminbuchung waren für Kunden schwer zu finden, die Seite wirkte wie jeder andere Friseur-Baukasten.",
    solution:
      "Terminbuchung direkt per WhatsApp, Bewertungen im Header statt versteckt, dunkles Editorial-Design statt Standard-Vorlage.",
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
  {
    slug: "tattoo-studio-projekt-landshut",
    title: "Tattoo-Studio-Projekt in Landshut",
    category: "Tattoo-Studio — Landshut",
    image: "/images/work/nox-aeterna.png",
    liveUrl: "https://nox-aeterna.de",
    challenge:
      "Ein Tattoo-Studio, das sich optisch kaum von jedem anderen im Stadtbild unterschied.",
    solution:
      "Editorial-Typografie statt Tattoo-Klischee, Portfolio als Herzstück der Seite, Terminanfrage ohne Reibungsverlust.",
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
  {
    slug: "gebaeudeservice-projekt-landshut",
    title: "Gebäudeservice-Projekt in Landshut",
    category: "Gebäudeservice — Landshut",
    image: "/images/work/ma-gebaeudeservice.png",
    liveUrl: "https://ma-objektservice.de",
    challenge:
      "20 Jahre Erfahrung, aber online für Hausverwaltungen kaum als vertrauenswürdiger Ansprechpartner erkennbar.",
    solution:
      "Vertrauenssignale (Erfahrung, fester Ansprechpartner) direkt im ersten Blick, klare Leistungsübersicht für Gewerbe.",
    branche: { slug: "handwerker", label: "Handwerker" },
  },
  {
    slug: "custom-tattoo-studio-projekt-landshut",
    title: "Custom-Tattoo-Studio-Projekt in Landshut",
    category: "Tattoo-Studio — Landshut",
    image: "/images/work/matthias-tattooz.png",
    challenge:
      "Ein Tattoo-Studio mit sechs verschiedenen Stilen unter einer Nadel — das sollte sich auch auf der Website widerspiegeln, statt in einem austauschbaren Portfolio-Theme unterzugehen.",
    solution:
      "Editorial-Typografie und ruhiges Layout statt Tattoo-Klischee, große Portfolio-Präsenz direkt im Header, Terminanfrage in einem Klick.",
    branche: { slug: "dienstleister", label: "Dienstleister" },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
