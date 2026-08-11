"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, StickyNote, ArrowUpRight } from "lucide-react";
import { navigation, news, notices, slugify } from "../../_data/site-content";

function WidgetTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink">
      <span className="h-px w-6 bg-charcoal" aria-hidden />
      {children}
    </h3>
  );
}

export function Sidebar() {
  return (
    <aside className="space-y-10">
      {/* Search widget */}
      <div className="border-t-2 border-ink pt-6">
        <WidgetTitle>Search</WidgetTitle>
        <form className="mt-5 flex border border-line focus-within:border-ink" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="sidebar-search" className="sr-only">
            Search this site
          </label>
          <input
            id="sidebar-search"
            type="search"
            placeholder="Search the site…"
            className="flex-1 bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-light"
          />
          <button
            type="submit"
            className="flex w-12 items-center justify-center bg-charcoal text-white transition-colors hover:bg-charcoal/80"
            aria-label="Search"
          >
            <Search size={16} />
          </button>
        </form>
      </div>

      {/* Pages widget */}
      <div className="border-t-2 border-ink pt-6">
        <WidgetTitle>Pages</WidgetTitle>
        <ul className="mt-4">
          {navigation.map((item) => (
            <li key={item.href} className="border-b border-line">
              <Link
                href={item.href}
                className="group flex items-center justify-between py-3 text-sm font-medium text-ink transition-colors hover:text-ink"
              >
                {item.label}
                <ArrowUpRight
                  size={14}
                  className="text-light transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts widget */}
      <div className="border-t-2 border-ink pt-6">
        <WidgetTitle>Recent Posts</WidgetTitle>
        <ul className="mt-5 space-y-5">
          {news.slice(0, 4).map((post) => (
            <li key={post.title} className="flex gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-line">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <Link
                  href={`/news/${slugify(post.title)}`}
                  className="block text-sm font-semibold leading-snug text-ink transition-colors hover:text-ink/70"
                >
                  {post.title}
                </Link>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-light">
                  {post.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories widget */}
      <div className="border-t-2 border-ink pt-6">
        <WidgetTitle>Categories</WidgetTitle>
        <ul className="mt-4 flex flex-wrap gap-2">
          {["Achievement", "Campus", "Sports", "Community"].map((cat) => (
            <li key={cat}>
              <Link
                href="/news"
                className="inline-block border border-line px-3.5 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-ink hover:text-ink"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Notices widget */}
      <div className="border-t-2 border-ink pt-6">
        <WidgetTitle>Notices</WidgetTitle>
        <ul className="mt-5 space-y-4">
          {notices.slice(0, 3).map((notice) => (
            <li key={notice.title} className="flex items-start gap-3 text-sm">
              <StickyNote size={15} className="mt-0.5 shrink-0 text-light" />
              <Link
                href="/news"
                className="font-medium leading-snug text-ink transition-colors hover:text-ink/70"
              >
                {notice.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
