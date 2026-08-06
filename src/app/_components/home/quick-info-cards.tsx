import Link from "next/link";
import { Calendar, FileText, Award, UserPlus, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Admissions 2026",
    description: "Apply from Early Years to Grade 9 for the new academic session.",
    icon: UserPlus,
    href: "/admissions",
    cta: "Apply Online",
    accent: "border-l-4 border-l-primary",
  },
  {
    title: "School Calendar",
    description: "Term dates, examinations, sports days, and holiday schedules.",
    icon: Calendar,
    href: "/events",
    cta: "View Calendar",
    accent: "border-l-4 border-l-accent",
  },
  {
    title: "Board Results",
    description: "98% success rate with consistent top national rankings.",
    icon: Award,
    href: "/academics",
    cta: "View Results",
    accent: "border-l-4 border-l-primary",
  },
  {
    title: "Notice Board",
    description: "Latest announcements, circulars, and important downloads.",
    icon: FileText,
    href: "/notices",
    cta: "Read Notices",
    accent: "border-l-4 border-l-accent",
  },
];

export default function QuickInfoCards() {
  return (
    <section className="relative z-20 -mt-10 mb-12">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`card bg-white p-6 shadow-md transition-transform hover:-translate-y-1 ${card.accent}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="wp-title mt-4 text-lg">{card.title}</h3>
                <p className="text-body mt-2 text-sm leading-relaxed">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-accent-dark"
                >
                  {card.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
