"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { school } from "../../_data/site-content";

const contactItems = [
  { icon: MapPin, title: school.location, desc: "Visit our campus" },
  { icon: Phone, title: school.phone, desc: "Call the school office" },
  { icon: Mail, title: school.email, desc: "Send us an email" },
];

export default function ContactStrip() {
  return (
    <section id="contact" className="relative bg-ink overflow-hidden py-16">
      <div className="absolute inset-0 bg-dot opacity-[0.06]" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-main relative">
        <div className="grid gap-4 md:grid-cols-3">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-primary-dark border border-primary-dark hover:border-stone hover:bg-primary-dark transition-all duration-300"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary shrink-0">
                <item.icon size={20} className="text-white" />
              </span>
              <div>
                <p className="text-sm text-white font-medium">
                  {item.title}
                </p>
                <p className="text-xs text-stone mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-stone hover:text-primary transition-colors duration-200"
          >
            View all contact details
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
