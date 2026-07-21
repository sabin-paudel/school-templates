import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import Reveal from "../_components/ui/reveal";
import { school, values } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `About | ${school.name}`,
  description: `Learn about ${school.name}'s purpose, values, and educational approach.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        label="About"
        title="Rooted in Nepal. Ready for the world."
        description="We are a purposeful learning community in Pokhara where academic ambition and genuine care belong together."
        image={nepaliSchoolImages.students}
        imageAlt="Students and a teacher outside a school in Nepal"
      />

      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="label">Our Story</p>
              <h2 className="heading-section mt-4 text-navy">
                A school where every learner is known.
              </h2>
              <div className="prose-body mt-6 space-y-4 text-sm">
                <p>
                  Aatreya Academy began in {school.founded} with a clear idea:
                  children do their best work when expectations are high,
                  relationships are strong, and learning connects to real life.
                </p>
                <p>
                  Today, our community brings together families and educators
                  from across Gandaki Province. We honour Nepali identity while
                  giving students the knowledge, communication skills, and
                  confidence to participate anywhere in the world.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={nepaliSchoolImages.villageStudents}
                  alt="Nepali students standing together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-snow">
        <div className="container-main">
          <Reveal>
            <p className="label">What Guides Us</p>
            <h2 className="heading-section mt-4 text-navy">
              Values made visible every day.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-0">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-[200px_1fr] sm:gap-12">
                  <h3 className="font-serif text-2xl text-navy">
                    {value.title}
                  </h3>
                  <p className="prose-body text-sm">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/contact" className="btn btn-primary mt-10">
            Visit our campus <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
