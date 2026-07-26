"use client";

import Image from "next/image";
import { principal } from "../../_data/site-content";
import { motion } from "motion/react";
import { Quote, Award } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="section-pad bg-warm relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-12 size-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 size-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <Image
                    src={principal.image}
                    alt={principal.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -right-6 bottom-12 z-20 glass p-5 rounded-3xl shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <Award size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">24+ Years</div>
                      <div className="text-[10px] font-bold text-light uppercase tracking-widest">Leadership</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Frame */}
                <div className="absolute -inset-4 border-2 border-primary/10 rounded-[3.5rem] -z-10 translate-x-4 translate-y-4" />
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="size-16 rounded-3xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Quote size={32} fill="currentColor" />
                </div>

                <div className="space-y-6">
                  <h2 className="display-md text-ink leading-tight">
                    A word from our <span className="text-primary">Leadership</span>.
                  </h2>
                  <blockquote className="relative">
                    <p className="text-2xl font-medium text-muted italic leading-relaxed text-balance">
                      "{principal.message}"
                    </p>
                  </blockquote>
                </div>

                <div className="pt-8 border-t border-line flex items-center gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-ink">{principal.name}</h4>
                    <p className="text-sm font-bold text-accent uppercase tracking-widest">{principal.title}</p>
                  </div>
                  <div className="h-10 w-px bg-border mx-4" />
                  <div className="text-xs text-light font-medium max-w-[200px]">
                    Committed to shaping visionaries and leaders since 2002.
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
