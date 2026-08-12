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

function RotatingStamp() {
  return (
    <div className="absolute -right-5 -top-7 z-20 hidden h-28 w-28 lg:-right-8 lg:-top-9 lg:block lg:h-36 lg:w-36">
      <div className="relative h-full w-full text-ink">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path
              id="about-stamp-path"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text className="fill-current">
            <textPath href="#about-stamp-path">
              EST. {school.founded} · {school.name} ·
            </textPath>
          </text>
        </svg>
        <span
          aria-hidden
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid h-11 w-11 place-items-center border border-ink/25 font-display text-sm font-bold">
            {school.founded}
          </span>
        </span>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="section-pad-lg bg-warm">
      <div className="container grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        {/* Image composition */}
        <Reveal variant="clip">
          <div className="relative pb-6">
            <div className="group kinetic relative aspect-[4/5] overflow-hidden bg-near-black">
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt={`Students of ${school.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className=" object-cover"
              />
            </div>

            {/* Accent image — top left */}
            <div className="absolute -top-6 -left-6 z-20 hidden -rotate-3 lg:block">
              <div className="border-8 border-white bg-white shadow-xl shadow-ink/15">
                <div className="group kinetic relative h-28 w-32 overflow-hidden">
                  <Image
                    src={nepaliSchoolImages.classroom}
                    alt="Focused learning in the classroom"
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 py-1.5 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Classroom
                </p>
              </div>
            </div>

            {/* Accent image — bottom left */}
            <div className="absolute -bottom-0 -left-8 z-20 hidden rotate-3 lg:block">
              <div className="border-8 border-white bg-white shadow-xl shadow-ink/15">
                <div className="group kinetic relative h-24 w-28 overflow-hidden">
                  <Image
                    src={nepaliSchoolImages.campus}
                    alt={`${school.name} campus`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 py-1.5 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Campus
                </p>
              </div>
            </div>

            {/* Accent image — bottom right */}
            <div className="absolute -right-8 bottom-2 z-20 hidden -rotate-2 lg:block">
              <div className="border-8 border-white bg-white shadow-xl shadow-ink/15">
                <div className="group kinetic relative h-28 w-32 overflow-hidden">
                  <Image
                    src={nepaliSchoolImages.schoolGroup}
                    alt={`Students and educators at ${school.name}`}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 py-1.5 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  Community
                </p>
              </div>
            </div>

            <RotatingStamp />
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <SectionHeading
            align="left"
            label={`Welcome to ${school.name}`}
            title={
              <>
                A tradition of purposeful education{" "}
                <em className="font-light italic text-charcoal/70">
                  in Pokhara.
                </em>
              </>
            }
            description={`Since ${school.founded}, ${school.name} has been a beacon of excellence. We believe in nurturing not just minds, but hearts — preparing students for the challenges of a rapidly changing world.`}
          />

          <ul className="mt-12">
            {highlights.map((item, i) => (
              <li
                key={item}
                className="group relative flex items-center justify-between gap-6 overflow-hidden border-t border-line py-5 last:border-b"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-2xl font-semibold leading-none text-charcoal/15 transition-colors duration-500 group-hover:text-ink sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium text-ink transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-lg">
                    {item}
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-charcoal/25 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-8">
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
