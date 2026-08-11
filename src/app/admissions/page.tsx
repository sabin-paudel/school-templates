import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  CalendarCheck,
  Handshake,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";
import { AdmissionForm } from "../_components/forms";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import CtaSection from "../_components/ui/cta-section";
import Accordion from "../_components/ui/accordion";
import Reveal from "../_components/ui/reveal";
import { school, faqs, programs } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Apply for student admission to ${school.name} in Pokhara for the ${school.admissionSession} session.`,
};

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Submit the Form",
    text: "Tell us about your child and the grade you are considering via the application form below.",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Visit the School",
    text: "Tour the campus and speak with our academic team. Visits run Sunday through Friday.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Meet & Confirm",
    text: "A short student interaction is followed by an admission decision and orientation.",
  },
];

const guideRows = [
  { program: "Early Years", ages: "Ages 3–5", intake: "Playgroup · Nursery · Kindergarten", notes: "Play-based curriculum" },
  { program: "Primary School", ages: "Grades 1–5", intake: "New Grade 1 entries welcomed", notes: "Foundational literacy & numeracy" },
  { program: "Secondary School", ages: "Grades 6–10", intake: "Enrolment in all grades", notes: "NEB examination preparation" },
];

const assurancePoints = [
  "No application fee for initial enquiry",
  "Information treated confidentially",
  "Campus visit available before decision",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Admissions"
        title={`Start your child's Aatreya journey.`}
        description="Our admissions team makes the process clear and personal, from your first enquiry through the first day of school."
      />

      {/* Steps */}
      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeading
            label="How It Works"
            title="Three simple steps to enrolment."
            description={`Admissions for the ${school.admissionSession} session are now open for Early Years through Grade 9.`}
          />
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map(({ step, icon: Icon, title, text }, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="h-full border-t-2 border-ink pt-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-semibold leading-none text-line">
                      {step}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center border border-line text-ink">
                      <Icon size={20} />
                    </span>
                  </div>
                  <h3 className="heading-lg mt-6 text-ink">{title}</h3>
                  <p className="text-body mt-3 text-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Age & grade guide */}
      <section className="section-pad bg-warm">
        <div className="container">
          <SectionHeading
            label="Admission Guide"
            title="Find the right stage for your child."
            description="Aatreya Academy welcomes students from age 3 through Grade 10 across three programmes."
          />
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b-2 border-ink text-[11px] uppercase tracking-[0.18em] text-muted">
                  <th className="py-4 pr-6 font-semibold">Programme</th>
                  <th className="py-4 pr-6 font-semibold">Age / Grade</th>
                  <th className="py-4 pr-6 font-semibold">Intake</th>
                  <th className="py-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {guideRows.map((row) => (
                  <tr key={row.program} className="border-b border-line">
                    <td className="py-5 pr-6 font-semibold text-ink">{row.program}</td>
                    <td className="py-5 pr-6 text-sm text-muted">{row.ages}</td>
                    <td className="py-5 pr-6 text-sm text-muted">{row.intake}</td>
                    <td className="py-5 text-sm text-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {programs.map((p) => (
              <div key={p.id} className="border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-light">
                  {p.ages}
                </p>
                <p className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                  {p.title}
                </p>
                <p className="mt-1 text-sm text-muted">{p.highlights[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section-pad bg-white">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <div className="border border-line bg-white p-7 sm:p-12">
              <p className="label-dark">Student Application</p>
              <h2 className="wp-title mt-3 text-3xl">Apply for admission</h2>
              <p className="text-body mt-4 text-sm">
                Complete this initial enquiry form. Our admissions office will
                contact you within two working days.
              </p>
              <ul className="mt-6 space-y-2.5">
                {assurancePoints.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <CheckCircle2 size={17} className="shrink-0 text-ink/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9 border-t border-line pt-9">
                <AdmissionForm />
              </div>
            </div>
          </Reveal>

          <aside className="space-y-8">
            <Reveal>
              <div className="bg-charcoal p-8 text-white">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                  Admissions Office
                </h3>
                <div className="mt-3 h-px w-10 bg-white/30" />
                <ul className="mt-7 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0 text-white/40" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                        Phone
                      </p>
                      <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="mt-0.5 block text-white/85 transition-colors hover:text-white">
                        {school.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 shrink-0 text-white/40" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                        Email
                      </p>
                      <a href={`mailto:${school.email}`} className="mt-0.5 block text-white/85 transition-colors hover:text-white">
                        {school.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock3 size={16} className="mt-0.5 shrink-0 text-white/40" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                        Hours
                      </p>
                      <p className="mt-0.5 text-white/85">{school.hours}</p>
                    </div>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-white mt-9 w-full">
                  Book a Campus Visit
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-line bg-white p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Scholarships
                </h3>
                <div className="mt-3 h-px w-10 bg-charcoal/40" />
                <p className="text-body mt-5 text-sm">
                  Merit-based and need-based scholarships are available for
                  qualifying students. Contact the admissions office for current
                  criteria and deadlines.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-warm">
        <div className="container max-w-3xl">
          <SectionHeading
            label="Common Questions"
            title="Everything you need to know."
          />
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
          <Reveal className="mt-12 text-center">
            <p className="text-body text-sm">
              Still have questions?{" "}
              <Link href="/contact" className="font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-ink/70">
                Contact our admissions team
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        label="Questions?"
        title="We are here to help with your application."
        primaryHref="/contact"
        primaryText="Contact Admissions"
        secondaryHref="/news"
        secondaryText="Latest News"
      />
    </>
  );
}
