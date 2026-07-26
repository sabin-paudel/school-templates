"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Layers, Heart, Camera, ArrowRight } from "lucide-react";
import { facilities, studentLife, galleryPhotos } from "../../_data/site-content";

type MediaTab = "facilities" | "studentLife" | "gallery";

export default function CampusExperience() {
  const [activeMediaTab, setActiveMediaTab] = useState<MediaTab>("facilities");

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">Vibrant Environment</span>
            <h2 className="display-md text-ink">
              The Campus <span className="text-primary font-bold">Experience</span>
            </h2>
            <p className="text-muted mt-2 text-sm max-w-xl">
              Explore a virtual tour of our modern state-of-the-art laboratory networks, sports grounds, creative arts centers, and life on campus.
            </p>
          </div>

          <div className="flex bg-warm p-1 rounded-xl border border-line gap-1 self-start md:self-auto shrink-0">
            {([["facilities", Layers, "Facilities"], ["studentLife", Heart, "Student Life"], ["gallery", Camera, "Gallery"]] as const).map(([key, Icon, label]) => (
              <button
                key={key}
                onClick={() => setActiveMediaTab(key)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeMediaTab === key ? "bg-white text-primary shadow-sm" : "text-muted hover:text-ink"
                }`}
              >
                <Icon size={14} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            {activeMediaTab === "facilities" && (
              <motion.div
                key="facilities-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {facilities.map((fac) => (
                  <div key={fac.title} className="card group overflow-hidden flex flex-col justify-between h-full">
                    <div className="relative h-48 w-full overflow-hidden shrink-0">
                      <Image src={fac.image} alt={fac.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                          {fac.title}
                        </h4>
                        <p className="text-xs text-muted leading-relaxed line-clamp-3">{fac.description}</p>
                      </div>
                      <Link href="/about" className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-1.5 transition-all self-start">
                        <span>Explore Facility</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeMediaTab === "studentLife" && (
              <motion.div
                key="studentlife-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {studentLife.map((item) => (
                  <div key={item.title} className="group relative rounded-3xl border border-line overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted leading-relaxed line-clamp-3">{item.description}</p>
                      </div>
                      <Link href="/school-life" className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-1.5 transition-all self-start">
                        <span>See Co-curriculars</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeMediaTab === "gallery" && (
              <motion.div
                key="gallery-masonry"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {galleryPhotos.slice(0, 8).map((photo, index) => {
                  const spans = [
                    "col-span-2 row-span-1 md:row-span-2",
                    "col-span-1 row-span-1",
                    "col-span-1 row-span-1",
                    "col-span-2 row-span-1",
                    "col-span-1 row-span-1",
                    "col-span-1 row-span-1",
                    "col-span-1 row-span-1",
                    "col-span-1 row-span-1"
                  ];
                  return (
                    <div
                      key={index}
                      className={`${spans[index] || "col-span-1 row-span-1"} group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-auto sm:min-h-[160px] border border-line shadow-sm`}
                    >
                      <Image src={photo.src} alt={photo.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 right-3 text-white translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-xs font-extrabold tracking-tight truncate">{photo.title}</p>
                        <p className="text-[9px] text-white/60 mt-0.5 truncate font-medium">Photo: {photo.credit}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn btn-outline group">
            <span>View Full Campus Gallery</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
