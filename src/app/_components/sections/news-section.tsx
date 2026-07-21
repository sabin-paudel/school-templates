import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function NewsSection() {
  return (
    <section id="notices" className="section-pad bg-snow">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="News & Updates"
            title="Latest from the school community."
            action={
              <Link href="/notices" className="link-arrow">
                All notices <ArrowRight size={14} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-10 space-y-0">
          {news.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="grid gap-6 border-t border-line py-7 sm:grid-cols-[140px_1fr] sm:gap-10">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-square">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
                    <span className="text-accent">{item.category}</span>
                    <span className="text-slate-light">·</span>
                    <span className="text-slate">{item.date}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-navy">{item.title}</h3>
                  <p className="prose-body mt-2 text-sm">{item.excerpt}</p>
                  <Link href="/notices" className="link-arrow mt-4">
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
