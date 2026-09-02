"use client";

import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";

export function LivePreview({
  url,
  label = "Website live ansehen",
}: {
  url: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent hover:underline"
      >
        {label} →
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-6xl flex-col border border-zinc-800 bg-base shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="truncate font-mono text-xs uppercase tracking-wider text-zinc-500">
                {url.replace(/^https?:\/\//, "")}
              </span>
              <div className="flex items-center gap-4 pl-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="In neuem Tab öffnen"
                  className="text-zinc-400 hover:text-accent"
                >
                  <ExternalLink className="size-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Schließen"
                  className="text-zinc-400 hover:text-accent"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            <iframe
              src={url}
              title={label}
              className="w-full flex-1 bg-white"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
