import type { ReactNode } from "react";

type SectionHeadingProps = {
  label?: string;
  title: string;
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
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses} ${className}`}>
      {label && (
        <p className={`label flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-accent" aria-hidden />
          {label}
          {align === "center" && <span className="h-px w-8 bg-accent" aria-hidden />}
        </p>
      )}
      <h2 className={`wp-title display-md ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      <span className="wp-rule" aria-hidden>
        <span />
      </span>
      {description && (
        <p className={`text-body max-w-xl text-base ${light ? "!text-white/65" : ""}`}>
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
