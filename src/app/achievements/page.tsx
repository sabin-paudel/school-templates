import type { Metadata } from "next";
import Image from "next/image";
import { Trophy } from "lucide-react";
import { achievements, school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";
import PageHero from "../_components/ui/page-hero";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";

export const metadata: Metadata = {
  title: `Achievements | ${school.name}`,
  description: `See awards, championships, and milestones at ${school.name}.`,
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        label="Achievements"
        title="Every milestone tells a story."
        description="A collection of competitions, awards, championships, and milestones that reflect our continuous journey of growth and excellence."
      />

      <section className="section-pad bg-warm">
        <div className="container">
          <Reveal>
            <p className="label">Our Milestones</p>
            <h2 className="heading-md mt-4 text-ink">A legacy of excellence</h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-line hidden md:block lg:left-[22px]" />

            {achievements.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="relative mb-16 last:mb-0 md:grid md:grid-cols-[60px_1fr] md:gap-8 lg:grid-cols-[80px_1fr] lg:gap-12">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="relative z-10 flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-warm border-2 border-primary">
                        <Trophy size={14} className="text-primary lg:hidden" />
                        <Trophy
                          size={16}
                          className="text-primary hidden lg:block"
                        />
                      </div>
                    </div>

                    <div
                      className={`flex flex-col gap-6 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                      <div className="lg:w-1/2 flex items-start gap-4">
                        <div className="md:hidden flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-warm border-2 border-primary">
                          <Trophy size={14} className="text-primary" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="label bg-primary/10 text-primary px-3 py-1 rounded-lg">
                            {item.year}
                          </span>
                          <span className="label text-muted bg-white/50 px-3 py-1 rounded-lg">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="lg:w-1/2">
                        <div className="relative overflow-hidden rounded-2xl border border-line">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full object-cover"
                          />
                        </div>
                        <h3 className="heading-md mt-4 text-ink">
                          {item.title}
                        </h3>
                        <p className="text-body mt-2">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        label="Looking Forward"
        title="More milestones are on the way."
        description="Every achievement motivates us to aim even higher."
        href="/about"
        buttonText="Learn more about us"
      />
    </>
  );
}
