"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "School life", href: "/school-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-11 items-center justify-center bg-forest text-gold-light">
            <BookOpen size={23} strokeWidth={1.8} />
          </span>
          <span>
            <span className="block font-serif text-xl leading-none tracking-[-0.02em] text-forest">Horizon Academy</span>
            <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-muted">Learn · Lead · Inspire</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-ink/75 transition-colors hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/contact" className="text-sm font-bold text-forest hover:underline">Contact</Link>
          <Link href="/admissions" className="button button-dark min-h-11 px-5">Apply now</Link>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center text-forest lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-7 pt-3 lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-[1344px] flex-col">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-base font-semibold text-ink">
                {item.label}
              </Link>
            ))}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="button button-outline-dark">Contact</Link>
              <Link href="/admissions" onClick={() => setOpen(false)} className="button button-dark">Apply now</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
