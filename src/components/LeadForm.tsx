"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { BRANCHEN, BUDGETS } from "@/lib/lead-options";
import { trackLead } from "@/lib/meta";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  branche: "",
  budget: "",
  details: "",
  company: "",
};

const fieldClass =
  "mt-2 w-full border-b border-zinc-800 bg-transparent pb-3 text-zinc-100 placeholder:text-zinc-700 focus:border-accent focus:outline-none";
const labelClass = "font-mono text-xs uppercase tracking-wider text-muted";

export function LeadForm() {
  const router = useRouter();
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const set = (key: keyof typeof INITIAL) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value });

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
      trackLead("landing_form", {
        email: form.email,
        phone: form.phone || undefined,
      });
      router.push("/danke");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-zinc-900 bg-surface">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={set("company")}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-px bg-zinc-900 sm:grid-cols-2">
        <div className="bg-surface px-6 py-5">
          <label htmlFor="lf-name" className={labelClass}>
            Name *
          </label>
          <input id="lf-name" required value={form.name} onChange={set("name")} className={fieldClass} autoComplete="name" />
        </div>
        <div className="bg-surface px-6 py-5">
          <label htmlFor="lf-email" className={labelClass}>
            E-Mail *
          </label>
          <input id="lf-email" type="email" required value={form.email} onChange={set("email")} className={fieldClass} autoComplete="email" />
        </div>
        <div className="bg-surface px-6 py-5">
          <label htmlFor="lf-branche" className={labelClass}>
            Branche *
          </label>
          <select id="lf-branche" required value={form.branche} onChange={set("branche")} className={`${fieldClass} [&>option]:bg-surface`}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {BRANCHEN.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-surface px-6 py-5">
          <label htmlFor="lf-budget" className={labelClass}>
            Budget-Rahmen *
          </label>
          <select id="lf-budget" required value={form.budget} onChange={set("budget")} className={`${fieldClass} [&>option]:bg-surface`}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="border-t border-zinc-900 px-6 py-5">
        <label htmlFor="lf-phone" className={labelClass}>
          Telefon (optional, für einen schnellen Rückruf)
        </label>
        <input id="lf-phone" type="tel" value={form.phone} onChange={set("phone")} className={fieldClass} autoComplete="tel" />
      </div>

      <div className="border-t border-zinc-900 px-6 py-5">
        <label htmlFor="lf-details" className={labelClass}>
          Worum geht es? *
        </label>
        <textarea
          id="lf-details"
          rows={3}
          required
          value={form.details}
          onChange={set("details")}
          placeholder="Neue Website oder Relaunch? Gibt es schon eine Seite?"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-zinc-900 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          Ich melde mich innerhalb von 24 Stunden persönlich zurück.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wider text-base transition-colors hover:bg-white disabled:opacity-60"
        >
          {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
          Unverbindlich anfragen
        </button>
      </div>

      {status === "error" && (
        <p className="border-t border-zinc-900 px-6 py-4 font-mono text-xs text-status-red">
          Fehler beim Senden. Bitte versuch es erneut oder schreib direkt an
          info@impova.de.
        </p>
      )}
    </form>
  );
}
