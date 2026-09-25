"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  CONSENT_CHANGE_EVENT,
  GA_MEASUREMENT_ID,
  OPEN_COOKIE_SETTINGS_EVENT,
  deleteAnalyticsCookies,
  readConsent,
  writeConsent,
  type ConsentStatus,
} from "@/lib/analytics";

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

// "pending" = Server-Render bzw. Hydration: weder Banner noch Analytics rendern.
function useConsent(): ConsentStatus | null | "pending" {
  return useSyncExternalStore(subscribe, readConsent, () => "pending" as const);
}

const buttonClass =
  "border border-zinc-600 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-100 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function CookieConsent() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  function decide(status: ConsentStatus) {
    const wasGranted = consent === "granted";
    if (status === "denied" && wasGranted) {
      (window as unknown as Record<string, unknown>)[
        `ga-disable-${GA_MEASUREMENT_ID}`
      ] = true;
      deleteAnalyticsCookies();
    }
    writeConsent(status);
    setReopened(false);
    // Bereits geladenes Analytics-Skript lässt sich nicht sauber entladen.
    if (status === "denied" && wasGranted) window.location.reload();
  }

  const bannerVisible = consent === null || (reopened && consent !== "pending");

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});`}
          </Script>
        </>
      )}

      {bannerVisible && (
        <section
          role="region"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-zinc-800 bg-surface/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10">
            <div className="max-w-3xl">
              <p
                id="cookie-consent-title"
                className="font-mono text-xs uppercase tracking-wider text-zinc-100"
              >
                Cookies &amp; Statistik
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Ich möchte mit Google Analytics verstehen, wie diese Website
                genutzt wird. Das passiert nur mit deiner Einwilligung — ohne
                Zustimmung wird Analytics nicht geladen und es werden keine
                Daten an Google gesendet. Du kannst deine Auswahl jederzeit
                über „Cookie-Einstellungen“ im Footer ändern. Mehr in der{" "}
                <Link
                  href="/datenschutz"
                  className="text-zinc-200 underline underline-offset-2 hover:text-accent"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className={buttonClass}
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className={buttonClass}
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
    >
      Cookie-Einstellungen
    </button>
  );
}
