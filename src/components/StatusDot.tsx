type StatusDotProps = {
  label: string;
  tone?: "accent" | "green";
};

export function StatusDot({ label, tone = "green" }: StatusDotProps) {
  const color = tone === "green" ? "bg-status-green" : "bg-accent";

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-zinc-300">
      <span className="relative flex size-2">
        <span
          className={`absolute inline-flex h-full w-full animate-pulse-dot rounded-full ${color}`}
        />
        <span className={`relative inline-flex size-2 rounded-full ${color}`} />
      </span>
      {label}
    </div>
  );
}
