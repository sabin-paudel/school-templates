import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { school } from "../../_data/site-content";
import { nepaliSchoolImages } from "../../_data/site-images";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

const highlights = [
  "National curriculum with a global outlook",
  "Experienced, dedicated faculty",
  "Strong partnership with families",
  "Safe and inclusive campus environment",
];

export default function AboutSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        {/* Image composition */}
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt="Students of Aatreya Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-56 overflow-hidden border-8 border-white sm:block lg:left-0">
              <div className="relative aspect-[4/5]">
                <Image
                  src={nepaliSchoolImages.classroom}
                  alt="Focused learning in the classroom"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute right-6 top-6 border border-line bg-white/95 px-6 py-4 backdrop-blur">
              <p className="font-display text-4xl font-semibold leading-none text-ink">2002</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Founded
              </p>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <SectionHeading
            align="left"
            label={`Welcome to ${school.name}`}
            title="A tradition of purposeful education in Pokhara."
            description={`Since ${school.founded}, Aatreya Academy has been a beacon of excellence. We believe in nurturing not just minds, but hearts — preparing students for the challenges of a rapidly changing world.`}
          />
          <ul className="mt-9 grid sm:grid-cols-2 sm:gap-x-10">
            {highlights.map((item, i) => (
              <li key={item} className="flex items-baseline gap-4 border-t border-line py-4">
                <span className="text-xs font-semibold tracking-[0.14em] text-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link href="/about" className="btn btn-primary btn-arrow group">
              Discover Our Story
              <ArrowUpRight size={17} className="btn-arrow-icon" />
            </Link>
            <Link href="/admissions" className="nav-arrow group">
              Apply for Admission
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
