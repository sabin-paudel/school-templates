import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import CtaSection from "../_components/ui/cta-section";
import Counter from "../_components/ui/counter";
import Reveal from "../_components/ui/reveal";
import { school, values, stats, principal, teachers } from "../_data/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${school.name}'s story, values, principal's message, and teaching staff in Pokhara.`,
};

const storyPoints = [
  "National curriculum with global outlook",
  "Experienced, dedicated faculty",
  "Strong partnership with families",
  "Safe and inclusive campus",
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        breadcrumb="About Us"
        title="Rooted in Nepal. Ready for the world."
        description="We are a purposeful learning community in Pokhara where academic ambition and genuine care belong together."
      />

      {/* Our Story */}
      <section id="story" className="section-pad scroll-mt-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <SectionHeading
              align="left"
              label="Our Story"
              title="A school where every learner is known."
            />
            <div className="mt-8 space-y-4">
                <p className="drop-cap font-display text-xl font-medium leading-relaxed text-ink">
                  {school.name} began in {school.founded} with a clear idea:
                  children do their best work when expectations are high,
                  relationships are strong, and learning connects to real life.
                </p>
                <p className="text-body text-sm">
                  Today, our community brings together families and educators from
                  across Gandaki Province. We honour Nepali identity while giving
                  students the knowledge, communication skills, and confidence to
                  participate anywhere in the world.
                </p>
                <p className="text-body text-sm">
                  Our curriculum follows Nepal&rsquo;s national framework and
                  enriches it with inquiry-based learning, digital literacy, the
                  arts, and a global outlook — so students leave ready to lead.
                </p>
              </div>
              <ul className="mt-10 grid sm:grid-cols-2 sm:gap-x-10">
                {storyPoints.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4 border-t border-line py-4">
                    <span className="text-xs font-semibold tracking-[0.14em] text-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary btn-arrow mt-10 group">
                Visit Our Campus
                <ArrowUpRight size={17} className="btn-arrow-icon" />
              </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-warm">
        <div className="container">
          <SectionHeading
            label="What Guides Us"
            title="Values made visible every day."
            description="Three simple commitments shape every lesson, every relationship, and every decision at Aatreya Academy."
          />
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07}>
                <div className="h-full border-t-2 border-ink pt-7">
                  <p className="font-display text-5xl font-semibold leading-none text-line">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="heading-lg mt-6 text-ink">{value.title}</h3>
                  <p className="text-body mt-3 text-sm">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal" className="scroll-mt-24 bg-charcoal py-20 text-white lg:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-sm overflow-hidden lg:ml-auto">
              <Image
                src={principal.image}
                alt={principal.name}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
          </Reveal>
          <div>
            <p className="label mb-5 !text-white/50">Principal&rsquo;s Message</p>
            <h2 className="display-md text-white">A word from our leadership.</h2>
            <blockquote className="mt-8">
              <p className="pullquote border-l-white text-white/90">
                &ldquo;{principal.message}&rdquo;
              </p>
            </blockquote>
            <div className="mt-9 border-t border-white/15 pt-6">
              <p className="font-display text-xl font-semibold text-white">
                {principal.name}
              </p>
              <p className="mt-1 text-sm text-white/60">
                {principal.title} · {principal.degree}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers & Staff */}
      <section id="teachers" className="section-pad scroll-mt-24 bg-white">
        <div className="container">
          <SectionHeading
            label="Teachers & Staff"
            title="Meet the people who make Aatreya special."
            description="Our educators bring deep subject knowledge, warm relationships, and a shared commitment to every child."
          />
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, i) => (
              <Reveal key={teacher.name} delay={i * 0.05}>
                <article className="group flex h-full flex-col">
                  <div className="relative aspect-[4/4.4] overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-5 border-t border-line pt-4">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {teacher.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {teacher.role}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink/70">
                      {teacher.subject}
                    </p>
                    <p className="text-body mt-3 text-sm leading-relaxed">
                      {teacher.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-line bg-warm py-16">
        <div className="container grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      <CtaSection
        label="Visit Us"
        title="Experience our campus firsthand."
        description="Tour the school, meet our educators, and see everyday learning in action."
        primaryHref="/contact"
        primaryText="Schedule a Visit"
        secondaryHref="/admissions"
        secondaryText="Apply for Admission"
      />
    </>
  );
}
