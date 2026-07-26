"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Play, Sparkles } from "lucide-react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90dvh] flex items-center overflow-hidden bg-white pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold tracking-wider uppercase"
            >
              <Sparkles size={14} className="animate-pulse" />
              Admissions Open 2026—27
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="display-lg text-ink text-balance"
            >
              Shaping <span className="text-accent">Visionaries</span>, <br />
              Inspiring{" "}
              <span className="relative">
                Leaders.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent/10 -z-10 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted max-w-xl text-balance leading-relaxed"
            >
              Aatreya Academy is where academic excellence meets holistic
              development. We nurture the next generation of thinkers, creators,
              and compassionate leaders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/admissions"
                className="btn btn-primary group"
              >
                <GraduationCap size={20} />
                <span>Apply Now</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/gallery"
                className="btn btn-outline group"
              >
                <Play size={18} className="text-accent" />
                <span>Watch Video</span>
              </Link>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-8 flex items-center gap-8 border-t border-line"
            >
              <div>
                <div className="text-2xl font-bold text-ink">22+</div>
                <div className="text-xs text-light uppercase tracking-widest font-bold">
                  Years Legacy
                </div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <div className="text-2xl font-bold text-ink">100%</div>
                <div className="text-xs text-light uppercase tracking-widest font-bold">
                  Results
                </div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <div className="text-2xl font-bold text-ink">15:1</div>
                <div className="text-xs text-light uppercase tracking-widest font-bold">
                  Class Ratio
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: y1 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-20"
            >
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt="Aatreya Students"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -right-8 top-1/4 glass p-6 rounded-2xl shadow-xl z-30 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-full bg-success/20 flex items-center justify-center">
                  <Sparkles size={16} className="text-success" />
                </div>
                <span className="text-sm font-bold">Academic Gold</span>
              </div>
              <p className="text-xs text-muted">
                Consistent top rankings in regional science fairs and board
                exams.
              </p>
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute -left-12 bottom-1/4 glass p-6 rounded-2xl shadow-xl z-30 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Play size={16} className="text-accent" />
                </div>
                <span className="text-sm font-bold">Global Reach</span>
              </div>
              <p className="text-xs text-muted">
                Our alumni are thriving in top universities worldwide.
              </p>
            </motion.div>

            {/* Decorative Background for Image */}
            <div className="absolute -inset-4 border border-dashed border-primary/20 rounded-[2.5rem] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
