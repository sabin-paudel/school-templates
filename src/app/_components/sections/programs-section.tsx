"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { programs } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-warm py-24 lg:py-32">
      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
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
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </motion.div>

        {/* the heading says "a path" — so the layout is literally one: a connected route, not a card grid */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            className="absolute bottom-2 left-[19px] top-2 w-px bg-ink/10"
            aria-hidden
          />

          {programs.map((program, i) => {
            const stageNum = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="relative pb-16 pl-14 last:pb-0 sm:pl-16"
              >
                <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white text-xs font-bold text-primary">
                  {stageNum}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-xl font-medium text-ink">
                    {program.title}
                  </h3>
                  <span className="rounded-md bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {program.ages}
                  </span>
                </div>

                <p className="text-body mt-3 max-w-xl text-sm leading-relaxed">
                  {program.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {program.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1.5 text-xs text-ink-light"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href="/academics"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-dark"
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
