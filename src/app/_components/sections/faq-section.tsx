"use client";

import { faqs } from "../../_data/site-content";
import Accordion from "../ui/accordion";
import { motion } from "motion/react";
import SectionHeading from "../ui/section-heading";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function FaqSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-primary-light/5 overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                label="Frequently Asked Questions"
                title="Answers to common questions about admissions and school life."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 space-y-4"
            >
              {[
                { icon: Mail, label: "Email us", value: "info@aatreya.edu.np", href: "mailto:info@aatreya.edu.np" },
                { icon: Phone, label: "Call us", value: "+977-61-456789", href: "tel:+97761456789" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 bg-warm rounded-2xl hover:bg-primary/5 hover:border-primary/10 border border-transparent transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.label}</p>
                    <a
                      href={item.href}
                      className="mt-0.5 block text-sm text-ink/50 hover:text-primary transition-colors duration-150"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Accordion items={faqs} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 flex items-center gap-3 px-5 py-4 bg-warm rounded-2xl"
            >
              <span className="text-sm text-ink/50">
                Cant find what youre looking for?{" "}
                <Link href="/contact" className="text-primary font-semibold hover:underline">
                  Contact us
                </Link>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
