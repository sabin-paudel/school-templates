import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
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

const filters = ["All moments", "Learning", "Community", "Campus"];

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        label="Gallery"
        title="Learning, friendship, and everyday discovery."
        description="A glimpse into the people, places, and shared experiences that make a school community feel alive."
        image={nepaliSchoolImages.kathmanduSchool}
        imageAlt="A school building and students in Kathmandu, Nepal"
      />

      <section className="section-pad bg-warm">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="label">Photos</p>
              <h2 className="heading-md mt-2 font-serif text-ink">
                Moments captured
              </h2>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              {filters.map((filter, i) => (
                <span
                  key={filter}
                  className={`cursor-pointer border-b-2 pb-1 transition-colors duration-150 ${
                    i === 0
                      ? "border-primary text-ink"
                      : "border-transparent text-ink-light hover:text-primary"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          {/* variable-size contact sheet — grayscale by default, colour where you look */}
          <div className="grid auto-rows-[180px] gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:auto-rows-60 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo, index) => (
              <Reveal key={photo.title} delay={index * 0.04}>
                <figure
                  className={`group relative h-full overflow-hidden bg-white ${spanClasses[photo.span]}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute left-3 top-3 font-mono text-[10px] text-white opacity-0 transition-opacity duration-300 [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] group-hover:opacity-100">
                    Fr. {String(index + 1).padStart(2, "0")}
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 px-4 py-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm font-medium text-white">
                      {photo.title}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/50">
                      {photo.credit} &middot; Wikimedia Commons
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 border-t border-line pt-6 text-sm leading-relaxed text-ink-light">
            Photography is sourced from Wikimedia Commons and depicts school
            communities across Nepal. Images are used under their respective
            Creative Commons licences.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8">
            Arrange a school visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.045) 43px, rgba(255,255,255,0.045) 44px)",
          }}
        />
        <div className="container relative mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="border-l border-white/15 pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              See It Live
            </p>
            <h2 className="heading-md mt-3 font-serif text-white sm:text-2xl">
              Pictures tell only part of the story.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
          >
            Visit our campus <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
