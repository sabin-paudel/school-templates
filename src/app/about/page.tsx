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

      {/* ---------- our story ---------- */}
      <section className="section-pad relative bg-warm">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Since {school.founded}
              </span>
              <h2 className="heading-md mt-4 font-serif text-ink">
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

            {/* framed image with an attached caption plaque, matching the homepage about section */}
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/10">
                <Image
                  src={nepaliSchoolImages.villageStudents}
                  alt="Nepali students standing together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-x border-b border-ink/10 bg-ink px-6 py-4">
                <span className="text-sm font-semibold text-white">
                  A growing community of learners
                </span>
                <span className="font-serif text-lg text-primary">700+</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="section-pad relative bg-white">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label">What Guides Us</p>
            <h2 className="heading-md mt-4 font-serif text-ink">
              Values made visible every day.
            </h2>
          </Reveal>
          <div className="mt-12 border-t border-line">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="grid gap-4 border-b border-line py-8 sm:grid-cols-[200px_1fr] sm:gap-12">
                  <h3 className="font-serif text-xl font-medium text-ink">
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

      {/* ---------- visit cta ---------- */}
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
              Visit Us
            </p>
            <h2 className="heading-md mt-3 font-serif text-white sm:text-2xl">
              Experience our campus firsthand.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn bg-white text-ink hover:bg-white/90 shadow-lg rounded-xl"
          >
            Schedule a visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
