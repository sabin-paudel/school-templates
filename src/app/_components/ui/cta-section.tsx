import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaSectionProps = {
  label?: string;
  title: string;
  description?: string;
  primaryHref: string;
  primaryText: string;
  secondaryHref?: string;
  secondaryText?: string;
  variant?: "primary" | "accent";
};

export default function CtaSection({
  label,
  title,
  description,
  primaryHref,
  primaryText,
  secondaryHref,
  secondaryText,
  variant = "primary",
}: CtaSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        variant === "accent" ? "bg-accent" : "bg-primary"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 14px)",
        }}
      />
      <div className="container relative flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-16">
        <div className="max-w-2xl">
          {label && (
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                variant === "accent" ? "text-white/80" : "text-accent"
              }`}
            >
              {label}
            </p>
          )}
          <h2
            className={`display-md mt-2 ${
              variant === "accent" ? "text-white" : "text-white"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-3 text-base ${
                variant === "accent" ? "text-white/80" : "text-white/70"
              }`}
            >
              {description}
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className={`btn btn-lg ${
              variant === "accent" ? "btn-primary" : "btn-accent"
            } group`}
          >
            {primaryText}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          {secondaryHref && secondaryText && (
            <Link
              href={secondaryHref}
              className="btn btn-lg btn-white-outline"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
