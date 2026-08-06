import Image from "next/image";
import { studentLife } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function StudentLifeSection() {
  return (
    <section className="section-pad bg-warm">
      <div className="container">
        <SectionHeading
          label="Student Life"
          title="Learning beyond the classroom walls."
          description="From competitive sports and creative arts to clubs and community service, our students discover lifelong passions."
        />

        <div className="mt-12 flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {studentLife.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="w-[300px] md:w-auto shrink-0 snap-start h-full flex">
              <article className="card group h-full flex flex-col bg-white w-full">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-body text-sm leading-relaxed">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
