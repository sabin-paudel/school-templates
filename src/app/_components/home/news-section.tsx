import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news, events } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function NewsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container grid gap-12 lg:grid-cols-[1.9fr_1fr] lg:gap-16">
        {/* Blog preview */}
        <div>
          <SectionHeading
            align="left"
            label="News & Events"
            title="Latest from the school."
            action={
              <Link href="/news" className="btn btn-outline group">
                View All News
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            }
          />

          <div className="mt-10 space-y-8">
            {news.slice(0, 3).map((post, i) => (
              <Reveal key={post.title} delay={i * 0.06}>
                <article className="group grid gap-6 border-b border-line pb-8 last:border-b-0 sm:grid-cols-[240px_1fr]">
                  <div className="relative h-44 overflow-hidden rounded-lg border border-line sm:h-auto sm:min-h-36">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="rounded bg-primary px-2 py-0.5 font-bold uppercase tracking-wider text-white">
                        {post.category}
                      </span>
                      <span className="font-medium text-light">{post.date}</span>
                    </div>
                    <h3 className="heading-md mt-3 leading-snug text-ink transition-colors group-hover:text-primary">
                      <Link href="/news">{post.title}</Link>
                    </h3>
                    <p className="text-body mt-2 text-sm">{post.excerpt}</p>
                    <Link
                      href="/news"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
                    >
                      Read More
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Upcoming events widget */}
        <aside>
          <Reveal>
            <div className="wp-widget p-6">
              <h3 className="wp-title text-xl">Upcoming Events</h3>
              <div className="mt-2 h-0.5 w-10 bg-accent" />
              <ul className="mt-6 space-y-5">
                {events.map((event) => (
                  <li key={event.title} className="flex gap-4">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md border border-line bg-warm">
                      <p className="text-lg font-bold leading-none text-primary">
                        {event.date.split(" ")[0]}
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-light">
                        {event.month}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{event.title}</p>
                      <p className="mt-0.5 text-sm text-muted">{event.venue}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/notices"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
              >
                View Full Calendar
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
