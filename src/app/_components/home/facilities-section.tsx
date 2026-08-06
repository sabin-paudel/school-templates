import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function FacilitiesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Our Facilities"
          title="Spaces designed for learning."
          description="Purpose-built laboratories, libraries, sports grounds, and performance spaces that bring the curriculum to life."
          action={
            <Link href="/facilities" className="btn btn-outline group">
              Explore Facilities
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          }
        />

        <div className="mt-12 flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
          {facilities.slice(0, 4).map((facility, i) => (
            <Reveal
              key={facility.title}
              delay={i * 0.07}
              className="w-[280px] sm:w-auto shrink-0 snap-start h-full flex"
            >
              <article className="card group h-full w-full flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-primary whitespace-nowrap">
                      {facility.title}
                    </h3>
                    <p className="text-body mt-2 text-sm line-clamp-3">
                      {facility.description}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-1 pt-2 border-t border-line/50">
                    {facility.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-muted"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                          aria-hidden
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
