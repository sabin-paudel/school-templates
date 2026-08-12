import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news, slugify } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

export default function NewsSection() {
  const featured = news.find((post) => post.featured) ?? news[0];
  const supporting = news.filter((post) => post !== featured).slice(0, 4);

  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          align="left"
          label="News & Stories"
          title="Latest from the school."
          action={
            <Link href="/news" className="btn btn-outline btn-arrow group">
              View All News
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          }
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          {/* Dominant story */}
          <Reveal variant="clip">
            <article className="group">
              <Link href={`/news/${slugify(featured.title)}`} className="block">
                <div className="kinetic relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="mt-7">
                <p className="post-meta">
                  <span className="post-category">{featured.category}</span>
                  <span className="post-date">{featured.date}</span>
                </p>
                <h3 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  <Link
                    href={`/news/${slugify(featured.title)}`}
                    className="transition-colors hover:text-ink/70"
                  >
                    {featured.title}
                  </Link>
                </h3>
                <p className="text-body mt-4 max-w-2xl leading-relaxed">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/news/${slugify(featured.title)}`}
                  className="nav-arrow mt-7"
                >
                  Continue Reading
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Supporting stories */}
          <div className="divide-y divide-line border-y border-line lg:self-start">
            {supporting.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.06}>
                <article className="group flex gap-6 py-8">
                  <div className="kinetic relative aspect-[4/3] w-32 shrink-0 overflow-hidden sm:w-40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 128px, 160px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="post-meta">
                      <span className="post-category">{post.category}</span>
                    </p>
                    <h4 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                      <Link
                        href={`/news/${slugify(post.title)}`}
                        className="transition-colors hover:text-ink/70"
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-body mt-2 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-light">
                      {post.date}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}