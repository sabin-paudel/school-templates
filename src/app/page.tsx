import Image from "next/image";
import Link from "next/link";
import Reveal from "./_components/reveal";
import { nepaliSchoolImages } from "./_data/site-images";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Check,
  FlaskConical,
  Music2,
  Quote,
  Trophy,
  Users,
} from "lucide-react";

const programs = [
  {
    ages: "Ages 3–5",
    title: "Early Years",
    description:
      "A thoughtful start built around play, language, movement and confident first steps into learning.",
    image: nepaliSchoolImages.students,
  },
  {
    ages: "Grades 1–5",
    title: "Primary School",
    description:
      "Strong foundations in literacy and numeracy, enriched by science, arts and collaborative discovery.",
    image: nepaliSchoolImages.classroom,
  },
  {
    ages: "Grades 6–10",
    title: "Secondary School",
    description:
      "Rigorous academics, practical learning and personal guidance for capable, responsible young adults.",
    image: nepaliSchoolImages.schoolGroup,
  },
];

const experiences = [
  {
    icon: FlaskConical,
    title: "Learning by doing",
    text: "Purpose-built science and technology spaces turn theory into practical understanding.",
  },
  {
    icon: Trophy,
    title: "Room to compete",
    text: "A balanced sports program builds fitness, teamwork, resilience and school spirit.",
  },
  {
    icon: Music2,
    title: "Creative confidence",
    text: "Music, visual arts and performance help every student find and strengthen their voice.",
  },
  {
    icon: Users,
    title: "A caring community",
    text: "Small class groups and attentive mentors mean each learner is seen, known and supported.",
  },
];

const news = [
  {
    date: "18 July 2026",
    title: "Horizon students lead the regional science showcase",
    category: "Achievement",
    image: nepaliSchoolImages.classroom,
  },
  {
    date: "02 July 2026",
    title: "A week of books, authors and student-led storytelling",
    category: "Campus life",
    image: nepaliSchoolImages.villageStudents,
  },
  {
    date: "24 June 2026",
    title: "Our senior football team brings home the district cup",
    category: "Sports",
    image: nepaliSchoolImages.students,
  },
];

export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="hero-section relative isolate overflow-hidden bg-cream"
      >
        <div
          className="hero-grid absolute inset-y-0 right-0 hidden w-[52%] lg:block"
          aria-hidden="true"
        />
        <div
          className="absolute -left-16 top-20 size-44 rounded-full border border-gold/35"
          aria-hidden="true"
        />
        <div className="section-shell relative grid min-h-190 items-center gap-14 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:py-20">
          <Reveal direction="left" className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold-dark" />
              <p className="eyebrow text-gold-dark">
                Admissions open · 2026–27
              </p>
            </div>
            <h1 className="mt-7 font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-forest sm:text-6xl lg:text-[78px]">
              A modern school for{" "}
              <span className="relative whitespace-nowrap">
                curious minds.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-gold"
                  viewBox="0 0 320 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10C86 2 223 3 317 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Horizon Academy combines strong academics, thoughtful teaching and
              a rich school life so every student can learn with purpose and
              step forward with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions" className="button button-dark group">
                Begin an application{" "}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link href="/contact" className="button button-outline-dark">
                Book a school visit
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6 text-sm font-semibold text-forest/70">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-gold-dark" /> Ages 3–16
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-gold-dark" /> Pokhara, Nepal
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-gold-dark" /> Since 2002
              </span>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.12}
            className="relative min-h-135 lg:min-h-162.5"
          >
            <div
              className="absolute right-0 top-0 h-[82%] w-[92%] bg-gold"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 h-[90%] w-[92%] overflow-hidden border-10 border-cream sm:border-14">
              <Image
                src={nepaliSchoolImages.campus}
                alt="Students outside a school campus in Kailali, Nepal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>

            <div
              className="academic-mark absolute -left-3.5 top-6 hidden size-28 items-center justify-center bg-forest text-gold-light shadow-xl sm:flex"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-3"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <path
                  d="M50 5V18M95 50H82M50 95V82M5 50H18"
                  stroke="currentColor"
                />
              </svg>
              <BookOpenCheck size={34} strokeWidth={1.4} />
            </div>

            <div className="absolute bottom-8 right-0 max-w-65 bg-forest px-6 py-5 text-white shadow-xl sm:px-7 sm:py-6">
              <p className="font-serif text-3xl text-gold-light">700+</p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                students learning, creating and growing together
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-360 grid-cols-2 divide-x divide-line px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            ["24", "Years of learning"],
            ["14:1", "Student–teacher ratio"],
            ["32", "Clubs and activities"],
            ["98%", "Board exam success"],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-8 text-center sm:py-10">
              <p className="font-serif text-3xl text-forest sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section bg-cream">
        <Reveal className="section-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="relative min-h-130">
            <Image
              src={nepaliSchoolImages.villageStudents}
              alt="School students in rural Nepal"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
            <div className="absolute -bottom-7 right-0 max-w-65 border-l-4 border-gold bg-forest p-6 text-white sm:-right-7">
              <p className="font-serif text-xl leading-snug">
                “Every child should feel known, capable and inspired.”
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/55">
                Our founding belief
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold-dark">Welcome to Horizon</p>
            <h2 className="section-title mt-5">
              A school built around how children grow.
            </h2>
            <p className="mt-7 text-lg leading-8 text-muted">
              Since 2002, we have brought together ambitious teaching and
              genuine care. Our students are challenged to think deeply,
              communicate clearly and act with integrity—inside the classroom
              and beyond it.
            </p>
            <p className="mt-5 leading-7 text-muted">
              The result is an environment that feels purposeful without being
              pressured: structured, welcoming and full of possibility.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced, caring faculty",
                "National curriculum with global outlook",
                "Safe and inclusive campus",
                "Strong family partnership",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-ink"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-gold text-forest">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/about" className="text-link mt-10">
              Discover our approach <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="academics" className="section bg-paper">
        <Reveal className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-gold-dark">Learning at every stage</p>
              <h2 className="section-title mt-5 max-w-2xl">
                A clear path from first questions to bold ambitions.
              </h2>
            </div>
            <Link href="/academics" className="text-link shrink-0">
              View all programs <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {programs.map((program) => (
              <article key={program.title} className="group bg-paper">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={program.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-x border-b border-line p-7 lg:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
                    {program.ages}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-forest">
                    {program.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">
                    {program.description}
                  </p>
                  <Link
                    href="/academics"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest"
                  >
                    Explore program <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="community" className="section bg-forest text-white">
        <Reveal className="section-shell grid gap-16 lg:grid-cols-[1fr_1.08fr] lg:gap-24">
          <div>
            <p className="eyebrow text-gold-light">Beyond the classroom</p>
            <h2 className="section-title mt-5 text-gold">
              A full school life makes capable people.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Education is also the friendships made, the courage practiced and
              the interests discovered along the way. Our campus gives students
              the space and support to try more.
            </p>
            <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {experiences.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-t border-white/20 pt-6">
                  <Icon
                    className="text-gold-light"
                    size={25}
                    strokeWidth={1.7}
                  />
                  <h3 className="mt-5 font-serif text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-162.5">
            <Image
              src={nepaliSchoolImages.classroom}
              alt="Students learning together in a Nepali classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="section overflow-hidden bg-paper">
        <Reveal className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-gold-dark">Life at Horizon</p>
              <h2 className="section-title mt-5">
                Moments from our school community.
              </h2>
            </div>
            <Link href="/gallery" className="text-link shrink-0">
              Explore the gallery <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-12 grid auto-rows-57.5 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden sm:row-span-2 lg:col-span-2">
              <Image
                src={nepaliSchoolImages.students}
                alt="Nepali students and their headteacher outside school"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="group relative overflow-hidden lg:col-span-2">
              <Image
                src={nepaliSchoolImages.ruralCampus}
                alt="A school campus in Baitadi, Nepal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="group relative overflow-hidden">
              <Image
                src={nepaliSchoolImages.villageStudents}
                alt="Students in rural Nepal"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between bg-gold p-7 text-forest">
              <p className="font-serif text-3xl">
                Learning is bigger than a classroom.
              </p>
              <Link
                href="/school-life"
                className="inline-flex items-center gap-2 text-sm font-bold"
              >
                Discover school life <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="admissions" className="bg-gold py-16 sm:py-20">
        <Reveal className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-forest/65">Admissions 2026–27</p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-forest sm:text-5xl">
              The best way to understand Horizon is to experience it.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-forest/70">
              Tour the campus, meet our educators and see a regular school day
              in action. Our admissions team will guide you through every step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact" className="button button-dark">
              Schedule a visit <ArrowRight size={18} />
            </Link>
            <Link href="/admissions" className="button button-outline-dark">
              Apply for admission
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="notices" className="section bg-cream">
        <Reveal className="section-shell">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow text-gold-dark">School updates</p>
              <h2 className="section-title mt-5">
                Notices &amp; announcements
              </h2>
            </div>
            <Link href="/notices" className="text-link hidden sm:inline-flex">
              All notices <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-3/2 overflow-hidden bg-line">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-6">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
                    <span className="text-gold-dark">{item.category}</span>
                    <span className="size-1 bg-muted/50" />
                    <span className="text-muted">{item.date}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-snug text-forest">
                    {item.title}
                  </h3>
                  <Link
                    href="/notices"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest"
                  >
                    Read notice <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section bg-paper">
        <Reveal className="section-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-20">
          <div className="relative aspect-4/5 max-w-md">
            <Image
              src={nepaliSchoolImages.schoolJourney}
              alt="Students walking to school in Lalitpur, Nepal"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
          <figure>
            <Quote
              size={42}
              className="text-gold"
              fill="currentColor"
              strokeWidth={1}
            />
            <blockquote className="mt-7 font-serif text-3xl leading-[1.35] text-forest sm:text-4xl lg:text-5xl">
              Our daughter is challenged academically, but what matters most is
              that she is happy, confident and genuinely excited to go to
              school.
            </blockquote>
            <figcaption className="mt-8 border-l-2 border-gold pl-5">
              <p className="font-bold text-ink">Anisha &amp; Rohan Shrestha</p>
              <p className="mt-1 text-sm text-muted">
                Parents of a Grade 7 student
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section id="visit" className="border-t border-line bg-cream py-14">
        <Reveal className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <span className="flex size-12 shrink-0 items-center justify-center bg-forest text-gold-light">
              <CalendarDays size={23} />
            </span>
            <div>
              <h2 className="font-serif text-2xl text-forest">
                Come see a day at Horizon
              </h2>
              <p className="mt-2 text-muted">
                Private tours are available Sunday through Friday.
              </p>
            </div>
          </div>
          <Link href="/contact" className="button button-dark shrink-0">
            Request a tour <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
