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
    <section id="student-life" className="relative bg-gradient-to-b from-white to-primary-light/10 overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-main relative">
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
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            }
          />
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {studentLife.map((item, i) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/5] sm:aspect-auto sm:h-full min-h-[420px]" : "aspect-[4/5]"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center rounded-lg bg-white/15 border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {badges[i]}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
