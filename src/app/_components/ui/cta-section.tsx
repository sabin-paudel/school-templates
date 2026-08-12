import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      className={`relative overflow-hidden border-t border-white/10 ${
        variant === "accent" ? "bg-graphite" : "bg-near-black"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,245,222,0.06),transparent_55%)]"
      />
      <div className="container relative py-24 lg:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            {label && <p className="label mb-6 !text-white/45">{label}</p>}
            <h2 className="display-lg text-white">{title}</h2>
            {description && (
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
            <Link
              href={primaryHref}
              className="btn btn-white btn-lg btn-arrow group"
            >
              {primaryText}
              <ArrowUpRight size={18} className="btn-arrow-icon" />
            </Link>
            {secondaryHref && secondaryText && (
              <Link href={secondaryHref} className="btn btn-outline-light btn-lg">
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}