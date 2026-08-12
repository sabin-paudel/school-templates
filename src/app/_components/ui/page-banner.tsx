import Link from "next/link";
import { school } from "../../_data/site-content";
import PageBannerSlider from "./page-banner-slider";

type PageBannerProps = {
  title: string;
  breadcrumb: string;
  description?: string;
};

export default function PageBanner({
  title,
  breadcrumb,
  description,
}: PageBannerProps) {
  return (
    <section className="border-b border-line bg-warm pt-[72px] lg:pt-[80px]">
      <div className="container grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-24 lg:pb-24 lg:pt-14">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-light"
          >
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span className="mx-3 text-line" aria-hidden>
              /
            </span>
            <span className="text-ink">{breadcrumb}</span>
          </nav>

          <div className="mt-8 max-w-2xl">
            <p className="label mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-charcoal/70" aria-hidden />
              {school.name}
            </p>
            <h1 className="display-lg text-ink">{title}</h1>
            {description && (
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/3.2]">
          <PageBannerSlider />
        </div>
      </div>
    </section>
  );
}
