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
          <div className="img-frame relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-primary px-3 py-1 font-bold text-white">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-light">
              <CalendarDays size={13} aria-hidden />
              {post.date}
            </span>
          </div>

          <div className="mt-6">
            <p className="text-body leading-relaxed text-ink">{post.body}</p>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-6">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-ink"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to All News
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-ink"
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
