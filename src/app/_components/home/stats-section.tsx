import { stats } from "../../_data/site-content";
import Counter from "../ui/counter";
import SectionHeading from "../ui/section-heading";

export default function StatsSection() {
  return (
    <section className="section-pad bg-warm">
      <div className="container">
        <SectionHeading
          label="At a Glance"
          title="The school in numbers."
          description="Twenty-four years of learning in Pokhara, measured in students, results, and care."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-8">
              <Counter value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
