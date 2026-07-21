import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navigation, school } from "../../_data/site-content";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-main section-pad">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="font-serif text-2xl font-medium">
              {school.name}
            </Link>
            <p className="mt-1 text-xs uppercase tracking-wider text-slate-light">
              {school.motto}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-light">
              A forward-looking school in Pokhara helping young people learn with
              purpose, grow with confidence, and contribute with care.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-light">
              <p className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-bright" />
                {school.location}
              </p>
              <p>
                <a
                  href={`tel:${school.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Phone size={16} className="text-accent-bright" />
                  {school.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${school.email}`}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Mail size={16} className="text-accent-bright" />
                  {school.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-light">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-light transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-light">
              Admissions
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                ["How to apply", "/admissions"],
                ["Book a campus tour", "/contact"],
                ["School notices", "/notices"],
                ["Contact the school", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm text-slate-light transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight size={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-3 py-5 text-xs text-slate-light sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white">
              Safeguarding
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
