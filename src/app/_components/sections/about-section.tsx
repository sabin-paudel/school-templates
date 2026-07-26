"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";

const highlights = [
  "National curriculum with global outlook",
  "Experienced, dedicated faculty",
  "Strong partnership with families",
  "Safe and inclusive campus environment",
];

export default function AboutSection() {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Images Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt="Students at Aatreya Academy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>
            
            {/* Secondary Floating Image/Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -right-8 -bottom-8 z-20 glass p-6 rounded-3xl shadow-2xl max-w-[240px] hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-2xl bg-success/10 flex items-center justify-center text-success">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold">Safe Haven</div>
                  <div className="text-xs text-light uppercase font-bold tracking-widest">Environment</div>
                </div>
              </div>
              <p className="text-sm text-muted">A nurturing and secure space where every child belongs and thrives.</p>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute -left-12 -top-12 size-64 bg-accent/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">
                Our Heritage
              </span>
              <h2 className="display-md text-ink mb-6">
                A tradition of <span className="text-accent">purposeful</span> education in Pokhara.
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Since {school.founded}, Aatreya Academy has been a beacon of excellence. 
                We believe in nurturing not just minds, but hearts, preparing students for the challenges of a rapidly changing world.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-warm border border-line">
                  <CheckCircle2 size={20} className="text-success mt-0.5 shrink-0" />
                  <span className="text-sm font-bold text-ink">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Link href="/about" className="btn btn-primary group">
                <span>Our Full Story</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
