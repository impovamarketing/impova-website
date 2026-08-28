import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  details: string;
  company?: string; // honeypot — must stay empty
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // TODO: Sobald die Domain impova.de bei Resend verifiziert ist, "from"
  // auf "Impova <info@impova.de>" umstellen.
  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Impova <onboarding@resend.dev>",
      to: "info@impova.de",
      reply_to: email,
      subject: `Neue Projektanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\n${details}`,
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
