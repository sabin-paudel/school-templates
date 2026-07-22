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
              <Link
                href="/academics"
                className="btn btn-ghost rounded-md text-sm"
              >
                View all programs <ArrowRight size={16} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 0.06}>
              <article className={`group relative bg-warm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${index === 1 ? "lg:ml-12" : index === 2 ? "lg:ml-24" : ""}`}>
                <div className="grid items-stretch md:grid-cols-[1fr_280px]">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-primary/15">
                        {program.stage}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {program.ages}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-ink">
                      {program.title}
                    </h3>
                    <p className="text-body mt-2 max-w-lg text-sm">
                      {program.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {program.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-ink-light shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative min-h-[200px] md:min-h-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r" />
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
