import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CtaSectionProps = {
  label: string;
  title: string;
  description?: string;
  href: string;
  buttonText: string;
  variant?: "ink" | "primary";
};

export default function CtaSection({
  label,
  title,
  description,
  href,
  buttonText,
  variant = "ink",
}: CtaSectionProps) {
  const isInk = variant === "ink";

  return (
    <section className={`relative overflow-hidden py-16 ${isInk ? "bg-ink" : "bg-primary-dark"}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.045) 43px, rgba(255,255,255,0.045) 44px)",
        }}
      />
      <div className="container relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="border-l border-white/15 pl-6 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            {label}
          </p>
          <h2 className="heading-md mt-3 font-serif text-white sm:text-2xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm text-white/50">{description}</p>
          )}
        </div>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20 shrink-0"
        >
          {buttonText}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
