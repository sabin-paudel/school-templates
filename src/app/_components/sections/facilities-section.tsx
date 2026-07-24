"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { facilities } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

const bentoLayouts = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export default function FacilitiesSection() {
  return (
    <section className="relative bg-ink overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Campus Facilities"
            title="Spaces designed for learning, growth, and discovery."
            align="center"
            light
          />
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {facilities.slice(0, 5).map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className={`group relative overflow-hidden rounded-2xl ${bentoLayouts[i]}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-2xl" />
              <div className="relative h-full min-h-[200px] md:min-h-[240px]">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/10 px-3 py-1 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-lg">{facility.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/8 text-white hover:bg-white/15 px-8 py-4 text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            Schedule a campus tour
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
