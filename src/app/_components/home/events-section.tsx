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
          label="Upcoming Events"
          title="Mark your calendar for school activities."
          description="Stay informed about parent-teacher meetings, sports days, cultural events, and academic milestones."
          action={
            <Link href="/academic-calendar" className="btn btn-outline btn-arrow group">
              View Full Calendar
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          }
        />

        <div className="mt-14 lg:mt-20">
          {events.slice(0, 3).map((event, index) => (
            <Reveal key={event.title} delay={index * 0.05}>
              <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-8 sm:gap-12">
                <div className="flex w-20 flex-col items-start sm:w-24">
                  <span className="font-display text-4xl font-semibold leading-none tracking-tight text-ink sm:text-5xl">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-light">
                    {event.date.split(" ")[1]} · {event.month}
                  </span>
                </div>
                <div>
                  <h3 className="heading-lg text-ink">{event.title}</h3>
                  <p className="mt-1 text-sm text-muted">{event.venue}</p>
                </div>
                <ArrowUpRight
                  size={24}
                  className="hidden text-light transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink sm:block"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
