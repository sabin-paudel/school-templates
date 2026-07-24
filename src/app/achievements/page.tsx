import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { achievements, school } from "../_data/site-content";
import PageBanner from "../_components/ui/page-banner";
import { nepaliSchoolImages } from "../_data/site-images";
import Reveal from "../_components/ui/reveal";

export default function AchievementsPage() {
  return (
    <>
      <PageBanner
        label="Achievements"
        title="Every milestone tells a story."
        description="A collection of competitions, awards, championships, and milestones that reflect our continuous journey of growth and excellence."
        image={nepaliSchoolImages.students}
        imageAlt="Students at Aatreya Academy"
      />

      <section className="section-pad bg-warm relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary shadow-lg">
              <Trophy size={28} className="text-white" />
            </div>
            <div>
              <p className="label">Our Milestones</p>
              <h2 className="heading-md mt-1 text-ink">A legacy of excellence</h2>
            </div>
          </div>
          <div className="space-y-16">
            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article
                  className={`grid items-center gap-12 ${
                    index % 2 === 0
                      ? "lg:grid-cols-[1fr_1.2fr]"
                      : "lg:grid-cols-[1.2fr_1fr]"
                  }`}
                >
                  <div className={index % 2 ? "lg:order-2" : ""}>
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1.5 rounded-xl shadow-sm">
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 ? "lg:order-1" : ""}>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      <span className="w-6 h-px bg-primary" />
                      {item.year}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="text-body mt-4 max-w-xl">
                      {item.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px bg-white/15" />
            <Trophy size={24} className="text-white/40" />
            <span className="w-8 h-px bg-white/15" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            More milestones are on the way.
          </h3>
          <p className="mt-3 text-white/55">
            Every achievement motivates us to aim even higher.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white hover:bg-white/20 px-6 py-3 text-sm font-semibold transition-all duration-200 mt-8">
            Learn more about us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
