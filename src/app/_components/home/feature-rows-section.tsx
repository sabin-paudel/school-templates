import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function FeatureRowsSection() {
  const rows = facilities.slice(0, 2);

  return (
    <section className="section-pad bg-charcoal text-white">
      <div className="container grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <SectionHeading
            light
            align="left"
            label="Beyond the Classroom"
            title="Spaces designed for learning."
            description="Purpose-built laboratories, libraries, sports grounds, and performance spaces that bring the curriculum to life."
          />
        </div>

        <div className="space-y-20">
          {rows.map((row, i) => (
            <Reveal key={row.title} delay={i * 0.06}>
              <article>
                <div className="group relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={row.image}
                    alt={row.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-4 left-5 font-display text-3xl font-semibold text-white"
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="heading-lg mt-7 text-white">{row.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60">
                  {row.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {row.features.map((f) => (
                    <li
                      key={f}
                      className="border border-white/20 px-3.5 py-1 text-xs font-medium text-white/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/school-life" className="nav-arrow nav-arrow--light mt-7">
                  Explore {row.title}
                  <ArrowRight size={16} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
