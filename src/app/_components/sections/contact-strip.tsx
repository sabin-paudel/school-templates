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
    <section id="contact" className="relative overflow-hidden bg-ink py-16">
      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid divide-y divide-white/10 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group flex items-center gap-3 py-6 md:justify-center md:gap-4 md:px-6"
            >
              <item.icon
                size={18}
                className="shrink-0 text-primary transition-colors duration-300"
              />
              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-0.5 text-xs text-stone">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-stone transition-colors duration-200 hover:text-primary"
          >
            View all contact details
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
