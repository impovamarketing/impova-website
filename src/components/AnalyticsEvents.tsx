"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const CTA_TARGETS = ["#sichtbarkeits-check", "#kontakt"];

// Zählt Klicks auf Telefonnummern und Haupt-Buttons, sobald der Google Tag Manager per Einwilligung geladen ist.
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      const href = link?.getAttribute("href");
      if (!link || !href) return;
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: window.location.pathname });
        return;
      }
      const target = CTA_TARGETS.find((t) => href.endsWith(t));
      if (target) {
        trackEvent("cta_click", {
          cta_target: target.slice(1),
          cta_text: link.textContent?.trim().slice(0, 80) ?? "",
          page_path: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
