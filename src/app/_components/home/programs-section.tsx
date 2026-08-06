import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function ProgramsSection() {
  return (
    <section className="section-pad bg-warm">
      <div className="container">
        <SectionHeading
          label="Featured Programs"
          title="A clear path from first questions to bold ambitions."
          description="Three stages. One continuous journey of discovery, from playful first steps to confident readiness for national examinations."
          action={
            <Link href="/academics" className="btn btn-outline group">
              View All Programs
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <div className="mt-12 flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {programs.map((program, i) => (
            <Reveal key={program.id} delay={i * 0.08} className="w-[300px] md:w-auto shrink-0 snap-start h-full flex">
              <article className="card group h-full flex flex-col w-full">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 rounded bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary shadow-sm">
                    {program.ages}
                  </span>
                  <span className="absolute left-4 top-4 font-display text-5xl font-bold text-white/25">
                    {program.stage}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 justify-between">
                  <div>
                    <h3 className="heading-md text-ink transition-colors group-hover:text-primary">
                      {program.title}
                    </h3>
                    <p className="text-body mt-2 text-sm line-clamp-3">{program.description}</p>
                    <ul className="mt-4 space-y-2">
                      {program.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/academics#${program.id}`}
                    className="mt-6 inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-primary transition-all hover:gap-2.5"
                  >
                    Explore {program.title}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
