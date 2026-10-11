import Link from "next/link";
import type { CaseStudy } from "@/app/referenzen/case-studies";
import { CaseVisual } from "./CaseVisual";

export function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/referenzen/${caseStudy.slug}`}
      className="group flex h-full flex-col border border-zinc-900 transition-colors duration-300 hover:border-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="overflow-hidden border-b border-zinc-900">
        <CaseVisual caseStudy={caseStudy} sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
          {caseStudy.category}
        </p>
        <h3 className="mt-2 text-lg font-medium text-zinc-50">{caseStudy.name}</h3>
        {caseStudy.result ? (
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            <span className="font-medium text-zinc-50">{caseStudy.result.headline}</span>{" "}
            {caseStudy.result.detail}
          </p>
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
