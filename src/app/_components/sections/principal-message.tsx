import Image from "next/image";
import { principal } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="section-pad bg-warm">
      <div className="container-main">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[380px_1fr] lg:gap-16">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg lg:aspect-auto lg:h-full lg:min-h-[460px]">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-lg px-5 py-3 shadow-lg hidden lg:block">
                <p className="text-2xl font-bold text-white">24+</p>
                <p className="text-xs text-primary-light">Years Leading</p>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <Quote size={14} /> Principal Message
              </span>
              <h2 className="heading-md mt-3 text-ink">
                A word from our leadership.
              </h2>
              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
                  &ldquo;{principal.message}&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 pt-6 border-t border-line">
                <p className="font-medium text-ink">{principal.name}</p>
                <p className="text-sm text-ink-light mt-0.5">{principal.title}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
