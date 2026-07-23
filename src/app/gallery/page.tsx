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
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <p className="label">Photos</p>
              <h2 className="heading-md mt-2 text-ink">Moments captured</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <span className="bg-primary px-4 py-2 text-white rounded-xl">All moments</span>
              {["Learning", "Community", "Campus"].map((filter) => (
                <span
                  key={filter}
                  className="border border-line bg-white px-4 py-2 text-ink-light rounded-xl hover:border-primary hover:text-primary hover:bg-primary-light transition-all duration-150 cursor-pointer"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="grid auto-rows-60 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo, index) => (
              <Reveal key={photo.title} delay={index * 0.04}>
                <figure
                  className={`group relative h-full overflow-hidden rounded-2xl shadow-sm ${spanClasses[photo.span]}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm font-medium text-white">
                      {photo.title}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/55">
                      {photo.credit} &middot; Wikimedia Commons
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 bg-white p-5 text-sm leading-relaxed text-ink-light rounded-2xl shadow-sm">
            Photography is sourced from Wikimedia Commons and depicts school
            communities across Nepal. Images are used under their respective
            Creative Commons licences.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8">
            Arrange a school visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-ink py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container-main relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              See It Live
            </p>
            <h2 className="mt-3 heading-md text-white sm:text-2xl">
              Pictures tell only part of the story.
            </h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white hover:bg-white/20 px-6 py-3 text-sm font-semibold transition-all duration-200">
            Visit our campus <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
