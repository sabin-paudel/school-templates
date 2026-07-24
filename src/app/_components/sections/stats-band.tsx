"use client";

import { motion } from "motion/react";
import { AArrowUp, Users, BookOpen, CheckCircle } from "lucide-react";
import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";

const icons = [AArrowUp, Users, BookOpen, CheckCircle];

export default function StatsBand() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="relative text-center"
              >
                {i < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/8 to-transparent hidden md:block" />
                )}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} label={stat.label} light />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
