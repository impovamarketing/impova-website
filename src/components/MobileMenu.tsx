"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { PHONE } from "@/config/site";

type NavItem = { label: string; href: string };

export function MobileMenu({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  // Merkt sich, auf welcher Seite das Menü geöffnet wurde. Nach einem Seitenwechsel ist es dadurch automatisch zu.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenOn(null);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpenOn(null);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpenOn(open ? null : pathname)}
        className="flex items-center border border-zinc-700 px-3 py-2 text-zinc-100 transition-colors hover:border-accent hover:text-accent"
      >
        {open ? <X className="size-3.5" aria-hidden="true" /> : <Menu className="size-3.5" aria-hidden="true" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-zinc-900 bg-base"
        >
          <nav aria-label="Hauptmenü" className="flex flex-col px-6 py-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-zinc-900 py-4 text-lg text-zinc-100 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-6 pb-10">
            <Link
              href="/#sichtbarkeits-check"
              onClick={close}
              className="bg-accent px-5 py-4 text-center font-mono text-xs uppercase tracking-wider text-black"
            >
              Kostenlosen Sichtbarkeits-Check anfordern
            </Link>
            <a
              href={PHONE.href}
              className="flex items-center justify-center gap-2 border border-zinc-700 px-5 py-4 font-mono text-xs uppercase tracking-wider text-zinc-100"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {PHONE.display}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
