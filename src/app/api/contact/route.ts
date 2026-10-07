import { NextRequest, NextResponse } from "next/server";
import { BRANCHEN, BUDGETS } from "@/lib/lead-options";

type ContactPayload = {
  name: string;
  email: string;
  details: string;
  company?: string; // honeypot — must stay empty
  phone?: string;
  branche?: string;
  budget?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function optionalChoice(value: unknown, allowed: readonly string[]) {
  return typeof value === "string" && allowed.includes(value) ? value : undefined;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const { name, email, details, company } = body;

  // Honeypot: bots fill hidden fields, humans never see this input.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !details?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Pflichtfelder fehlen." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Ungültige E-Mail-Adresse." },
      { status: 400 }
    );
  }

  const phone =
    typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : "";
  const branche = optionalChoice(body.branche, BRANCHEN);
  const budget = optionalChoice(body.budget, BUDGETS);

  const extraLines = [
    phone && `Telefon: ${phone}`,
    branche && `Branche: ${branche}`,
    budget && `Budget: ${budget}`,
  ].filter(Boolean);

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Impova <info@impova.de>",
      to: "info@impova.de",
      reply_to: email,
      subject: `Neue Projektanfrage von ${name}${budget ? ` (${budget})` : ""}`,
      text: [`Name: ${name}`, `E-Mail: ${email}`, ...extraLines, "", details].join("\n"),
    }),
  });

  if (!emailRes.ok) {
    console.error("Resend-Fehler:", await emailRes.text());
    return NextResponse.json(
      { ok: false, error: "Anfrage konnte nicht versendet werden." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
