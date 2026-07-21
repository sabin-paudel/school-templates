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
import PageBanner from "../_components/ui/page-banner";
import Reveal from "../_components/ui/reveal";
import { programs, school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Academics | ${school.name}`,
  description: "Explore academic programs from Early Years through Grade 10.",
};

const pillars = [
  { icon: BookOpen, title: "Languages & Humanities" },
  { icon: FlaskConical, title: "Science & Technology" },
  { icon: Palette, title: "Arts & Expression" },
  { icon: Languages, title: "Nepali & Global Outlook" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageBanner
        label="Academics"
        title="Learning with depth, purpose, and discipline."
        description="Our programme follows Nepal's national curriculum and enriches it with practical inquiry, communication, creativity, and digital fluency."
        image={nepaliSchoolImages.classroom}
        imageAlt="Students learning in a classroom in Nepal"
      />

      <section className="section-pad bg-white">
        <div className="container-main space-y-0">
          {programs.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article
                className={`grid items-center gap-8 border-t border-line py-10 lg:grid-cols-2 lg:gap-16 ${index === programs.length - 1 ? "border-b" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="label">{item.ages}</p>
                  <h2 className="heading-section mt-3 text-navy">
                    {item.title}
                  </h2>
                  <p className="prose-body mt-4 text-sm">{item.description}</p>
                  <ul className="mt-5 space-y-2">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-navy"
                      >
                        <span className="size-1 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative aspect-16/10 overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-main">
          <Reveal>
            <p className="label text-accent-bright">A Balanced Curriculum</p>
            <h2 className="mt-4 font-serif text-3xl">
              Knowledge, skills, and character.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="border-t border-white/20 pt-6">
                  <Icon size={22} className="text-accent-bright" />
                  <h3 className="mt-4 font-medium">{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/admissions" className="btn btn-light mt-12">
            Apply to {school.name} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
