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
    <section className="relative min-h-[55vh] bg-ink flex items-center overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/70" />


      <div className="container-main relative w-full">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 pt-6 text-xs text-white/40"
        >
          <Link
            href="/"
            className="hover:text-white/80 transition-colors duration-150"
          >
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-white/60">{label}</span>
        </nav>

        <div className="py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              <span className="w-6 h-px bg-white/20" />
              {label}
            </p>
            <h1 className="heading-lg mt-5 text-white">{title}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/50">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
