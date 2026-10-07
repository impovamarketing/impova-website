import { getStoredConsentRaw, parseConsent } from "@/lib/analytics";

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type LeadSource = "contact_form" | "landing_form" | "phone_click";
export type LeadUserData = { email?: string; phone?: string };

function hasMetaConsent(): boolean {
  return parseConsent(getStoredConsentRaw())?.meta === true;
}

function readCookie(name: string): string | undefined {
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
}

// Browser-Event und Server-Event teilen sich die event_id, damit Meta sie dedupliziert.
export function trackLead(source: LeadSource, user: LeadUserData = {}) {
  if (!META_PIXEL_ID || !hasMetaConsent()) return;

  const eventId = crypto.randomUUID();
  window.fbq?.(
    "track",
    "Lead",
    { lead_source: source },
    { eventID: eventId }
  );

  void fetch("/api/meta-capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      eventName: "Lead",
      eventId,
      source,
      consent: true,
      eventSourceUrl: window.location.href,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      ...user,
    }),
  }).catch(() => {});
}
