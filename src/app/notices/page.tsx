import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, Download, Pin } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import Reveal from "../_components/ui/reveal";
import { notices, school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Notices | ${school.name}`,
  description: `Read current notices, announcements, and important dates from ${school.name}.`,
};

export default function NoticesPage() {
  return (
    <>
      <PageBanner
        label="Notices"
        title="Everything families need to know."
        description="Current announcements, important dates, and practical updates from the school office — all in one place."
        image={nepaliSchoolImages.schoolGroup}
        imageAlt="Students and teachers at a school in Nepal"
      />

      <section className="section-pad bg-warm">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-0">
            <div className="mb-8">
              <p className="label">Announcements</p>
              <h2 className="heading-md mt-2 text-ink">Latest notices</h2>
            </div>
            {notices.map((notice, index) => (
              <Reveal key={notice.title} delay={index * 0.05}>
                <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider">
                    <span className="text-primary">{notice.category}</span>
                    <span className="text-ink-light">{notice.date}</span>
                    {notice.pinned && (
                      <span className="flex items-center gap-1 bg-primary-light px-2 py-0.5 text-primary rounded-lg">
                        <Pin size={11} /> Pinned
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-ink sm:text-xl">
                    {notice.title}
                  </h2>
                  <p className="text-body mt-3 text-sm">{notice.text}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-150"
                  >
                    Contact school <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <aside>
            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light">
                  <Bell size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-ink">Notice board</h2>
                  <p className="text-xs text-ink-light">School office</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-light">
                For urgent questions or printed copies, contact the school office.
              </p>
              <div className="mt-6 space-y-3 border-t border-line pt-6 text-sm text-ink-light">
                <p className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-primary" />
                  Office: Sun&ndash;Fri
                </p>
                <p className="flex items-center gap-2">
                  <Download size={15} className="text-primary" />
                  PDF archive on request
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary mt-6 w-full text-[13px]">
                Contact office
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Stay Updated
            </p>
            <h2 className="mt-3 heading-md text-white sm:text-2xl">
              Important updates delivered to your inbox.
            </h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white hover:bg-white/20 px-6 py-3 text-sm font-semibold transition-all duration-200">
            Subscribe to notices <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
