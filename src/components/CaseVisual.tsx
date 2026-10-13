import Image from "next/image";
import type { CaseStudy } from "@/app/referenzen/case-studies";

// Zeigt die Website im Laptop-Rahmen, mit Handy-Ansicht falls vorhanden.
// Solange kein Screenshot vorliegt, erscheint das Kundenlogo.
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
    const hasPhone = Boolean(caseStudy.mobileImage);
    return (
      <div
        className={`relative ${aspect} overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,rgb(198_255_0/0.10),transparent_65%)]`}
      >
        <div
          className={`absolute top-[9%] ${hasPhone ? "left-[6%] w-[74%]" : "left-[10%] w-[80%]"}`}
        >
          <div className="rounded-t-[0.9rem] border border-b-0 border-white/15 bg-zinc-950 p-[1.6%] shadow-[0_24px_60px_-20px_rgb(0_0_0/0.9)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[0.4rem] bg-black">
              <Image
                src={caseStudy.image}
                alt={`Website von ${caseStudy.name}, ${caseStudy.category}`}
                fill
                className="object-cover object-top"
                sizes={sizes}
                priority={priority}
              />
            </div>
          </div>
          <div className="relative -mx-[7%] h-[0.65rem] rounded-b-[0.9rem] bg-gradient-to-b from-zinc-600 to-zinc-800">
            <div className="absolute left-1/2 top-0 h-1 w-[16%] -translate-x-1/2 rounded-b-md bg-zinc-900" />
          </div>
        </div>

        {caseStudy.mobileImage && (
          <div className="absolute bottom-[7%] right-[6%] w-[21%] rounded-[1.1rem] border-[3px] border-zinc-700 bg-black p-[2%] shadow-[0_24px_50px_-16px_rgb(0_0_0/0.95)]">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[0.8rem]">
              <Image
                src={caseStudy.mobileImage}
                alt={`Handy-Ansicht der Website von ${caseStudy.name}`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 768px) 12vw, 25vw"
                priority={priority}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative flex ${aspect} items-center justify-center bg-white/[0.02]`}>
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
