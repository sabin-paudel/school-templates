import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              label="About the School"
              title="A tradition of purposeful education in Pokhara."
              description={`Since ${school.founded}, Aatreya Academy has brought together ambitious teaching and genuine care. Our students are challenged to think deeply, communicate clearly, and act with integrity.`}
            />
            <ul className="mt-8 space-y-3">
              {[
                "Experienced, dedicated faculty",
                "National curriculum with global outlook",
                "Safe and inclusive campus environment",
                "Strong partnership with families",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-navy"
                >
                  <span className="size-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="link-arrow mt-8">
              Our story <ArrowRight size={14} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={nepaliSchoolImages.villageStudents}
                  alt="Students at Aatreya Academy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 max-w-[220px] bg-navy p-5 text-white sm:-left-8">
                <p className="font-serif text-lg leading-snug">
                  &ldquo;Every child deserves to feel known, capable, and inspired.&rdquo;
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-slate-light">
                  Founding principle
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
