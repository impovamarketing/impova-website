import Link from "next/link";
import type { CaseStudy } from "@/app/referenzen/case-studies";
import { CaseVisual } from "./CaseVisual";

export function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/referenzen/${caseStudy.slug}`}
      className="card card-interactive group flex h-full flex-col overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="border-b border-white/5">
        <CaseVisual caseStudy={caseStudy} sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
          {caseStudy.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-zinc-50">{caseStudy.name}</h3>
        {caseStudy.highlight ? (
          <div className="mt-4">
            <p className="text-sm font-medium leading-relaxed text-zinc-50">
              {caseStudy.highlight.text}
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted">
              {caseStudy.highlight.source}, {caseStudy.highlight.period}
            </p>
          </div>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-muted">{caseStudy.situation}</p>
        )}
        <span className="mt-auto pt-5 font-mono text-xs uppercase tracking-wider text-accent group-hover:underline">
          Case Study lesen →
        </span>
      </div>
    </Link>
  );
}
