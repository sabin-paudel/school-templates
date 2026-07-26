"use client";

import { motion } from "motion/react";
import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";
import { Users, GraduationCap, Trophy, Globe } from "lucide-react";

const icons = [Trophy, Users, GraduationCap, Globe];

export default function StatsBand() {
  return (
    <section className="relative z-30 -mt-12 mb-12">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass rounded-[2.5rem] shadow-2xl p-8 lg:p-12 border border-white/50 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <div 
                  key={stat.label} 
                  className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                    i !== 3 ? "lg:border-r lg:border-line pr-4" : ""
                  }`}
                >
                  <div className="size-12 rounded-2xl bg-primary-light flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      label=""
                    />
                    <p className="text-sm font-bold text-light uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
