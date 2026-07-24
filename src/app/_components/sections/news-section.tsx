"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { news } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";

export default function NewsSection() {
  const featuredNews = news[0];
  const remainingNews = news.slice(1);

  const newLocal =
    "relative aspect-[4/3] min-h-[280px] overflow-hidden lg:col-span-2 lg:aspect-auto";
  return (
    <section
      id="notices"
      className="relative overflow-hidden bg-warm py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container relative mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="News & Updates"
            title="Latest from the school community."
            action={
              <Link
                href="/notices"
                className="group inline-flex items-center gap-2 btn btn-ghost rounded-xl text-sm"
              >
                All notices
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </motion.div>

        {/* front-page feature — bordered like a clipping, not a rounded shadow card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid overflow-hidden border border-ink/10 lg:grid-cols-5"
        >
          <div className={newLocal}>
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-warm p-8 lg:col-span-3 lg:p-12">
            <div className="flex items-center gap-3 text-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {featuredNews.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-ink/20" />
              <span className="text-ink/40">{featuredNews.date}</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl leading-tight text-ink">
              <Link
                href="/notices"
                className="transition-colors duration-150 hover:text-primary"
              >
                {featuredNews.title}
              </Link>
            </h3>
            <p className="text-body mt-3 text-sm">{featuredNews.excerpt}</p>
            <Link
              href="/notices"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Read full story
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.article>

        {/* remaining notices — a headline list, not another row of cards */}
        <div className="mt-2 border-t border-ink/10">
          {remainingNews.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group flex items-center gap-5 border-b border-ink/10 py-5"
            >
              <div className="relative hidden h-16 w-20 shrink-0 overflow-hidden border border-ink/10 sm:block">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                  <span className="text-ink/40">{item.date}</span>
                </div>
                <h3 className="mt-1 truncate text-sm font-semibold text-ink sm:text-base">
                  <Link
                    href="/notices"
                    className="transition-colors duration-150 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-body mt-1 line-clamp-1 text-xs sm:text-sm">
                  {item.excerpt}
                </p>
              </div>

              <ArrowRight
                size={16}
                className="hidden shrink-0 text-ink/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:block"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
