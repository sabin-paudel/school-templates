"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, StickyNote } from "lucide-react";
import { navigation, news, notices } from "../../_data/site-content";

export function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Search widget */}
      <div className="wp-widget">
        <h3 className="wp-widget-title">Search</h3>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="sidebar-search" className="sr-only">
            Search this site
          </label>
          <input
            id="sidebar-search"
            type="search"
            placeholder="Search …"
            className="flex-1 rounded-l-md border border-line bg-warm px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-primary"
          />
          <button
            type="submit"
            className="flex h-9 items-center justify-center rounded-r-md bg-primary px-3 text-white transition-colors hover:bg-primary-hover"
            aria-label="Search"
          >
            <Search size={16} />
          </button>
        </form>
      </div>

      {/* Pages widget */}
      <div className="wp-widget">
        <h3 className="wp-widget-title">Pages</h3>
        <ul className="wp-list">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-1.5 text-sm font-medium text-ink transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts widget */}
      <div className="wp-widget">
        <h3 className="wp-widget-title">Recent Posts</h3>
        <ul className="space-y-3">
          {news.slice(0, 4).map((post) => (
            <li key={post.title} className="flex gap-3">
              <div className="img-frame shrink-0 w-14">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <Link
                  href="/news"
                  className="block text-sm font-bold leading-snug text-ink transition-colors hover:text-primary"
                >
                  {post.title}
                </Link>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-light">
                  {post.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories widget */}
      <div className="wp-widget">
        <h3 className="wp-widget-title">Categories</h3>
        <ul className="space-y-2">
          {["Achievement", "Campus", "Sports", "Community"].map((cat) => (
            <li key={cat}>
              <Link
                href="/news"
                className="nav-arrow text-muted hover:text-primary"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Notices widget */}
      <div className="wp-widget">
        <h3 className="wp-widget-title">Notices</h3>
        <ul className="space-y-3">
          {notices.slice(0, 3).map((notice) => (
            <li key={notice.title} className="flex items-start gap-2.5 text-sm">
              <StickyNote size={14} className="mt-0.5 shrink-0 text-accent-dark" />
              <Link
                href="/notices"
                className="font-medium text-ink transition-colors hover:text-primary"
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
