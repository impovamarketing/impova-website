import Image from "next/image";

const LOGOS = [
  { src: "/images/logos/logo-noxaeterna-white.png", name: "Nox Aeterna" },
  { src: "/images/logos/logo-seros-white.png", name: "Seros" },
  { src: "/images/logos/logo-ma-white.png", name: "MA" },
  { src: "/images/logos/logo-zentarak-white.png", name: "Zen Tara K" },
  { src: "/images/logos/logo-eke-white.png", name: "EKE" },
  { src: "/images/logos/logo-nikolli-white.png", name: "Nikolli" },
  { src: "/images/logos/logo-baumpflege-dugalic-white.png", name: "Baumpflege Dugalić" },
  { src: "/images/logos/logo-niederbayern-raeumt-white.png", name: "Niederbayern räumt" },
  { src: "/images/logos/logo-tonis-grillhaus-white.png", name: "Toni's Balkan Grillhaus" },
  { src: "/images/logos/logo-matthias-tattooz-white.png", name: "Matthias Tattooz" },
];

function LogoRow() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="animate-marquee-left flex w-max shrink-0 items-center gap-24 pr-24">
      {items.map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="relative h-16 w-44 shrink-0 opacity-80 transition-all duration-500 hover:scale-105 hover:opacity-100"
        >
          <Image
            src={logo.src}
            alt={`${logo.name} — Referenz von Impova`}
            fill
            loading="eager"
            className="object-contain"
            sizes="176px"
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
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Trusted By / System Integrations
        </p>
      </div>

      <div className="mask-fade-x overflow-hidden border-y border-zinc-900/80 py-10">
        <div className="flex overflow-hidden">
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
