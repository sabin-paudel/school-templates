import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, CalendarCheck, Handshake } from "lucide-react";
import { AdmissionForm } from "../_components/forms";
import PageBanner from "../_components/ui/page-banner";
import Reveal from "../_components/ui/reveal";
import { school } from "../_data/site-content";
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
      <PageBanner
        label="Admissions"
        title="Start your child's Aatreya journey."
        description="Our admissions team makes the process clear and personal, from your first enquiry through the first day of school."
        image={nepaliSchoolImages.students}
        imageAlt="Students outside their school in Nepal"
      />

      <section className="section-pad bg-warm">
        <div className="container-main">
          <Reveal>
            <p className="label">How It Works</p>
            <h2 className="heading-md mt-4 text-ink">Three simple steps to enrolment.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ step, icon: Icon, title, text }, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light group-hover:bg-primary transition-colors duration-300">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-3xl font-bold text-primary/8">{step}</span>
                  </div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="text-body mt-2 text-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-light/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-main relative grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
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
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-150">
              Ask an admissions question <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-warm p-6 sm:p-10 rounded-2xl shadow-sm">
              <AdmissionForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container-main relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Questions?
            </p>
            <h2 className="mt-3 heading-md text-white sm:text-2xl">
              We are here to help with your application.
            </h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white hover:bg-white/20 px-6 py-3 text-sm font-semibold transition-all duration-200">
            Contact admissions <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
