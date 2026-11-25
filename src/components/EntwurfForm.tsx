"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Lock } from "lucide-react";
import { trackLead } from "@/lib/meta";
import { trackEvent } from "@/lib/analytics";
import { PHONE } from "@/config/site";

// Das Formular schickt an /api/contact (kind: "entwurf"). Von dort geht die Anfrage per Resend an info@impova.de.
type Fields = { website: string; firma: string; vorname: string; email: string; phone: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { website: "", firma: "", vorname: "", email: "", phone: "" };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.website.trim()) {
    errors.website = "Bitte gib deine Website an oder schreib „Noch keine“.";
  }
  if (!fields.firma.trim()) errors.firma = "Bitte gib Firmenname und Branche an.";
  if (!fields.vorname.trim()) errors.vorname = "Bitte gib deinen Vornamen an.";
  if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }
  return errors;
}

export function EntwurfForm() {
  const router = useRouter();
  const [fields, setFields] = useState(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "entwurf", ...fields, company: honeypot }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("generate_lead", { lead_source: "entwurf_form" });
      // Meta-Pixel "Lead" + Conversions API (nur mit Einwilligung, dedupliziert über die event_id).
      trackLead("entwurf_form", {
        email: fields.email,
        phone: fields.phone || undefined,
      });
      router.push("/danke?anfrage=entwurf");
    } catch {
      setStatus("error");
    }
  }

  const field = (
    key: keyof Fields,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement>,
    hint?: string
  ) => (
    <div>
      <label htmlFor={`ef-${key}`} className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        id={`ef-${key}`}
        value={fields[key]}
        onChange={update(key)}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={
          [errors[key] && `ef-${key}-error`, hint && `ef-${key}-hint`].filter(Boolean).join(" ") || undefined
        }
        className="mt-2 w-full border-b border-zinc-800 bg-transparent pb-3 text-zinc-100 placeholder:text-muted focus:border-accent focus:outline-none aria-[invalid=true]:border-status-red"
        {...props}
      />
      {hint && !errors[key] && (
        <p id={`ef-${key}-hint`} className="mt-2 text-xs text-muted">
          {hint}
        </p>
      )}
      {errors[key] && (
        <p id={`ef-${key}-error`} className="mt-2 text-xs text-status-red">
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      <p className="text-lg font-medium text-zinc-50">Dein kostenloser Entwurf</p>
      <p className="mt-1 text-sm text-zinc-400">Dauert 30 Sekunden.</p>

      <div className="mt-6 flex flex-col gap-6">
        {field("website", "Deine aktuelle Website *", {
          type: "text",
          inputMode: "url",
          autoComplete: "url",
          placeholder: "z. B. www.deine-firma.de oder „Noch keine“",
        })}
        {field("firma", "Firmenname & Branche *", {
          type: "text",
          autoComplete: "organization",
          placeholder: "z. B. Müller Elektrotechnik, Landshut",
        })}
        {field("vorname", "Dein Vorname *", {
          type: "text",
          autoComplete: "given-name",
          placeholder: "z. B. Thomas",
        })}
        {field(
          "email",
          "Deine E-Mail-Adresse *",
          { type: "email", autoComplete: "email", placeholder: "name@deine-firma.de" },
          "Hierhin schicke ich deinen Entwurf."
        )}
        {field("phone", "Telefonnummer (optional)", {
          type: "tel",
          autoComplete: "tel",
          placeholder: "Für kurze Rückfragen",
        })}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-black transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
      >
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : null}
        Jetzt kostenlosen Entwurf anfordern
        {status !== "submitting" && <ArrowRight className="size-4" aria-hidden="true" />}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-center font-mono text-[11px] uppercase tracking-wider text-zinc-400">
        <Lock className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
        100 % kostenlos · Kein Verkaufsdruck · Fertig in 24h
      </p>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        Deine Angaben nutze ich nur für deinen Entwurf. Mehr in der{" "}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-accent">
          Datenschutzerklärung
        </Link>
        .
      </p>

      {status === "error" && (
        <p role="alert" className="mt-4 font-mono text-xs text-status-red">
          Das hat leider nicht geklappt. Bitte versuch es erneut oder ruf mich an: {PHONE.display}.
        </p>
      )}
    </form>
  );
}
