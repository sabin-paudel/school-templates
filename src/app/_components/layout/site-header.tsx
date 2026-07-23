"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, school } from "../../_data/site-content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95  shadow-sm">
      <div className="border-b border-line">
        <div className="container-main flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="flex items-baseline gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="text-lg font-bold tracking-tight text-ink">
              {school.name}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-ink/50 sm:inline">
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 hover:bg-ink/5 hover:text-ink transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 hover:bg-ink/5 hover:text-ink transition-all duration-150"
            >
              Contact
            </Link>
            <Link
              href="/admissions"
              className="ml-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm shadow-primary/20 transition-all duration-200"
            >
              Apply Now
            </Link>
          </nav>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg text-ink hover:bg-ink/5 transition-colors duration-150 md:hidden"
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
                  className="py-3 text-sm font-medium text-ink/70 hover:text-ink transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-ink/70 hover:text-ink transition-colors duration-150"
              >
                Contact
              </Link>
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors duration-150 shadow-sm"
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
