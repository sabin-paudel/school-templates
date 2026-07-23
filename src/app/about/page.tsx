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

      <section className="section-pad bg-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-light/50 -skew-x-12 origin-top-right hidden lg:block" />
        <div className="container-main relative">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full bg-primary-light px-4 py-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold tracking-wider text-primary">Since {school.founded}</span>
              </div>
              <h2 className="heading-md text-ink">
                A school where every learner is known.
              </h2>
              <div className="text-body mt-6 space-y-4 text-sm">
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
              <div className="relative">
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={nepaliSchoolImages.villageStudents}
                    alt="Nepali students standing together"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary rounded-xl px-5 py-3 shadow-lg hidden lg:block">
                  <p className="text-2xl font-bold text-white">700+</p>
                  <p className="text-xs text-white/70">Students</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-light/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-main relative">
          <Reveal>
            <p className="label">What Guides Us</p>
            <h2 className="heading-md mt-4 text-ink">
              Values made visible every day.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-0">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-[200px_1fr] sm:gap-12">
                  <h3 className="text-xl font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="text-body text-sm">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/contact" className="btn btn-primary mt-10">
            Visit our campus <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-ink py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container-main relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Visit Us
            </p>
            <h2 className="mt-3 heading-md text-white sm:text-2xl">
              Experience our campus firsthand.
            </h2>
          </div>
          <Link href="/contact" className="btn bg-white text-ink hover:bg-white/90 shadow-lg rounded-xl">
            Schedule a visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
