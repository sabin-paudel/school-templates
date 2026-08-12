import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import Reveal from "../_components/ui/reveal";
import { programs, events, facilities, school } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Academics",
  description: `Explore academic programs from Early Years through Grade 10 at ${school.name}.`,
};

const facilityPreviews = [
  { title: "Science & Tech Labs", desc: "Modern laboratories equipped for hands-on science and technology learning.", image: facilities[0].image },
  { title: "Library & Learning Commons", desc: "A quiet space for research, reading, and collaborative study.", image: facilities[2].image },
  { title: "Sports & Recreation", desc: "Outdoor and indoor facilities for physical education and team sports.", image: facilities[3].image },
];

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
          <div>
            <SectionHeading
                label="The Learning Journey"
                title="Three stages. One continuous path."
                description="From first steps in the classroom to confident readiness for national examinations, every stage builds on the last."
              />

              <div className="mt-16 space-y-24">
                {programs.map((program, i) => {
                  const right = i % 2 === 1;
                  return (
                    <Reveal key={program.id}>
                      <article id={program.id} className="scroll-mt-28">
                        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                          <div className={right ? "lg:order-2" : ""}>
                            <div className="group kinetic relative aspect-[4/3] overflow-hidden">
                              <Image
                                src={program.image}
                                alt={program.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="img-duotone object-cover"
                              />
                            </div>
                          </div>

                          <div className={right ? "lg:order-1" : ""}>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light">
                              {program.stage} · {program.ages}
                            </p>
                            <h2 className="display-md mt-3 text-ink">{program.title}</h2>
                            <p className="text-body mt-5">{program.description}</p>

                            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                              Curriculum Highlights
                            </h3>
                            <ul className="mt-4 grid gap-0 sm:grid-cols-2 sm:gap-x-8">
                              {program.highlights.map((h) => (
                                <li key={h} className="flex items-baseline gap-3 border-t border-line py-3 text-sm font-medium text-ink">
                                  <span className="h-px w-4 shrink-0 bg-charcoal/40 self-center" aria-hidden />
                                  {h}
                                </li>
                              ))}
                            </ul>

                            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                              Key Subjects
                            </h3>
                            <div className="mt-4 border-t border-line">
                              {program.learning.map((row) => (
                                <div
                                  key={row.subject}
                                  className="flex items-center justify-between border-b border-line py-3.5"
                                >
                                  <span className="text-sm font-medium text-ink">{row.subject}</span>
                                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-light">
                                    {row.hours}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
      </section>

      {/* Academic calendar */}
      <section className="section-pad bg-warm">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              label="Academic Calendar"
              title="Key dates on the school calendar."
              description="Stay up to date with assessments, sports days, cultural programmes, and the start of the new academic session."
            />
            <Link href="/academic-calendar" className="btn btn-outline btn-arrow mt-9 group">
              View Academic Calendar
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          </div>
          <div>
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.04}>
                <div className="flex items-center gap-6 border-b border-line py-5 sm:gap-8">
                  <div className="flex w-20 shrink-0 flex-col items-start">
                    <p className="font-display text-3xl font-semibold leading-none text-ink">
                      {event.date.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-light">
                      {event.date.split(" ")[1]} · {event.month}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg font-semibold tracking-tight text-ink">
                      {event.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
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
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {facilityPreviews.map((facility, i) => (
              <Reveal key={facility.title} delay={i * 0.06}>
                <Link href="/facilities" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="img-duotone object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4 border-t border-line pt-4">
                    <div>
                      <h3 className="heading-md text-ink">{facility.title}</h3>
                      <p className="text-body mt-2 text-sm">{facility.desc}</p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-light transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
