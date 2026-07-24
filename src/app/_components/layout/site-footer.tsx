import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight, GraduationCap } from "lucide-react";
import { navigation, school } from "../../_data/site-content";

export default function SiteFooter() {
  return (
    <footer className="bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 section-pad relative">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                <GraduationCap size={20} className="text-white" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                {school.name}
              </span>
            </Link>
            <p className="mt-2 text-xs uppercase tracking-wider text-stone font-medium">
              {school.motto}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone">
              A forward-looking school in Pokhara helping young people learn
              with purpose, grow with confidence, and contribute with care.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </span>
                <span className="text-sm text-white">{school.location}</span>
              </div>
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </span>
                <span className="text-sm text-white group-hover:text-stone transition-colors duration-150">
                  {school.phone}
                </span>
              </a>
              <a
                href={`mailto:${school.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </span>
                <span className="text-sm text-white group-hover:text-stone transition-colors duration-150">
                  {school.email}
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {[
                ["Admissions", "/admissions"],
                ["Contact Us", "/contact"],
                ["School Notices", "/notices"],
                ["School Life", "/school-life"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone hover:text-white transition-colors duration-150"
                  >
                    {label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone">
              School Info
            </h3>
            <ul className="mt-6 space-y-5">
              <li>
                <span className="text-xs text-line uppercase tracking-wider font-medium">Established</span>
                <p className="text-base text-white font-semibold mt-0.5">{school.founded}</p>
              </li>
              <li>
                <span className="text-xs text-line uppercase tracking-wider font-medium">Curriculum</span>
                <p className="text-base text-white font-semibold mt-0.5">NEB Curriculum</p>
              </li>
              <li>
                <span className="text-xs text-line uppercase tracking-wider font-medium">Age Range</span>
                <p className="text-base text-white font-semibold mt-0.5">{school.ages}</p>
              </li>
              <li>
                <span className="text-xs text-line uppercase tracking-wider font-medium">School Hours</span>
                <p className="text-base text-white font-semibold mt-0.5">{school.hours}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col gap-4 py-6 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-150">
              Terms of Use
            </Link>
            <Link href="/safeguarding" className="hover:text-white transition-colors duration-150">
              Safeguarding
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors duration-150">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
