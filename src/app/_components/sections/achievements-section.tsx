import { Trophy } from "lucide-react";
import { achievements } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function AchievementsSection() {
  return (
    <section className="section-pad bg-stone">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Achievements"
            title="A record of excellence across academics, sport, and community."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {achievements.slice(0, 4).map((item, index) => (
            <Reveal key={item.title} delay={0.08 * (index + 1)}>
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.year}
                    </span>
                    <span className="text-stone">&middot;</span>
                    <span className="text-xs text-ink-light uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <Trophy size={16} className="text-primary/30 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="text-body text-sm mt-1">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
