import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Palette, Cpu, Users } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
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

export default function SchoolLifePage() {
  return (
    <>
      <PageBanner
        label="School Life"
        title="A place to participate, create, and belong."
        description="Some of the most important lessons happen beyond a timetable. Students find their interests, their people, and their voice here."
        image={nepaliSchoolImages.schoolJourney}
        imageAlt="Students on their way to school in Lalitpur, Nepal"
      />

      <section className="section-pad bg-warm relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <p className="label">Activities</p>
            <h2 className="heading-md mt-4 text-ink">
              Every student finds their place here.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {activities.map((item, index) => {
              const Icon = activityIcons[index];
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-start gap-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light group-hover:bg-primary transition-colors duration-300 shrink-0">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="text-body mt-1.5 text-sm">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-light/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <p className="label">In Pictures</p>
            <h2 className="heading-md mt-4 text-ink">
              Life beyond the classroom.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {studentLife.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group relative aspect-3/4 overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              See School Life
            </p>
            <h2 className="mt-3 heading-md text-white sm:text-2xl">
              A community best seen in pictures.
            </h2>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white hover:bg-white/20 px-6 py-3 text-sm font-semibold transition-all duration-200">
            Open gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
