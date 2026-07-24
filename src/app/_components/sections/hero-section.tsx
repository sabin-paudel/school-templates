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
} from "lucide-react";
import { motion } from "motion/react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";

const quickActions = [
  { icon: Play, label: "Virtual Tour", href: "/gallery" },
  { icon: FileText, label: "Prospectus", href: "/admissions" },
  { icon: Phone, label: "Call Us", href: "tel:+97761555555" },
  { icon: MapPin, label: "Visit Campus", href: "/contact" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-warm ">
      <div className="grid min-h-dvh lg:grid-cols-[1.15fr_0.85fr] container mx-auto">
        {/* ---------- Left: content column ---------- */}
        <div className="relative flex flex-col justify-center overflow-hidden px-6 pb-32 pt-32 sm:px-10 lg:px-16 lg:pb-40 lg:pt-28">
          {/* faint ruled "notebook" lines behind the copy — a quiet nod to the school register */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(60,110,113,0.07) 43px, rgba(60,110,113,0.07) 44px)",
              maskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 75%, transparent)",
            }}
          />

          <div className="container relative mx-auto max-w-150 lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2.5 border-b border-primary/30 pb-2"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary" />
                <span className="relative size-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Admissions Open 2026&ndash;27
              </span>
            </motion.div>

            <h1 className="mt-8 font-serif text-[clamp(2.2rem,5vw,4.6rem)] font-medium leading-[1.08] tracking-tight text-ink">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Where academic rigour
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  meets{" "}
                  <span className="relative inline-block">
                    genuine care.
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full stroke-primary"
                      height="10"
                      viewBox="0 0 300 10"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <motion.path
                        d="M2,6 C60,2 240,10 298,4"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: 1.15,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.svg>
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-7 max-w-md text-base leading-relaxed text-ink/55 sm:text-lg"
            >
              Aatreya Academy prepares students from early years through
              secondary school to learn with purpose and lead with integrity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-ink/20 transition-all duration-300 hover:bg-primary hover:shadow-primary/30"
              >
                <GraduationCap size={18} />
                Begin Application
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-2 py-4 text-sm font-semibold text-ink/70 transition-colors duration-300 hover:text-primary"
              >
                Schedule a Visit
                <span className="h-px w-6 bg-ink/30 transition-all duration-300 group-hover:w-9 group-hover:bg-primary" />
              </Link>
            </motion.div>

            {/* Trust strip — small credibility row under the CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-14 flex items-center gap-6 border-t border-ink/10 pt-6 text-[11px] uppercase tracking-wider text-ink/40"
            >
              <span>Est. {school.founded}</span>
              <span className="h-3 w-px bg-ink/15" />
              <span>Nationally Accredited</span>
              <span className="hidden h-3 w-px bg-ink/15 sm:block" />
              <span className="hidden sm:block">
                Early Years &ndash; Grade 12
              </span>
            </motion.div>
          </div>
        </div>

        {/* ---------- Right: full-bleed portrait column ---------- */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden min-h-dvh lg:block"
        >
          <Image
            src={nepaliSchoolImages.villageStudents}
            alt="Students at Aatreya Academy"
            fill
            priority
            sizes="45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink/25 via-transparent to-ink/40" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

          {/* ledger spine tab — the signature element, sitting on the seam like a register's binder tab */}
          <div className="absolute left-4 top-16 flex -translate-x-1/2 items-center gap-2 rounded-sm border border-ink/10 bg-white px-3 py-2 shadow-lg">
            <span
              className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60"
              style={{ writingMode: "vertical-rl" }}
            >
              Est. {school.founded} &middot; Aatreya Academy
            </span>
          </div>

          {/* vertical scroll cue, echoing the spine tab */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-24 right-6 hidden lg:block"
          >
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/70"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Utility bar: quick actions as a pinned ticket strip ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-ink/10 bg-white/90 backdrop-blur-sm"
      >
        <div className="container mx-auto grid max-w-300 grid-cols-2 sm:grid-cols-4">
          {quickActions.map((action, i) => (
            <Link
              key={action.label}
              href={action.href}
              className={`group flex items-center justify-center gap-2 py-4 text-[11px] font-medium text-ink/60 transition-colors duration-200 hover:bg-primary/5 hover:text-primary sm:gap-2.5 sm:py-5 sm:text-xs ${
                i !== 0 ? "border-l border-ink/10" : ""
              }`}
            >
              <action.icon
                size={15}
                className="text-primary/60 transition-colors group-hover:text-primary"
              />
              {action.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
