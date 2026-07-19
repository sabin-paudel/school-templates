import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "./reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="section-shell grid min-h-[560px] items-stretch lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal
          direction="left"
          className="flex flex-col justify-center py-20 pr-0 lg:pr-16"
        >
          <Link
            href="/"
            className="mb-12 inline-flex w-fit items-center gap-2 text-sm font-bold text-gold-light hover:text-white"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
          <p className="eyebrow text-gold-light">{eyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
            {description}
          </p>
        </Reveal>
        <Reveal
          direction="right"
          className="relative min-h-[380px] lg:min-h-full"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 h-3 w-1/3 bg-gold" />
        </Reveal>
      </div>
    </section>
  );
}
