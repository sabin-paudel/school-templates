import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { events } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function EventsSection() {
  return (
    <section className="section-pad bg-warm">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Upcoming Events"
            title="Important dates on the school calendar."
            action={
              <Link
                href="/notices"
                className="btn btn-ghost rounded-md text-sm"
              >
                View full calendar <ArrowRight size={16} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.08}>
              <div className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-primary-light group-hover:bg-primary transition-colors duration-300">
                    <p className="text-lg font-bold text-primary group-hover:text-white leading-none transition-colors duration-300">
                      {event.date.split(" ")[0]}
                    </p>
                    <p className="text-[10px] text-primary group-hover:text-white/80 uppercase mt-0.5 font-medium transition-colors duration-300">
                      {event.month}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-ink">
                      {event.title}
                    </h3>
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-ink-light">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="truncate">{event.venue}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
