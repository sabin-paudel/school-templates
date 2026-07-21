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

      <section className="section-pad bg-snow">
        <div className="container-main grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-0">
            {notices.map((notice, index) => (
              <Reveal key={notice.title} delay={index * 0.05}>
                <article className="border-t border-line py-7 first:border-t-0">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider">
                    <span className="text-accent">{notice.category}</span>
                    <span className="text-slate-light">{notice.date}</span>
                    {notice.pinned && (
                      <span className="flex items-center gap-1 bg-accent/10 px-2 py-0.5 text-navy">
                        <Pin size={11} /> Pinned
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 font-serif text-xl text-navy sm:text-2xl">
                    {notice.title}
                  </h2>
                  <p className="prose-body mt-3 text-sm">{notice.text}</p>
                  <Link href="/contact" className="link-arrow mt-4">
                    Contact school <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <aside>
            <div className="sticky top-24 border border-line bg-white p-6">
              <Bell size={20} className="text-accent" />
              <h2 className="mt-4 font-serif text-xl text-navy">Notice board</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                For urgent questions or printed copies, contact the school office.
              </p>
              <div className="mt-6 space-y-3 border-t border-line pt-6 text-sm text-slate">
                <p className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-accent" />
                  Office: Sun–Fri
                </p>
                <p className="flex items-center gap-2">
                  <Download size={15} className="text-accent" />
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
    </>
  );
}
