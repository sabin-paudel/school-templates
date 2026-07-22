import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, school } from "../../_data/site-content";

export default function SiteFooter() {
  return (
    <footer className="bg-primary-dark">
      <div className="container-main section-pad">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-lg font-bold tracking-tight text-white">
                {school.name}
              </span>
            </Link>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
              {school.motto}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              A forward-looking school in Pokhara helping young people learn
              with purpose, grow with confidence, and contribute with care.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-start gap-2 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-light" />
                <span>{school.location}</span>
              </div>
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-150"
              >
                <Phone className="w-4 h-4 shrink-0 text-primary-light" />
                {school.phone}
              </a>
              <a
                href={`mailto:${school.email}`}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-150"
              >
                <Mail className="w-4 h-4 shrink-0 text-primary-light" />
                {school.email}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                ["Admissions", "/admissions"],
                ["Contact Us", "/contact"],
                ["School Notices", "/notices"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              School Info
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="text-white/60">Est. {school.founded}</span>
              </li>
              <li>
                <span className="text-white/60">NEB Curriculum</span>
              </li>
              <li>
                <span className="text-white/60">{school.ages}</span>
              </li>
              <li>
                <span className="text-white/60">{school.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-4 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {school.name}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-150"
            >
              Terms of Use
            </Link>
            <Link
              href="/safeguarding"
              className="hover:text-white transition-colors duration-150"
            >
              Safeguarding
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors duration-150"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
