"use client";

import { motion } from "motion/react";
import { AArrowUp, Users, BookOpen, CheckCircle } from "lucide-react";
import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";

const icons = [AArrowUp, Users, BookOpen, CheckCircle];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* faint ruled lines — the same register texture from the hero, inverted for a dark ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.045) 43px, rgba(255,255,255,0.045) 44px)",
        }}
      />

      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-14 lg:flex-row lg:items-stretch lg:gap-0 lg:py-0">
          {/* ---------- register label column ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex shrink-0 flex-col justify-center gap-2 lg:w-[200px] lg:border-r lg:border-white/10 lg:py-16 lg:pr-8"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              The Register
            </span>
            <span className="font-serif text-lg leading-snug text-white/80">
              A school measured in people, not just marks.
            </span>
          </motion.div>

          {/* ---------- stat entries ---------- */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex-1">
            {stats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 * i }}
                  className={`relative flex flex-col justify-center gap-3 py-8 pl-5 pr-3 sm:pl-6 sm:pr-4 lg:py-16 lg:pl-10 ${
                    i % 2 === 1 ? "border-l border-white/10" : ""
                  } ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${
                    i > 0 ? "lg:border-l lg:border-white/10" : ""
                  }`}
                >
                  <Icon size={16} className="text-primary/70" />
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    light
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
