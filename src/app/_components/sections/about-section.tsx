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
    <section className="relative overflow-hidden bg-stone py-24 lg:py-32">
      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          {/* ---------- image, framed like a placard rather than a layered card ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-ink/10">
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt="Students at Aatreya Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* caption plaque, attached to the frame like a wall label under a photograph */}
            <div className="flex items-center justify-between border-x border-b border-ink/10 bg-ink px-6 py-4">
              <span className="text-sm font-semibold text-white">
                Serving Pokhara since {school.founded}
              </span>
              <span className="font-serif text-lg text-primary">
                {school.founded}
              </span>
            </div>
          </motion.div>

          {/* ---------- copy column ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="label">Our Story</p>
            <h2 className="heading-md mt-3 font-serif text-ink">
              A tradition of purposeful education in Pokhara.
            </h2>
            <p className="text-body mt-4">
              Since {school.founded}, Aatreya Academy has brought together
              ambitious teaching and genuine care. Our students are challenged
              to think deeply, communicate clearly, and act with integrity.
            </p>

            {/* highlights as a ledger list — hairline-divided rows instead of boxed cards */}
            <div className="mt-10 border-t border-ink/10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="group flex items-center gap-4 border-b border-ink/10 py-4"
                >
                  <item.icon
                    size={17}
                    className="shrink-0 text-primary/70 transition-colors group-hover:text-primary"
                  />
                  <span className="text-sm font-medium text-ink">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 btn btn-primary"
            >
              Our story
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
