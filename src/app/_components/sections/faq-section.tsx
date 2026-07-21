import { faqs } from "../../_data/site-content";
import Accordion from "../ui/accordion";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

export default function FaqSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              label="Frequently Asked Questions"
              title="Answers to common questions about admissions and school life."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
