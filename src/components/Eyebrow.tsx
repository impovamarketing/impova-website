// Kleines Label über Überschriften. index wird nicht mehr angezeigt, bleibt aber für bestehende Aufrufe erlaubt.
export function Eyebrow({ children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </div>
  );
}
