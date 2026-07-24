"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { events } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function EventsSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary-light/10 to-white overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Upcoming Events"
            title="Important dates on the school calendar."
            action={
              <Link
                href="/notices"
                className="group inline-flex items-center gap-2 btn btn-ghost rounded-xl text-sm"
              >
                View full calendar
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            }
          />
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-ink/5"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark group-hover:from-ink group-hover:to-ink transition-all duration-300">
                  <p className="text-xl font-bold text-white leading-none">
                    {event.date.split(" ")[0]}
                  </p>
                  <p className="text-[10px] text-white/60 uppercase mt-0.5 font-medium">
                    {event.month}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-ink">{event.title}</h3>
                  <p className="flex items-center gap-1.5 mt-2 text-xs text-ink/50">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
