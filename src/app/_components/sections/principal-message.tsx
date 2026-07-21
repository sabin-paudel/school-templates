import Image from "next/image";
import { principal } from "../../_data/site-content";
import Reveal from "../ui/reveal";

export default function PrincipalMessage() {
  return (
    <section className="section-pad bg-snow">
      <div className="container-main">
        <Reveal>
          <div className="grid items-center gap-10 border border-line bg-white lg:grid-cols-[280px_1fr] lg:gap-0">
            <div className="relative aspect-square overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <Image
                src={principal.image}
                alt={principal.name}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <p className="label">Principal&apos;s Message</p>
              <h2 className="heading-section mt-3 text-navy">A word from our leadership.</h2>
              <blockquote className="mt-6 border-l-2 border-accent pl-6">
                <p className="font-serif text-lg leading-relaxed text-navy sm:text-xl">
                  &ldquo;{principal.message}&rdquo;
                </p>
              </blockquote>
              <footer className="mt-6">
                <p className="font-medium text-navy">{principal.name}</p>
                <p className="text-sm text-slate">{principal.title}</p>
              </footer>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
