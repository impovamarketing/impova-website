import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-100">
              IMPOVA<span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Websites für Unternehmen in Landshut und Umgebung, die
              professionell wirken, gefunden werden und neue Anfragen
              bringen.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-zinc-600">
              Essenbach — Landshut und Umgebung
            </p>
            <div className="mt-6 flex items-center gap-4 font-mono text-xs uppercase tracking-wider text-zinc-600">
              <a
                href="https://www.linkedin.com/in/tobias-springer-4400173b0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent"
              >
                [LinkedIn]
              </a>
              <a
                href="https://www.instagram.com/tobias.sprngr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-accent"
              >
                [Instagram]
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/#referenzen" className="hover:text-zinc-100">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/#philosophie" className="hover:text-zinc-100">
                  Philosophie
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="hover:text-zinc-100">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#prozess" className="hover:text-zinc-100">
                  Prozess
                </Link>
              </li>
              <li>
                <Link href="/#automatisierung" className="hover:text-zinc-100">
                  Automatisierung
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="hover:text-zinc-100">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="hover:text-zinc-100">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
              Rechtliches
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/impressum" className="hover:text-zinc-100">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-zinc-100">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-zinc-900 pt-6 font-mono text-[11px] uppercase tracking-wider text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <span>IMPOVA © 2026 — BUILT WITH NEXT.JS</span>
          <span>DEPLOYED ON VERCEL — LANDSHUT, DE</span>
        </div>
      </div>
    </footer>
  );
}
