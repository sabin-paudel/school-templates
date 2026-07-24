"use client";

import Image from "next/image";
import { principal } from "../../_data/site-content";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container relative mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl border border-ink/10"
        >
          {/* faint ruled lines, continuing the register motif, contained to this letter panel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(60,110,113,0.05) 43px, rgba(60,110,113,0.05) 44px)",
            }}
          />

          {/* letterhead */}
          <div className="relative flex items-center justify-between border-b border-ink/10 px-8 py-5 sm:px-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
              <Quote size={13} className="text-primary" />
              Office of the Principal
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              24+ Years Leading
            </span>
          </div>

          <div className="relative px-8 py-12 sm:px-12 sm:py-16">
            <h2 className="heading-md font-serif text-ink">
              A word from our leadership.
            </h2>

            <blockquote className="mt-8">
              <p className="font-serif text-xl leading-relaxed text-ink/80 sm:text-2xl">
                &ldquo;{principal.message}&rdquo;
              </p>
            </blockquote>

            {/* signature block */}
            <div className="mt-12 flex items-center gap-5 border-t border-ink/10 pt-8">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-ink/10">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-lg text-ink">{principal.name}</p>
                <p className="mt-0.5 text-sm text-ink/50">{principal.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
