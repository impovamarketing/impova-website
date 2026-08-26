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

  // TODO: Resend/Formspree-Integration.
  // Beispiel mit Resend (RESEND_API_KEY in .env.local setzen):
  //
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "Impova <anfrage@impova.de>",
  //     to: "hallo@impova.de",
  //     subject: `Neue Projektanfrage von ${name}`,
  //     text: `Name: ${name}\nE-Mail: ${email}\n\n${details}`,
  //   }),
  // });

  console.log("Neue Projektanfrage:", { name, email, details });

  return NextResponse.json({ ok: true });
}
