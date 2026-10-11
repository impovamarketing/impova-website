import Image from "next/image";
import type { CaseStudy } from "@/app/referenzen/case-studies";

// Zeigt den Website-Screenshot oder, solange keiner vorliegt, das Kundenlogo.
export function CaseVisual({
  caseStudy,
  sizes,
  priority = false,
  aspect = "aspect-[3/2]",
}: {
  caseStudy: CaseStudy;
  sizes: string;
  priority?: boolean;
  aspect?: string;
}) {
  if (caseStudy.image) {
    return (
      <div className={`relative ${aspect} bg-zinc-950`}>
        <Image
          src={caseStudy.image}
          alt={`Website von ${caseStudy.name}, ${caseStudy.category}`}
          fill
          className="object-contain"
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative flex ${aspect} items-center justify-center bg-surface`}>
      {caseStudy.logo ? (
        <div className="relative h-1/3 w-1/2">
          <Image
            src={caseStudy.logo}
            alt={`Logo von ${caseStudy.name}`}
            fill
            className="object-contain"
            sizes="(min-width: 768px) 25vw, 50vw"
            priority={priority}
          />
        </div>
      ) : (
        <p className="font-mono text-xs uppercase tracking-wider text-muted">{caseStudy.name}</p>
      )}
    </div>
  );
}
