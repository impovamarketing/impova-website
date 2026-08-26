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
      "Intelligente Chatbots & KI-Assistenten direkt auf der Website für automatisierten Support und Lead-Generierung.",
    icon: Bot,
  },
  {
    title: "Workflow-Automatisierung",
    description:
      "Automatische Verarbeitung von Kontaktanfragen, Terminbuchungen und Schnittstellen zu deinen bestehenden Systemen (CRM/E-Mail).",
    icon: Workflow,
  },
  {
    title: "Effizienz steigern",
    description:
      "Wiederkehrende Aufgaben automatisieren, damit mehr Zeit für das eigentliche Kerngeschäft bleibt.",
    icon: Zap,
  },
];

export function AIAutomation() {
  return (
    <section id="automatisierung" className="border-b border-zinc-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="03">KI & Automatisierung</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Smarte KI-Lösungen & Prozessautomatisierung
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            Spar wertvolle Zeit im Alltag durch automatisierte Workflows und
            intelligente Systeme.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-zinc-900 bg-zinc-900 md:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.08} className="bg-base p-8">
                <Icon
                  strokeWidth={1}
                  className="size-8 text-zinc-600 transition-colors duration-300 hover:text-accent"
                />
                <h3 className="mt-6 text-lg font-medium text-zinc-50">
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
            Automatisierungs-Potenzial prüfen
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
