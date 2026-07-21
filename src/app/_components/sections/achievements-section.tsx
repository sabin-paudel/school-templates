import Image from "next/image";
import { achievements } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";
import Link from "next/link";
export default function AchievementsSection() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Achievements"
            light
            title="A record of excellence across academics, sport, and community."
          />
        </Reveal>

        <div className="mt-20">
          <div className="space-y-16">
            {achievements.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article
                  className={`grid items-center gap-10 ${
                    index % 2 === 0
                      ? "lg:grid-cols-[1fr_1.2fr]"
                      : "lg:grid-cols-[1.2fr_1fr]"
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                    <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-bright">
                      {item.year}
                    </p>

                    <h3 className="mt-3 text-4xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-xl leading-8 text-slate-400">
                      {item.detail}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
                        {item.category}
                      </span>

                      <div className="h-px w-16 bg-accent-bright" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* View More */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/achievements"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-accent-bright hover:bg-accent-bright hover:text-black"
            >
              View All Achievements
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
