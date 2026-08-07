import type { Metadata } from "next";
import { MapPin, Clock } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { Sidebar } from "../_components/layout/sidebar";
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
          <div className="content-sidebar">
            <div>
              <SectionHeading
                align="left"
                label="Calendar 2026"
                title="Upcoming Activities & Dates"
                description="All events take place at our main campus unless stated otherwise."
              />

              <div className="mt-10 space-y-6">
                {events.map((event, index) => (
                  <Reveal key={event.title} delay={index * 0.05}>
                    <div className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6">
                      <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-white">
                          <span className="font-display text-xl font-bold leading-none">{event.date.split(" ")[0]}</span>
                          <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-accent">{event.date.split(" ")[1]}</span>
                        </div>
                        <div>
                          <span className="rounded-full border border-line bg-warm px-2.5 py-0.5 text-xs font-semibold text-primary">
                            {event.month} 2026
                          </span>
                          <h3 className="wp-title mt-2 text-xl">{event.title}</h3>
                          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted">
                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} className="text-primary" />
                              {event.venue}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={14} className="text-primary" />
                              {school.hoursShort}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="btn btn-outline text-xs">Add to Calendar</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Sidebar />
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
