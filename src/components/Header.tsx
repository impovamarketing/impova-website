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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:text-black"
      >
        Zum Inhalt springen
      </a>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-base/75 pl-5 pr-2 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.8)] backdrop-blur-md sm:pl-6">
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
              className="whitespace-nowrap text-sm text-zinc-300 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+4915123819198"
            aria-label="Anrufen: 0151 23819198"
            className="flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 px-3 text-sm text-zinc-100 transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            <span className="hidden xl:inline">0151 23819198</span>
          </a>
          <Link
            href="/#sichtbarkeits-check"
            className="flex h-10 items-center whitespace-nowrap rounded-full bg-accent px-4 text-sm font-medium text-black transition-colors hover:bg-white"
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
