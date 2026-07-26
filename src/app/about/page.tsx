import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Target,
  BookOpen,
  Users,
  Quote,
} from "lucide-react";
import PageHero from "../_components/ui/page-hero";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { school, values, stats, principal } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `About | ${school.name}`,
  description: `Learn about ${school.name}'s purpose, values, and educational approach.`,
};

const valueIcons = [Heart, Target, BookOpen, Users];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Rooted in Nepal. Ready for the world."
        description="We are a purposeful learning community in Pokhara where academic ambition and genuine care belong together."
      />

      {/* Stats strip */}
      <section className="relative border-y border-line bg-white">
        <div className="container">
          <div className="grid grid-cols-2 divide-x divide-line md:grid-cols-4">
            {stats.map((stat) => (
              <Reveal key={stat.label} className="py-10 text-center">
                <span className="display-md text-primary">
                  {stat.value}
                  {stat.suffix}
                </span>
                <p className="text-body mt-1 text-xs">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story split */}
      <section className="section-pad bg-warm overflow-hidden">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={nepaliSchoolImages.villageStudents}
                    alt="Nepali students standing together"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">700+</span>
                  <span className="text-sm text-white/70">Students</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="label">Since {school.founded}</span>
              <div className="my-4 h-0.5 w-12 bg-primary" />
              <h2 className="heading-md font-serif text-ink">
                A school where every learner is known.
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-ink">
                  Aatreya Academy began in {school.founded} with a clear idea:
                  children do their best work when expectations are high,
                  relationships are strong, and learning connects to real life.
                </p>
                <p className="text-body text-sm">
                  Today, our community brings together families and educators
                  from across Gandaki Province. We honour Nepali identity while
                  giving students the knowledge, communication skills, and
                  confidence to participate anywhere in the world.
                </p>
              </div>
              <Link href="/contact" className="btn btn-outline mt-8">
                Visit our campus <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principal quote */}
      <section className="section-pad bg-ink">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Quote size={32} className="mx-auto text-primary/40" />
            <blockquote className="mt-6 text-xl leading-relaxed text-white/80 sm:text-2xl font-serif italic">
              &ldquo;{principal.message}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/30">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  {principal.name}
                </p>
                <p className="text-xs text-white/40">{principal.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container">
          <Reveal className="text-center">
            <p className="label">What Guides Us</p>
            <h2 className="heading-md mt-4 font-serif text-ink">
              Values made visible every day.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <Reveal key={value.title} delay={index * 0.06}>
                  <div className="group card p-8 text-center transition-shadow duration-200 hover:shadow-lg">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                      <Icon size={28} />
                    </div>
                    <h3 className="heading-md mt-6 font-serif text-ink">
                      {value.title}
                    </h3>
                    <p className="text-body mt-3 text-sm">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        label="Visit Us"
        title="Experience our campus firsthand."
        href="/contact"
        buttonText="Schedule a visit"
      />
    </>
  );
}
