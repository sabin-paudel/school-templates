import Image from "next/image";
import { testimonials } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Carousel from "../ui/carousel";

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Parent Testimonials"
          title="What families say about us."
          description="The confidence and trust of our parent community is our proudest achievement."
        />

        <Carousel
          auto={8000}
          loop
          indicator="count"
          ariaLabel="Parent testimonials"
          className="mt-16 lg:mt-24"
        >
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="mx-auto max-w-4xl px-8 pb-2 text-center sm:px-16"
            >
              <span
                aria-hidden
                className="block font-display text-6xl font-semibold leading-none text-ink/10"
              >
                &rdquo;
              </span>
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-[2.75rem] lg:leading-[1.2]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-12 flex items-center justify-center gap-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line grayscale">
                  <Image
                    src={t.image}
                    alt={t.author}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-ink">{t.author}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}