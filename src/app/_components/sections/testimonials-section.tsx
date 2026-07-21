import Image from "next/image";
import { testimonial } from "../../_data/site-content";
import Reveal from "../ui/reveal";

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-navy-mid">
      <div className="container-main">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div>
              <p className="label text-accent-bright">Parent Voices</p>
              <blockquote className="mt-5 font-serif text-2xl leading-relaxed text-white sm:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-8 border-l-2 border-accent-bright pl-5">
                <p className="font-medium text-white">{testimonial.authors}</p>
                <p className="text-sm text-slate-light">{testimonial.role}</p>
              </footer>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden">
              <Image
                src={testimonial.image}
                alt="Students at Aatreya Academy"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
