import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { facilities } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function FeatureRowsSection() {
  const rows = facilities.slice(0, 2);

  return (
    <section className="section-pad bg-near-black text-white">
      <div className="container grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            light
            align="left"
            label="Beyond the Classroom"
            title="Spaces designed for learning."
            description="Purpose-built laboratories, libraries, sports grounds, and performance spaces that bring the curriculum to life."
          />
        </div>

        <div className="space-y-24">
          {rows.map((row, i) => (
            <Reveal key={row.title} delay={i * 0.06}>
              <article className="group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={row.image}
                    alt={row.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="img-duotone object-cover transition-transform duration-500 ease-in-out "
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-5 left-6 font-display text-4xl font-semibold text-white drop-shadow"
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-8 flex items-start justify-between gap-6">
                  <h3 className="heading-lg text-white">{row.title}</h3>
                  <ArrowUpRight
                    size={24}
                    className="mt-1 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/55">
                  {row.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {row.features.map((f) => (
                    <li
                      key={f}
                      className="border border-white/15 px-4 py-1.5 text-xs font-medium text-white/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/school-life" className="nav-arrow nav-arrow--light mt-8">
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