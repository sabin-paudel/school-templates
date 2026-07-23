"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Play,
  Phone,
  FileText,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";

const quickActions = [
  { icon: Play, label: "Virtual Tour", href: "/gallery" },
  { icon: FileText, label: "Prospectus", href: "/admissions" },
  { icon: Phone, label: "Call Us", href: "tel:+97761555555" },
  { icon: MapPin, label: "Visit Campus", href: "/contact" },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 6 + 4,
}));

const headingWords = [
  "Where",
  "academic",
  "rigour",
  "meets",
  "genuine",
  "care.",
];

export default function HeroSection() {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-white"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="hero-line-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3c6e71" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#3c6e71" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#3c6e71" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 C360,200 540,0 720,150 C900,300 1080,50 1440,120 L1440,0 L0,0 Z"
          fill="url(#hero-line-grad)"
        />
        <path
          d="M0,200 C240,50 480,250 720,100 C960,-50 1200,200 1440,80 L1440,0 L0,0 Z"
          fill="url(#hero-line-grad)"
          opacity="0.5"
        />
      </svg>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}

      <div className="container-main relative flex min-h-[100dvh] flex-col justify-center pb-16 pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_440px] lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 mb-8 border border-primary/15"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                <span className="relative rounded-full bg-primary size-2" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Admissions Open 2026&ndash;27
              </span>
            </motion.div>

            <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[1.02] tracking-tight text-ink overflow-hidden">
              {headingWords.map((word, i) => (
                <motion.span
                  key={word}
                  className={`inline-block mr-[0.3em] ${word === "care." ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary-dark" : ""}`}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.08,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink/55 sm:text-lg"
            >
              Aatreya Academy prepares students from early years through
              secondary school to learn with purpose and lead with integrity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-ink/20 hover:bg-primary hover:shadow-primary/30 transition-all duration-300"
              >
                <GraduationCap size={18} />
                Begin Application
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink/10 px-8 py-4 text-sm font-semibold text-ink/70 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300"
              >
                Schedule a Visit
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-full h-full rounded-[20px] border-2 border-primary/20" />
              <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden shadow-2xl">
                <Image
                  src={nepaliSchoolImages.villageStudents}
                  alt="Students at Aatreya Academy"
                  fill
                  sizes="440px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-3 py-1.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                      Est. {school.founded}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    Where every learner is known, challenged, and supported.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-14 border-t border-ink/8 pt-6"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/30 mb-4">
            Quick Actions
          </p>
          <div className="flex flex-wrap gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-ink/8 bg-white px-5 py-3 text-xs font-medium text-ink/60 shadow-sm hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-200"
              >
                <action.icon
                  size={15}
                  className="text-primary/60 group-hover:text-primary transition-colors"
                />
                {action.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-1 text-ink/25">
            <span className="text-[9px] font-semibold uppercase tracking-widest">
              Scroll
            </span>
            <ChevronDown size={14} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
