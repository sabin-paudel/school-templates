import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import CtaSection from "../_components/ui/cta-section";
import Counter from "../_components/ui/counter";
import Reveal from "../_components/ui/reveal";
import { Sidebar } from "../_components/layout/sidebar";
import { school, values, stats, principal, teachers } from "../_data/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${school.name}'s story, values, principal's message, and teaching staff in Pokhara.`,
};

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
          <div className="content-sidebar">
            <div>
              <SectionHeading
                align="left"
                label="Our Story"
                title="A school where every learner is known."
              />
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-ink">
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
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "National curriculum with global outlook",
                  "Experienced, dedicated faculty",
                  "Strong partnership with families",
                  "Safe and inclusive campus",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-success" />
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-primary mt-9 group">
                Visit Our Campus
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <Sidebar />
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
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.07}>
                <div className="card h-full p-8 text-center">
                  <h3 className="wp-title mt-4 text-2xl">{value.title}</h3>
                  <p className="text-body mt-3 text-sm">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal" className="section-pad scroll-mt-24 bg-primary-darker text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label !text-accent">Principal&rsquo;s Message</p>
            <h2 className="display-md mt-3 text-balance text-white">
              A word from our leadership.
            </h2>
            <blockquote className="mt-8">
              <p className="font-display text-xl italic leading-relaxed text-white/85 lg:text-2xl">
                &ldquo;{principal.message}&rdquo;
              </p>
            </blockquote>
            <div className="mt-9 flex items-center justify-center gap-4">
              <div className="text-left">
                <p className="text-lg font-bold text-white">{principal.name}</p>
                <p className="text-sm text-accent">{principal.title} · {principal.degree}</p>
              </div>
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
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, i) => (
              <Reveal key={teacher.name} delay={i * 0.05}>
                <article className="card group flex h-full items-start gap-5 p-6">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-primary-light transition-colors group-hover:border-accent img-frame">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-primary">
                      {teacher.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-bold uppercase tracking-widest text-accent-dark">
                      {teacher.role}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-primary">
                      {teacher.subject}
                    </p>
                    <p className="text-body mt-2 text-sm leading-relaxed">{teacher.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-line bg-warm py-14">
        <div className="container grid grid-cols-2 gap-y-10 lg:grid-cols-4">
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
