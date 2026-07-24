"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { programs } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function ProgramsSection() {
  return (
    <section className="relative bg-white overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Academic Programs"
            title="A clear path from first questions to bold ambitions."
            action={
              <Link
                href="/academics"
                className="group inline-flex items-center gap-2 btn btn-ghost rounded-xl text-sm"
              >
                View all programs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            }
          />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => {
            const stageNum = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="px-8 pt-8 pb-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-primary px-3 py-1.5 rounded-lg">
                        {program.ages}
                      </span>
                      <span className="text-4xl font-bold text-line select-none">
                        {stageNum}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-ink">{program.title}</h3>
                    <p className="text-body mt-3 text-sm flex-1 leading-relaxed">{program.description}</p>
                    <div className="mt-6 pt-5 border-t border-stone">
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {program.highlights.map((h) => (
                          <span key={h} className="flex items-center gap-1.5 text-xs text-ink-light">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/academics"
                      className="group inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
                    >
                      Learn more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
