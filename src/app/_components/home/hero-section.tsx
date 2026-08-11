"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { school } from "../../_data/site-content";
import { nepaliSchoolImages } from "../../_data/site-images";

const slides = [
  {
    src: nepaliSchoolImages.students,
    alt: `${school.name} students learning together`,
  },
  {
    src: nepaliSchoolImages.classroom,
    alt: `${school.name} students focused in the classroom`,
  },
  {
    src: nepaliSchoolImages.campus,
    alt: `${school.name} campus`,
  },
];

const INTERVAL = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative flex h-[calc(100dvh-68px)] min-h-[540px] w-full overflow-hidden bg-charcoal text-white lg:h-[calc(100dvh-76px)]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === current ? "hero-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/55 to-transparent"
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col justify-end pb-14 pt-16 lg:pb-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
            <span className="h-px w-8 bg-white/70" aria-hidden />
            Admissions Open {school.admissionSession}
          </p>

          <h1 className="display-hero mt-4 text-white">
            Nurturing Excellence,
            <br />
            <span className="text-white">Inspiring</span> Leaders.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            For over two decades, {school.name} has combined rigorous academics
            with genuine care — helping children in Pokhara inquire, create, and
            grow into confident contributors to a changing world.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 lg:mt-8">
            <Link
              href="/admissions"
              className="btn btn-white btn-lg btn-arrow group"
            >
              Start Admission
              <ArrowUpRight size={18} className="btn-arrow-icon" />
            </Link>
            <Link href="/contact" className="btn btn-outline-light btn-lg">
              Book a Campus Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Slide counter — desktop */}
      <div className="absolute top-9 right-0 z-10 hidden items-baseline gap-2.5 pr-14 lg:flex">
        <span className="font-display text-5xl font-semibold leading-none text-white">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-base text-white/45">
          / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-[3px] w-full bg-white/15">
        <span
          key={progressKey}
          className="hero-progress block h-full bg-white"
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>
    </section>
  );
}
