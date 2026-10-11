import Link from "next/link";
import { CookieSettingsButton } from "./CookieConsent";
import { ADDRESS, EMAIL, PHONE } from "@/config/site";

const LEISTUNGEN = [
  { href: "/webdesign", label: "Webdesign" },
  { href: "/website-relaunch", label: "Website-Relaunch" },
  { href: "/standorte/landshut", label: "Webdesign Landshut" },
  { href: "/branchen/handwerker", label: "Webdesign für Handwerker" },
  { href: "/branchen/dienstleister", label: "Webdesign für Dienstleister" },
  { href: "/#sichtbarkeits-check", label: "Sichtbarkeits-Check" },
];

const IMPOVA = [
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/#prozess", label: "Ablauf" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-100">
              IMPOVA<span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Websites für Unternehmen in Landshut und Umgebung, die
              professionell wirken, gefunden werden und neue Anfragen
              bringen.
            </p>
            <address className="mt-4 flex flex-col gap-1 text-sm not-italic leading-relaxed text-zinc-400">
              <span>{ADDRESS.name}</span>
              <span>
                {ADDRESS.street}, {ADDRESS.zip} {ADDRESS.city}
              </span>
              <a href={PHONE.href} className="inline-flex min-h-6 items-center self-start hover:text-zinc-100">
                {PHONE.display}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex min-h-6 items-center self-start hover:text-zinc-100">
                {EMAIL}
              </a>
            </address>
            <div className="mt-6 flex items-center gap-4 font-mono text-xs uppercase tracking-wider text-muted">
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

          <nav aria-label="Leistungen">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Leistungen
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-400">
              {LEISTUNGEN.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-zinc-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Impova">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Impova
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-400">
              {IMPOVA.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-zinc-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
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
              <li>
                <CookieSettingsButton className="text-left hover:text-zinc-100" />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-zinc-900 pt-6 font-mono text-[11px] uppercase tracking-wider text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Impova, Tobias Springer</span>
          <span>Webdesign und lokale Sichtbarkeit, Landshut</span>
        </div>
      </div>
    </footer>
  );
}
