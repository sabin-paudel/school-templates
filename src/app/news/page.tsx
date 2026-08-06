import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageBanner from "../_components/ui/page-banner";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { Sidebar } from "../_components/layout/sidebar";
import { news, school } from "../_data/site-content";

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

      <section className="section-pad bg-warm">
        <div className="container">
          <div className="content-sidebar">
            {/* Posts */}
            <div>
              {/* Category filter */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                      category === "All"
                        ? "bg-primary text-white"
                        : "border border-line bg-white text-muted hover:border-primary hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Featured post */}
              <Reveal>
                <article className="card group overflow-hidden">
                  <div className="relative h-72 sm:h-80 img-frame">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="rounded bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                        Featured · {featured.category}
                      </span>
                      <h2 className="heading-lg mt-3 leading-tight">
                        <Link href="/news" className="hover:text-accent">
                          {featured.title}
                        </Link>
                      </h2>
                      <p className="mt-1 text-xs font-medium text-white/70">
                        {featured.date}
                      </p>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-body">{featured.body}</p>
                    <Link
                      href="/news"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
                    >
                      Continue Reading <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>

              {/* Archive grid */}
              <div className="mt-10 grid gap-7 sm:grid-cols-2">
                {rest.map((post, i) => (
                  <Reveal key={post.title} delay={i * 0.06}>
                    <article className="card group flex h-full flex-col">
                      <div className="relative h-44 overflow-hidden img-frame">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 30vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 rounded bg-primary px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="post-meta">
                          <span className="post-category">{post.category}</span>
                          <span className="post-date">{post.date}</span>
                        </p>
                        <h3 className="heading-md mt-3 leading-snug text-ink transition-colors group-hover:text-primary">
                          <Link href="/news">{post.title}</Link>
                        </h3>
                        <p className="text-body mt-2 text-sm">{post.excerpt}</p>
                        <Link
                          href="/news"
                          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-primary transition-all hover:gap-2.5"
                        >
                          Read More <ArrowRight size={15} />
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              {/* Pagination */}
              <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
                {["1", "2", "3"].map((page) => (
                  <a
                    key={page}
                    href="#"
                    aria-current={page === "1" ? "page" : undefined}
                    className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-bold transition-colors ${
                      page === "1"
                        ? "border-primary bg-primary text-white"
                        : "border-line bg-white text-muted hover:border-primary hover:text-primary"
                    }`}
                  >
                    {page}
                  </a>
                ))}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-muted transition-colors hover:border-primary hover:text-primary"
                  aria-label="Next page"
                >
                  <ArrowRight size={16} />
                </a>
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
        secondaryHref="/notices"
        secondaryText="View Notice Board"
      />
    </>
  );
}
