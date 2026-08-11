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
    <section className="border-b border-line bg-warm">
      <div className="container grid items-center gap-12 pb-14 pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:pb-20 lg:pt-16">
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

          <div className="mt-7 max-w-2xl">
            <p className="label mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-charcoal/70" aria-hidden />
              {school.name}
            </p>
            <h1 className="display-lg text-ink">{title}</h1>
            {description && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/3.4]">
          <PageBannerSlider />
        </div>
      </div>
    </section>
  );
}
