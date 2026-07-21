import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
  action,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div
      className={`flex flex-col gap-5 ${align === "center" ? "items-center" : "md:flex-row md:items-end md:justify-between"} ${alignClass}`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-xl"}>
        <p className={`label ${light ? "text-accent-bright" : ""}`}>{label}</p>
        <h2
          className={`heading-section mt-3 ${light ? "text-white" : "text-navy"} ${alignClass}`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`prose-body mt-4 ${light ? "text-slate-light" : ""} ${alignClass}`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
