"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type FormState = {
  name: string;
  email: string;
  details: string;
  company: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  details: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  const fieldsComplete = useMemo(() => {
    let count = 0;
    if (form.name.trim()) count++;
    if (form.email.trim()) count++;
    if (form.details.trim()) count++;
    return count;
  }, [form]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="border-b border-zinc-900 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-4">
          <Eyebrow index="06">Kontakt</Eyebrow>
          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Website-Projekt besprechen
          </h2>
          <p className="mt-5 text-zinc-400">
            Egal ob neue Website, Relaunch oder du erstmal nur wissen willst,
            wo deine aktuelle Seite Potenzial liegen lässt — beschreib kurz
            dein Anliegen. Aktuell 2 von 3 Projekt-Slots frei, ich meld mich
            innerhalb von 24 Stunden persönlich zurück.
          </p>

          <div className="mt-12 flex items-center gap-4 border-t border-zinc-900 pt-8">
            <div className="relative h-16 w-14 shrink-0 overflow-hidden border border-zinc-800 grayscale">
              <Image
                src="/images/portraits/founder-portrait.jpeg"
                alt="Gründer von Impova"
                fill
                className="object-cover object-[50%_18%]"
                sizes="56px"
              />
            </div>
            <div>
              <p className="text-sm text-zinc-200">Persönlicher Ansprechpartner</p>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                Gründer, Impova — Landshut
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <form
            onSubmit={handleSubmit}
            className="border border-zinc-900 bg-surface"
          >
            <div className="flex items-center justify-between border-b border-zinc-900 px-6 py-4 font-mono text-xs uppercase tracking-wider text-zinc-600">
              <span>Projektanfrage</span>
              <span>
                FORM_STATUS: {fieldsComplete}/3 FIELDS COMPLETE
              </span>
            </div>

            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-px bg-zinc-900 sm:grid-cols-2">
              <Field
                index="01"
                label="Name"
                name="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                index="02"
                label="E-Mail"
                name="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>

            <div className="border-t border-zinc-900 px-6 py-6">
              <label
                htmlFor="details"
                className="font-mono text-xs uppercase tracking-wider text-zinc-600"
              >
                [03] Projekt-Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                required
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Worum geht es? Bestehende Website, Branche, Ziele..."
                className="mt-4 w-full resize-none border-b border-zinc-800 bg-transparent pb-3 text-zinc-100 placeholder:text-zinc-700 focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between border-t border-zinc-900 px-6 py-6">
              <p className="font-mono text-xs text-zinc-700">
                Kein Spam. Keine Weitergabe an Dritte.
              </p>
              <button
                type="submit"
                disabled={status === "submitting" || status === "sent"}
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wider text-base transition-colors hover:bg-white disabled:opacity-60"
              >
                {status === "submitting" && (
                  <Loader2 className="size-4 animate-spin" />
                )}
                {status === "sent" && <CheckCircle2 className="size-4" />}
                {status === "sent" ? "Gesendet" : "Anfrage senden"}
              </button>
            </div>
            {status === "error" && (
              <p className="border-t border-zinc-900 px-6 py-4 font-mono text-xs text-status-red">
                Fehler beim Senden. Bitte versuch es erneut oder schreib direkt
                an info@impova.de.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  index,
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}: {
  index: string;
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="bg-surface px-6 py-6">
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-wider text-zinc-600"
      >
        [{index}] {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-4 w-full border-b border-zinc-800 bg-transparent pb-3 text-zinc-100 placeholder:text-zinc-700 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
