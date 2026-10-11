// Zentrale, manuell gepflegte Angaben. Nur Werte eintragen, die stimmen.

// Freie Projektplätze. show: false blendet den Hinweis überall aus.
export const PROJECT_SLOTS = { show: true, free: 2, total: 3 };

// TODO: Link zum Online-Kalender (z. B. Cal.com oder Calendly). Solange leer, wird kein Buchungs-Button angezeigt.
export const BOOKING_URL = "";

// TODO: Erst auf true setzen, wenn alle Kunden in der Logo-Leiste der Nutzung ihres Logos zugestimmt haben.
export const SHOW_CLIENT_LOGOS = false;

export const PHONE = { display: "0151 23819198", href: "tel:+4915123819198" };

export const GOOGLE_REVIEWS = {
  rating: "5,0",
  count: 8,
  url: "https://maps.google.com/?cid=9249107226053014283",
};

// Gemessen an impova.de im Oktober 2026: Lighthouse mobil (erste Anzeige, CLS) und Serverantwort per curl (Median).
export const MEASURED = {
  firstPaint: "1,1 s",
  serverResponse: "0,1 s",
  layoutShift: "0",
  source: "Gemessen an impova.de, Oktober 2026: Lighthouse (mobil) und Serverantwortzeit (Median).",
};
