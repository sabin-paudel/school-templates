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

      {/* ---------- activities, as a ledger list rather than four icon cards ---------- */}
      <section className="section-pad bg-warm">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label">Activities</p>
            <h2 className="heading-md mt-4 font-serif text-ink">
              Every student finds their place here.
            </h2>
          </Reveal>

          <div className="mt-10 border-t border-line">
            {activities.map((item, index) => {
              const Icon = activityIcons[index];
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="flex items-start gap-5 border-b border-line py-7">
                    <Icon size={20} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-serif text-lg text-ink">
                        {item.title}
                      </h3>
                      <p className="text-body mt-1.5 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- in pictures — same filmstrip treatment as the homepage, for consistency ---------- */}
      <section className="section-pad bg-white">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label">In Pictures</p>
            <h2 className="heading-md mt-4 font-serif text-ink">
              Life beyond the classroom.
            </h2>
          </Reveal>

          <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 scrollbar-none sm:mx-0 sm:px-0">
            {studentLife.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="w-[78vw] shrink-0 snap-start sm:w-[300px]">
                  <div className="relative aspect-[4/5] overflow-hidden border border-ink/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 78vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 font-serif text-base text-ink">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- see school life ---------- */}
      <section className="relative overflow-hidden bg-ink py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.045) 43px, rgba(255,255,255,0.045) 44px)",
          }}
        />
        <div className="container relative mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="border-l border-white/15 pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              See School Life
            </p>
            <h2 className="heading-md mt-3 font-serif text-white sm:text-2xl">
              A community best seen in pictures.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
          >
            Open gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
