import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";

export default function StatsBand() {
  return (
    <section className="bg-primary border-y border-white/10">
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="relative">
              <div className="absolute right-0 top-0 h-full w-px bg-white/10 hidden md:block last:hidden" />
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
