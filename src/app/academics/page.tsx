import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Languages,
  Palette,
  Check,
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

      {/* ---------- programs, alternating sides, framed rather than floating-badged ---------- */}
      <section className="section-pad bg-warm">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {programs.map((item, index) => {
            const stageNum = String(index + 1).padStart(2, "0");
            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <article
                  className={`grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 ${
                    index === 0 ? "" : "border-t border-line"
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-2xl text-primary">
                        {stageNum}
                      </span>
                      <span className="label">{item.ages}</span>
                    </div>
                    <h2 className="heading-md mt-3 font-serif text-ink">
                      {item.title}
                    </h2>
                    <p className="text-body mt-4 text-sm">{item.description}</p>
                    <ul className="mt-6 space-y-3">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-3 text-sm text-ink"
                        >
                          <Check size={15} className="shrink-0 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-ink/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- balanced curriculum pillars ---------- */}
      <section className="section-pad relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.045) 43px, rgba(255,255,255,0.045) 44px)",
          }}
        />
        <div className="container relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              A Balanced Curriculum
            </p>
            <h2 className="heading-md mt-4 font-serif">
              Knowledge, skills, and character.
            </h2>
          </Reveal>

          <div className="mt-12 grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="flex items-center gap-4 py-6 sm:flex-col sm:items-start sm:px-6 sm:py-8">
                  <Icon size={20} className="shrink-0 text-primary" />
                  <h3 className="font-serif text-base sm:mt-4">{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Link
            href="/admissions"
            className="mt-12 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
          >
            Apply to {school.name} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
