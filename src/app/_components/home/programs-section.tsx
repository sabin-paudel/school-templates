import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { programs } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function ProgramsSection() {
  const [featured, ...rest] = programs;

  return (
    <section className="section-pad bg-warm">
      <div className="container">
        <SectionHeading
          label="Featured Programs"
          title="A clear path from first questions to bold ambitions."
          description="Three stages. One continuous journey of discovery, from playful first steps to confident readiness for national examinations."
          action={
            <Link href="/academics" className="btn btn-outline btn-arrow group">
              View All Programs
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          }
        />

        {/* Featured program spotlight */}
        <Reveal>
          <div className="relative mt-14 grid overflow-hidden bg-charcoal text-white lg:mt-20 lg:grid-cols-2">
            <div className="relative min-h-[320px] sm:min-h-[420px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent lg:bg-gradient-to-r"
              />
              <span className="absolute left-6 top-6 border border-white/30 bg-charcoal/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                Featured
              </span>
              <span
                aria-hidden
                className="absolute bottom-5 right-6 font-display text-8xl font-semibold leading-none text-white/10"
              >
                {featured.stage}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                {featured.ages}
              </p>
              <h3 className="display-lg mt-3 text-white">{featured.title}</h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
                {featured.description}
              </p>

              <dl className="mt-8 border-t border-white/10">
                {featured.learning.map((row) => (
                  <div
                    key={row.subject}
                    className="flex items-center justify-between gap-6 border-b border-white/10 py-3.5"
                  >
                    <dt className="text-sm font-medium text-white/85">{row.subject}</dt>
                    <dd className="shrink-0 text-xs uppercase tracking-[0.14em] text-white/50">
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-8 flex flex-wrap gap-2">
                {featured.highlights.map((h) => (
                  <li
                    key={h}
                    className="border border-white/20 px-3.5 py-1 text-xs font-medium text-white/75"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href={`/academics#${featured.id}`}
                  className="btn btn-white btn-arrow group"
                >
                  Explore {featured.title}
                  <ArrowUpRight size={16} className="btn-arrow-icon" />
                </Link>
                <Link href="/admissions" className="btn btn-outline-light">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Remaining programs */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((program, i) => (
            <Reveal key={program.id} delay={i * 0.08}>
              <Link
                href={`/academics#${program.id}`}
                className="group flex h-full items-center justify-between gap-6 border border-line bg-white p-7 transition-colors duration-300 hover:border-ink sm:p-9"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-light">
                    {program.ages}
                  </p>
                  <h4 className="heading-lg mt-2 text-ink">{program.title}</h4>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-light transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
