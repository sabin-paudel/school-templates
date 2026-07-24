"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { studentLife } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

const badges = ["Athletics", "Creative Arts", "Community"];

export default function StudentLifeSection() {
  return (
    <section
      id="student-life"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Student Life"
            title="Beyond the classroom, students find their interests and their voice."
            action={
              <Link
                href="/school-life"
                className="group inline-flex items-center gap-2 btn btn-ghost rounded-xl text-sm"
              >
                Explore school life
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </motion.div>

        {/* a browsable strip rather than a fixed grid — captions live below the frame, not burned into it */}
        <div className="mt-14 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 scrollbar-none sm:mx-0 sm:px-0">
          {studentLife.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="w-[78vw] shrink-0 snap-start sm:w-[320px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 78vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {badges[i]}
                  </span>
                  <h3 className="mt-1 font-serif text-lg text-ink">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/55">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-2 text-xs text-ink/30 sm:hidden">
          Swipe to explore &rarr;
        </p>
      </div>
    </section>
  );
}
