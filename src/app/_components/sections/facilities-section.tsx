import Image from "next/image";
import { facilities } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function FacilitiesSection() {
  return (
    <section className="section-pad bg-snow">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="Campus Facilities"
            title="Spaces designed for learning, growth, and discovery."
            align="center"
          />
        </Reveal>

        <div className="mt-14 space-y-16">
          {facilities.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.06}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-navy">{facility.title}</h3>
                  <p className="prose-body mt-4 text-sm">{facility.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
