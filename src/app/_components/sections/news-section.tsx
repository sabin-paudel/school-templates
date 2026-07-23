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

  return (
    <section id="notices" className="relative bg-white overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-main relative">
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
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            }
          />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid rounded-2xl overflow-hidden bg-warm shadow-sm hover:shadow-xl transition-all duration-300 lg:grid-cols-5 group"
        >
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-2 lg:aspect-auto min-h-[340px]">
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 font-semibold text-primary uppercase tracking-wider">
                {featuredNews.category}
              </span>
              <span className="text-ink/40">{featuredNews.date}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink leading-tight">
              <Link href="/notices" className="hover:text-primary transition-colors duration-150">
                {featuredNews.title}
              </Link>
            </h3>
            <p className="text-body mt-2 text-sm">{featuredNews.excerpt}</p>
            <Link
              href="/notices"
              className="group inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-primary"
            >
              Read full story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.article>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {remainingNews.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 * (i + 1) }}
              className="group bg-warm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 font-semibold text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-ink/40">{item.date}</span>
                </div>
                <h3 className="mt-3 font-bold text-ink">
                  <Link href="/notices" className="hover:text-primary transition-colors duration-150">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-body text-sm mt-1.5 line-clamp-2">{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
