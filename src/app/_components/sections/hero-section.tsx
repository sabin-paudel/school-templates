import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/60" />
      <Image
        src={nepaliSchoolImages.campus}
        alt="Aatreya Academy campus in Pokhara, Nepal"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />

      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="container-main relative flex min-h-[90vh] flex-col justify-center pb-16 pt-32 lg:pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary-light/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
              Est. {school.founded} &middot; Pokhara, Nepal
            </p>
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight text-white">
            Where academic rigour{" "}
            <span className="text-primary-light">meets genuine care.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Aatreya Academy prepares students from early years through secondary
            school to learn with purpose and lead with integrity.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:bg-white/90 transition-all duration-200"
            >
              <GraduationCap size={18} />
              Begin Application <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              Schedule a Visit
            </Link>
          </div>
          <div className="mt-16 flex items-center gap-8 text-xs text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
              NEB Curriculum
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
              Ages 3&ndash;16
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
              14:1 Ratio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
