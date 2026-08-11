import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";

export default function StatsSection() {
  return (
    <section className="bg-charcoal text-white">
      <div className="container py-20 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="label mb-4 !text-white/45">At a Glance</p>
            <h2 className="display-md text-white">The school in numbers.</h2>
          </div>
          <p className="text-sm leading-relaxed text-white/55 lg:pb-2">
            Twenty-four years of learning in Pokhara, measured in students,
            results, and care.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-white/15 px-2 pb-2 pt-9 lg:px-8 lg:pt-11">
              <Counter value={s.value} suffix={s.suffix} label={s.label} light />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
