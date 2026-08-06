import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt="Students of Aatreya Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-lg border-4 border-white shadow-lg sm:block lg:-right-8">
              <div className="relative aspect-[4/5]">
                <Image
                  src={nepaliSchoolImages.classroom}
                  alt="Focused learning in the classroom"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -left-4 -top-6 rounded-md bg-accent px-5 py-4 text-white shadow-lg">
              <p className="font-display text-3xl font-bold">2002</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link href="/about" className="btn btn-primary group">
              Discover Our Story
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/admissions"
              className="text-sm font-bold text-primary underline-offset-4 hover:underline"
            >
              Apply for Admission →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
