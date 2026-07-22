import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function FacilitiesSection() {
  return (
    <section className="section-pad bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-main relative">
        <Reveal>
          <SectionHeading
            label="Campus Facilities"
            title="Spaces designed for learning, growth, and discovery."
            align="center"
            light
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.08}>
              <div className="card-dark overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white">
                    {facility.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/60 leading-relaxed line-clamp-2">
                    {facility.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn btn-light shadow-md"
            >
              Schedule a campus tour <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
