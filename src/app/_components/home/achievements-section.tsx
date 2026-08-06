import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { achievements } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function AchievementsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Our Achievements"
          title="A record of excellence across academics, sport, and community."
          action={
            <Link href="/achievements" className="btn btn-outline group">
              Explore All Achievements
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, i) => (
              <Reveal key={achievement.title} delay={i * 0.07}>
                <article className="card h-full border-t-4 border-t-accent p-6 text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    {achievement.year}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-light">
                    {achievement.category}
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-snug text-ink">
                    {achievement.title}
                  </h3>
                  <p className="text-body mt-2 text-sm">{achievement.detail}</p>
                </article>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
