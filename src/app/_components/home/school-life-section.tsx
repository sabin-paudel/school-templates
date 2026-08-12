"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { studentLife, galleryPhotos } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

/**
 * Editorial collage: a large anchored image with a horizontal kinetic
 * film-strip beneath it. On mobile the strip becomes a swipe carousel.
 */
export default function SchoolLifeSection() {
  const anchor = galleryPhotos[0];
  const strip = [...galleryPhotos.slice(1, 4), ...studentLife].slice(0, 5);

  return (
    <section className="section-pad bg-warm">
      <div className="container">
        <SectionHeading
          align="left"
          label="School Life"
          title={
            <>
              Learning doesn&rsquo;t
              <br />
              stop at the classroom.
            </>
          }
          action={
            <Link href="/school-life" className="btn btn-outline btn-arrow group">
              Explore School Life
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          }
        />

        {/* Anchored editorial image */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <div className="group kinetic relative aspect-[16/10] overflow-hidden">
            <Image
              src={anchor.src}
              alt={anchor.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent"
            />
            <div className="absolute bottom-6 left-7 right-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Campus Moments
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                {anchor.title}
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="text-body text-base leading-relaxed">
              Football on the grounds at lunch, a painting half-finished on the
              easel, a debate that spills into the corridor. School life at{" "}
              <span className="font-semibold text-ink">Aatreya Academy</span> is
              everything the timetable can&rsquo;t capture — and it&rsquo;s the
              part students remember longest.
            </p>
            <Link href="/school-life" className="nav-arrow mt-7">
              View the gallery
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Kinetic film strip */}
        <div className="mt-6 lg:mt-10">
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible lg:px-0 lg:pb-0">
            {strip.map((item, i) => (
              <div
                key={i}
                className={`group kinetic relative shrink-0 snap-start overflow-hidden ${
                  i === strip.length - 1
                    ? "aspect-[3/4] w-[46vw] max-w-[260px]"
                    : "aspect-[4/3] w-[60vw] max-w-[320px]"
                } lg:w-auto`}
              >
                <Image
                  src={"image" in item ? item.image : item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 60vw, 20vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-near-black/55 via-transparent to-transparent"
                />
                <div className="caption-reveal absolute bottom-4 left-5 right-5">
                  <p className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-only text */}
        <div className="mt-8 lg:hidden">
          <p className="text-body text-sm leading-relaxed">
            Football at lunch, a painting half-finished, a debate spilling into
            the corridor — school life is everything the timetable
            can&rsquo;t capture.
          </p>
          <Link href="/school-life" className="nav-arrow mt-6">
            View the gallery
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}