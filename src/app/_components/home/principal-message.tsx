import Image from "next/image";
import { principal, school } from "../../_data/site-content";
import Reveal from "../ui/reveal";

export default function PrincipalMessage() {
  const yearsOfLeadership = new Date().getFullYear() - school.founded;
  return (
    <section className="section-pad bg-primary-darker text-white">
      <div className="container">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-4 border-white/10">
                <Image
                  src={principal.image}
                  alt={`${principal.name}, ${principal.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-48 -translate-x-1/2 rounded-md bg-accent px-4 py-3 text-center text-white shadow-lg">
                <p className="font-display text-xl font-bold">{school.founded}—Now</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  {yearsOfLeadership}+ Years of Leadership
                </p>
              </div>
            </div>

            <div>
              <p className="label !text-accent">
                Principal&rsquo;s Message
              </p>
              <h2 className="display-md mt-3 text-balance">
                Every child deserves to be known, challenged, and supported.
              </h2>
              <blockquote className="mt-6">
                <p className="font-display text-lg italic leading-relaxed text-white/85 lg:text-xl">
                  &ldquo;{principal.message}&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-lg font-bold text-white">{principal.name}</p>
                <p className="text-sm text-accent">{principal.title} · {principal.degree}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
