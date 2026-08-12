import type { ReactNode } from "react";

type SectionHeadingProps = {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
  action,
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";
  const ruleColor = light ? "bg-white/50" : "bg-charcoal/80";
  return (
    <div className={`flex max-w-4xl flex-col gap-4 ${alignClasses} ${className}`}>
      {label && (
        <p
          className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] ${
            light ? "text-white/50" : "text-light"
          }`}
        >
          <span className={`h-px w-10 ${ruleColor}`} aria-hidden />
          {label}
          {align === "center" && (
            <span className={`h-px w-10 ${ruleColor}`} aria-hidden />
          )}
        </p>
      )}
      <h2 className={`display-md ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && (
        <p
          className={`text-body mt-1 max-w-2xl text-base ${
            light ? "!text-white/60" : ""
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
