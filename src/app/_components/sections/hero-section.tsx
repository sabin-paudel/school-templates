import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";
import Reveal from "../ui/reveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] bg-navy-deep">
      <Image
        src={nepaliSchoolImages.campus}
        alt="Aatreya Academy campus in Pokhara, Nepal"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />

      <div className="container-main relative flex min-h-[85vh] flex-col justify-end pb-16 pt-32 lg:pb-20">
        <Reveal>
          <p className="label text-accent-bright">Est. {school.founded} · Pokhara, Nepal</p>
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-tight text-white">
            Where academic rigour meets genuine care.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-light sm:text-lg">
            Aatreya Academy prepares students from early years through secondary
            school to learn with purpose and lead with integrity.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/admissions" className="btn btn-light">
              Begin Application <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-outline-light">
              Schedule a Visit
            </Link>
          </div>
        </Reveal>

       
      </div>
    </section>
  );
}
