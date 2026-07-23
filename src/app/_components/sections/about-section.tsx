"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Globe, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";

const highlights = [
  { icon: BookOpen, text: "National curriculum with global outlook" },
  { icon: Users, text: "Experienced, dedicated faculty" },
  { icon: Globe, text: "Strong partnership with families" },
  { icon: ShieldCheck, text: "Safe and inclusive campus environment" },
];

export default function AboutSection() {
  return (
    <section className="relative bg-white overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-main relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 right-6 w-full h-full rounded-[20px] bg-primary/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] border border-primary/10">
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt="Students at Aatreya Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-ink px-7 py-5 rounded-2xl shadow-xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {school.founded}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">Serving since</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">
                    Pokhara, Nepal
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="label">Our Story</p>
            <h2 className="heading-md mt-3 text-ink">
              A tradition of purposeful education in Pokhara.
            </h2>
            <p className="text-body mt-4">
              Since {school.founded}, Aatreya Academy has brought together
              ambitious teaching and genuine care. Our students are challenged
              to think deeply, communicate clearly, and act with integrity.
            </p>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-primary/10 hover:bg-primary/[0.03] transition-all duration-300 cursor-default"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 btn btn-primary mt-8"
            >
              Our story
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
