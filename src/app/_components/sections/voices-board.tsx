"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { principal } from "../../_data/site-content";

const testimonials = [
  {
    text: "The dedication of the teachers here is unmatched. They foster deep academic understanding while nurturing the unique talents of our children.",
    author: "Ramesh & Sunita Adhikari",
    role: "Parents of a Grade 5 student",
  },
  {
    text: "Our son blossomed in the secondary program, excelling in both sciences and sports. Aatreya stands out as the finest academy in Pokhara.",
    author: "Anjana Sharma",
    role: "Parent of a Grade 9 student",
  },
  {
    text: "What sets Aatreya apart is the genuine care every teacher shows. My daughter has grown in confidence and academic ability beyond what we imagined possible.",
    author: "Prakash & Meera Ghimire",
    role: "Parents of a Grade 7 student",
  },
];

export default function VoicesBoard() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const paginateTestimonials = (dir: number) => {
    setTestimonialDirection(dir);
    setCurrentTestimonial((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-pad bg-warm border-y border-line relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Principal Message */}
          <div className="lg:col-span-6 bg-white rounded-[2.5rem] border border-line shadow-md p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-full blur-3xl -z-10" />

            <div className="space-y-6">
              <div className="size-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Quote size={28} fill="currentColor" />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Executive Word</span>
                <h3 className="heading-lg text-ink">
                  Message from our <span className="text-primary font-bold">Leadership</span>
                </h3>
                <p className="text-sm text-muted italic leading-relaxed text-balance">
                  &ldquo;For over two decades, Aatreya Academy has stood for a simple conviction: every child deserves to be known, challenged, and supported. We combine rigorous academics with genuine care, preparing students not just for examinations but for lives of purpose and contribution.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-line mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative size-14 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                <Image src={principal.image} alt={principal.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ink">{principal.name}</h4>
                <p className="text-xs font-bold text-accent uppercase tracking-widest">{principal.title} &amp; Director</p>
              </div>
              <div className="sm:ml-auto text-xs text-light font-medium text-left sm:text-right max-w-[150px] pt-2 sm:pt-0">
                Ph.D. in Educational Psychology
              </div>
            </div>
          </div>

          {/* Right: Testimonials Carousel */}
          <div className="lg:col-span-6 bg-white rounded-[2.5rem] border border-line shadow-md p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-light uppercase tracking-widest">Verified Parent Testimonials</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="size-4 text-primary fill-primary shrink-0" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[160px]">
                <AnimatePresence mode="wait" custom={testimonialDirection}>
                  <motion.div
                    key={currentTestimonial}
                    custom={testimonialDirection}
                    variants={{
                      enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-between space-y-4"
                  >
                    <p className="text-base text-muted leading-relaxed italic">
                      &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                    </p>
                    <div>
                      <h4 className="text-base font-bold text-ink">{testimonials[currentTestimonial].author}</h4>
                      <p className="text-xs text-light mt-0.5">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="pt-8 border-t border-line mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setTestimonialDirection(i > currentTestimonial ? 1 : -1);
                      setCurrentTestimonial(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentTestimonial ? "bg-primary w-6" : "bg-line w-2"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => paginateTestimonials(-1)}
                  className="size-10 rounded-xl border border-line hover:bg-warm flex items-center justify-center text-muted hover:text-ink transition-colors shrink-0"
                  aria-label="Previous story"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => paginateTestimonials(1)}
                  className="size-10 rounded-xl border border-line hover:bg-warm flex items-center justify-center text-muted hover:text-ink transition-colors shrink-0"
                  aria-label="Next story"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
