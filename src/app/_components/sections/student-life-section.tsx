import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { studentLife } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function StudentLifeSection() {
  return (
    <section id="student-life" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Student Life"
            title="Beyond the classroom, students find their interests and their voice."
            action={
              <Link
                href="/school-life"
                className="btn btn-ghost rounded-md text-sm"
              >
                Explore school life <ArrowRight size={16} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {studentLife.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
