import Link from "next/link";
import { school } from "../../_data/site-content";
import Reveal from "../ui/reveal";

const steps = [
  {
    nr: "1",
    title: "Submit Enquiry",
    text: "Complete the quick online application form.",
  },
  {
    nr: "2",
    title: "Campus Visit",
    text: "Tour the school and meet our educators.",
  },
  {
    nr: "3",
    title: "Interaction",
    text: "A friendly check-in with the admissions team.",
  },
  {
    nr: "4",
    title: "Secure Admission",
    text: "Confirm enrolment and receive orientation.",
  },
];

export default function AdmissionsCta() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0b4020 0, #0b4020 1px, transparent 0, transparent 14px)",
        }}
      />
      <div className="container relative py-16">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-dark">
                Admissions {school.admissionSession}
              </p>
              <h2 className="display-md mt-2 text-white">
                Start your child&rsquo;s journey at {school.name}.
              </h2>
              <p className="mt-3 max-w-xl text-white/60">
                {school.admissionNote} Families may apply online or arrange a
                guided campus visit Sunday through Friday.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/admissions" className="btn btn-primary btn-lg">
                  Apply for Admission
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-white-outline btn-lg text-white! border-primary-darker/40! hover:bg-primary-darker! hover:text-white!"
                >
                  Book a Visit
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {steps.map((step) => (
                <div
                  key={step.nr}
                  className="rounded-lg bg-white/90 p-4 shadow-sm"
                >
                  <p className="font-display text-2xl font-bold text-primary">
                    {step.nr}
                  </p>
                  <p className="mt-1 text-sm font-bold">{step.title}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
