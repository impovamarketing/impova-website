import { Check } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { COMMITMENTS } from "@/config/site";

export function Commitments({ index }: { index: string }) {
  if (!COMMITMENTS.show) return null;

  return (
    <section id="zusagen" className="border-b border-zinc-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow index={index}>Zusagen</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Was du verbindlich bekommst
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-px border border-zinc-900 bg-zinc-900 md:grid-cols-3">
          {COMMITMENTS.items.map((item) => (
            <li key={item.title} className="bg-base p-6">
              <Check className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-4 font-medium text-zinc-100">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Was ich nicht zusage: feste Platzierungen bei Google. Die kann niemand
          seriös garantieren.
        </p>
      </div>
    </section>
  );
}
