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
        <div className="container mx-auto grid w-full max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
          {/* ---------- notices, read as a board rather than stacked cards ---------- */}
          <div>
            <div className="mb-4">
              <p className="label">Announcements</p>
              <h2 className="heading-md mt-2 font-serif text-ink">
                Latest notices
              </h2>
            </div>
            <div className="border-t border-line">
              {notices.map((notice, index) => (
                <Reveal key={notice.title} delay={index * 0.05}>
                  <article
                    className={`border-b border-line py-7 ${
                      notice.pinned ? "border-l-2 border-l-primary pl-5" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                      <span className="text-primary">{notice.category}</span>
                      <span className="h-1 w-1 rounded-full bg-ink/20" />
                      <span className="font-medium text-ink-light">
                        {notice.date}
                      </span>
                      {notice.pinned && (
                        <span className="flex items-center gap-1 text-ink-light">
                          <Pin size={11} /> Pinned
                        </span>
                      )}
                    </div>
                    <h2 className="mt-3 font-serif text-lg text-ink sm:text-xl">
                      {notice.title}
                    </h2>
                    <p className="text-body mt-3 text-sm">{notice.text}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-150 hover:gap-2.5"
                    >
                      Contact school <ArrowRight size={14} />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ---------- notice board sidebar, as a bordered panel rather than a shadow card ---------- */}
          <aside>
            <div className="sticky top-24 border border-ink/10 p-6">
              <div className="flex items-center gap-3">
                <Bell size={18} className="text-primary" />
                <div>
                  <h2 className="font-serif text-lg text-ink">Notice board</h2>
                  <p className="text-xs text-ink-light">School office</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                For urgent questions or printed copies, contact the school
                office.
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
              <Link
                href="/contact"
                className="btn btn-primary mt-6 w-full text-[13px]"
              >
                Contact office
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.045) 43px, rgba(255,255,255,0.045) 44px)",
          }}
        />
        <div className="container relative mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="border-l border-white/15 pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Stay Updated
            </p>
            <h2 className="heading-md mt-3 font-serif text-white sm:text-2xl">
              Important updates delivered to your inbox.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
          >
            Subscribe to notices <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
