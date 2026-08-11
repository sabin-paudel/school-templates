import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news, slugify } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import Carousel from "../ui/carousel";

const NEWS_PER_VIEW = { 0: 1, 640: 2, 1024: 3 } as const;

export default function NewsSection() {
  const posts = news.slice(0, 6);

  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          align="left"
          label="News & Events"
          title="Latest from the school."
          action={
            <Link href="/news" className="btn btn-outline btn-arrow group">
              View All News
              <ArrowRight size={16} className="btn-arrow-icon" />
            </Link>
          }
        />

        <Carousel
          auto={6000}
          loop
          indicator="dots"
          ariaLabel="Latest school news"
          perView={NEWS_PER_VIEW}
          slideClassName="px-2.5"
          className="mt-12"
        >
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-colors duration-300 hover:border-ink"
            >
              <Link href={`/news/${slugify(post.title)}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                  <Link
                    href={`/news/${slugify(post.title)}`}
                    className="transition-colors hover:text-ink/70"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-body mt-2 line-clamp-2 text-sm">{post.excerpt}</p>
                <Link
                  href={`/news/${slugify(post.title)}`}
                  className="nav-arrow mt-auto pt-5"
                >
                  Read More
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
