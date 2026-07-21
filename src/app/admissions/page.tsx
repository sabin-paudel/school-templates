import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    title: "Submit the form",
    text: "Tell us about your child and the grade you are considering.",
  },
  {
    step: "02",
    title: "Visit the school",
    text: "Tour the campus and speak with our academic team.",
  },
  {
    step: "03",
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

      <section className="section-pad bg-snow">
        <div className="container-main">
          <Reveal>
            <p className="label">How It Works</p>
            <h2 className="heading-section mt-4 text-navy">Three simple steps to enrolment.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.08}>
                <div className="border-l-2 border-accent pl-6">
                  <p className="font-serif text-3xl text-line-dark">{item.step}</p>
                  <h3 className="mt-3 font-medium text-navy">{item.title}</h3>
                  <p className="prose-body mt-2 text-sm">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="label">Student Application</p>
            <h2 className="heading-section mt-4 text-navy">Apply for admission</h2>
            <p className="prose-body mt-5 text-sm">
              Complete this initial enquiry form. Our admissions office will
              contact you within two working days.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "No application fee for initial enquiry",
                "Information treated confidentially",
                "Campus visit available before decision",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-navy">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="link-arrow mt-8">
              Ask an admissions question <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-line bg-snow p-6 sm:p-10">
              <AdmissionForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
