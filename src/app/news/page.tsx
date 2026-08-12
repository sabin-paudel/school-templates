import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { Sidebar } from "../_components/layout/sidebar";
import { news, school, slugify } from "../_data/site-content";

export const metadata: Metadata = {
  title: "News & Events",
  description: `Read the latest news, announcements, and event updates from ${school.name}.`,
};

const categories = ["All", "Achievement", "Campus", "Sports", "Community"];
const featured = news.find((post) => post.featured) ?? news[0];
const rest = news.filter((post) => post !== featured);

export default function NewsPage() {
  return (
    <>
      <PageBanner
        breadcrumb="News & Events"
        title="News, notices, and school events."
        description="Stories from across our community — achievements, campus life, sports, and important updates — all in one place."
      />

      <section className="section-pad bg-white">
        <div className="container">
          <div className="content-sidebar">
            {/* Posts */}
            <div>
              {/* Category filter */}
              <div className="mb-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-5">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      category === "All"
                        ? "text-ink"
                        : "text-light hover:text-ink"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Featured post */}
              <Reveal>
                <article className="group">
                  <div className="kinetic relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <span className="absolute left-5 top-5 bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                      Featured · {featured.category}
                    </span>
                  </div>
                  <div className="mt-7">
                    <p className="post-meta">
                      <span className="post-date">{featured.date}</span>
                    </p>
                    <h2 className="display-md mt-3 max-w-2xl text-ink">
                      <Link
                        href={`/news/${slugify(featured.title)}`}
                        className="transition-colors hover:text-ink/70"
                      >
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="text-body mt-4 max-w-2xl">{featured.body}</p>
                    <Link
                      href={`/news/${slugify(featured.title)}`}
                      className="nav-arrow mt-6"
                    >
                      Continue Reading <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>

              {/* Archive grid */}
              <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
                {rest.map((post, i) => (
                  <Reveal key={post.title} delay={i * 0.05}>
                    <article className="group flex h-full flex-col">
                      <Link href={`/news/${slugify(post.title)}`} className="block">
                        <div className="kinetic relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 30vw"
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <div className="mt-5 flex flex-1 flex-col">
                        <p className="post-meta">
                          <span className="post-category">{post.category}</span>
                          <span className="post-date">{post.date}</span>
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                          <Link
                            href={`/news/${slugify(post.title)}`}
                            className="transition-colors hover:text-ink/70"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-body mt-2 text-sm">{post.excerpt}</p>
                        <Link
                          href={`/news/${slugify(post.title)}`}
                          className="nav-arrow mt-auto pt-4"
                        >
                          Read More <ArrowRight size={15} />
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              {/* Pagination */}
              <nav
                aria-label="Pagination"
                className="mt-16 flex items-center justify-between border-t border-line pt-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-light">
                  Page 1 of 3
                </p>
                <div className="flex items-center gap-2">
                  {["1", "2", "3"].map((page) => (
                    <a
                      key={page}
                      href="#"
                      aria-current={page === "1" ? "page" : undefined}
                      className={`flex h-10 w-10 items-center justify-center border text-sm font-semibold transition-colors ${
                        page === "1"
                          ? "border-ink bg-charcoal text-white"
                          : "border-line text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {page}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="flex h-10 items-center justify-center gap-1.5 border border-line px-3 text-sm font-semibold text-muted transition-colors hover:border-ink hover:text-ink"
                    aria-label="Next page"
                  >
                    Next
                    <ArrowRight size={14} />
                  </a>
                </div>
              </nav>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>

      <CtaSection
        label="Stay Updated"
        title="Important updates delivered to your inbox."
        description="Subscribe to receive school notices, event updates, and admission information."
        primaryHref="/contact"
        primaryText="Subscribe to Notices"
        secondaryHref="/news"
        secondaryText="Read Latest News"
      />
    </>
  );
}
