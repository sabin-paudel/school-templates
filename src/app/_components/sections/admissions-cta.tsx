import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/reveal";

export default function AdmissionsCta() {
  return (
    <section id="admissions" className="bg-navy-deep py-16 sm:py-20">
      <div className="container-main">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="label text-accent-bright">Admissions 2026–27</p>
              <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                The best way to understand Aatreya is to experience it.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-light">
                Tour the campus, meet our educators, and see a regular school day
                in action. Our admissions team will guide you through every step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-light">
                Schedule a Visit <ArrowRight size={16} />
              </Link>
              <Link href="/admissions" className="btn btn-outline-light">
                Apply for Admission
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
