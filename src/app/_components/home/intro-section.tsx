import Image from "next/image";
import { school } from "../../_data/site-content";
import { nepaliSchoolImages } from "../../_data/site-images";
import Reveal from "../ui/reveal";
import Carousel from "../ui/carousel";

const introSlides = [
  {
    src: nepaliSchoolImages.schoolGroup,
    alt: `Students and educators at ${school.name}`,
  },
  {
    src: nepaliSchoolImages.campus,
    alt: `${school.name} campus`,
  },
  {
    src: nepaliSchoolImages.classroom,
    alt: `${school.name} students focused in the classroom`,
  },
  {
    src: nepaliSchoolImages.students,
    alt: `${school.name} students learning together`,
  },
];

export default function IntroSection() {
  return (
    <section id="intro" className="section-pad-lg bg-white">
      <div className="container">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="label flex items-center gap-4">
                <span className="h-px w-12 bg-charcoal/80" aria-hidden />
                {school.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-xl mt-8 text-ink">
                A school where
                <br />
                <em className="font-display font-light text-light">
                  every learner
                </em>
                <br />
                is known.
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={0.15}>
            <div className="max-w-md lg:pb-4">
              <p className="text-body text-base leading-relaxed sm:text-lg">
                Since {school.founded}, {school.name} has stood for a simple
                conviction: children do their best work when expectations are
                high, relationships are strong, and learning connects to real
                life.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-light">
                {school.motto} — this is how we teach, every day.
              </p>

             
            </div>
          </Reveal>
        </div>

        <Reveal variant="clip" className="mt-16 lg:mt-24">
          <Carousel
            ariaLabel={`${school.name} campus gallery`}
            auto={5000}
            indicator="dots"
            className="group relative"
          >
            {introSlides.map((slide) => (
              <div
                key={slide.src}
                className="relative aspect-[16/8] sm:aspect-[16/7]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 82rem"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-near-black/55 via-transparent to-transparent"
                />
                <p className="absolute bottom-7 left-8 max-w-md text-sm font-medium leading-relaxed text-white/90 sm:left-12">
                  {school.tagline}
                </p>
              </div>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
