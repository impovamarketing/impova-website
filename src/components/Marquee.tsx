import Image from "next/image";
import { SHOW_CLIENT_LOGOS } from "@/config/site";

const LOGOS = [
  { src: "/images/logos/logo-noxaeterna-white.png", name: "Nox Aeterna" },
  { src: "/images/logos/logo-seros-white.png", name: "Seros" },
  { src: "/images/logos/logo-ma-white.png", name: "MA" },
  { src: "/images/logos/logo-zentarak-white.png", name: "Zen Tara K" },
  { src: "/images/logos/logo-eke-white.png", name: "EKE" },
  { src: "/images/logos/logo-baumpflege-dugalic-white.png", name: "Baumpflege Dugalić" },
  { src: "/images/logos/logo-niederbayern-raeumt-white.png", name: "Niederbayern räumt" },
  { src: "/images/logos/logo-tonis-grillhaus-white.png", name: "Toni's Balkan Grillhaus" },
  { src: "/images/logos/logo-matthias-tattooz-white.png", name: "Matthias Tattooz" },
];

function LogoRow() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="animate-marquee-left flex w-max shrink-0 items-center gap-14 pr-14 sm:gap-24 sm:pr-24">
      {items.map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="relative h-12 w-32 shrink-0 opacity-70 transition-opacity duration-500 hover:opacity-100 sm:h-16 sm:w-44"
        >
          <Image
            src={logo.src}
            alt={`Logo von ${logo.name}, Kunde von Impova`}
            fill
            className="object-contain"
            sizes="(min-width: 640px) 176px, 128px"
          />
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  if (!SHOW_CLIENT_LOGOS) return null;

  return (
    <section className="border-b border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Kunden aus der Region
        </p>
      </div>

      <div className="mask-fade-x overflow-hidden py-4">
        <div className="flex overflow-hidden">
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
