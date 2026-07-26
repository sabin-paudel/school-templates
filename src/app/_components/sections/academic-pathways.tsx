"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { programs } from "../../_data/site-content";

export default function AcademicPathways() {
  const [activePathway, setActivePathway] = useState(1);

  return (
    <section className="section-pad bg-warm relative overflow-hidden border-y border-line">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Academic Excellence</span>
          <h2 className="display-md text-ink">
            A Complete <span className="text-accent font-extrabold">Pathway</span> of Discovery
          </h2>
          <p className="text-muted mt-2 text-sm">
            From early physical milestones to national level NEB secondary examinations, we guide learning stages with dedicated focus.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Pathway selectors */}
          <div className="lg:col-span-5 space-y-4">
            {programs.map((prog, idx) => {
              const isActive = activePathway === idx;
              return (
                <button
                  key={prog.id}
                  onClick={() => setActivePathway(idx)}
                  className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? "bg-white border-primary shadow-xl scale-[1.01]"
                      : "bg-transparent border-transparent hover:bg-white/50 hover:border-line"
                  }`}
                >
                  <div className={`size-12 rounded-2xl flex items-center justify-center font-serif text-lg font-bold shrink-0 transition-colors duration-300 ${
                    isActive ? "bg-primary text-white" : "bg-white text-light border border-line"
                  }`}>
                    {prog.stage}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-ink">{prog.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? "bg-accent/10 text-accent" : "bg-line/40 text-light"
                      }`}>
                        {prog.ages}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">
                      {prog.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Animated detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePathway}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2.5rem] border border-line shadow-xl overflow-hidden grid md:grid-cols-12 h-full"
              >
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[400px]">
                  <Image
                    src={programs[activePathway].image}
                    alt={programs[activePathway].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink/30 to-transparent" />
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Selected Stage Explorer</span>
                      <h3 className="heading-md text-ink mt-1">{programs[activePathway].title}</h3>
                      <div className="inline-flex mt-2 px-3 py-1 bg-warm border border-line rounded-lg text-xs font-bold text-muted">
                        Target Age Group: {programs[activePathway].ages}
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {programs[activePathway].description}
                    </p>
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Curriculum Highlights</h4>
                      <div className="grid sm:grid-cols-1 gap-2">
                        {programs[activePathway].highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs font-semibold text-muted">
                            <CheckCircle2 size={14} className="text-success shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-line mt-6 flex items-center justify-between gap-4">
                    <Link href="/academics" className="btn btn-primary !py-2 !px-5 !text-xs group">
                      <span>Curriculum Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link href="/admissions" className="text-xs font-bold text-muted hover:text-primary flex items-center gap-1 transition-colors">
                      <span>Enquire Online</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
