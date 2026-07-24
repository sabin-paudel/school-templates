"use client";

import Image from "next/image";
import { principal } from "../../_data/site-content";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="relative bg-gradient-to-b from-white to-primary-light/10 overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-[400px_1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[20px] bg-primary/10" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] border border-primary/10 lg:aspect-auto lg:h-full lg:min-h-[480px]">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-ink rounded-2xl px-6 py-4 shadow-xl border border-white/10">
                <p className="text-3xl font-bold text-white">24+</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Years Leading</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/40">
                <Quote size={14} /> Principal Message
              </span>
              <h2 className="heading-md mt-3 text-ink">
                A word from our leadership.
              </h2>
              <blockquote className="mt-8 relative">
                <Quote className="w-14 h-14 text-primary/10 absolute -top-4 -left-4" />
                <p className="text-lg leading-relaxed text-ink/80 sm:text-xl relative z-10 pl-4">
                  &ldquo;{principal.message}&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 pt-6 border-t border-ink/8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {principal.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-lg">{principal.name}</p>
                    <p className="text-sm text-ink/50 mt-0.5">{principal.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
