import type { LucideIcon } from "lucide-react";
import { Bot, Workflow, Zap } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const FEATURES: Feature[] = [
  {
    title: "KI-Integration",
    description:
      "Beantwortest du dieselbe Kundenfrage zum zehnten Mal per E-Mail? Ein Chatbot auf deiner Website übernimmt das und sammelt nebenbei Leads, während du schläfst.",
    icon: Bot,
  },
  {
    title: "Workflow-Automatisierung",
    description:
      "Überträgst du Anfragen manuell in dein CRM? Ich verbinde Formular, Terminbuchung und CRM direkt miteinander, damit die Daten ankommen, ohne dass du sie anfasst.",
    icon: Workflow,
  },
  {
    title: "Effizienz steigern",
    description:
      "Jede Stunde mit Copy-Paste-Aufgaben fehlt dir im Kerngeschäft. Ich automatisiere die Aufgaben, die sich wiederholen, den Rest machst du.",
    icon: Zap,
  },
];

export function AIAutomation() {
  return (
    <section id="automatisierung" className="border-b border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="08">Zusatzoption</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            Wenn deine Website mehr übernehmen soll als nur dastehen
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            Zeit, die du mit Copy-Paste und Rückfragen verlierst, fehlt dir im
            Tagesgeschäft. Auf Wunsch automatisiere ich, was sich wiederholt.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.08} className="card card-interactive group p-8">
                <span className="icon-tile">
                  <Icon strokeWidth={1.5} className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mt-12">
          <MagneticButton href="#kontakt">
            Projekt anfragen
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
