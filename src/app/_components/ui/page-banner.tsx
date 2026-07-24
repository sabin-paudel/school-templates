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
    <section className="relative w-full overflow-hidden bg-ink">
      {/* breadcrumb utility bar */}
      <div className=" relative  container mx-auto   max-w-300 border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center container mx-auto gap-1.5 py-5 text-xs text-white/40"
        >
          <Link
            href="/"
            className="transition-colors duration-150 hover:text-white/80"
          >
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-white/60">{label}</span>
        </nav>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1fr] container mx-auto ">
        {/* ---------- text: reads like a chapter title page ---------- */}
        <div className="relative flex flex-col justify-center px-4 py-14 sm:px-6 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.04) 43px, rgba(255,255,255,0.04) 44px)",
            }}
          />
          <div className="relative max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-px w-6 bg-primary" />
              {label}
            </p>
            <h1 className="heading-lg mt-5 font-serif text-white">{title}</h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/50">
              {description}
            </p>
          </div>
        </div>

        {/* ---------- image, with the same spine tab used on the homepage hero ---------- */}
        <div className="relative min-h-60 lg:min-h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent lg:bg-linear-to-l lg:from-transparent lg:via-transparent lg:to-ink/50" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

          <div className="absolute left-0 top-10 hidden -translate-x-1/2 items-center gap-2 border border-white/10 bg-ink px-3 py-2 shadow-lg lg:flex">
            <span
              className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60"
              style={{ writingMode: "vertical-rl" }}
            >
              Aatreya Academy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
