import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryPhotos } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function GalleryPreview() {
  const preview = galleryPhotos.slice(0, 5);

  return (
    <section className="section-pad bg-snow">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Gallery"
            title="Moments from our school community."
            action={
              <Link href="/gallery" className="link-arrow">
                View full gallery <ArrowRight size={14} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {preview.map((photo) => (
            <div
              key={photo.title}
              className="group relative h-64 w-72 shrink-0 overflow-hidden sm:h-80 sm:w-96"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="384px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-navy/80 px-4 py-3">
                <p className="text-sm font-medium text-white">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
