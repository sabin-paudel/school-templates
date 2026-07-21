import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { events } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function EventsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Upcoming Events"
            title="Important dates on the school calendar."
          />
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.05}>
              <div className="grid items-center gap-4 py-5 sm:grid-cols-[100px_1fr_auto] sm:gap-8">
                <div className="text-center sm:text-left">
                  <p className="font-serif text-3xl text-navy">{event.date}</p>
                  <p className="text-xs text-slate">{event.month}</p>
                </div>
                <div>
                  <h3 className="font-medium text-navy">{event.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate">
                    <MapPin size={13} />
                    {event.venue}
                  </p>
                </div>
                <Calendar size={18} className="hidden text-slate sm:block" />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate">
          For the full calendar, visit our{" "}
          <Link href="/notices" className="font-medium text-accent hover:underline">
            notices page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
