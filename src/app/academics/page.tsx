import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Languages,
  Palette,
} from "lucide-react";
import PageHero from "../_components/page-hero";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: "Academics | Aatreya Academy",
  description: "Explore academic programs from Early Years through Grade 10.",
};
const stages = [
  {
    stage: "Early Years",
    years: "Ages 3–5",
    text: "Play-rich learning develops language, independence and a confident relationship with school.",
    image: nepaliSchoolImages.students,
  },
  {
    stage: "Primary School",
    years: "Grades 1–5",
    text: "Strong literacy and numeracy foundations expand through inquiry, projects, arts and practical science.",
    image: nepaliSchoolImages.classroom,
  },
  {
    stage: "Secondary School",
    years: "Grades 6–10",
    text: "Subject depth, careful guidance and real responsibility prepare students for examinations and life beyond school.",
    image: nepaliSchoolImages.schoolGroup,
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic programs"
        title="Learning with depth, purpose and joy."
        description="Our program follows Nepal's national curriculum and enriches it with practical inquiry, communication, creativity and digital fluency."
        image={nepaliSchoolImages.classroom}
        imageAlt="Students learning in a classroom in Nepal"
      />
      <section className="section bg-paper">
        <div className="section-shell grid gap-8 lg:grid-cols-3">
          {stages.map((item) => (
            <article key={item.stage} className="border border-line">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="eyebrow text-gold-dark">{item.years}</p>
                <h2 className="mt-4 font-serif text-3xl text-forest">
                  {item.stage}
                </h2>
                <p className="mt-4 leading-7 text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-cream">
        <div className="section-shell">
          <p className="eyebrow text-gold-dark">A balanced curriculum</p>
          <h2 className="section-title mt-5">
            Knowledge, skills and character.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [BookOpen, "Languages & humanities"],
              [FlaskConical, "Science & technology"],
              [Palette, "Arts & expression"],
              [Languages, "Nepali & global outlook"],
            ].map(([Icon, title]) => {
              const SubjectIcon = Icon as typeof BookOpen;
              return (
                <div
                  key={title as string}
                  className="border-t-2 border-gold pt-6"
                >
                  <SubjectIcon className="text-forest" />
                  <h3 className="mt-5 font-serif text-xl text-forest">
                    {title as string}
                  </h3>
                </div>
              );
            })}
          </div>
          <Link href="/admissions" className="button button-dark mt-12">
            Apply to Aatreya <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
