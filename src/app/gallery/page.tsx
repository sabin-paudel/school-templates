import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Expand } from "lucide-react";
import CtaSection from "../_components/ui/cta-section";
import PageHero from "../_components/ui/page-hero";
import Reveal from "../_components/ui/reveal";
import { galleryPhotos, school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Gallery | ${school.name}`,
  description: `Explore student life, learning, and community moments from ${school.name}.`,
};

const spanClasses = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  normal: "",
} as const;

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Learning, friendship, and everyday discovery."
        description="A glimpse into the people, places, and shared experiences that make a school community feel alive."
      />

      <section className="bg-warm">
        <div className="container py-12">
          <Reveal>
            <p className="label">Campus Moments</p>
            <h2 className="heading-md mt-2 text-ink">
              A visual journey through school life.
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto grid w-full max-w-none grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] sm:auto-rows-[260px]">
          {galleryPhotos.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.04} className="contents">
              <figure
                className={`group relative overflow-hidden bg-white ${spanClasses[photo.span]}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Expand size={18} className="text-white" />
                  </span>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full px-4 pb-4 pt-10 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white drop-shadow-sm">
                    {photo.title}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/60 drop-shadow-sm">
                    {photo.credit} &middot; Wikimedia Commons
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="section-pad container text-center">
          <p className="text-body mx-auto max-w-lg text-sm leading-relaxed">
            Photography is sourced from Wikimedia Commons and depicts school
            communities across Nepal. Images are used under their respective
            Creative Commons licences.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8">
            Arrange a school visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CtaSection
        label="See It Live"
        title="Pictures tell only part of the story."
        href="/contact"
        buttonText="Visit our campus"
      />
    </>
  );
}
