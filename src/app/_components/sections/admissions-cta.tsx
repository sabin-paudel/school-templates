"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function AdmissionsCta() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8"
      >
        <div className="max-w-xl border-l border-white/15 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
            Admissions 2026&ndash;27
          </p>
          <h2 className="mt-4 heading-md font-serif text-white">
            The best way to understand Aatreya is to experience it.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone">
            Tour the campus, meet our educators, and see a regular school day in
            action. Our admissions team will guide you through every step.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:bg-white/90 sm:w-auto"
          >
            Schedule a Visit
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/admissions"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-stone px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-primary sm:w-auto"
          >
            Apply for Admission
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
