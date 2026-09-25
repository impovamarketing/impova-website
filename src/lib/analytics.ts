export const GA_MEASUREMENT_ID = "G-3YHZSKMB40";
export const GTM_CONTAINER_ID = "GTM-582LZZSQ";

export const CONSENT_STORAGE_KEY = "impova-cookie-consent";
export const CONSENT_CHANGE_EVENT = "impova:consent-change";
export const OPEN_COOKIE_SETTINGS_EVENT = "impova:open-cookie-settings";

export type Consent = { analytics: boolean; marketing: boolean };

export function getStoredConsentRaw(): string {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

// Erwartet den Rohwert aus dem localStorage. Ältere Einträge ({status})
// bleiben gültig: "granted" entspricht Statistik ja, Marketing nein.
export function parseConsent(raw: string): Consent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as {
      status?: string;
      analytics?: unknown;
      marketing?: unknown;
    };
    if (typeof parsed.analytics === "boolean") {
      return {
        analytics: parsed.analytics,
        marketing: parsed.marketing === true,
      };
    }
    if (parsed.status === "granted") return { analytics: true, marketing: false };
    if (parsed.status === "denied") return { analytics: false, marketing: false };
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(consent: Consent) {
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ ...consent, timestamp: new Date().toISOString() })
    );
  } catch {
    // Storage blockiert (z. B. privater Modus): Auswahl wird dann nicht gespeichert.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

// Löscht Google-Cookies (Analytics: _ga*, Ads: _gcl_*), die sich von der eigenen Domain aus entfernen lassen.
export function deleteGoogleCookies() {
  const hostParts = window.location.hostname.split(".");
  const domains = [
    undefined,
    window.location.hostname,
    `.${hostParts.slice(-2).join(".")}`,
  ];
  for (const rawCookie of document.cookie.split(";")) {
    const name = rawCookie.split("=")[0]?.trim();
    if (!name || !/^_ga|^_gid|^_gat|^_gcl/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${
        domain ? `; domain=${domain}` : ""
      }`;
    }
  }
}
