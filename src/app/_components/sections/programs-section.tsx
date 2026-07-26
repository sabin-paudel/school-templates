"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Microscope, Music } from "lucide-react";
import { motion } from "motion/react";
import { programs } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Image from "next/image";

const programIcons = [Sparkles, BookOpen, Microscope];

export default function ProgramsSection() {
  return (
    <section className="section-pad bg-warm overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">
                Academic Pathways
              </span>
              <h2 className="display-md text-ink">
                A clear path from first <span className="text-primary">questions</span> to bold <span className="text-primary">ambitions</span>.
              </h2>
            </div>
            <Link href="/academics" className="btn btn-outline group">
              <span>View All Programs</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {programs.map((program, i) => {
            const Icon = programIcons[i];
            const isLarge = i === 0;
            
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${
                  isLarge ? "md:col-span-7" : "md:col-span-5"
                } group relative`}
              >
                <div className="card h-full overflow-hidden flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-main/80 via-text-main/20 to-transparent" />
                    
                    <div className="absolute top-6 right-6">
                      <div className="glass px-4 py-1.5 rounded-full text-xs font-bold text-ink">
                        {program.ages}
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-10 rounded-full bg-accent flex items-center justify-center">
                          <Icon size={20} className="text-white" />
                        </div>
                        <h3 className="heading-md">{program.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-muted mb-6 line-clamp-2">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {program.highlights.map((h) => (
                          <span key={h} className="px-3 py-1 bg-warm border border-line rounded-lg text-xs font-semibold text-muted">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={`/academics`} className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                      <span>Explore Pathway</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Extra Bento Item: Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-12"
          >
            <div className="bg-primary rounded-[2.5rem] p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] -z-0 group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="heading-lg text-white mb-2">Ready to join our community?</h3>
                  <p className="text-white/70">Join over 700+ students on their journey to excellence.</p>
                </div>
                <Link href="/admissions" className="btn !bg-white !text-primary hover:!bg-primary-light whitespace-nowrap">
                  Start Application
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
