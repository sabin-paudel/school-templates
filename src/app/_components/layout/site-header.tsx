"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navigation, school } from "../../_data/site-content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-navy-deep text-white lg:block">
        <div className="container-main flex h-9 items-center justify-between text-xs">
          <p className="text-slate-light">{school.tagline}</p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${school.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Phone size={12} />
              {school.phone}
            </a>
            <Link href="/admissions" className="font-medium hover:text-white">
              Admissions 2026–27 Open
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-white">
        <div className="container-main flex h-[68px] items-center justify-between">
          <Link
            href="/"
            className="group flex items-baseline gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="font-serif text-xl font-medium tracking-tight text-navy">
              {school.name}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-slate sm:inline">
              Pokhara
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-slate transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn btn-secondary min-h-10 px-4 text-[13px]">
              Contact
            </Link>
            <Link href="/admissions" className="btn btn-primary min-h-10 px-4 text-[13px]">
              Apply Now
            </Link>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-white px-4 py-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-sm font-medium text-navy"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-secondary text-[13px]"
              >
                Contact
              </Link>
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="btn btn-primary text-[13px]"
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
