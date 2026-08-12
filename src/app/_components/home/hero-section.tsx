"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, ArrowDown, Pause, Play } from "lucide-react";
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

const shortName = school.name.split(" ")[0];

export default function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
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

  function togglePlay() {
    const video = videoRef.current;
    if (!video || videoFailed) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

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

      <div className="container grid min-h-[100dvh] items-center gap-14 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24">
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

        {/* CRT television showcase */}
        <div className="relative px-4 pb-10 pt-4 lg:px-6 lg:pb-0 lg:pt-2">
          {/* Vertical sprocket rail */}
          <div
            aria-hidden
            className="film-strip-v absolute left-0 top-6 hidden h-[60%] w-10 lg:block"
          />

          {/* Abstract orbit ring */}

          <div className="group relative mx-auto w-full max-w-[900px]  rotate-5 transition-transform duration-700 ease-out hover:rotate-0">
            {/* Ambient tube glow */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-full bg-[#6dffa0]/10 opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            />

            {/* Antenna reaching up to the header */}

            {/* Bezel */}
            <div className="relative rounded-[2.1rem] border border-white/15 bg-near-black p-4 pb-9 shadow-[0_50px_90px_-40px_rgba(0,0,0,0.85)]">
              {/* Screen */}
<div
                className="relative aspect-4/3 overflow-hidden rounded-[1.45rem] bg-black"
                onClick={togglePlay}
              >
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
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
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
                  className="absolute inset-0 bg-gradient-to-t from-near-black/65 via-transparent to-near-black/20"
                />
                <div
                  aria-hidden
                  className="scanlines pointer-events-none absolute inset-0"
                />
                <div
                  aria-hidden
                  className="glare pointer-events-none absolute inset-0"
                />

                {/* Screen chrome — top bar */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-near-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    Rec
                  </span>
                  <span className="rounded-full bg-near-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 backdrop-blur">
                    {school.name} · Campus
                  </span>
                </div>

                {/* Screen chrome — bottom caption + play */}
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      Now Showing
                    </p>
                    <p className="mt-1.5 font-display text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
                      A day in the life at {shortName}.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      togglePlay();
                    }}
                    aria-label={
                      isPlaying
                        ? `Pause the ${school.name} video`
                        : `Play the ${school.name} video`
                    }
                    className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-transform duration-500 group-hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause size={16} className="fill-current" />
                    ) : (
                      <Play size={16} className="ml-0.5 fill-current" />
                    )}
                  </button>
                </div>
              </div>

              {/* Bezel control bar */}
              <div className="absolute -bottom-8 left-1/2 flex w-[calc(100%-2.5rem)] justify-end -translate-x-1/2 items-center justify-between rounded-b-[1.8rem] border-t border-white/10 bg-near-black px-7 py-3">
                <span className="flex items-center gap-2.5  ">
                  <span className="h-1.5 w-7 rounded-full bg-white/20" />
                  <span className="h-1.5 w-3 rounded-full bg-white/20" />
                  <span className="h-1.5 w-4 rounded-full bg-primary/90" />
                </span>
              </div>
            </div>

            {/* Pedestal */}
            <div
              aria-hidden
              className="mx-auto mt-2 h-3 w-32 rounded-b-2xl bg-white/10"
            />
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
