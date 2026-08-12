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
    <footer className="bg-near-black text-white/65">
      {/* Statement area */}
      <div className="border-b border-white/10">
        <div className="container grid gap-10 py-16 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:py-20">
          <div>
            <p className="label mb-6 !text-white/40">
              Pokhara · Nepal · Est. {school.founded}
            </p>
            <p className="font-display text-5xl font-semibold leading-[1.0] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {school.tagline}
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/55">
              A forward-looking school in Pokhara helping young people learn with
              purpose, grow with confidence, and contribute with care since{" "}
              {school.founded}.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <p className="label !text-white/40">Follow us</p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/75 transition-all duration-300 hover:border-white hover:bg-white hover:text-near-black"
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
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
              Explore
            </h3>
            <ul className="mt-7 space-y-3.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="link-underline">{link.label}</span>
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
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="link-underline">{link.label}</span>
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
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
              Academic Programs
            </h3>
            <ul className="mt-7 space-y-3.5">
              {footerProgramLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="link-underline">{link.label}</span>
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
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
              Contact Us
            </h3>
            <div className="mt-7 space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/30" />
                <span className="text-white/65">{school.location}</span>
              </div>
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3.5 transition-colors hover:text-white"
              >
                <Phone size={16} className="shrink-0 text-white/30" />
                <span className="text-white/65">{school.phone}</span>
              </a>
              <a
                href={`mailto:${school.email}`}
                className="flex items-center gap-3.5 transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-white/30" />
                <span className="text-white/65">{school.email}</span>
              </a>
              <div className="flex items-center gap-3.5">
                <Clock3 size={16} className="shrink-0 text-white/30" />
                <span className="text-white/65">{school.hours}</span>
              </div>
            </div>

            <div className="mt-8 max-w-md border border-white/12 p-6 transition-colors duration-300 hover:border-white/30">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                Admissions Open {school.admissionSession}
              </p>
              <p className="mt-3 text-sm text-white/65">{school.admissionNote}</p>
              <Link
                href="/admissions"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-white/75"
              >
                Start an application
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="container flex flex-col gap-3 py-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
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
