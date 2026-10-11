"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // Für Inhalte im ersten Bildschirm: sofort sichtbar, ohne Einblendung. Hält den größten sichtbaren Inhalt schnell.
  immediate?: boolean;
};

export function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (immediate || !el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  if (immediate) return <div className={className}>{children}</div>;

  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ""}`}
      style={
        delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as React.CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
