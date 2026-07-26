import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  CalendarCheck,
  Handshake,
  HelpCircle,
} from "lucide-react";
import { AdmissionForm } from "../_components/forms";
import CtaSection from "../_components/ui/cta-section";
import PageHero from "../_components/ui/page-hero";
import Reveal from "../_components/ui/reveal";
import { school, faqs } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Admissions | ${school.name}`,
  description: `Apply for student admission to ${school.name} in Pokhara.`,
};

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Submit the form",
    text: "Tell us about your child and the grade you are considering.",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Visit the school",
    text: "Tour the campus and speak with our academic team.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Meet and confirm",
    text: "A short student interaction is followed by an admission decision.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        label="Admissions"
        title="Start your child's Aatreya journey."
        description="Our admissions team makes the process clear and personal, from your first enquiry through the first day of school."
      />

      {/* Steps */}
      <section className="section-pad bg-white">
        <div className="container">
          <Reveal className="text-center">
            <p className="label">How It Works</p>
            <h2 className="heading-md mt-4 text-ink">
              Three simple steps to enrolment.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map(({ step, icon: Icon, title, text }, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="relative text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <Icon size={32} />
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Step {step}
                    </span>
                    <h3 className="heading-lg mt-2 text-ink">{title}</h3>
                    <p className="text-body mt-3 text-sm max-w-xs mx-auto">
                      {text}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-4 text-primary/20">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ split */}
      <section className="section-pad bg-warm relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-light/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="container relative grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="label">Student Application</p>
            <h2 className="heading-md mt-4 text-ink">Apply for admission</h2>
            <p className="text-body mt-5 text-sm">
              Complete this initial enquiry form. Our admissions office will
              contact you within two working days.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "No application fee for initial enquiry",
                "Information treated confidentially",
                "Campus visit available before decision",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-10">
              <AdmissionForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="section-pad bg-white">
        <div className="container max-w-3xl">
          <Reveal className="text-center">
            <p className="label">Common Questions</p>
            <h2 className="heading-md mt-4 text-ink">
              Everything you need to know.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group cursor-pointer rounded-2xl border border-line bg-warm transition-colors duration-150 open:bg-white">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-ink">
                    {faq.question}
                    <HelpCircle
                      size={16}
                      className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <div className="border-t border-line px-6 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-body text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="font-semibold text-primary underline underline-offset-2"
              >
                Contact our admissions team
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        label="Questions?"
        title="We are here to help with your application."
        href="/contact"
        buttonText="Contact admissions"
      />
    </>
  );
}
