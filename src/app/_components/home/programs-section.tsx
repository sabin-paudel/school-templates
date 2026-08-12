"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { programs } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function ProgramsSection() {
  const [active, setActive] = useState(0);
  const current = programs[active];

  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Academics"
          title="A clear path from first questions to bold ambitions."
          description="Three stages. One continuous journey of discovery, from playful first steps to confident readiness for national examinations."
          action={
            <Link href="/academics" className="btn btn-outline btn-arrow group">
              View All Programs
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          }
        />

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Interactive stage list */}
          <Reveal className="order-2 lg:order-1">
            <div className="border-t border-line">
              {programs.map((program, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={program.id}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-current={isActive}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-7 text-left sm:gap-8"
                  >
                    <span
                      className={`font-display text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-light"
                      }`}
                    >
                      {program.stage}
                    </span>
                    <span>
                      <span
                        className={`block font-display text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl ${
                          isActive ? "text-ink" : "text-ink/40"
                        }`}
                      >
                        {program.title}
                      </span>
                      <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-light">
                        {program.ages}
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="hidden text-sm font-medium text-muted sm:inline">
                        {program.description.split(".")[0]}.
                      </span>
                      <ArrowUpRight
                        size={22}
                        className={`shrink-0 transition-all duration-300 ${
                          isActive
                            ? "translate-x-0.5 text-ink"
                            : "-translate-y-0.5 text-light group-hover:text-ink"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={`/academics#${current.id}`}
                className="btn btn-primary btn-arrow group"
              >
                Explore {current.title}
                <ArrowUpRight size={17} className="btn-arrow-icon" />
              </Link>
              <Link href="/admissions" className="btn btn-outline">
                Apply Now
              </Link>
            </div>
          </Reveal>

          {/* Interactive image */}
          <Reveal variant="clip" className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal lg:aspect-[4/5]">
              {programs.map((program, i) => (
                <Image
                  key={program.id}
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-all duration-[900ms] ease-out ${
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    {current.ages}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white">
                    {current.title}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="font-display text-7xl font-semibold leading-none text-white/15"
                >
                  {current.stage}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
