import { Music2, Sparkles, Trophy, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardIcon,
  CardTitle,
} from "../../components/ui/card";

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
          <p className="eyebrow text-gold-dark">How students spend their days</p>
          <h2 className="section-title mt-5">More than a timetable.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <CardIcon>
                  <Icon size={22} strokeWidth={1.8} />
                </CardIcon>
                <CardTitle className="mt-5">{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-gold-dark">
                  <span>Explore {title.toLowerCase()}</span>
                  <span className="text-sm">→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
