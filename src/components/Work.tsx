import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  image: string;
  slug: string;
};

const PROJECTS: Project[] = [
  {
    title: "Sero's Barbershop",
    category: "Barbershop — Landshut",
    challenge:
      "Bewertungen und Terminbuchung waren für Kunden schwer zu finden, die Seite wirkte wie jeder andere Friseur-Baukasten.",
    solution:
      "Terminbuchung direkt per WhatsApp, Bewertungen im Header statt versteckt, dunkles Editorial-Design statt Standard-Vorlage.",
    image: "/images/work/seros-barbershop.png",
    slug: "barbershop-projekt-landshut",
  },
  {
    title: "Nox Aeterna",
    category: "Tattoo-Studio — Landshut",
    challenge:
      "Ein Tattoo-Studio, das sich optisch kaum von jedem anderen im Stadtbild unterschied.",
    solution:
      "Editorial-Typografie statt Tattoo-Klischee, Portfolio als Herzstück der Seite, Terminanfrage ohne Reibungsverlust.",
    image: "/images/work/nox-aeterna.png",
    slug: "tattoo-studio-projekt-landshut",
  },
  {
    title: "MA Hausmeisterei & Gebäudeservice",
    category: "Gebäudeservice — Landshut",
    challenge:
      "20 Jahre Erfahrung, aber online für Hausverwaltungen kaum als vertrauenswürdiger Ansprechpartner erkennbar.",
    solution:
      "Vertrauenssignale (Erfahrung, fester Ansprechpartner) direkt im ersten Blick, klare Leistungsübersicht für Gewerbe.",
    image: "/images/work/ma-gebaeudeservice.png",
    slug: "gebaeudeservice-projekt-landshut",
  },
  {
    title: "Dugalić Baum- & Gartenpflege",
    category: "Baum- & Gartenpflege — Landshut",
    challenge:
      "Ein Ein-Mann-Betrieb, der online genauso unpersönlich wirkte wie jeder große Anbieter.",
    solution:
      "Persönliche Ansprache direkt im Hero, Angebotsanfrage in einem Klick, Erfahrung als sichtbares Vertrauenssignal statt Textzeile.",
    image: "/images/work/baumpflege-dugalic.png",
    slug: "baumpflege-projekt-landshut",
  },
];

export function Work() {
  return (
    <section id="referenzen" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="02">Referenzen</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Kein Portfolio-Vorlagen-Text. Echte Projekte aus Landshut.
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            Vier Handwerksbetriebe und lokale Dienstleister aus Landshut und
            Umgebung, ein gemeinsamer Nenner: keine Website von der Stange.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <div className="group border border-zinc-900 transition-colors duration-300 hover:border-zinc-700">
                <div className="relative aspect-[3/2] overflow-hidden border-b border-zinc-900 grayscale transition-all duration-500 group-hover:grayscale-0">
                  <Image
                    src={project.image}
                    alt={`Website-Projekt für ${project.title}, ${project.category}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                    Herausforderung
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {project.challenge}
                  </p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                    Lösung
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                    {project.solution}
                  </p>
                  <Link
                    href={`/referenzen/${project.slug}`}
                    className="mt-5 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
                  >
                    Case Study lesen →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
