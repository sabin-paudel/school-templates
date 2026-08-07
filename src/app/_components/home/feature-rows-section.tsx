import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function FeatureRowsSection() {
  const rows = facilities.slice(0, 2);

  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Beyond the Classroom"
          title="Spaces designed for learning."
          description="Purpose-built laboratories, libraries, sports grounds, and performance spaces that bring the curriculum to life."
        />

        <div className="mt-14 space-y-16 lg:space-y-24">
          {rows.map((row, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal key={row.title} delay={i * 0.08}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={`relative ${right ? "lg:order-2" : ""}`}>
                    <div className="group img-frame relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={row.image}
                        alt={row.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className={right ? "lg:order-1" : ""}>
                    <h3 className="heading-lg text-ink">{row.title}</h3>
                    <p className="text-body mt-3 leading-relaxed">{row.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {row.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-line bg-warm px-3.5 py-1 text-xs font-semibold text-muted"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/school-life"
                      className="nav-arrow mt-6 inline-flex items-center gap-1.5 text-primary transition-all hover:gap-2.5"
                    >
                      Explore {row.title}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
