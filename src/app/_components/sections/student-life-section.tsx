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
              <Link href="/school-life" className="link-arrow">
                Explore school life <ArrowRight size={14} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {studentLife.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6 pt-16">
                    <h3 className="font-serif text-xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-light">
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
