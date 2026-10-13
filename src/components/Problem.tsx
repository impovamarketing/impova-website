import Link from "next/link";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const PAINS = [
  "Kunden suchen bei Google nach genau deinem Angebot und landen bei der Konkurrenz.",
  "Neue Kunden kommen fast nur über Empfehlungen. Bleiben die aus, wird es eng.",
  "Wenn doch mal Anfragen kommen, passen sie nicht zu dem, was du eigentlich anbietest.",
  "Für Website, Google und Co. bleibt neben dem Tagesgeschäft schlicht keine Zeit.",
  "Für eine Website hast du schon Geld ausgegeben: viel Fachchinesisch, wenig Ergebnis.",
];

export function Problem() {
  return (
    <section className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-[2.75rem]">
            Kommt dir das bekannt vor?
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PAINS.map((pain, i) => (
            <Reveal
              key={pain}
              delay={i * 0.05}
              className="card flex gap-4 p-6 sm:[&:last-child:nth-child(odd)]:col-span-2"
            >
              <span
                className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-status-red/10 font-mono text-xs text-status-red"
                aria-hidden="true"
              >
                ✕
              </span>
              <p className="text-zinc-300">{pain}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 max-w-3xl">
            <p className="text-2xl font-medium leading-snug tracking-tight text-zinc-50 sm:text-3xl">
              Das Problem ist nicht deine Arbeit. Es ist, dass die richtigen
              Kunden dich nicht finden oder auf deiner Website nicht überzeugt
              werden.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Genau da setze ich an: eine Website, die bei Google in deiner
              Region gefunden wird, in wenigen Sekunden zeigt, warum man dich
              kontaktieren sollte, und Besucher zur Anfrage führt. Du kümmerst
              dich um dein Geschäft, ich mich um den Rest. Persönlich und auf
              Augenhöhe.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#sichtbarkeits-check">
                Kostenlosen Sichtbarkeits-Check anfordern
              </MagneticButton>
              <Link
                href="/website-relaunch"
                className="font-mono text-xs uppercase tracking-wider text-accent hover:underline"
              >
                Du hast schon eine Website? Zum Relaunch →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
