import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function ProgramsSection() {
  return (
    <section id="academics" className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Academic Programs"
            title="A clear path from first questions to bold ambitions."
            action={
              <Link href="/academics" className="link-arrow">
                View all programs <ArrowRight size={14} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-14 space-y-0">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 0.08}>
              <article
                className={`grid items-center gap-8 border-t border-line py-10 lg:grid-cols-[80px_1fr_320px] lg:gap-12 ${index === programs.length - 1 ? "border-b" : ""}`}
              >
                <span className="font-serif text-4xl text-line-dark lg:text-5xl">
                  {program.stage}
                </span>
                <div>
                  <p className="label">{program.ages}</p>
                  <h3 className="mt-2 font-serif text-2xl text-navy">{program.title}</h3>
                  <p className="prose-body mt-3 max-w-lg text-sm">{program.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {program.highlights.map((h) => (
                      <li key={h} className="text-xs font-medium text-slate">
                        · {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
