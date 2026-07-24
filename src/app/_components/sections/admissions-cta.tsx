"use client";

import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { motion } from "motion/react";

export default function AdmissionsCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-primary-dark py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />

        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-8"
          >
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary">
              <CalendarCheck size={32} className="text-white" />
            </span>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                Admissions 2026&ndash;27
              </p>
              <h2 className="mt-5 heading-md text-white">
                The best way to understand Aatreya is to experience it.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone max-w-lg mx-auto">
                Tour the campus, meet our educators, and see a regular school day
                in action. Our admissions team will guide you through every step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-ink hover:bg-white/90 shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Schedule a Visit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-xl border border-stone px-8 py-4 text-sm font-semibold text-white hover:bg-primary hover:border-primary transition-all duration-300"
              >
                Apply for Admission
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
