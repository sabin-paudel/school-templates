import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import Reveal from "../_components/ui/reveal";
import { school, studentLife } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `School Life | ${school.name}`,
  description: `Discover clubs, sports, arts, and student life at ${school.name}.`,
};

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

      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            {activities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="border-l-2 border-accent pl-6">
                  <h2 className="font-serif text-2xl text-navy">
                    {item.title}
                  </h2>
                  <p className="prose-body mt-3 text-sm">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-snow">
        <div className="container-main">
          <Reveal>
            <p className="label">In Pictures</p>
            <h2 className="heading-section mt-4 text-navy">
              Life beyond the classroom.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {studentLife.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group relative aspect-3/4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-navy/80 p-4">
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

      <section className="bg-navy py-14">
        <div className="container-main flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="label text-accent-bright">See School Life</p>
            <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
              A community best seen in pictures.
            </h2>
          </div>
          <Link href="/gallery" className="btn btn-light">
            Open gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
