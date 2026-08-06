import {
  ShieldCheck,
  Users,
  BookOpen,
  Cpu,
  Bus,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

const points = [
  {
    title: "Experienced Faculty",
    description:
      "Dedicated educators with decades of combined experience in nurturing child potential.",
    icon: Users,
  },
  {
    title: "Holistic Development",
    description:
      "Balanced focus on academic rigor, arts, athletics, character, and leadership.",
    icon: HeartHandshake,
  },
  {
    title: "Modern STEM Labs",
    description:
      "Purpose-built science and computer innovation labs with state-of-the-art equipment.",
    icon: Cpu,
  },
  {
    title: "National Curriculum",
    description:
      "Rigorous framework enriched with inquiry-based learning and global perspectives.",
    icon: BookOpen,
  },
  {
    title: "Safe Transportation",
    description:
      "GPS-tracked school bus routes spanning across the entire Pokhara valley.",
    icon: Bus,
  },
  {
    title: "Inclusive & Secure",
    description:
      "A welcoming, disciplined, and supportive environment where every child belongs.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Why Choose Our School"
          title="Building character, curiosity, and capability."
          description="Discover what makes Aatreya Academy the trusted choice for families seeking excellence in education."
        />

        <div className="mt-12 flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal
                key={point.title}
                delay={index * 0.05}
                className="w-[280px] sm:w-auto shrink-0 snap-start h-full flex"
              >
                <div className="card h-full p-8 transition-colors hover:border-primary w-full flex flex-col justify-between">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon size={28} />
                    </div>
                    <h3 className="wp-title mt-6 text-xl whitespace-nowrap">
                      {point.title}
                    </h3>
                    <p className="text-body mt-3 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
