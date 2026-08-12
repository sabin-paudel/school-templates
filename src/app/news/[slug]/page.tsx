import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import PageBanner from "../../_components/ui/page-banner";
import CtaSection from "../../_components/ui/cta-section";
import { news, slugify } from "../../_data/site-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): { slug: string }[] {
  return news.map((post) => ({ slug: slugify(post.title) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = news.find((item) => slugify(item.title) === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = news.find((item) => slugify(item.title) === slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner
        breadcrumb="News & Events"
        title={post.title}
        description={post.excerpt}
      />

      <article className="section-pad bg-white">
        <div className="container max-w-3xl">
          <div className="kinetic relative aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="img-duotone object-cover"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs">
            <span className="bg-charcoal px-3 py-1 font-semibold uppercase tracking-[0.16em] text-white">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 font-medium uppercase tracking-[0.14em] text-light">
              <CalendarDays size={13} aria-hidden />
              {post.date}
            </span>
          </div>

          <div className="mt-8">
            <p className="text-body leading-relaxed text-ink">{post.body}</p>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-7">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ink/60"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to All News
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-ink/60"
            >
              Enquire About This Story
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>

      <CtaSection
        label="Get Involved"
        title="Want to know more about life at our school?"
        primaryHref="/admissions"
        primaryText="Apply for Admission"
        secondaryHref="/contact"
        secondaryText="Contact Us"
      />
    </>
  );
}
