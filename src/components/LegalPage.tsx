import Link from "next/link";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 lg:px-10">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-wider text-zinc-500 hover:text-accent"
      >
        ← Zurück zu Impova
      </Link>
      <h1 className="mt-8 text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h1>
      <div className="prose-legal mt-10 flex flex-col gap-6 text-sm leading-relaxed text-zinc-400">
        {children}
      </div>
    </main>
  );
}
