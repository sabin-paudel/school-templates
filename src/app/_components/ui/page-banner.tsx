import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageBannerProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function PageBanner({
  label,
  title,
  description,
  image,
  imageAlt,
}: PageBannerProps) {
  return (
    <section className="relative min-h-[55vh] bg-primary-dark flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/60" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-main relative w-full">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 pt-6 text-xs text-white/50"
        >
          <Link
            href="/"
            className="hover:text-white transition-colors duration-150"
          >
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-white/80">{label}</span>
        </nav>

        <div className="py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              <span className="w-6 h-px bg-white/30" />
              {label}
            </p>
            <h1 className="heading-lg mt-5 text-white">{title}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
