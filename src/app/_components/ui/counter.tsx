"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: string;
  suffix?: string;
  label: string;
  light?: boolean;
};

export default function Counter({ value, suffix = "", label, light = false }: CounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  const numericTarget = parseInt(value, 10);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;

        if (Number.isNaN(numericTarget)) {
          setDisplay(value);
          return;
        }

        const duration = 1200;
        const start = performance.now();

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(String(Math.round(numericTarget * eased)));
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericTarget, value]);

  return (
    <div ref={ref} className="text-center">
      <p className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-primary"}`}>
        {display}
        {suffix}
      </p>
      <p className={`mt-1 text-xs font-medium uppercase tracking-wider ${light ? "text-white/55" : "text-muted"}`}>
        {label}
      </p>
    </div>
  );
}
