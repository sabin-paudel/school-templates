import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notices, school } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function NoticeBoard() {
  return (
    <section className="section-pad bg-warm">
      <div className="container grid gap-12 lg:grid-cols-[1.9fr_1fr] lg:gap-16">
        {/* Notice list */}
        <div>
          <SectionHeading
            align="left"
            label="Notice Board"
            title="Important announcements."
            action={
              <Link href="/notices" className="btn btn-outline group">
                All Notices
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            }
          />

          <div className="mt-10 space-y-4">
            {notices.slice(0, 4).map((notice, i) => (
              <Reveal key={notice.title} delay={i * 0.05}>
                <article
                  className={`card flex gap-5 p-5 ${
                    notice.pinned ? "border-l-4 border-l-accent" : ""
                  }`}
                >
                  <div className="hidden h-full w-14 shrink-0 flex-col items-center justify-center rounded-md bg-primary py-3 text-center text-white sm:flex">
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                      Notice
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {notice.pinned && (
                        <span className="rounded bg-accent px-2 py-0.5 font-bold uppercase tracking-wider text-white">
                          Pinned
                        </span>
                      )}
                      <span className="rounded-full border border-line bg-warm px-2.5 py-0.5 font-semibold text-primary">
                        {notice.category}
                      </span>
                      <span className="font-medium text-light">{notice.date}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold leading-snug text-ink">
                      {notice.title}
                    </h3>
                    <p className="text-body mt-1.5 text-sm leading-relaxed">{notice.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Office widget */}
        <aside className="space-y-6">
          <Reveal>
            <div className="wp-widget p-6">
              <h3 className="wp-title text-xl">School Office</h3>
              <div className="mt-2 h-0.5 w-10 bg-accent" />
              <ul className="mt-6 space-y-4 text-sm">
                <li className="text-muted">{school.hours}</li>
                <li className="text-muted">{school.location}</li>
                <li className="text-muted">PDF archive available on request</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-lg bg-primary p-6 text-white">
              <h3 className="wp-title text-xl !text-white">Admissions Open</h3>
              <p className="mt-2 text-sm text-white/75">
                {school.admissionNote}
              </p>
              <Link href="/admissions" className="btn btn-accent mt-5 w-full">
                Apply Online Now
              </Link>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
