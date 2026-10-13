// Zentrale, manuell gepflegte Angaben. Nur Werte eintragen, die stimmen.

// Freie Projektplätze. show: false blendet den Hinweis überall aus.
export const PROJECT_SLOTS = { show: true, free: 2, total: 3 };

// Online-Kalender (z. B. Cal.com) über die Umgebungsvariable NEXT_PUBLIC_BOOKING_URL in Vercel.
// TODO: Link eintragen. Solange leer, führt der Button zum Kontaktbereich und heißt "Gespräch anfragen".
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const BOOKING = BOOKING_URL
  ? { url: BOOKING_URL, href: BOOKING_URL, label: "15-Minuten-Gespräch buchen" }
  : { url: "", href: "/#kontakt", label: "Gespräch anfragen" };

// Name für das Vorgehen. An einer Stelle änderbar.
export const METHOD_NAME = "Impova Sichtbarkeits-System";

// Verbindliche Zusagen. Von Tobias bestätigt im Oktober 2026. show: false blendet den Abschnitt aus.
export const COMMITMENTS = {
  show: true,
  items: [
    {
      title: "Festpreis nach schriftlichem Angebot",
      text: "Vor dem Start bekommst du ein schriftliches Angebot. Für den darin vereinbarten Umfang gilt der Preis fest.",
    },
    {
      title: "Go-Live-Termin schriftlich vereinbart",
      text: "Wann deine Website live geht, legen wir gemeinsam fest und halten es schriftlich fest.",
    },
    {
      title: "30 Tage kostenlose Nachbesserung",
      text: "Funktioniert nach dem Launch etwas nicht wie vereinbart, bessere ich es in den ersten 30 Tagen kostenlos nach.",
    },
  ],
};

// Logo-Leiste mit Kundenlogos. Auf Wunsch von Tobias seit 13.10.2026 sichtbar.
export const SHOW_CLIENT_LOGOS = true;

export const PHONE = { display: "0151 23819198", href: "tel:+4915123819198" };

export const GOOGLE_REVIEWS = {
  rating: "5,0",
  count: 8,
  url: "https://maps.google.com/?cid=9249107226053014283",
  asOf: "Stand Oktober 2026",
};

// Gemessen an impova.de im Oktober 2026: Lighthouse mobil (erste Anzeige, CLS) und Serverantwort per curl (Median).
export const MEASURED = {
  firstPaint: "1,0 s",
  serverResponse: "0,1 s",
  layoutShift: "0",
  source: "Gemessen an impova.de am 13.10.2026: Lighthouse (mobil, Median aus 3 Läufen) und Serverantwortzeit (Median aus 9 Abrufen).",
};

export const EMAIL = "info@impova.de";

export const ADDRESS = {
  name: "Impova, Tobias Springer",
  street: "Hauptstraße 21a",
  zip: "84051",
  city: "Essenbach",
};
