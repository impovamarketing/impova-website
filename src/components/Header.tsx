import Link from "next/link";
import { Phone } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS = [
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Prozess", href: "/#prozess" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-base/80 backdrop-blur-md">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:text-black"
      >
        Zum Inhalt springen
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-zinc-100"
        >
          IMPOVA<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+4915123819198"
            aria-label="Anrufen: 0151 23819198"
            className="flex items-center gap-2 whitespace-nowrap border border-zinc-700 px-3 py-2 font-mono text-xs uppercase tracking-wider text-zinc-100 transition-colors hover:border-accent hover:text-accent"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="hidden xl:inline">0151 23819198</span>
          </a>
          <Link
            href="/#sichtbarkeits-check"
            className="whitespace-nowrap border border-zinc-700 px-4 py-2 font-mono text-xs uppercase tracking-wider text-zinc-100 transition-colors hover:border-accent hover:text-accent"
          >
            <span className="sm:hidden lg:inline xl:hidden">Gratis-Check</span>
            <span className="hidden sm:inline lg:hidden xl:inline">
              Kostenloser Sichtbarkeits-Check
            </span>
          </Link>
          <MobileMenu items={NAV_ITEMS} />
        </div>
      </div>
    </header>
  );
}
