"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { galleryPhotos } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function GalleryPreview() {
  const preview = galleryPhotos.slice(0, 10);

  return (
    <section className="relative overflow-hidden bg-warm py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
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
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </motion.div>

        {/* a contact sheet: uniform frames, quiet by default, colour only where you look */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-3 md:grid-cols-5">
          {preview.map((photo, i) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.04 * i }}
              className="group relative aspect-square overflow-hidden bg-white"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="absolute left-2 top-2 font-mono text-[10px] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Fr. {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/70 px-2.5 py-1.5 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                <p className="truncate text-[11px] font-medium text-white">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
