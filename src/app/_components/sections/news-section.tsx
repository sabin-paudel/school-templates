import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news } from "../../_data/site-content";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function NewsSection() {
  const featuredNews = news[0];
  const remainingNews = news.slice(1);

  return (
    <section id="notices" className="section-pad bg-stone">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            label="News & Updates"
            title="Latest from the school community."
            action={
              <Link
                href="/notices"
                className="btn btn-ghost rounded-md text-sm"
              >
                All notices <ArrowRight size={16} />
              </Link>
            }
          />
        </Reveal>

        <Reveal delay={0.1}>
          <article className="mt-12 grid rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 lg:grid-cols-5">
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-2 lg:aspect-auto min-h-[300px]">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-10">
              <div className="flex items-center gap-3 text-xs">
                <span className="inline-flex rounded-full bg-primary-light px-3 py-1 font-semibold text-primary uppercase tracking-wider">
                  {featuredNews.category}
                </span>
                <span className="text-ink-light">{featuredNews.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink leading-tight">
                <Link href="/notices" className="hover:text-primary transition-colors duration-150">
                  {featuredNews.title}
                </Link>
              </h3>
              <p className="text-body mt-2 text-sm">
                {featuredNews.excerpt}
              </p>
              <Link
                href="/notices"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-primary hover:gap-3 transition-all duration-150"
              >
                Read full story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {remainingNews.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * (index + 1)}>
              <article className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="inline-flex rounded-full bg-primary-light px-3 py-1 font-semibold text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-ink-light">{item.date}</span>
                  </div>
                  <h3 className="mt-3 font-bold text-ink">
                    <Link href="/notices" className="hover:text-primary transition-colors duration-150">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-body text-sm mt-1.5 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
