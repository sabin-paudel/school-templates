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
  return (
    <div
      className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-xl"}>
        <p className={`label ${light ? "text-primary" : ""}`}>{label}</p>
        <h2
          className={`heading-md mt-3 ${light ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-body mt-4 ${light ? "text-white/65" : ""}`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
