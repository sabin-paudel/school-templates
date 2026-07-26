"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell, Layers, Calendar, MapPin, ArrowRight, Clock, Flame
} from "lucide-react";
import { events, notices, news, stats } from "../../_data/site-content";
import Counter from "../ui/counter";

export default function PulseDashboard() {
  const [pulseTab, setPulseTab] = useState<"notices" | "news">("notices");

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Section header with tab toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
              The Academic Pulse
            </span>
            <h2 className="display-md text-ink">
              Live <span className="text-primary font-bold">Announcements</span> &amp; Updates
            </h2>
            <p className="text-muted mt-2 text-sm max-w-xl">
              Stay updated with crucial dates, term examinations, district awards, and structural schedules from our Lakeside Pokhara campus.
            </p>
          </div>

          <div className="flex bg-warm p-1 rounded-xl border border-line gap-1 self-start md:self-auto shrink-0">
            <button
              onClick={() => setPulseTab("notices")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                pulseTab === "notices" ? "bg-white text-primary shadow-sm" : "text-muted hover:text-ink"
              }`}
            >
              <Bell size={14} />
              <span>School Notices</span>
              <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full font-extrabold">
                {notices.length}
              </span>
            </button>
            <button
              onClick={() => setPulseTab("news")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                pulseTab === "news" ? "bg-white text-primary shadow-sm" : "text-muted hover:text-ink"
              }`}
            >
              <Layers size={14} />
              <span>Latest News</span>
              <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full font-extrabold">
                {news.length}
              </span>
            </button>
          </div>
        </div>

        {/* 2-column grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Events */}
          <div className="lg:col-span-5 bg-warm border border-line rounded-3xl p-6 lg:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-primary-light flex items-center justify-center text-primary">
                  <Calendar size={18} />
                </div>
                <h3 className="text-base font-bold text-ink">Upcoming Key Dates</h3>
              </div>
              <Link href="/notices" className="text-xs font-bold text-accent hover:text-primary transition-colors flex items-center gap-1">
                <span>Full Calendar</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="group flex items-center gap-4 p-3 bg-white hover:bg-primary-light border border-line hover:border-primary/20 rounded-2xl transition-all duration-300"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-line bg-warm group-hover:bg-white group-hover:border-primary/20 transition-all duration-300">
                    <p className="text-lg font-extrabold leading-none text-ink">
                      {event.date.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-[8px] font-extrabold uppercase tracking-widest text-primary">
                      {event.month}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-ink group-hover:text-primary transition-colors truncate">
                      {event.title}
                    </h4>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-light group-hover:text-muted transition-colors">
                      <MapPin size={12} className="shrink-0" />
                      <span className="truncate">{event.venue}</span>
                    </p>
                  </div>
                  <ArrowRight size={14} className="text-light group-hover:text-primary shrink-0 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Togglable Notices/News */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              {pulseTab === "notices" ? (
                <motion.div
                  key="notices-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {notices.map((notice) => (
                    <div
                      key={notice.title}
                      className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${
                        notice.pinned
                          ? "bg-primary-light/40 border-primary/20 hover:border-primary/40 shadow-sm"
                          : "bg-white border-line hover:border-light hover:shadow-md"
                      }`}
                    >
                      {notice.pinned && <div className="absolute top-0 left-0 h-full w-1 bg-accent" />}
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {notice.pinned && (
                            <span className="px-2 py-0.5 rounded bg-accent text-white text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                              <Flame size={10} /> Pinned
                            </span>
                          )}
                          <span className="px-2.5 py-0.5 rounded-full bg-warm border border-line text-muted text-[10px] font-semibold">
                            {notice.category}
                          </span>
                          <span className="text-light text-[10px] font-medium flex items-center gap-1 ml-auto sm:ml-0">
                            <Clock size={10} /> {notice.date}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-ink leading-snug">{notice.title}</h4>
                        <p className="text-xs text-muted leading-relaxed line-clamp-2">{notice.text}</p>
                      </div>
                      <div className="pt-2 sm:pt-0 shrink-0 self-end sm:self-center">
                        <Link href="/notices" className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group">
                          <span>Read Notice</span>
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="news-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-6"
                >
                  {news.map((item) => (
                    <div key={item.title} className="card overflow-hidden flex flex-col group h-full">
                      <div className="relative h-44 w-full overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full bg-white/95 text-ink text-[10px] font-bold shadow-sm">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-light text-[10px] font-semibold block">{item.date}</span>
                          <h4 className="text-sm font-bold text-ink line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted leading-relaxed line-clamp-2">{item.excerpt}</p>
                        </div>
                        <Link href="/school-life" className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-1.5 transition-all self-start mt-auto">
                          <span>Read Full Story</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Stats counter bar */}
        <div className="mt-16 pt-12 border-t border-line">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 bg-warm rounded-2xl border border-line">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} label="" />
                </div>
                <div className="text-[10px] font-bold text-light uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
