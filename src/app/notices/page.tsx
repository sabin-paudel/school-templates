import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Download,
  Pin,
  Clock,
  MapPin,
} from "lucide-react";
import PageHero from "../_components/ui/page-hero";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { notices, events, school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Notices | ${school.name}`,
  description: `Read current notices, announcements, and important dates from ${school.name}.`,
};

const categories = [
  "All",
  "Admissions",
  "Academic",
  "Event",
  "Transport",
  "Activities",
];

export default function NoticesPage() {
  return (
    <>
      <PageHero
        label="Notices"
        title="Everything families need to know."
        description="Current announcements, important dates, and practical updates from the school office — all in one place."
      />

      <section className="section-pad bg-warm">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            {/* Main notices */}
            <div>
              <Reveal>
                <p className="label flex items-center gap-2">
                  <Bell size={14} /> Announcements
                </p>
                <h2 className="heading-md mt-2 text-ink">Latest notices</h2>
              </Reveal>

              <div className="mt-10 space-y-5">
                {notices.map((notice, index) => (
                  <Reveal key={notice.title} delay={index * 0.05}>
                    <article
                      className={`card p-6 transition-shadow duration-200 hover:shadow-md ${
                        notice.pinned
                          ? "relative border-l-4 border-l-primary"
                          : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        {notice.pinned && (
                          <span className="flex items-center gap-1 rounded-full bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary">
                            <Pin size={11} /> Pinned
                          </span>
                        )}
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            notice.category === "Admissions"
                              ? "bg-emerald-100 text-emerald-700"
                              : notice.category === "Academic"
                                ? "bg-blue-100 text-blue-700"
                                : notice.category === "Event"
                                  ? "bg-amber-100 text-amber-700"
                                  : notice.category === "Transport"
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {notice.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-ink/20" />
                        <span className="text-xs font-medium text-muted flex items-center gap-1">
                          <CalendarDays size={12} /> {notice.date}
                        </span>
                      </div>
                      <h3 className="heading-md mt-4 text-ink">
                        {notice.title}
                      </h3>
                      <p className="text-body mt-3 text-sm leading-relaxed">
                        {notice.text}
                      </p>
                      <Link
                        href="/contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-150 hover:gap-2.5"
                      >
                        Contact school <ArrowRight size={14} />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Quick info */}
              <Reveal>
                <div className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="text-sm font-semibold text-ink">
                    School Office
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <Clock size={16} className="shrink-0 text-primary" />
                      Sun&ndash;Fri &middot; 8:00 AM&ndash;4:30 PM
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <MapPin size={16} className="shrink-0 text-primary" />
                      Lakeside, Pokhara
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <Download size={16} className="shrink-0 text-primary" />
                      PDF archive on request
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Upcoming events */}
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="text-sm font-semibold text-ink">
                    Upcoming Events
                  </h3>
                  <div className="mt-4 space-y-4">
                    {events.map((event) => (
                      <div key={event.title} className="flex gap-3">
                        <div className="flex w-10 shrink-0 flex-col items-center rounded-lg border border-line bg-warm py-1.5">
                          <span className="text-xs font-bold text-primary">
                            {event.date.split(" ")[0]}
                          </span>
                          <span className="text-[10px] font-medium text-muted">
                            {event.date.split(" ")[1]}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink">
                            {event.title}
                          </p>
                          <p className="text-xs text-muted">{event.venue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection
        label="Stay Updated"
        title="Important updates delivered to your inbox."
        href="/contact"
        buttonText="Subscribe to notices"
      />
    </>
  );
}
