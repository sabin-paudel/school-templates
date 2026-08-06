"use client";

import Link from "next/link";
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { navigation, school } from "../../_data/site-content";

function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label={`${school.name} home`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent-dark/40 bg-accent text-white shadow-sm">
        <GraduationCap size={24} />
      </span>
      <span className="whitespace-nowrap text-lg font-bold text-ink">
        {school.name}
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white shadow-sm">
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navigation.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={
                    item.children ? openMenu === item.label : undefined
                  }
                  className={`flex items-center gap-1 whitespace-nowrap px-3 py-2.5 text-sm font-semibold transition-colors xl:px-4 ${
                    openMenu === item.label
                      ? "text-primary"
                      : "text-ink hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openMenu === item.label
                          ? "rotate-180 text-accent"
                          : "text-light"
                      }`}
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={`absolute left-0 top-full pt-2 ${
                      openMenu === item.label ? "block" : "hidden"
                    }`}
                  >
                    <ul className="w-60 rounded-lg border border-line bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block border-l-2 border-transparent px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:bg-primary-light hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/admissions" className="btn btn-accent text-white">
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition-colors hover:bg-primary-light lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <ul className="container py-3">
            {navigation.map((item) => (
              <li
                key={item.label}
                className="border-b border-line last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-3.5 text-sm font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={mobileSub === item.label}
                      onClick={() =>
                        setMobileSub(
                          mobileSub === item.label ? null : item.label,
                        )
                      }
                      className="p-3 text-light"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileSub === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileSub === item.label && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block border-l-2 border-line py-2.5 pl-4 text-sm font-medium text-muted hover:border-accent hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/admissions"
                onClick={() => setMobileOpen(false)}
                className="btn btn-accent w-full"
              >
                Apply Now — Admissions Open
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
