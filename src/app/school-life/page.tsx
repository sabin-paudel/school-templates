import type { Metadata } from "next";
import Image from "next/image";
import { Dumbbell, Palette, Cpu, Users } from "lucide-react";
import PageHero from "../_components/ui/page-hero";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { school, studentLife } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `School Life | ${school.name}`,
  description: `Discover clubs, sports, arts, and student life at ${school.name}.`,
};

const activityIcons = [Dumbbell, Palette, Cpu, Users];

const activities = [
  {
    title: "Sport",
    description:
      "Team games, athletics, and movement build fitness, resilience, and belonging.",
  },
  {
    title: "Creative Arts",
    description:
      "Music, drawing, craft, and performance give students room to express ideas.",
  },
  {
    title: "Clubs",
    description:
      "Robotics, debate, environment, and service clubs let interests become capabilities.",
  },
  {
    title: "Leadership",
    description:
      "Assemblies, house activities, and student councils make responsibility real.",
  },
];

const iconColors = [
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
];

export default function SchoolLifePage() {
  return (
    <>
      <PageHero
        label="School Life"
        title="A place to participate, create, and belong."
        description="Some of the most important lessons happen beyond a timetable. Students find their interests, their people, and their voice here."
      />

      <section className="section-pad bg-warm">
        <div className="container">
          <Reveal>
            <p className="label">Activities</p>
            <h2 className="heading-md mt-4 text-ink">
              Every student finds their place here.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {activities.map((item, index) => {
              const Icon = activityIcons[index];
              const colorClass = iconColors[index];
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="card flex flex-col items-start gap-5 p-8 h-full">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-full ${colorClass}`}
                    >
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="heading-md text-ink">{item.title}</h3>
                      <p className="text-body mt-3">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <Reveal>
            <p className="label">In Pictures</p>
            <h2 className="heading-md mt-4 text-ink">
              Life beyond the classroom.
            </h2>
          </Reveal>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
            <div className="-mx-4 flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-4 scrollbar-none sm:mx-0 sm:px-0">
              {studentLife.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="w-[85vw] shrink-0 snap-start sm:w-[420px]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 85vw, 420px"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 heading-md text-ink">{item.title}</p>
                    <p className="text-body mt-2">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        label="See School Life"
        title="A community best seen in pictures."
        href="/gallery"
        buttonText="Open gallery"
      />
    </>
  );
}
