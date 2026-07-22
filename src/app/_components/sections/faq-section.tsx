import { faqs } from "../../_data/site-content";
import Accordion from "../ui/accordion";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function FaqSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                label="Frequently Asked Questions"
                title="Answers to common questions about admissions and school life."
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-4 p-4 bg-warm rounded-lg">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink">Email us</p>
                    <a
                      href="mailto:info@aatreya.edu.np"
                      className="text-sm text-ink-light hover:text-primary transition-colors duration-150"
                    >
                      info@aatreya.edu.np
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-warm rounded-lg">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink">Call us</p>
                    <a
                      href="tel:+97761456789"
                      className="text-sm text-ink-light hover:text-primary transition-colors duration-150"
                    >
                      +977-61-456789
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <Accordion items={faqs} />
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex items-center gap-3 px-4 py-3 bg-warm rounded-lg">
                <span className="text-sm text-ink-light">
                  Cant find what youre looking for?{" "}
                  <Link
                    href="/contact"
                    className="text-primary font-medium hover:underline"
                  >
                    Contact us
                  </Link>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
