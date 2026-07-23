"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { galleryPhotos } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function GalleryPreview() {
  const preview = galleryPhotos.slice(0, 5);

  return (
    <section className="relative bg-white overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Gallery"
            title="Moments from our school community."
            action={
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 btn btn-ghost rounded-xl text-sm"
              >
                View full gallery
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            }
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {preview.map((photo, i) => (
            <div
              key={photo.title}
              className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-500 ${i === 0 ? "col-span-2 row-span-2" : "aspect-square"}`}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm font-medium text-white">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
