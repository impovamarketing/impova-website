import Image from "next/image";

const LOGOS = [
  { src: "/images/logos/logo-noxaeterna.png", name: "Nox Aeterna" },
  { src: "/images/logos/logo-seros.png", name: "Seros" },
  { src: "/images/logos/logo-ma.png", name: "MA" },
  { src: "/images/logos/logo-zentarak.png", name: "Zen Tara K" },
  { src: "/images/logos/logo-eke.png", name: "EKE" },
  { src: "/images/logos/logo-nikolli.png", name: "Nikolli" },
];

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div
      className={`flex w-max shrink-0 items-center gap-20 pr-20 ${
        reverse ? "animate-marquee-right" : "animate-marquee-left"
      }`}
    >
      {items.map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="relative h-10 w-28 shrink-0 grayscale opacity-40 transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0"
        >
          <Image
            src={logo.src}
            alt={`${logo.name} — Referenz von Impova`}
            fill
            loading="eager"
            className="object-contain"
            sizes="112px"
          />
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="border-b border-zinc-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
          Trusted By / System Integrations
        </p>
      </div>

      <div className="mask-fade-x flex flex-col gap-10 overflow-hidden border-y border-zinc-900/80 py-10">
        <div className="flex overflow-hidden">
          <LogoRow />
        </div>
        <div className="flex overflow-hidden">
          <LogoRow reverse />
        </div>
      </div>
    </section>
  );
}
