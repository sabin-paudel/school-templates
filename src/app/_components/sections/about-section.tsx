import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nepaliSchoolImages } from "../../_data/site-images";
import { school } from "../../_data/site-content";
import Reveal from "../ui/reveal";

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="label">Our Story</p>
              <h2 className="heading-md mt-3 text-ink">
                A tradition of purposeful education in Pokhara.
              </h2>
              <p className="text-body mt-4">
                Since {school.founded}, Aatreya Academy has brought together
                ambitious teaching and genuine care. Our students are challenged
                to think deeply, communicate clearly, and act with integrity.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3">
                {[
                  "Experienced, dedicated faculty",
                  "National curriculum with global outlook",
                  "Safe and inclusive campus environment",
                  "Strong partnership with families",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink">
                    <span className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="btn btn-primary mt-8"
              >
                Our story <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={nepaliSchoolImages.villageStudents}
                  alt="Students at Aatreya Academy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
