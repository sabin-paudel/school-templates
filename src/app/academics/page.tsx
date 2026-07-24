import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Languages, Palette } from "lucide-react";
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

      <section className="section-pad bg-warm">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-0">
          {programs.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 py-12 ${index === 0 ? "" : "border-t border-line"}`}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <p className="label">{item.ages}</p>
                  <h2 className="heading-md mt-3 text-ink">
                    {item.title}
                  </h2>
                  <p className="text-body mt-4 text-sm">{item.description}</p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-light text-primary text-xs font-bold">
                          {index + 1}
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg hidden lg:flex">
                    <span className="text-2xl font-bold text-white">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              A Balanced Curriculum
            </p>
            <h2 className="mt-4 heading-md">
              Knowledge, skills, and character.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="border-t border-white/15 pt-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/8">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/admissions" className="inline-flex items-center gap-2 mt-12 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-md hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200">
            Apply to {school.name} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
