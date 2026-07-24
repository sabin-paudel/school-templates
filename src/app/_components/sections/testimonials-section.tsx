"use client";

import { useState, useEffect } from "react";
import { testimonial } from "../../_data/site-content";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  { text: testimonial.quote, author: testimonial.authors, role: testimonial.role },
  {
    text: "The teachers here don't just teach — they inspire. Our daughter has grown in confidence and curiosity beyond what we imagined possible.",
    author: "Ramesh & Sunita Adhikari",
    role: "Parents of Grade 5 student",
  },
  {
    text: "What sets Aatreya apart is how every child is known personally. The sense of community and academic standards are truly exceptional.",
    author: "Anita Sharma",
    role: "Parent of Grade 8 student",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + quotes.length) % quotes.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="relative bg-white overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
              Parent Voices
            </span>
            <div className="flex items-center justify-center gap-1 mt-4 mb-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  <Star size={18} className="fill-primary text-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="absolute w-full"
              >
                <Quote className="w-12 h-12 text-primary/10 mx-auto mb-4" />
                <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl font-medium px-4">
                  &ldquo;{quotes[current].text}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-semibold text-ink">{quotes[current].author}</p>
                  <p className="text-sm text-ink/50 mt-1">{quotes[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-ink/10 hover:bg-ink/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} className="text-ink/40" />
            </button>
            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-ink/15"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-ink/10 hover:bg-ink/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} className="text-ink/40" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
