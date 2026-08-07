import Link from "next/link";
import Image from "next/image";
import { school } from "../../_data/site-content";
import { nepaliSchoolImages } from "../../_data/site-images";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-darker text-white">
      <div className="container py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Admissions Open {school.admissionSession}
            </p>

            <h1 className="display-lg mt-5 text-balance">
              Nurturing Excellence,
              <br />
              <span className="text-white">Inspiring</span> Leaders.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              For over two decades, {school.name} has combined rigorous
              academics with genuine care — helping children in Pokhara inquire,
              create, and grow into confident contributors to a changing world.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/admissions" className="btn btn-white btn-lg">
                Start Admission
              </Link>
              <Link href="/contact" className="btn btn-white-outline btn-lg">
                Book a Campus Visit
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg img-frame border-2 border-accent/40 shadow-2xl">
              <Image
                src={nepaliSchoolImages.students}
                alt={`${school.name} students and campus`}
                width={650}
                height={450}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-primary-darker/95 border border-accent/40 p-5 shadow-xl sm:block backdrop-blur">
              <p className="font-display text-2xl font-bold text-white">98%</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Board Exam Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
