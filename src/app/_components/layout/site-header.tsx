"use client";

import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { navigation, school } from "../../_data/site-content";
import { motion, AnimatePresence } from "motion/react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <GraduationCap size={18} />
          </div>
          <span className="text-lg font-bold text-ink">{school.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted hover:text-primary hover:bg-primary-light transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
          <div className="w-px h-5 bg-line mx-2" />
          <Link
            href="/admissions"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg text-ink hover:bg-primary-light transition-colors md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 right-0 border-t border-line bg-white px-4 pb-4 pt-2 shadow-lg md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-primary-light hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-line my-2" />
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white text-center hover:bg-primary-hover transition-colors"
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
