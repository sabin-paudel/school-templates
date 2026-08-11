import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import { school, footerQuickLinks, footerProgramLinks } from "../../_data/site-content";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsappIcon } from "./social-icons";

const socials = [
  { href: school.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: school.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: school.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: school.social.whatsapp, label: "WhatsApp", Icon: WhatsappIcon },
];

const footerExtras = [
  { label: "Achievements", href: "/achievements" },
  { label: "School Life", href: "/school-life" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white/65">
      {/* Statement area */}
      <div className="border-b border-white/10">
        <div className="container flex flex-col gap-8 py-16 lg:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="label mb-4 !text-white/45">Pokhara · Nepal · Est. {school.founded}</p>
            <p className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {school.tagline}
            </p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed">
              A forward-looking school in Pokhara helping young people learn with
              purpose, grow with confidence, and contribute with care since{" "}
              {school.founded}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="label !text-white/45">Follow us</p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/80 transition-colors hover:border-white hover:bg-white hover:text-charcoal"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-b border-white/10">
        <div className="container grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Quick links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
              {footerExtras.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic programs */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
              Academic Programs
            </h3>
            <ul className="mt-6 space-y-3">
              {footerProgramLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
              Contact Us
            </h3>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/35" />
                <span className="text-white/70">{school.location}</span>
              </div>
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3.5 transition-colors hover:text-white"
              >
                <Phone size={16} className="shrink-0 text-white/35" />
                <span className="text-white/70">{school.phone}</span>
              </a>
              <a
                href={`mailto:${school.email}`}
                className="flex items-center gap-3.5 transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-white/35" />
                <span className="text-white/70">{school.email}</span>
              </a>
              <div className="flex items-center gap-3.5">
                <Clock3 size={16} className="shrink-0 text-white/35" />
                <span className="text-white/70">{school.hours}</span>
              </div>
            </div>
            <div className="mt-8 max-w-md border border-white/15 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Admissions Open {school.admissionSession}
              </p>
              <p className="mt-2 text-sm text-white/70">{school.admissionNote}</p>
              <Link
                href="/admissions"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-white/70"
              >
                Start an application
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="container flex flex-col gap-3 py-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Safeguarding
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
