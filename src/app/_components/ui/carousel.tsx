"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  children: ReactNode;
  /** Auto-advance interval in ms. 0 disables autoplay. */
  auto?: number;
  /** Seamlessly wrap around when reaching the first/last slide. */
  loop?: boolean;
  showArrows?: boolean;
  indicator?: "count" | "dots" | "none";
  ariaLabel?: string;
  className?: string;
  /** Class applied to each slide wrapper (useful for gutters). */
  slideClassName?: string;
  /**
   * Number of slides visible at once. Accepts a fixed number or a
   * breakpoint map keyed by min container width, e.g. `{ 0: 1, 640: 2, 1024: 3 }`.
   */
  perView?: number | Record<number, number>;
};

const DRAG_THRESHOLD = 60;

export default function Carousel({
  children,
  auto = 0,
  loop = true,
  showArrows = true,
  indicator = "none",
  ariaLabel = "Carousel",
  className = "",
  slideClassName = "",
  perView = 1,
}: CarouselProps) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, dx: 0, moved: false });

  const [view, setView] = useState(typeof perView === "number" ? perView : 1);
  const [pos, setPos] = useState(typeof perView === "number" ? perView : 1);
  const [noTransition, setNoTransition] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const bp = typeof perView === "number" ? { 0: perView } : perView;
    const update = () => {
      const width = el.getBoundingClientRect().width;
      let v = bp[0] ?? 1;
      for (const [min, slidesAt] of Object.entries(bp)) {
        if (width >= Number(min)) v = slidesAt;
      }
      const newSpare = Math.min(Math.max(1, v), count || 1);
      const newMax = loop ? newSpare + count : Math.max(count - newSpare, 0);
      const newMin = loop ? newSpare - 1 : 0;
      setView(Math.max(1, v));
      setPos((p) => (p >= newMin && p <= newMax ? p : loop ? newSpare : 0));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [perView, loop, count]);

  const spare = Math.min(view, count || 1);
  const step = 100 / Math.max(spare, 1);
  const maxPos = loop ? spare + count : Math.max(count - spare, 0);
  const minPos = loop ? spare - 1 : 0;
  const list = loop
    ? [...slides.slice(-spare), ...slides, ...slides.slice(0, spare)]
    : slides;
  const active =
    count > 0
      ? loop
        ? ((pos - spare) % count + count) % count
        : pos
      : 0;

  const next = () => setPos((p) => Math.min(p + 1, maxPos));
  const prev = () => setPos((p) => Math.max(p - 1, minPos));
  const goTo = (i: number) => setPos(loop ? spare + i : i);

  useEffect(() => {
    if (auto <= 0 || count <= 1 || paused || dragging) return;
    const id = setInterval(
      () => setPos((p) => Math.min(p + 1, maxPos)),
      auto,
    );
    return () => clearInterval(id);
  }, [auto, count, paused, dragging, maxPos]);

  const jump = (to: number) => {
    setNoTransition(true);
    setPos(to);
    requestAnimationFrame(() => requestAnimationFrame(() => setNoTransition(false)));
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (!loop || e.target !== trackRef.current || e.propertyName !== "transform") return;
    if (pos === spare - 1) jump(spare + count - 1);
    else if (pos === spare + count) jump(spare);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (count <= 1) return;
    dragRef.current = { active: true, startX: e.clientX, dx: 0, moved: false };
    setDragging(true);
    setOffset(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.dx = dx;
    if (Math.abs(dx) > 6) dragRef.current.moved = true;
    setOffset(dx);
  };

  const handlePointerUp = () => {
    if (!dragRef.current.active) return;
    const { dx, moved } = dragRef.current;
    dragRef.current.active = false;
    setDragging(false);
    setOffset(0);
    if (!moved) return;
    if (dx < -DRAG_THRESHOLD) next();
    else if (dx > DRAG_THRESHOLD) prev();
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(count - 1);
    }
  };

  if (count === 0) return null;

  const transform = `translate3d(calc(-${pos * step}% + ${offset}px), 0, 0)`;
  const transition =
    dragging || noTransition
      ? "none"
      : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";

  const visible = new Set<number>();
  for (let i = pos; i < pos + spare; i++) {
    visible.add(loop ? ((i - spare) % count + count) % count : i);
  }

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className={`relative w-full max-w-full overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex w-full select-none [&_img]:pointer-events-none"
        style={{ transform, transition, touchAction: "pan-y" }}
        onTransitionEnd={handleTransitionEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {list.map((slide, i) => {
          const original = loop ? ((i - spare) % count + count) % count : i;
          return (
            <div
              key={i}
              className={`w-full shrink-0 ${slideClassName}`}
              style={{ flex: `0 0 ${100 / Math.max(spare, 1)}%` }}
              aria-hidden={!visible.has(original)}
            >
              {slide}
            </div>
          );
        })}
      </div>

      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="group absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-white/90 text-ink shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-md sm:left-5"
          >
            <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="group absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-white/90 text-ink shadow-sm backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-md sm:right-5"
          >
            <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </>
      )}

      {indicator === "count" && count > 1 && (
        <p className="absolute bottom-2 right-4 z-10 flex items-baseline gap-1 font-display text-sm tracking-tight text-ink">
          <span className="text-xl font-semibold">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="text-light">/ {String(count).padStart(2, "0")}</span>
        </p>
      )}

      {indicator === "dots" && count > 1 && (
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-6 bg-charcoal" : "w-1.5 bg-charcoal/25 hover:bg-charcoal/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
