"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { facilities } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function FacilitiesSection() {
  const items = facilities.slice(0, 5);
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.045) 43px, rgba(255,255,255,0.045) 44px)",
        }}
      />

      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Campus Facilities"
            title="Spaces designed for learning, growth, and discovery."
            light
          />
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ---------- index list ---------- */}
          <div className="border-t border-white/10">
            {items.map((facility, i) => {
              const isActive = i === active;
              return (
                <button
                  key={facility.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-start gap-5 border-b border-white/10 py-5 text-left transition-colors duration-300 ${
                    isActive ? "border-b-primary/40" : ""
                  }`}
                >
                  <span
                    className={`shrink-0 pt-1 text-xs font-semibold tabular-nums transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-white/30"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className={`font-serif text-lg transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/50"
                      }`}
                    >
                      {facility.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-1.5 overflow-hidden text-sm leading-relaxed text-white/50"
                        >
                          {facility.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-8"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/15"
              >
                Schedule a campus tour
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* ---------- viewer ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[4/5] overflow-hidden border border-white/10 lg:aspect-auto lg:min-h-[520px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={items[active].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={items[active].image}
                  alt={items[active].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 border border-white/10 bg-ink/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                0{active + 1} / 0{items.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
