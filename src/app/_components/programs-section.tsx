import { Music2, Sparkles, Trophy, Users } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Sport",
    text: "Team games, athletics and movement build fitness, resilience and belonging.",
  },
  {
    icon: Music2,
    title: "Creative arts",
    text: "Music, drawing, craft and performance give students room to express ideas.",
  },
  {
    icon: Sparkles,
    title: "Clubs",
    text: "Robotics, debate, environment and service clubs let interests become capabilities.",
  },
  {
    icon: Users,
    title: "Leadership",
    text: "Assemblies, house activities and student councils make responsibility real.",
  },
];

export default function ProgramsSection() {
  return (
    <section className="section bg-cream/40">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-gold-dark">
            How students spend their days
          </p>
          <h2 className="section-title mt-5">More than a timetable.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-forest">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
