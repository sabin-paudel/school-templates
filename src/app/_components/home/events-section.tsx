import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { events } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function EventsSection() {
  return (
    <section className="section-pad bg-warm">
      <div className="container">
        <SectionHeading
          align="left"
          label="Upcoming Events"
          title="Mark your calendar."
          description="Stay informed about parent-teacher meetings, sports days, cultural events, and academic milestones."
          action={
            <Link
              href="/academic-calendar"
              className="btn btn-outline btn-arrow group"
            >
              View Full Calendar
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          }
        />

        <div className="mt-14 lg:mt-20">
          <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-16">
            {events.map((event, index) => (
              <Reveal key={event.title} delay={index * 0.04}>
                <div className="group flex items-center gap-6 border-b border-line py-8 transition-colors duration-300 hover:bg-white sm:gap-10 sm:px-5">
                  <div className="flex w-24 shrink-0 flex-col items-start">
                    <span className="font-display text-5xl font-semibold leading-none tracking-tight text-ink">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-light">
                      {event.date.split(" ")[1]} · {event.month}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="heading-md text-ink">{event.title}</h3>
                    <p className="mt-1 text-sm text-muted">{event.venue}</p>
                  </div>
                  <ArrowUpRight
                    size={26}
                    className="hidden shrink-0 text-light transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink sm:block"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}