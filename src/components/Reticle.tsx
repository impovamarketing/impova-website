export function Reticle() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-accent" />
      <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-accent" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent" />
    </span>
  );
}
