import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
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
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map(({ step, icon: Icon, title, text }, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="card relative h-full p-8 text-center">
                  <span className="absolute right-5 top-4 font-display text-5xl font-bold text-primary-light">
                    {step}
                  </span>
                  <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-primary text-white shadow-md">
                    <Icon size={30} />
                  </div>
                  <h3 className="wp-title mt-6 text-2xl">{title}</h3>
                  <p className="text-body mt-3 text-sm">{text}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={22}
                      className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-accent md:block"
                    />
                  )}
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
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-lg text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-3.5 text-sm font-bold">Programme</th>
                  <th className="px-5 py-3.5 text-sm font-bold">Age / Grade</th>
                  <th className="px-5 py-3.5 text-sm font-bold">Intake</th>
                  <th className="px-5 py-3.5 text-sm font-bold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {guideRows.map((row, i) => (
                  <tr
                    key={row.program}
                    className={`border-b border-line ${i % 2 === 0 ? "bg-white" : "bg-white"}`}
                  >
                    <td className="px-5 py-4 font-bold text-ink">{row.program}</td>
                    <td className="px-5 py-4 text-sm text-muted">{row.ages}</td>
                    <td className="px-5 py-4 text-sm text-muted">{row.intake}</td>
                    <td className="px-5 py-4 text-sm text-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {programs.map((p) => (
              <div key={p.id} className="rounded-lg border border-line bg-white p-5">
                <p className="font-bold text-ink">{p.title}</p>
                <p className="mt-1 text-sm text-muted">{p.ages} — {p.highlights[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section-pad bg-white">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <div className="rounded-lg border border-line p-6 sm:p-10">
              <p className="label">Student Application</p>
              <h2 className="wp-title mt-2 text-3xl">Apply for admission</h2>
              <p className="text-body mt-4 text-sm">
                Complete this initial enquiry form. Our admissions office will
                contact you within two working days.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "No application fee for initial enquiry",
                  "Information treated confidentially",
                  "Campus visit available before decision",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <CheckCircle2 size={18} className="shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-line pt-8">
                <AdmissionForm />
              </div>
            </div>
          </Reveal>

          <aside className="space-y-6">
            <Reveal>
              <div className="rounded-lg bg-primary p-7 text-white">
                <h3 className="wp-title text-2xl !text-white">Admissions Office</h3>
                <div className="mt-2 h-0.5 w-10 bg-accent" />
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="mt-1 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">Phone</p>
                      <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                        {school.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="mt-1 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">Email</p>
                      <a href={`mailto:${school.email}`} className="hover:text-accent">
                        {school.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock3 size={16} className="mt-1 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">Hours</p>
                      <p className="text-white/85">{school.hours}</p>
                    </div>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-accent mt-7 w-full">
                  Book a Campus Visit
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="wp-widget p-7">
                <h3 className="wp-title text-2xl">Scholarships</h3>
                <div className="mt-2 h-0.5 w-10 bg-accent" />
                <p className="text-body mt-4 text-sm">
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
          <div className="mt-10">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group mt-4 cursor-pointer overflow-hidden rounded-lg border border-line bg-white transition-colors open:border-primary/30">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 text-sm font-bold text-ink">
                    {faq.question}
                    <span className="shrink-0 text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="border-t border-line px-6 pb-5 pt-4">
                    <p className="text-body text-sm">{faq.answer}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-body text-sm">
              Still have questions?{" "}
              <Link href="/contact" className="font-bold text-primary underline-offset-4 hover:underline">
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
        secondaryHref="/notices"
        secondaryText="View Notices"
      />
    </>
  );
}
