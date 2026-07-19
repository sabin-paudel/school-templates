import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  School,
  UserRoundCheck,
} from "lucide-react";
import { AdmissionForm } from "../_components/forms";
import PageHero from "../_components/page-hero";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: "Admissions | Aatreya Academy",
  description: "Apply for student admission to Aatreya Academy in Pokhara.",
};
export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026–27"
        title="Start your child’s Aatreya journey."
        description="Our admissions team makes the process clear and personal, from your first enquiry through the first day of school."
        image={nepaliSchoolImages.students}
        imageAlt="Students outside their school in Nepal"
      />
      <section className="section bg-paper">
        <div className="section-shell">
          <div className="grid gap-px bg-line md:grid-cols-3">
            {[
              [
                ClipboardCheck,
                "1. Submit the form",
                "Tell us about your child and the grade you are considering.",
              ],
              [
                School,
                "2. Visit the school",
                "Tour the campus and speak with our academic team.",
              ],
              [
                UserRoundCheck,
                "3. Meet and confirm",
                "A short student interaction is followed by an admission decision.",
              ],
            ].map(([Icon, title, text]) => {
              const StepIcon = Icon as typeof School;
              return (
                <div key={title as string} className="bg-cream p-8">
                  <StepIcon className="text-gold-dark" />
                  <h2 className="mt-6 font-serif text-2xl text-forest">
                    {title as string}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {text as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section bg-cream">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside>
            <p className="eyebrow text-gold-dark">Student application</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-forest">
              Apply for admission
            </h2>
            <p className="mt-5 leading-7 text-muted">
              Complete this initial enquiry form. Our admissions office will
              contact you within two working days.
            </p>
            <ul className="mt-8 space-y-4 text-sm font-semibold text-forest">
              {[
                "No application fee for initial enquiry",
                "Information treated confidentially",
                "Campus visit available before decision",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-gold-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="text-link mt-9">
              Ask an admissions question <ArrowRight size={16} />
            </Link>
          </aside>
          <div className="border border-line bg-paper p-6 sm:p-9 lg:p-12">
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}
