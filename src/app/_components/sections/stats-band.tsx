import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";

export default function StatsBand() {
  return (
    <section className="border-b border-line bg-navy py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              light
            />
          ))}
        </div>
      </div>
    </section>
  );
}
