import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "Sero's Barbershop",
    category: "Barbershop — Landshut",
    description:
      "Terminbuchung direkt per WhatsApp, Bewertungen im Header statt versteckt auf einer Unterseite, dunkles Editorial-Design statt Standard-Friseur-Vorlage.",
    image: "/images/work/seros-barbershop.png",
  },
  {
    title: "Nox Aeterna",
    category: "Tattoo-Studio — Landshut",
    description:
      "Editorial-Typografie statt Tattoo-Klischee, Portfolio als Herzstück der Seite, Terminanfrage ohne Reibungsverlust.",
    image: "/images/work/nox-aeterna.png",
  },
  {
    title: "MA Hausmeisterei & Gebäudeservice",
    category: "Gebäudeservice — Landshut",
    description:
      "Vertrauenssignale (20+ Jahre Erfahrung, fester Ansprechpartner) direkt im ersten Blick, klare Leistungsübersicht für Hausverwaltungen und Gewerbe.",
    image: "/images/work/ma-gebaeudeservice.png",
  },
  {
    title: "Dugalić Baum- & Gartenpflege",
    category: "Baum- & Gartenpflege — Landshut",
    description:
      "Persönliche Ansprache direkt im Hero, Angebotsanfrage in einem Klick, 20+ Jahre Erfahrung als sichtbares Vertrauenssignal statt Textzeile.",
    image: "/images/work/baumpflege-dugalic.png",
  },
];

export function Work() {
  return (
    <section id="referenzen" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="01">Referenzen</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Kein Portfolio-Vorlagen-Text. Echte Projekte aus Landshut.
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            Vier Betriebe, vier Branchen, ein gemeinsamer Nenner: keine
            Website von der Stange.
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
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
