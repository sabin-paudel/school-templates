import Image from "next/image";
import { testimonials } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-warm">
      <div className="container">
        <SectionHeading
          label="Parent Testimonials"
          title="What families say about us."
          description="The confidence and trust of our parent community is our proudest achievement."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="card relative flex h-full flex-col p-7">
                <blockquote className="text-body mt-5 flex-1 text-sm italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-ink">{t.author}</p>
                    <p className="text-xs font-medium text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
