import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Clock3,
  Download,
  MapPin,
  Pin,
} from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { notices, events, school } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Notice Board",
  description: `Read current notices, announcements, and important dates from ${school.name}.`,
};

const categoryStyles: Record<string, string> = {
  Admissions: "bg-black text-white",
  Academic: "bg-neutral-200 text-black",
  Event: "bg-neutral-800 text-white",
  Transport: "bg-neutral-300 text-black",
  Activities: "bg-neutral-100 text-black border border-black",
};

export default function NoticesPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Notice Board"
        title="Everything families need to know."
        description="Current announcements, important dates, and practical updates from the school office — all in one place."
      />

      <section className="section-pad bg-warm">
        <div className="container grid gap-12 lg:grid-cols-[1.9fr_1fr] lg:gap-16">
          {/* Notices */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white">
                  <Bell size={20} />
                </span>
                <div>
                  <p className="label">Announcements</p>
                  <h2 className="wp-title text-3xl">Latest Notices</h2>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 space-y-5">
              {notices.map((notice, index) => (
                <Reveal key={notice.title} delay={index * 0.05}>
                  <article
                    className={`card p-6 ${
                      notice.pinned ? "border-l-4 border-l-accent bg-white" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5 text-xs">
                      {notice.pinned && (
                        <span className="inline-flex items-center gap-1 rounded bg-accent px-2 py-0.5 font-bold uppercase tracking-wider text-white">
                          <Pin size={11} aria-hidden />
                          Pinned
                        </span>
                      )}
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-bold ${
                          categoryStyles[notice.category] ?? "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {notice.category}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium text-light">
                        <CalendarDays size={12} aria-hidden />
                        {notice.date}
                      </span>
                    </div>
                    <h3 className="heading-md mt-3 text-ink">{notice.title}</h3>
                    <p className="text-body mt-2 text-sm leading-relaxed">{notice.text}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
                    >
                      Enquire About This Notice <ArrowRight size={15} />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <Reveal>
              <div className="wp-widget p-6">
                <h3 className="wp-title text-xl">School Office</h3>
                <div className="mt-2 h-0.5 w-10 bg-accent" />
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-muted">
                    <Clock3 size={17} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-light">Office Hours</p>
                      <p className="mt-0.5 font-medium text-ink">{school.hours}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-muted">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-light">Address</p>
                      <p className="mt-0.5 font-medium text-ink">{school.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-muted">
                    <Download size={17} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-light">Documents</p>
                      <p className="mt-0.5 font-medium text-ink">
                        PDF archive available on request from the office.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="wp-widget p-6">
                <h3 className="wp-title text-xl">Upcoming Events</h3>
                <div className="mt-2 h-0.5 w-10 bg-accent" />
                <ul className="mt-6 space-y-4">
                  {events.map((event) => (
                    <li key={event.title} className="flex gap-3">
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-md border border-line bg-warm">
                        <span className="text-base font-bold leading-none text-primary">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="mt-0.5 text-[10px] font-bold uppercase text-light">
                          {event.month}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ink">{event.title}</p>
                        <p className="mt-0.5 text-xs text-muted">{event.venue}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-lg bg-primary p-6 text-white">
                <h3 className="wp-title text-xl !text-white">Quick Links</h3>
                <div className="mt-2 h-0.5 w-10 bg-accent" />
                <ul className="mt-5 space-y-2.5">
                  {[
                    { label: "Latest News", href: "/news" },
                    { label: "Admissions", href: "/admissions" },
                    { label: "School Calendar", href: "/news#upcoming" },
                    { label: "Contact the Office", href: "/contact" },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white"
                      >
                        <ArrowRight size={13} className="text-accent" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaSection
        label="Stay Updated"
        title="Important updates delivered to your inbox."
        primaryHref="/contact"
        primaryText="Subscribe to Notices"
        secondaryHref="/news"
        secondaryText="Read Latest News"
      />
    </>
  );
}
