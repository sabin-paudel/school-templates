import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryPhotos } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function GalleryPreview() {
  const preview = galleryPhotos.slice(0, 6);

  return (
    <section className="section-pad bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container-main relative">
        <Reveal>
          <SectionHeading
            label="Gallery"
            title="Moments from our school community."
            action={
              <Link
                href="/gallery"
                className="btn bg-white/15 text-white hover:bg-white/25 shadow-md rounded-lg"
              >
                View full gallery <ArrowRight size={16} />
              </Link>
            }
            light
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {preview.map((photo, index) => (
            <Reveal key={photo.title} delay={0.06 * (index + 1)}>
              <div className={`relative overflow-hidden rounded-xl ${index === 0 || index === 5 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary-dark/0 hover:bg-primary-dark/30 transition-colors duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
