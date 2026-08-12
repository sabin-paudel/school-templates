import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { achievements } from "../../_data/site-content";
import Reveal from "../ui/reveal";

export default function AchievementsSection() {
  return (
    <section className="section-pad bg-charcoal text-white">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label mb-5 !text-white/45">Recognition</p>
            <h2 className="display-lg text-white">Proud moments, earned together.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 lg:pb-3 lg:text-right">
            From science fairs to the football pitch, our students keep reaching
            further each year.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 lg:mt-20 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="group h-full border border-white/10 bg-charcoal p-8 transition-colors duration-500 hover:bg-graphite lg:p-10">
                <p className="font-display text-4xl font-semibold text-white/85 sm:text-5xl">
                  {a.year}
                </p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {a.category}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-white">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {a.detail}
                </p>
                <ArrowUpRight
                  size={18}
                  className="mt-6 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          href="/about"
          className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
        >
          Read more about our journey
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}