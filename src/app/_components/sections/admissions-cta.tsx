import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/reveal";

export default function AdmissionsCta() {
  return (
    <section
      id="admissions"
      className="bg-primary-dark py-16 sm:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-main relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
                Admissions 2026&ndash;27
              </p>
              <h2 className="mt-4 heading-md text-white">
                The best way to understand Aatreya is to experience it.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Tour the campus, meet our educators, and see a regular school
                day in action. Our admissions team will guide you through every
                step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-light shadow-md">
                Schedule a Visit <ArrowRight size={16} />
              </Link>
              <Link
                href="/admissions"
                className="btn btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
