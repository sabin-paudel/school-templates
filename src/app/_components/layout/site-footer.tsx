import Link from "next/link";
import { Mail, MapPin, Phone, GraduationCap } from "lucide-react";
import { navigation, school } from "../../_data/site-content";

export default function SiteFooter() {
  return (
    <footer className="bg-ink relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />

      <div className="container section-pad relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex items-center justify-center size-10 rounded-xl bg-primary">
                <GraduationCap size={20} className="text-white" />
              </span>
              <span className="text-lg font-bold text-white">{school.name}</span>
            </Link>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/50">{school.motto}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              A forward-looking school in Pokhara helping young people learn with purpose, grow with confidence, and contribute with care.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Pages</h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-sm text-white/60 hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/40" />
                <span className="text-sm text-white/60">{school.location}</span>
              </li>
              <li>
                <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                  <Phone size={15} className="shrink-0 text-white/40" />
                  {school.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${school.email}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                  <Mail size={15} className="shrink-0 text-white/40" />
                  {school.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {school.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
