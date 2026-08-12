"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, ArrowDown, Play } from "lucide-react";
import { school, stats } from "../../_data/site-content";
import { nepaliSchoolImages } from "../../_data/site-images";

const VIDEO_URL =
  "https://videos.pexels.com/video-files/1580505/1580505-hd_1920_1080_30fps.mp4";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );

  useEffect(() => {
    if (reducedMotion) {
      videoRef.current?.pause();
    }
  }, [reducedMotion]);

  return (
    <section
      className="relative overflow-hidden bg-charcoal text-white"
      aria-label="School showcase"
    >
      {/* Oversized watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-26 hidden select-none font-display text-[9rem] font-bold leading-none tracking-tighter text-white/[0.03] lg:block"
      >
        {school.founded}
      </span>

      <div className="container grid min-h-[100dvh] items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        {/* Editorial copy */}
        <div className="pt-28 lg:pt-36 lg:pb-10">
          <p className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            <span className="h-px w-10 bg-white/60" aria-hidden />
            Welcome to {school.name}
            <span className="text-white/25" aria-hidden>
              /
            </span>
            <span className="normal-case tracking-normal text-white/45">
              Admissions Open · {school.admissionSession}
            </span>
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
            Nurturing Excellence,
            <br />
            Inspiring Leaders.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            For over two decades, {school.name} has combined rigorous academics
            with genuine care — helping children in Pokhara inquire, create, and
            grow into confident contributors to a changing world.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
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

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4 lg:mt-14">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold tracking-tight text-white lg:text-4xl">
                  {s.value}
                  <span className="text-white/45">{s.suffix}</span>
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Framed cinematic media */}
        <div className="relative pb-14 pt-4 lg:pb-0">
          <div
            aria-hidden
            className="absolute -left-5 -top-5 h-full w-full border border-white/15 lg:-left-7 lg:top-0"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-near-black lg:aspect-[3/4]">
            {!videoFailed && (
              <video
                ref={videoRef}
                src={VIDEO_URL}
                poster={nepaliSchoolImages.students}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onError={() => setVideoFailed(true)}
                className="h-full w-full object-cover"
              />
            )}
            {videoFailed && (
              <Image
                src={nepaliSchoolImages.students}
                alt={`${school.name} students learning together`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            )}

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-near-black/25"
            />

            {/* Watch cue */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Watch · {school.name}
                </p>
                <p className="mt-2 font-display text-lg font-medium text-white sm:text-xl">
                  A glimpse of everyday learning in Pokhara.
                </p>
              </div>
              <span
                aria-hidden
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur"
              >
                <Play size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        href="#intro"
        className="group absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/45 transition-colors hover:text-white lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
          Scroll
        </span>
        <ArrowDown
          size={14}
          className="animate-bounce transition-transform group-hover:translate-y-0.5"
        />
      </Link>
    </section>
  );
}
