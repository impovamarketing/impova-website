import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const GRAPH_VERSION = "v23.0";
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SOURCES = new Set(["contact_form", "phone_click"]);

type CapiPayload = {
  eventName?: unknown;
  eventId?: unknown;
  source?: unknown;
  consent?: unknown;
  eventSourceUrl?: unknown;
  fbp?: unknown;
  fbc?: unknown;
  email?: unknown;
  phone?: unknown;
};

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function asString(value: unknown, maxLength = 500): string | undefined {
  return typeof value === "string" && value.length > 0 && value.length <= maxLength
    ? value
    : undefined;
}

// Meta erwartet Telefonnummern nur mit Ziffern inklusive Ländervorwahl.
function normalizePhone(raw: string): string | undefined {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  else if (digits.startsWith("0")) digits = `49${digits.slice(1)}`;
  return digits.length >= 8 ? digits : undefined;
}

function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token) {
    console.error("Meta CAPI: NEXT_PUBLIC_META_PIXEL_ID oder META_CAPI_TOKEN fehlt.");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  if (!isSameOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  let body: CapiPayload;
  try {
    body = (await request.json()) as CapiPayload;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Ohne Meta-Einwilligung wird nichts an Meta übermittelt.
  if (body.consent !== true) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const eventId = asString(body.eventId, 64);
  const source = asString(body.source, 32);
  if (body.eventName !== "Lead" || !eventId || !UUID_REGEX.test(eventId) || !source || !SOURCES.has(source)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const userData: Record<string, unknown> = {};
  const email = asString(body.email, 254)?.trim().toLowerCase();
  if (email) userData.em = [sha256(email)];
  const phone = asString(body.phone, 40);
  const normalizedPhone = phone ? normalizePhone(phone) : undefined;
  if (normalizedPhone) userData.ph = [sha256(normalizedPhone)];
  const fbp = asString(body.fbp, 200);
  if (fbp) userData.fbp = fbp;
  const fbc = asString(body.fbc, 200);
  if (fbc) userData.fbc = fbc;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) userData.client_ip_address = ip;
  const userAgent = request.headers.get("user-agent");
  if (userAgent) userData.client_user_agent = userAgent;

  const origin = request.headers.get("origin") ?? "";
  const sourceUrl = asString(body.eventSourceUrl, 2000);
  const eventSourceUrl = sourceUrl?.startsWith(origin) ? sourceUrl : origin;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        action_source: "website",
        user_data: userData,
        custom_data: { lead_source: source },
      },
    ],
    access_token: token,
  };
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (testEventCode) payload.test_event_code = testEventCode;

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    console.error("Meta-CAPI-Fehler:", res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
