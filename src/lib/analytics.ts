export const GA_MEASUREMENT_ID = "G-3YHZSKMB40";

export const CONSENT_STORAGE_KEY = "impova-cookie-consent";
export const CONSENT_CHANGE_EVENT = "impova:consent-change";
export const OPEN_COOKIE_SETTINGS_EVENT = "impova:open-cookie-settings";

export type ConsentStatus = "granted" | "denied";

export function readConsent(): ConsentStatus | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { status?: string };
    return parsed.status === "granted" || parsed.status === "denied"
      ? parsed.status
      : null;
  } catch {
    return null;
  }
}

export function writeConsent(status: ConsentStatus) {
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ status, timestamp: new Date().toISOString() })
    );
  } catch {
    // Storage blockiert (z. B. privater Modus): Auswahl gilt dann nur für diese Sitzung.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function deleteAnalyticsCookies() {
  const hostParts = window.location.hostname.split(".");
  const domains = [
    undefined,
    window.location.hostname,
    `.${hostParts.slice(-2).join(".")}`,
  ];
  for (const rawCookie of document.cookie.split(";")) {
    const name = rawCookie.split("=")[0]?.trim();
    if (!name || !/^_ga|^_gid|^_gat/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${
        domain ? `; domain=${domain}` : ""
      }`;
    }
  }
}
