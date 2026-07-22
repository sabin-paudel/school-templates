import Image from "next/image";
import { testimonial } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={testimonial.image}
                  alt="Students at Aatreya Academy"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Parent Voices
              </span>
              <div className="relative mt-4">
                <Quote className="w-8 h-8 text-primary/20" />
                <blockquote className="relative heading-md text-ink mt-2">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <div className="mt-6 pt-6 border-t border-line">
                <p className="font-semibold text-ink">
                  {testimonial.authors}
                </p>
                <p className="text-sm text-ink-light">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
