import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, CalendarDays } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { Sidebar } from "../_components/layout/sidebar";
import { programs, events, school } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Academics",
  description: `Explore academic programs from Early Years through Grade 10 at ${school.name}.`,
};

export default function AcademicsPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Academics"
        title="Learning with depth, purpose, and discipline."
        description="Our programme follows Nepal's national curriculum and enriches it with practical inquiry, communication, creativity, and digital fluency."
      />

      {/* Programs */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="content-sidebar">
            <div>
              <SectionHeading
                label="The Learning Journey"
                title="Three stages. One continuous path."
                description="From first steps in the classroom to confident readiness for national examinations, every stage builds on the last."
              />

              <div className="mt-14 space-y-20">
                {programs.map((program, index) => (
                  <Reveal key={program.id}>
                    <article
                      id={program.id}
                      className="scroll-mt-24"
                    >
                      <p className="label">{program.stage} · {program.ages}</p>
                      <h2 className="display-md mt-2">{program.title}</h2>
                      <p className="text-body mt-4">{program.description}</p>

                      <h3 className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink">
                        <BookOpen size={16} className="text-primary" aria-hidden />
                        Curriculum Highlights
                      </h3>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {program.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-muted">
                            <CheckCircle2 size={15} className="shrink-0 text-success" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-ink">
                        Key Subjects
                      </h3>
                      <div className="mt-3 overflow-hidden rounded-lg border border-line">
                        {program.learning.map((row, i) => (
                          <div
                            key={row.subject}
                            className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                              i % 2 === 0 ? "bg-warm" : "bg-white"
                            }`}
                          >
                            <span className="font-medium text-ink">{row.subject}</span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                              {row.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      {/* Academic calendar */}
      <section className="section-pad bg-warm">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Academic Calendar"
              title="Key dates on the school calendar."
              description="Stay up to date with assessments, sports days, cultural programmes, and the start of the new academic session."
            />
            <Link href="/notices" className="btn btn-outline mt-8 group">
              View Notices &amp; Calendar
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.05}>
                <div className="flex items-center gap-5 rounded-lg border border-line bg-white p-5">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-primary text-white">
                    <p className="text-lg font-bold leading-none">{event.date.split(" ")[0]}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {event.month}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{event.title}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
                      <CalendarDays size={13} aria-hidden />
                      {event.venue}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeading
            label="Our Campus"
            title="Spaces designed for learning."
            description="Purpose-built laboratories, libraries, sports grounds, and performance spaces that bring the curriculum to life."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Science & Tech Labs", desc: "Modern laboratories equipped for hands-on science and technology learning." },
              { title: "Library & Learning Commons", desc: "A quiet space for research, reading, and collaborative study." },
              { title: "Sports & Recreation", desc: "Outdoor and indoor facilities for physical education and team sports." },
            ].map((facility, i) => (
              <Reveal key={facility.title} delay={i * 0.06}>
                <Link href="/facilities" className="group block">
                  <div className="card h-full p-6 transition-colors group-hover:border-primary">
                    <h3 className="heading-md text-ink transition-colors group-hover:text-primary">
                      {facility.title}
                    </h3>
                    <p className="text-body mt-2 text-sm">{facility.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        label="A Balanced Curriculum"
        title="Knowledge, skills, and character."
        description="Give your child an education that prepares them for examinations and for life."
        primaryHref="/admissions"
        primaryText="Apply to Aatreya Academy"
        secondaryHref="/facilities"
        secondaryText="Explore Facilities"
      />
    </>
  );
}
