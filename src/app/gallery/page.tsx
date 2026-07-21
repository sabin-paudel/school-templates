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

      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="mb-8 flex flex-wrap gap-2 text-xs font-medium">
            <span className="bg-navy px-4 py-2 text-white">All moments</span>
            {["Learning", "Community", "Campus"].map((filter) => (
              <span
                key={filter}
                className="border border-line px-4 py-2 text-slate"
              >
                {filter}
              </span>
            ))}
          </div>

          <div className="grid auto-rows-[240px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo, index) => (
              <Reveal key={photo.title} delay={index * 0.04}>
                <figure
                  className={`group relative h-full overflow-hidden ${spanClasses[photo.span]}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-navy/90 px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm font-medium text-white">{photo.title}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-light">
                      {photo.credit} · Wikimedia Commons
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 border border-line bg-snow p-5 text-sm leading-relaxed text-slate">
            Photography is sourced from Wikimedia Commons and depicts school
            communities across Nepal. Images are used under their respective
            Creative Commons licences.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8">
            Arrange a school visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
