import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function EventsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Upcoming Events"
          title="Mark your calendar for school activities."
          description="Stay informed about parent-teacher meetings, sports days, cultural events, and academic milestones."
          action={
            <Link href="/events" className="btn btn-outline group">
              View Full Calendar
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          }
        />

        <div className="mt-12 flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
          {events.slice(0, 3).map((event, index) => (
            <Reveal key={event.title} delay={index * 0.05} className="w-[320px] md:w-auto shrink-0 snap-start h-full flex">
              <div className="card flex items-start gap-5 p-6 w-full h-full">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-white">
                  <span className="font-display text-xl font-bold leading-none">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {event.date.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-dark">
                    <Calendar size={13} />
                    {event.month}
                  </div>
                  <h3 className="wp-title mt-1.5 text-lg">
                    {event.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                    <MapPin size={13} className="text-primary" />
                    {event.venue}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
