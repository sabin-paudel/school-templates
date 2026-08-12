import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-near-black text-white">
      {/* Ghost years mark */}
      <span
        aria-hidden
        className="label-ghost pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 text-[16vw] leading-none text-white/[0.04] lg:block"
      >
        Est.
      </span>

      <div className="container relative py-24 lg:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <p className="label mb-5 !text-white/45">At a Glance</p>
            <h2 className="display-lg text-white">The school, in numbers.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/55 lg:justify-self-end lg:pb-3 lg:text-right">
            Twenty-four years of learning in Pokhara, measured in students,
            results, and care.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-t border-white/15 px-2 pb-2 pt-10 lg:px-10 lg:pt-12"
            >
              <Counter value={s.value} suffix={s.suffix} label={s.label} light />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
