"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, school } from "../../_data/site-content";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons";

function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3"
      aria-label={`${school.name} home`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-charcoal font-display text-[15px] font-bold tracking-tight text-white">
        AA
      </span>
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-ink">
          {school.name}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.26em] text-light">
          {school.city}
        </span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-line bg-white transition-shadow duration-500 ${
          scrolled && !mobileOpen ? "shadow-md shadow-ink/5" : ""
        }`}
      >
        {/* Main bar */}
        <div className="container flex h-[68px] items-center justify-between gap-8 lg:h-[76px]">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`group relative inline-block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        active ? "text-ink" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-charcoal transition-transform duration-300 ease-out group-hover:scale-x-100"
                        style={active ? { transform: "scaleX(1)" } : undefined}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/admissions" className="btn btn-primary btn-sm">
              Apply Now
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition-colors hover:bg-warm lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-out lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto pt-[120px]">
          <nav aria-label="Mobile">
            <ul className="container">
              {navigation.map((item, i) => (
                <li key={item.label} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-light">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl font-semibold tracking-tight text-ink">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-light transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + socials */}
          <div className="container mt-8 space-y-4 pb-12">
            <p className="label">Contact</p>
            <div className="grid gap-3 text-sm">
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 font-medium text-ink"
              >
                <Phone size={15} className="text-light" aria-hidden />
                {school.phone}
              </a>
              <a
                href={`mailto:${school.email}`}
                className="flex items-center gap-3 font-medium text-ink"
              >
                <Mail size={15} className="text-light" aria-hidden />
                {school.email}
              </a>
              <span className="flex items-center gap-3 text-muted">
                <MapPin size={15} className="text-light" aria-hidden />
                {school.location}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  href: school.social.facebook,
                  label: "Facebook",
                  Icon: FacebookIcon,
                },
                {
                  href: school.social.instagram,
                  label: "Instagram",
                  Icon: InstagramIcon,
                },
                {
                  href: school.social.youtube,
                  label: "YouTube",
                  Icon: YoutubeIcon,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <Link
              href="/admissions"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary w-full"
            >
              Apply Now — Admissions Open {school.admissionSession}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
