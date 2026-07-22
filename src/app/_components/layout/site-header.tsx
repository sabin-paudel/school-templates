"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, school } from "../../_data/site-content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="border-b border-line">
        <div className="container-main flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="flex items-baseline gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="text-lg font-bold tracking-tight text-primary">
              {school.name}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-ink-light sm:inline">
              Pokhara
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-light hover:bg-primary-light hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-light hover:bg-primary-light hover:text-primary transition-colors duration-150"
            >
              Contact
            </Link>
            <Link
              href="/admissions"
              className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors duration-150 shadow-sm"
            >
              Apply Now
            </Link>
          </nav>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-md text-ink hover:bg-primary-light transition-colors duration-150 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-white md:hidden">
          <nav aria-label="Mobile navigation" className="container-main py-4">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-ink-light hover:text-primary transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-ink-light hover:text-primary transition-colors duration-150"
              >
                Contact
              </Link>
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors duration-150 shadow-sm"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
