import Link from "next/link";
import { ArrowUpRight, BookOpen, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      ["About Aatreya", "/about"],
      ["Academic programs", "/academics"],
      ["Student life", "/school-life"],
      ["Gallery", "/gallery"],
    ],
  },
  {
    title: "Admissions",
    links: [
      ["How to apply", "/admissions"],
      ["Book a campus tour", "/contact"],
      ["School notices", "/notices"],
      ["Contact the school", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.85fr_1.1fr] lg:gap-16 lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex size-11 items-center justify-center bg-gold text-forest-dark">
              <BookOpen size={23} strokeWidth={1.8} />
            </span>
            <span>
              <span className="block font-serif text-xl leading-none">
                Aatreya Academy
              </span>
              <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                Learn · Lead · Inspire
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
            A forward-looking school in Pokhara helping young people learn with
            purpose, grow with confidence and contribute with care.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
              {group.title}
            </h2>
            <ul className="mt-6 space-y-3.5">
              {group.links.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
            Get in touch
          </h2>
          <ul className="mt-6 space-y-5 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-light" />
              <span>
                Lakeside Road, Pokhara 33700
                <br />
                Gandaki, Nepal
              </span>
            </li>
            <li>
              <Link
                href="tel:+97761555555"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone size={18} className="text-gold-light" />
                +977 61 555555
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@horizonacademy.edu.np"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail size={18} className="text-gold-light" />
                info@aatreya.edu.np
              </Link>
            </li>
          </ul>
          <div className="mt-7 flex gap-5 text-sm font-bold">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 hover:text-gold-light"
            >
              Gallery <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/notices"
              className="inline-flex items-center gap-1.5 hover:text-gold-light"
            >
              Notices <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Aatreya Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
            <Link href="/contact">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
