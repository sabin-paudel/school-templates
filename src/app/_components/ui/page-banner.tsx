import Link from "next/link";
import { school } from "../../_data/site-content";

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
    <section className="border-t-[6px] border-accent bg-warm">
      <div className="container py-10 lg:py-14">
        <nav
          aria-label="Breadcrumb"
          className="text-xs font-medium uppercase tracking-wider text-light"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-accent" aria-hidden>
            /
          </span>
          <span className="font-bold text-primary">{breadcrumb}</span>
        </nav>

        <div className="mt-4 max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">
            <span className="h-0.5 w-9 bg-accent" aria-hidden />
            {school.name}
          </p>
          <h1 className="display-md mt-4 text-balance text-ink">{title}</h1>
          {description && (
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              {description}
            </p>
          )}
          <span className="wp-rule mt-5" aria-hidden>
            <span />
          </span>
        </div>
      </div>
    </section>
  );
}