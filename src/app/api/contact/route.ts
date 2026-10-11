import { NextRequest, NextResponse } from "next/server";
import { BRANCHEN, BUDGETS } from "@/lib/lead-options";

type ContactPayload = {
  kind?: string;
  name: string;
  email: string;
  details: string;
  company?: string; // Honeypot, muss leer bleiben
  phone?: string;
  branche?: string;
  budget?: string;
  website?: string;
  ort?: string;
  privacy?: boolean;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Akzeptiert "beispiel.de" ebenso wie "https://www.beispiel.de/seite".
const WEBSITE_REGEX = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

function optionalChoice(value: unknown, allowed: readonly string[]) {
  return typeof value === "string" && allowed.includes(value) ? value : undefined;
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function badRequest(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

async function sendMail(subject: string, replyTo: string, lines: string[]) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Impova <info@impova.de>",
      to: "info@impova.de",
      reply_to: replyTo,
      subject,
      text: lines.join("\n"),
    }),
  });
  if (!res.ok) {
    console.error("Resend-Fehler:", await res.text());
    return NextResponse.json(
      { ok: false, error: "Anfrage konnte nicht versendet werden." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Partial<ContactPayload>;

  // Honeypot: Bots füllen versteckte Felder aus, Menschen sehen sie nicht.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const email = text(body.email, 254);
  if (!EMAIL_REGEX.test(email)) return badRequest("Ungültige E-Mail-Adresse.");

  if (body.kind === "check") {
    const website = text(body.website, 300);
    const branche = text(body.branche, 80);
    const ort = text(body.ort, 80);
    if (!website || !branche || !ort) return badRequest("Pflichtfelder fehlen.");
    if (!WEBSITE_REGEX.test(website)) return badRequest("Ungültige Website-Adresse.");
    if (body.privacy !== true) return badRequest("Datenschutz-Zustimmung fehlt.");

    return sendMail(`Sichtbarkeits-Check: ${website}`, email, [
      `Website: ${website}`,
      `Branche: ${branche}`,
      `Ort: ${ort}`,
      `E-Mail: ${email}`,
      "",
      "Datenschutzhinweis bestätigt.",
    ]);
  }

  const name = text(body.name, 120);
  const details = text(body.details, 5000);
  if (!name || !details) return badRequest("Pflichtfelder fehlen.");

  const phone = text(body.phone, 40);
  const branche = optionalChoice(body.branche, BRANCHEN);
  const budget = optionalChoice(body.budget, BUDGETS);

  const extraLines = [
    phone && `Telefon: ${phone}`,
    branche && `Branche: ${branche}`,
    budget && `Budget: ${budget}`,
  ].filter((line): line is string => Boolean(line));

  return sendMail(
    `Neue Projektanfrage von ${name}${budget ? ` (${budget})` : ""}`,
    email,
    [`Name: ${name}`, `E-Mail: ${email}`, ...extraLines, "", details]
  );
}
