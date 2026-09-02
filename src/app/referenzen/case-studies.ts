export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  image: string;
  liveUrl: string;
  challenge: string;
  solution: string;
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
  },
  {
    slug: "baumpflege-projekt-landshut",
    title: "Baumpflege-Projekt in Landshut",
    category: "Baum- & Gartenpflege — Landshut",
    image: "/images/work/baumpflege-dugalic.png",
    liveUrl: "https://baumpflege-dugalic.de",
    challenge:
      "Ein Ein-Mann-Betrieb, der online genauso unpersönlich wirkte wie jeder große Anbieter.",
    solution:
      "Persönliche Ansprache direkt im Hero, Angebotsanfrage in einem Klick, Erfahrung als sichtbares Vertrauenssignal statt Textzeile.",
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
