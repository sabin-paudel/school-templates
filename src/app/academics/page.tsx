import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import PageHero from "../_components/ui/page-hero";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { programs, facilities, school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Academics | ${school.name}`,
  description: "Explore academic programs from Early Years through Grade 10.",
};

const stageIcons = [Sparkles, BookOpen, GraduationCap];
const stageColors = [
  "border-primary/20 bg-primary/5",
  "border-accent/20 bg-accent/5",
  "border-emerald-400/20 bg-emerald-50",
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        label="Academics"
        title="Learning with depth, purpose, and discipline."
        description="Our programme follows Nepal's national curriculum and enriches it with practical inquiry, communication, creativity, and digital fluency."
      />

      {/* Learning journey */}
      <section className="section-pad bg-warm">
        <div className="container">
          <Reveal className="text-center">
            <p className="label">The Learning Journey</p>
            <h2 className="heading-md mt-4 text-ink">
              Three stages. One continuous path.
            </h2>
            <p className="text-body mt-4 mx-auto max-w-xl text-sm">
              From first steps in the classroom to confident readiness for
              national examinations, every stage builds on the last.
            </p>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-line hidden lg:block" />
            {programs.map((item, index) => {
              const Icon = stageIcons[index];
              const colorClass = stageColors[index];
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={item.id} delay={index * 0.1}>
                  <div
                    className={`relative flex flex-col lg:flex-row items-center gap-8 pb-16 last:pb-0 ${isLeft ? "" : "lg:flex-row-reverse"}`}
                  >
                    <div className="hidden lg:block w-[calc(50%-2rem)]">
                      {isLeft ? (
                        <div className={`rounded-2xl border p-6 ${colorClass}`}>
                          <p className="text-xs font-bold uppercase tracking-widest text-primary">
                            Stage {item.stage}
                          </p>
                          <h3 className="heading-lg mt-2 text-ink">
                            {item.title}
                          </h3>
                          <p className="text-body mt-3 text-sm">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white shadow-md">
                      <Icon size={20} className="text-primary" />
                    </div>

                    <div className="lg:w-[calc(50%-2rem)]">
                      {isLeft ? (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line lg:hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`rounded-2xl border p-6 ${colorClass}`}>
                          <p className="text-xs font-bold uppercase tracking-widest text-primary">
                            Stage {item.stage}
                          </p>
                          <h3 className="heading-lg mt-2 text-ink">
                            {item.title}
                          </h3>
                          <p className="text-body mt-3 text-sm">
                            {item.description}
                          </p>
                        </div>
                      )}
                      <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {item.ages}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-pad bg-white">
        <div className="container">
          <Reveal className="text-center">
            <p className="label">Our Campus</p>
            <h2 className="heading-md mt-4 text-ink">
              Spaces designed for learning.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {facilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group relative overflow-hidden rounded-2xl border border-line transition-shadow duration-200 hover:shadow-lg">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        label="A Balanced Curriculum"
        title="Knowledge, skills, and character."
        href="/admissions"
        buttonText="Apply to Aatreya Academy"
      />
    </>
  );
}
