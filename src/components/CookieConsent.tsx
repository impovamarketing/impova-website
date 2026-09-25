"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  CONSENT_CHANGE_EVENT,
  GA_MEASUREMENT_ID,
  GTM_CONTAINER_ID,
  OPEN_COOKIE_SETTINGS_EVENT,
  deleteGoogleCookies,
  getStoredConsentRaw,
  parseConsent,
  writeConsent,
  type Consent,
} from "@/lib/analytics";

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

// "pending" = Server-Render bzw. Hydration: weder Banner noch Skripte rendern.
function useConsent(): Consent | null | "pending" {
  const raw = useSyncExternalStore(
    subscribe,
    getStoredConsentRaw,
    () => "pending"
  );
  return useMemo(() => (raw === "pending" ? "pending" : parseConsent(raw)), [raw]);
}

const buttonClass =
  "border border-zinc-600 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-zinc-100 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// ad_personalization bleibt bewusst aus: Marketing umfasst nur die Conversion-Messung, kein Remarketing.
function GoogleScripts({ consent }: { consent: Consent }) {
  const state = (granted: boolean) => (granted ? "granted" : "denied");
  const analyticsInit = consent.analytics
    ? `
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});`
    : "";
  return (
    <>
      <Script id="consent-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: '${state(consent.analytics)}',
  ad_storage: '${state(consent.marketing)}',
  ad_user_data: '${state(consent.marketing)}',
  ad_personalization: 'denied'
});${analyticsInit}`}
      </Script>
      {consent.analytics && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      )}
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
      </Script>
    </>
  );
}

function Choice({
  id,
  label,
  text,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  text: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 size-4 shrink-0 accent-[#c6ff00]"
      />
      <span className="text-sm leading-relaxed text-zinc-400">
        <span className="font-medium text-zinc-200">{label}</span> — {text}
      </span>
    </label>
  );
}

export function CookieConsent() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const open = () => {
      const current = parseConsent(getStoredConsentRaw());
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setReopened(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  function decide(next: Consent) {
    const previous = consent === "pending" ? null : consent;
    const hadGoogle = !!previous && (previous.analytics || previous.marketing);
    if (hadGoogle && previous.analytics && !next.analytics) {
      (window as unknown as Record<string, unknown>)[
        `ga-disable-${GA_MEASUREMENT_ID}`
      ] = true;
    }
    if (hadGoogle && (!next.analytics || !next.marketing)) deleteGoogleCookies();
    writeConsent(next);
    setReopened(false);
    // Bereits geladene Google-Skripte lassen sich nicht sauber entladen oder umstellen.
    if (hadGoogle) window.location.reload();
  }

  const bannerVisible = consent === null || (reopened && consent !== "pending");
  const googleActive =
    consent !== null &&
    consent !== "pending" &&
    (consent.analytics || consent.marketing);

  return (
    <>
      {googleActive && <GoogleScripts consent={consent} />}

      {bannerVisible && (
        <section
          role="region"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-0 bottom-0 z-[60] max-h-[90vh] overflow-y-auto border-t border-zinc-800 bg-surface/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:px-10">
            <div className="max-w-3xl">
              <p
                id="cookie-consent-title"
                className="font-mono text-xs uppercase tracking-wider text-zinc-100"
              >
                Cookies &amp; Einwilligung
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Ohne deine Zustimmung wird nichts von Google geladen und es
                werden keine Daten gesendet. Du entscheidest getrennt und
                kannst deine Auswahl jederzeit über „Cookie-Einstellungen“ im
                Footer ändern. Mehr in der{" "}
                <Link
                  href="/datenschutz"
                  className="text-zinc-200 underline underline-offset-2 hover:text-accent"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Choice
                  id="consent-analytics"
                  label="Statistik"
                  text="Google Analytics zeigt mir, wie die Website genutzt wird."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Choice
                  id="consent-marketing"
                  label="Marketing"
                  text="Google Ads misst, ob Anzeigen zu Anfragen führen."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => decide({ analytics: false, marketing: false })}
                className={buttonClass}
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={() => decide({ analytics, marketing })}
                className={buttonClass}
              >
                Auswahl speichern
              </button>
              <button
                type="button"
                onClick={() => decide({ analytics: true, marketing: true })}
                className={buttonClass}
              >
                Alle akzeptieren
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
