import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryPhotos } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function GallerySection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Campus Gallery"
          title="Moments from everyday school life."
          description="A glimpse into the people, places, and shared experiences that make our community feel alive."
          action={
            <Link href="/gallery" className="btn btn-outline group">
              View Full Gallery
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryPhotos.slice(0, 8).map((photo, i) => {
            const isWide = i === 0;
            return (
              <Reveal
                key={`${photo.title}-${i}`}
                delay={i * 0.05}
                className={isWide ? "col-span-2 row-span-2" : ""}
              >
                <figure className="group relative h-full min-h-[160px] overflow-hidden rounded-lg border border-line">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-bold">{photo.title}</p>
                    <p className="text-[10px] text-white/70">Photo: {photo.credit}</p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
