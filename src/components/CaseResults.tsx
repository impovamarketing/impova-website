import Image from "next/image";
import type { CaseKpi, CaseScreenshot } from "@/app/referenzen/case-studies";

type CaseResultsProps = {
  kpis: CaseKpi[];
  note?: string;
  screenshots: CaseScreenshot[];
  name: string;
};

// Kennzahlen-Streifen plus Screenshots. Zeigt nur, was befüllt ist.
export function CaseResults({ kpis, note, screenshots, name }: CaseResultsProps) {
  if (kpis.length === 0 && screenshots.length === 0) return null;

  // Haben alle Kennzahlen denselben Zeitraum und dieselbe Quelle, steht die Angabe einmal darunter.
  const shared =
    kpis.length > 0 &&
    kpis.every((kpi) => kpi.period === kpis[0].period && kpi.source === kpis[0].source)
      ? `${kpis[0].source}, ${kpis[0].period}`
      : null;

  return (
    <div className="flex flex-col gap-10">
      {kpis.length > 0 && (
        <div>
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="card flex flex-col p-5 [&:last-child:nth-child(odd)]:col-span-2 lg:[&:last-child:nth-child(odd)]:col-span-1"
              >
                <dt className="order-2 mt-2 text-sm leading-snug text-zinc-400">{kpi.label}</dt>
                <dd className="order-1 text-3xl font-medium tabular-nums tracking-tight text-zinc-50">
                  {kpi.value}
                </dd>
                {!shared && (
                  <dd className="order-3 mt-3 font-mono text-[11px] text-muted">
                    {kpi.source}, {kpi.period}
                  </dd>
                )}
              </div>
            ))}
          </dl>
          {(shared || note) && (
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted">
              {shared && <>Quelle: {shared}.</>} {note}
            </p>
          )}
        </div>
      )}

      {screenshots.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {screenshots.map((shot) => (
            <figure key={shot.src}>
              <div className="card relative aspect-[4/3] overflow-hidden">
                <Image
                  src={shot.src}
                  alt={`${shot.caption}, ${name}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] text-muted">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
