import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageBanner from "./../_components/ui/page-banner";
import CtaSection from "./../_components/ui/cta-section";
import Reveal from "./../_components/ui/reveal";
import { Sidebar } from "./../_components/layout/sidebar";
import { galleryPhotos, school } from "./../_data/site-content";

export const metadata: Metadata = {
  title: "Gallery",
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
      <PageBanner
        breadcrumb="Gallery"
        title="Learning, friendship, and everyday discovery."
        description="A glimpse into the people, places, and shared experiences that make a school community feel alive."
      />

      <section className="section-pad bg-warm">
        <div className="container">
          <div className="content-sidebar">
            <div>
              <Reveal>
                <div className="mb-12">
                  <p className="label mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-charcoal/70" aria-hidden />
                    Campus Moments
                  </p>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    A visual journey through school life.
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
                {galleryPhotos.map((photo, index) => (
                  <Reveal key={photo.title} delay={index * 0.04}>
                    <figure
                      className={`group relative h-full min-h-[190px] overflow-hidden ${
                        spanClasses[photo.span]
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-semibold">{photo.title}</p>
                        <p className="mt-0.5 text-[11px] text-white/70">
                          {photo.credit} · Wikimedia Commons
                        </p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>

              <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-line bg-white p-8 sm:flex-row sm:items-center sm:p-10">
                <p className="max-w-xl text-body text-sm leading-relaxed">
                  Photography is sourced from Wikimedia Commons and depicts school
                  communities across Nepal. Images are used under their respective
                  Creative Commons licences.
                </p>
                <Link href="/contact" className="btn btn-primary btn-arrow group shrink-0">
                  Arrange a School Visit <ArrowUpRight size={16} className="btn-arrow-icon" />
                </Link>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <CtaSection
        label="See It Live"
        title="Pictures tell only part of the story."
        primaryHref="/contact"
        primaryText="Visit Our Campus"
        secondaryHref="/school-life"
        secondaryText="Explore School Life"
      />
    </>
  );
}
