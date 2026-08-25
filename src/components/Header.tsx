import Link from "next/link";

const NAV_ITEMS = [
  { label: "Philosophie", href: "#philosophie" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="#"
          className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-zinc-100"
        >
          IMPOVA<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontakt"
          className="border border-zinc-700 px-4 py-2 font-mono text-xs uppercase tracking-wider text-zinc-100 transition-colors hover:border-accent hover:text-accent"
        >
          Projekt anfragen
        </Link>
      </div>
    </header>
  );
}
