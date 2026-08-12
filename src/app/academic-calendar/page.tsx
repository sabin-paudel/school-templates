import type { Metadata } from "next";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { events, school } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Academic Calendar",
  description: `Upcoming school events, calendar and activities at ${school.name} in Pokhara.`,
};

export default function AcademicCalendarPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Academic Calendar"
        title="School Calendar & Upcoming Events"
        description="Stay connected with parent meetings, sports competitions, cultural programmes, and term dates."
      />

      <section className="section-pad bg-white">
        <div className="container">
          <div>
            <SectionHeading
                align="left"
                label="Calendar 2026"
                title="Upcoming Activities & Dates"
                description="All events take place at our main campus unless stated otherwise."
              />

              <div className="mt-12">
                {events.map((event, index) => (
                  <Reveal key={event.title} delay={index * 0.04}>
                    <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-line py-6 transition-colors duration-300 hover:bg-warm sm:gap-10 sm:px-5">
                      <div className="flex w-20 flex-col items-start sm:w-24">
                        <span className="font-display text-4xl font-semibold leading-none text-ink">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-light">
                          {event.date.split(" ")[1]} {event.month}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="heading-md text-ink">{event.title}</h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-light" />
                            {event.venue}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={13} className="text-light" />
                            {school.hoursShort}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="hidden items-center gap-1.5 border border-line px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-ink sm:inline-flex"
                      >
                        Add to Calendar
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
      </section>

      <CtaSection
        label="Join Us"
        title="Have questions about our schedule?"
        description="Contact our school office or speak with the administration team."
        primaryHref="/contact"
        primaryText="Contact Office"
        secondaryHref="/admissions"
        secondaryText="Admissions Info"
      />
    </>
  );
}
