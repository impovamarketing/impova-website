import Link from "next/link";
import { Eyebrow } from "./Eyebrow";

const LINKS = [
  { href: "/webdesign", label: "Webdesign" },
  { href: "/website-relaunch", label: "Website-Relaunch" },
  { href: "/anzeigen", label: "Anzeigen bei Google und Meta" },
  { href: "/recruiting", label: "Social Recruiting" },
  { href: "/standorte/landshut", label: "Webdesign in Landshut" },
  { href: "/branchen/handwerker", label: "Webdesign für Handwerker" },
  { href: "/branchen/dienstleister", label: "Webdesign für Dienstleister" },
  { href: "/referenzen", label: "Referenzen und Case Studies" },
  { href: "/ueber-mich", label: "Über mich" },
];

// Einheitlicher Block für interne Verlinkung am Ende der Unterseiten.
export function RelatedLinks({ current, index }: { current: string; index: string }) {
  return (
    <section className="border-t border-zinc-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Eyebrow index={index}>Weiterlesen</Eyebrow>
        <ul className="mt-8 grid max-w-4xl grid-cols-1 gap-3 font-mono text-xs uppercase tracking-wider sm:grid-cols-2">
          {LINKS.filter((link) => link.href !== current).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-accent hover:underline">
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
