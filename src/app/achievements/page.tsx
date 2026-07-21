import Image from "next/image";
import { achievements } from "../_data/site-content";
import Reveal from "../_components/ui/reveal";

export default function AchievementsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      {/* Hero */}
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-accent-bright">
          Achievements
        </p>

        <h1 className="mt-4 text-5xl font-bold  md:text-7xl text-blue-950">
          Every milestone tells a story.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          A collection of competitions, awards, championships, and milestones
          that reflect our continuous journey of growth and excellence.
        </p>
      </section>

      {/* Divider */}
      <div className="my-20 h-px bg-white/10" />

      {/* Achievements */}
      <section className="space-y-24">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article
              className={`grid items-center gap-14 ${
                index % 2 === 0
                  ? "lg:grid-cols-[1fr_1.2fr]"
                  : "lg:grid-cols-[1.2fr_1fr]"
              }`}
            >
              {/* Image */}
              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="group relative aspect-4/3 overflow-hidden rounded-4xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md">
                    <span className="text-xs uppercase tracking-[0.3em] text-white">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 ? "lg:order-1" : ""}>
                <span className="text-sm uppercase tracking-[0.35em] text-accent-bright">
                  {item.year}
                </span>

                <h2 className="mt-4 text-4xl font-semibold text-shadow-blue-950 md:text-5xl">
                  {item.title}
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                  {item.detail}
                </p>

                <div className="mt-10 flex items-center gap-5">
                  <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
                    {item.category}
                  </span>

                  <div className="h-px w-20 bg-accent-bright" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="mt-32 border-t border-white/10 pt-16 text-center">
        <h3 className="text-3xl font-semibold text-white">
          More milestones are on the way.
        </h3>

        <p className="mt-4 text-slate-400">
          Every achievement motivates us to aim even higher.
        </p>
      </section>
    </main>
  );
}
