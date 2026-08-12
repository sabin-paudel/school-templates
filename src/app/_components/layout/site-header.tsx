"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, school } from "../../_data/site-content";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons";

const leftLinks = navigation.filter((item) =>
  ["About", "Academics", "School Life"].includes(item.label),
);
const rightLinks = navigation.filter((item) =>
  ["News & Events", "Admissions", "Contact"].includes(item.label),
);

function Logo({ light }: { light: boolean }) {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-3"
      aria-label={`${school.name} home`}
    >
      <span
        className={`relative flex h-10 w-10 rotate-45 items-center justify-center border transition-colors duration-500 lg:h-11 lg:w-11 ${
          light ? "border-white/40" : "border-charcoal/30"
        }`}
      >
        <span
          className={`-rotate-45 font-display text-[13px] font-bold tracking-tight transition-colors duration-500 lg:text-[15px] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          AA
        </span>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate font-display text-base font-semibold tracking-tight transition-colors duration-500 lg:text-lg ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {school.name}
        </span>
        <span
          className={`mt-1 flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] transition-colors duration-500 lg:text-[10px] ${
            light ? "text-white/55" : "text-light"
          }`}
        >
          <span
            className={`h-1 w-1 rotate-45 ${
              light ? "bg-white/70" : "bg-charcoal/70"
            }`}
            aria-hidden
          />
          {school.city}
        </span>
      </span>
    </Link>
  );
}

function NavLinks({
  links,
  light,
}: {
  links: typeof leftLinks;
  light: boolean;
}) {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-1 lg:gap-2">
      {links.map((item) => {
        const active = pathname === item.href;
        return (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`group relative inline-block px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 lg:px-4 lg:text-xs ${
                light
                  ? active
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                  : active
                    ? "text-ink"
                    : "text-ink/60 hover:text-ink"
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 lg:inset-x-4 ${
                  light ? "bg-white" : "bg-charcoal"
                }`}
                style={active ? { transform: "scaleX(1)" } : undefined}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const overHero = pathname === "/" && !scrolled && !mobileOpen;
  const light = overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          light
            ? "border-b border-white/10 bg-transparent"
            : "border-b border-line bg-white/95 shadow-md shadow-ink/5 backdrop-blur"
        }`}
      >
        <div className="container grid h-[72px] grid-cols-[auto_1fr] items-center gap-4 lg:h-[84px] lg:grid-cols-[1fr_auto_1fr]">
          {/* Left nav — About · Academics · School Life */}
          <div className="order-1 hidden items-center justify-start lg:flex">
            <NavLinks links={leftLinks} light={light} />
          </div>

          {/* Logo — left on mobile, center on desktop */}
          <div className="order-2 flex items-center">
            <Logo light={light} />
          </div>

          {/* Right nav — News & Events · Admissions · Contact */}
          <div className="order-3 flex items-center justify-end gap-4">
            <div className="hidden lg:flex">
              <NavLinks links={rightLinks} light={light} />
            </div>

            {/* <Link
              href="/admissions"
              className={`hidden btn btn-sm transition-colors duration-500 lg:inline-flex ${
                light ? "btn-white" : "btn-primary"
              }`}
            >
              Apply Now
              <ArrowUpRight size={15} />
            </Link> */}

            {/* Mobile toggle */}
            <button
              type="button"
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
                light
                  ? "border-white/25 text-white hover:bg-white/10"
                  : "border-line text-ink hover:bg-warm"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-all duration-500 ease-out lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto pt-[120px]">
          <nav aria-label="Mobile" className="container">
            <ul>
              {navigation.map((item, i) => (
                <li
                  key={item.label}
                  className={`border-b border-white/10 transition-all duration-500 ${
                    mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${120 + i * 60}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-white/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl font-semibold tracking-tight text-white">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={22}
                      className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + socials */}
          <div
            className={`container mt-10 space-y-5 pb-12 transition-all delay-500 duration-500 ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="label !text-white/40">Contact</p>
            <div className="grid gap-3 text-sm">
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 font-medium text-white/85"
              >
                <Phone size={15} className="text-white/40" aria-hidden />
                {school.phone}
              </a>
              <a
                href={`mailto:${school.email}`}
                className="flex items-center gap-3 font-medium text-white/85"
              >
                <Mail size={15} className="text-white/40" aria-hidden />
                {school.email}
              </a>
              <span className="flex items-center gap-3 text-white/60">
                <MapPin size={15} className="text-white/40" aria-hidden />
                {school.location}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                { href: school.social.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: school.social.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: school.social.youtube, label: "YouTube", Icon: YoutubeIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/80 transition-colors hover:border-white hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <Link
              href="/admissions"
              onClick={() => setMobileOpen(false)}
              className="btn btn-white w-full"
            >
              Apply Now — Admissions Open {school.admissionSession}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
