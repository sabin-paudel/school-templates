"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image1?: string;
  image1Alt?: string;
  image2?: string;
  image2Alt?: string;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function ParticleField({ count }: { count: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: randomBetween(5, 95),
        y: randomBetween(5, 95),
        size: randomBetween(1.5, 4),
        duration: randomBetween(3, 7),
        delay: randomBetween(0, 3),
        driftX: randomBetween(-20, 20),
        driftY: randomBetween(-20, 20),
      })),
    [count],
  );

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/15 hidden lg:block"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

function ConnectionStream() {
  return (
    <>
      {/* Glow line behind */}
      <div
        aria-hidden
        className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-[2px] rounded-full hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(59,130,246,0.15) 20%, rgba(139,92,246,0.15) 50%, rgba(59,130,246,0.15) 80%, transparent 100%)",
          filter: "blur(4px)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-px hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 85%, transparent 100%)",
        }}
      />

      {/* Mid accent glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/10 blur-[30px] hidden lg:block"
      />

      {/* Traveler stream — 10 dots flowing left→right */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            width: i % 3 === 0 ? 2.5 : 1.5,
            height: i % 3 === 0 ? 2.5 : 1.5,
          }}
          animate={{
            left: ["8%", "92%"],
            opacity: [0, i % 2 === 0 ? 0.8 : 0.4, 0],
            scale: [0.5, i % 3 === 0 ? 1.6 : 1, 0.5],
          }}
          transition={{
            duration: 3.5 + (i % 5) * 0.5,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "linear",
          }}
        >
          <div
            className={`h-full w-full rounded-full ${
              i % 2 === 0 ? "bg-primary" : "bg-accent"
            }`}
            style={{
              filter: i % 3 === 0 ? "blur(3px)" : undefined,
              boxShadow:
                i % 2 === 0
                  ? "0 0 6px rgba(59,130,246,0.5)"
                  : "0 0 6px rgba(139,92,246,0.5)",
            }}
          />
        </motion.div>
      ))}

      {/* Counter-stream — 3 dots flowing right→left */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`back-${i}`}
          className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/30 blur-[1px] hidden lg:block"
          animate={{
            left: ["85%", "15%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + i * 0.6,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink via-[#0a0a12] to-[#0d0d18] min-h-[65dvh] flex items-center">
      {/* Animated gradient overlay */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 60%, rgba(139,92,246,0.04) 0%, transparent 100%)",
        }}
      />

      {/* Dot mesh */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large glow blobs */}
      <div className="absolute top-[-8%] right-[0%] w-[40%] h-[40%] bg-primary/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-8%] left-[0%] w-[30%] h-[30%] bg-accent/6 blur-[140px] rounded-full pointer-events-none" />

      {/* Connection stream between images */}
      <ConnectionStream />

      {/* Ambient particle field */}
      <ParticleField count={16} />

      {/* Orbiting accent rings */}
      <motion.div
        className="absolute left-[12%] bottom-[15%] w-6 h-6 rounded-full border border-primary/20 hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[15%] top-[18%] w-5 h-5 rotate-45 bg-accent/10 hidden lg:block"
        animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[30%] top-[12%] w-2 h-2 rounded-full bg-primary/30 blur-[1px] hidden lg:block"
        animate={{ scale: [1, 2.5, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 py-6 text-xs text-white/30"
          >
            <Link
              href="/"
              className="transition-colors duration-150 hover:text-white/70"
            >
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/60 font-medium">{label}</span>
          </nav>
        </div>
        <div className="container py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-6 bg-gradient-to-r from-primary/60 to-primary/20" />
              <span className="text-primary">{label}</span>
              <span className="h-px w-6 bg-gradient-to-l from-primary/60 to-primary/20" />
            </motion.p>
            <motion.h1
              className="display-lg mt-6 text-white text-balance leading-[1.08]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-lg mx-auto text-base leading-relaxed text-white/45"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="mt-8 mx-auto h-0.5 w-16 rounded-full bg-gradient-to-r from-primary/60 to-accent/60"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
