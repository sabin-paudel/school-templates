"use client";

import { Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { achievements } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function AchievementsSection() {
  const items = achievements.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-stone py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
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
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </motion.div>

        {/* "a record" — read literally: a ledger, not a carousel */}
        <div className="mx-auto mt-14 max-w-4xl border-t border-ink/10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="group flex items-start gap-6 border-b border-ink/10 py-6"
            >
              <span className="w-16 shrink-0 pt-0.5 font-serif text-2xl text-primary sm:w-20">
                {item.year}
              </span>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="text-body mt-1.5 text-sm">{item.detail}</p>
              </div>

              <Trophy
                size={18}
                className="mt-1 shrink-0 text-primary/30 transition-colors duration-300 group-hover:text-primary"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
