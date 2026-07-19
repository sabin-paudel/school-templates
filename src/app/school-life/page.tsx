import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Music2, Sparkles, Trophy, Users } from "lucide-react";
import PageHero from "../_components/page-hero";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: "School Life | Aatreya Academy",
  description:
    "Discover clubs, sports, arts and student life at Aatreya Academy.",
};
export default function SchoolLifePage() {
  const items = [
    [
      Trophy,
      "Sport",
      "Team games, athletics and movement build fitness, resilience and belonging.",
    ],
    [
      Music2,
      "Creative arts",
      "Music, drawing, craft and performance give students room to express ideas.",
    ],
    [
      Sparkles,
      "Clubs",
      "Robotics, debate, environment and service clubs let interests become capabilities.",
    ],
    [
      Users,
      "Leadership",
      "Assemblies, house activities and student councils make responsibility real.",
    ],
  ];
  return (
    <>
      <PageHero
        eyebrow="School life"
        title="A place to participate, create and belong."
        description="Some of the most important lessons happen beyond a timetable. Students find their interests, their people and their voice here."
        image={nepaliSchoolImages.schoolJourney}
        imageAlt="Students on their way to school in Lalitpur, Nepal"
      />
      <section className="section bg-paper">
        <div className="section-shell grid gap-6 sm:grid-cols-2">
          {items.map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof Trophy;
            return (
              <article
                key={title as string}
                className="border border-line p-8 lg:p-10"
              >
                <ItemIcon className="text-gold-dark" size={30} />
                <h2 className="mt-7 font-serif text-3xl text-forest">
                  {title as string}
                </h2>
                <p className="mt-4 max-w-lg leading-7 text-muted">
                  {text as string}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-forest py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-gold-light">See school life</p>
            <h2 className="mt-4 font-serif text-4xl">
              A community best seen in pictures.
            </h2>
          </div>
          <Link href="/gallery" className="button button-gold">
            Open gallery <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
