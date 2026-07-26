"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { events } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function EventsSection() {
  return (
    <section className="relative overflow-hidden bg-warm py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
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
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </motion.div>

        {/* an actual calendar page per date, read as an agenda rather than a card grid */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-ink/10">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="group flex items-center gap-5 border-b border-ink/10 py-5 sm:gap-7"
            >
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center border border-ink/15 bg-white transition-colors duration-300 group-hover:border-primary/40">
                <p className="font-serif text-2xl leading-none text-ink">
                  {event.date.split(" ")[0]}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {event.month}
                </p>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-ink sm:text-base">
                  {event.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink/50">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span className="truncate">{event.venue}</span>
                </p>
              </div>

              <ArrowRight
                size={16}
                className="hidden shrink-0 text-ink/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
