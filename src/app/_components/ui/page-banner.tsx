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
    <section className="border-b border-line bg-snow">
      <div className="container-main">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 pt-6 text-xs text-slate">
          <Link href="/" className="hover:text-navy">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-navy">{label}</span>
        </nav>

        <div className="grid items-center gap-10 py-12 lg:grid-cols-[1fr_380px] lg:gap-16 lg:py-16">
          <div>
            <p className="label">{label}</p>
            <h1 className="heading-display mt-4 max-w-2xl text-navy">{title}</h1>
            <p className="prose-body mt-5 max-w-xl">{description}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
