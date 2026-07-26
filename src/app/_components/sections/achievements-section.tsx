"use client";

import { Trophy, ArrowRight, Star, Target, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { achievements } from "../../_data/site-content";
import Image from "next/image";

const achievementIcons = [Star, Trophy, Target, Zap];

export default function AchievementsSection() {
  const items = achievements.slice(0, 4);

  return (
    <section className="section-pad bg-white overflow-hidden relative">
      <div className="container relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">
            Our Legacy
          </span>
          <h2 className="display-md text-ink mb-6 mx-auto max-w-3xl">
            A record of <span className="text-primary">excellence</span> across academics, sport, and community.
          </h2>
          <Link href="/achievements" className="btn btn-outline group">
            <span>Explore All Achievements</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="card h-full p-8 flex flex-col items-center text-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <div className="size-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                    <Icon size={32} />
                  </div>
                  
                  <div className="text-2xl font-black text-ink group-hover:text-white mb-2 transition-colors">
                    {item.year}
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent group-hover:text-accent-soft mb-4 block transition-colors">
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-ink group-hover:text-white mb-4 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted group-hover:text-white/70 transition-colors">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Background for Section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 size-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 size-96 bg-accent/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
