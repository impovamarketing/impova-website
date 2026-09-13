"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

type CountUpProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  // Starts at the real, final value so the server-rendered HTML (and any
  // crawler that doesn't run JS) always contains the true figure — the
  // count-up is a client-only flourish layered on top, never the source.
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    setDisplay(0);
    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT_EXPO,
      onUpdate: (value) => setDisplay(value),
    });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
