"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { trackLead } from "@/lib/meta";
import { trackEvent } from "@/lib/analytics";
import { PHONE } from "@/config/site";

type Fields = { website: string; branche: string; ort: string; email: string };
type Errors = Partial<Record<keyof Fields | "privacy", string>>;

const EMPTY: Fields = { website: "", branche: "", ort: "", email: "" };
const WEBSITE_REGEX = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEPS = [
  "Wie du bei Google in deiner Region gefunden wirst",
  "Wie dein Google-Unternehmensprofil dasteht",
  "Was Besucher auf deiner Website vom Anfragen abhält",
];

function validate(fields: Fields, privacy: boolean): Errors {
  const errors: Errors = {};
  if (!WEBSITE_REGEX.test(fields.website.trim())) {
    errors.website = "Bitte gib deine Website-Adresse ein, z. B. beispiel.de.";
  }
  if (!fields.branche.trim()) errors.branche = "Bitte gib deine Branche an.";
  if (!fields.ort.trim()) errors.ort = "Bitte gib deinen Ort an.";
  if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }
  if (!privacy) errors.privacy = "Bitte bestätige den Datenschutzhinweis.";
  return errors;
}

export function VisibilityCheck() {
  const router = useRouter();
  const [fields, setFields] = useState(EMPTY);
  const [privacy, setPrivacy] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields, privacy);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "check", ...fields, privacy, company: honeypot }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("generate_lead", { lead_source: "visibility_check" });
      trackLead("visibility_check", { email: fields.email });
      router.push("/danke?anfrage=check");
    } catch {
      setStatus("error");
    }
  }

  const field = (
    key: keyof Fields,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement>
  ) => (
    <div className="bg-base/40 px-6 py-5">
      <label htmlFor={`vc-${key}`} className="font-mono text-xs uppercase tracking-wider text-muted">
        {label} *
      </label>
      <input
        id={`vc-${key}`}
        value={fields[key]}
        onChange={update(key)}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `vc-${key}-error` : undefined}
        className="mt-2 w-full border-b border-zinc-800 bg-transparent pb-3 text-zinc-100 placeholder:text-muted focus:border-accent focus:outline-none aria-[invalid=true]:border-status-red"
        {...props}
      />
      {errors[key] && (
        <p id={`vc-${key}-error`} className="mt-2 text-xs text-status-red">
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <section id="sichtbarkeits-check" className="scroll-mt-20 border-b border-white/5 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <Eyebrow index="01">Kostenlos</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            Sichtbarkeits-Check für dein Unternehmen
          </h2>
          <p className="mt-5 text-zinc-400">
            Ich schaue mir persönlich an, wie gut dich Kunden in deiner Region
            finden, und schicke dir eine kurze Einschätzung mit den wichtigsten
            Hebeln. Kostenlos und unverbindlich, Antwort innerhalb von 24
            Stunden.
          </p>
          <ul className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6">
            {STEPS.map((step) => (
              <li key={step} className="flex gap-3 text-sm text-zinc-300">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {step}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-zinc-400">
            Lieber direkt sprechen?{" "}
            <a href={PHONE.href} className="text-accent underline underline-offset-4">
              {PHONE.display}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={handleSubmit} noValidate className="card overflow-hidden">
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
            <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2">
              {field("website", "Deine Website", {
                type: "text",
                inputMode: "url",
                autoComplete: "url",
                placeholder: "beispiel.de",
              })}
              {field("branche", "Branche", { type: "text", placeholder: "z. B. Physiotherapie" })}
              {field("ort", "Ort", {
                type: "text",
                autoComplete: "address-level2",
                placeholder: "z. B. Landshut",
              })}
              {field("email", "E-Mail für die Antwort", {
                type: "email",
                autoComplete: "email",
                placeholder: "name@beispiel.de",
              })}
            </div>

            <div className="border-t border-white/5 bg-base/40 px-6 py-5">
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-zinc-400">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => {
                    setPrivacy(e.target.checked);
                    if (errors.privacy) setErrors({ ...errors, privacy: undefined });
                  }}
                  aria-invalid={Boolean(errors.privacy)}
                  aria-describedby={errors.privacy ? "vc-privacy-error" : undefined}
                  className="mt-1 size-4 shrink-0 accent-[#c6ff00]"
                />
                <span>
                  Ich habe die{" "}
                  <Link href="/datenschutz" className="text-zinc-200 underline underline-offset-2 hover:text-accent">
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und bin einverstanden, dass meine Angaben zur
                  Bearbeitung des Checks verwendet werden.
                </span>
              </label>
              {errors.privacy && (
                <p id="vc-privacy-error" className="mt-2 text-xs text-status-red">
                  {errors.privacy}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 bg-base/40 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs text-muted">Keine Weitergabe an Dritte.</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
              >
                {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
                Check anfordern
              </button>
            </div>

            {status === "error" && (
              <p role="alert" className="border-t border-white/5 px-6 py-4 font-mono text-xs text-status-red">
                Das hat leider nicht geklappt. Bitte versuch es erneut oder ruf
                mich an: {PHONE.display}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
