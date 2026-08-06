import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { school, footerQuickLinks, footerProgramLinks } from "../../_data/site-content";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsappIcon } from "./social-icons";

export default function SiteFooter() {
  return (
    <footer className="bg-primary-darker text-white/70">
      <div className="border-b border-white/10">
        <div className="container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Widget 1 — About */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent-dark/40 bg-accent text-white">
                <GraduationCap size={24} />
              </span>
              <span className="whitespace-nowrap text-lg font-bold text-white">
                {school.name}
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed">
              A forward-looking school in Pokhara helping young people learn with
              purpose, grow with confidence, and contribute with care since{" "}
              {school.founded}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { href: school.social.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: school.social.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: school.social.youtube, label: "YouTube", Icon: YoutubeIcon },
                { href: school.social.whatsapp, label: "WhatsApp", Icon: WhatsappIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 transition-colors hover:border-accent hover:bg-accent hover:text-primary-darker"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Widget 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <div className="mt-4 h-0.5 w-10 bg-accent" />
            <ul className="mt-5 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
                  >
                    <ArrowRight size={12} className="text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/achievements"
                  className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
                >
                  <ArrowRight size={12} className="text-accent" />
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/school-life"
                  className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
                >
                  <ArrowRight size={12} className="text-accent" />
                  School Life
                </Link>
              </li>
            </ul>
          </div>

          {/* Widget 3 — Academic Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Academic Programs
            </h3>
            <div className="mt-4 h-0.5 w-10 bg-accent" />
            <ul className="mt-5 space-y-2.5">
              {footerProgramLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
                  >
                    <ArrowRight size={12} className="text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Widget 4 — Contact + Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <div className="mt-4 h-0.5 w-10 bg-accent" />
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-accent" />
                {school.location}
              </li>
              <li>
                <a
                  href={`tel:${school.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  {school.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${school.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail size={16} className="shrink-0 text-accent" />
                  {school.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 size={16} className="shrink-0 text-accent" />
                {school.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
