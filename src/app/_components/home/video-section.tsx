"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { school } from "../../_data/site-content";
import { nepaliSchoolImages } from "../../_data/site-images";

/**
 * Cinematic full-bleed video used purely as visual storytelling.
 * Free-to-use Pexels footage (education theme). If the video cannot load,
 * the poster image is shown instead.
 */
const VIDEO_URL =
  "https://videos.pexels.com/video-files/1580505/1580505-hd_1920_1080_30fps.mp4";

export default function VideoSection() {
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  const [inView, setInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Only start playing when scrolled into view (performance)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) videoRef.current?.play().catch(() => {});
        else videoRef.current?.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={wrapRef} className="section-pad bg-white">
      <div className="container">
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-4 text-center lg:mb-16">
          <p className="label flex items-center gap-3">
            <span className="h-px w-10 bg-charcoal/80" aria-hidden />
            {school.name} in Motion
            <span className="h-px w-10 bg-charcoal/80" aria-hidden />
          </p>
          <h2 className="display-md text-ink">
            Step inside the life of our school.
          </h2>
        </div>
      </div>

      <div className="container-wide">
        <div className="group relative aspect-[16/9] max-h-[80vh] w-full overflow-hidden bg-near-black">
          {/* Poster fallback */}
          {!failed && (
            <video
              ref={videoRef}
              src={VIDEO_URL}
              poster={nepaliSchoolImages.students}
              muted={muted}
              loop
              playsInline
              preload="metadata"
              onError={() => setFailed(true)}
              onCanPlay={() => {
                if (inView) videoRef.current?.play().catch(() => {});
              }}
              className="h-full w-full object-cover"
            />
          )}
          {failed && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={nepaliSchoolImages.campus}
              alt={`${school.name} campus`}
              className="h-full w-full object-cover"
            />
          )}

          {/* Cinematic vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-near-black/70 via-near-black/10 to-near-black/20"
          />

          {/* Caption */}
          <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-wrap items-end justify-between gap-6 lg:bottom-12 lg:left-12 lg:right-12">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                Watch · {school.name}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                A glimpse of everyday learning in Pokhara.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <span className="hidden items-center gap-2.5 border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur sm:flex">
                <Play size={12} aria-hidden />
                Cinema
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}