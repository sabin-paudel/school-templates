import { achievements } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function AchievementsSection() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Achievements"
            title="A record of excellence across academics, sport, and community."
            light
          />
        </Reveal>

        <div className="mt-12 divide-y divide-white/10">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:gap-8">
                <p className="font-serif text-2xl text-accent-bright">{item.year}</p>
                <div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-light">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
