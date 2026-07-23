"use client";

import { Trophy, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { achievements } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function AchievementsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["10%", "0%", "0%", "-10%"]);

  return (
    <section ref={ref} className="relative bg-warm overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Achievements"
            title="A record of excellence across academics, sport, and community."
            action={
              <Link
                href="/achievements"
                className="group inline-flex items-center gap-2 btn btn-ghost rounded-xl text-sm"
              >
                View all
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            }
          />
        </motion.div>

        <motion.div className="mt-14 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none" style={{ x }}>
          {achievements.slice(0, 5).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="min-w-[320px] md:min-w-[380px] snap-start"
            >
              <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-ink/5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shrink-0">
                    <Trophy size={20} className="text-primary" />
                  </span>
                  <span className="shrink-0 inline-flex items-center rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink/50">
                    {item.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-ink/40 uppercase tracking-wider">{item.category}</span>
                  <ArrowUpRight size={13} className="text-primary/30 group-hover:text-primary transition-colors shrink-0" />
                </div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-body text-sm mt-2">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center gap-2">
          {achievements.slice(0, 5).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>
    </section>
  );
}
