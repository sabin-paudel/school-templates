"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nepaliSchoolImages } from "../../_data/site-images";

const slides = [
  { src: nepaliSchoolImages.students, alt: "Students learning together" },
  {
    src: nepaliSchoolImages.classroom,
    alt: "Students focused in the classroom",
  },
  { src: nepaliSchoolImages.campus, alt: "School campus" },
];

const INTERVAL = 3500;

export default function PageBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-full w-full overflow-hidden bg-charcoal"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      ))}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"
      />

      {/* Progress dots */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-5 flex items-baseline gap-2 text-white">
        <span className="font-display text-xl font-semibold leading-none">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-xs text-white/60">
          / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}