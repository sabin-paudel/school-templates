"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, ChevronDown } from "lucide-react";
import { faqs } from "../../_data/site-content";

export default function AdmissionsFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Enrollment CTA */}
          <div className="lg:col-span-5 bg-primary text-white rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-[100px] -z-0" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[80px] -z-0" />

            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-[10px] font-bold text-accent/80 uppercase tracking-widest block">Apply Online</span>
                <h3 className="heading-lg mt-1 text-white">Enrollment Portal</h3>
                <p className="text-white/70 text-xs mt-2 leading-relaxed">
                  Ready to join Aatreya Academy? Follow our direct four-step streamlined admission roadmap.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { nr: "1", title: "Submit Enquiry Form", desc: "Fill out our quick 3-minute online enquiry form." },
                  { nr: "2", title: "Guided Campus Tour", desc: "Schedule a tour of our Pokhara campus grounds." },
                  { nr: "3", title: "Interaction & Evaluation", desc: "A brief friendly check-in with our head team." },
                  { nr: "4", title: "Secured Admission", desc: "Confirm enrollment and uniform collections." },
                ].map((step) => (
                  <div key={step.nr} className="flex gap-4">
                    <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white font-extrabold text-xs shrink-0 border border-white/10">
                      {step.nr}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                      <p className="text-[11px] text-white/60 mt-0.5 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-10 border-t border-white/10 mt-10">
              <Link
                href="/admissions"
                className="btn btn-white w-full justify-center group"
              >
                <GraduationCap size={18} />
                <span>Start Admissions Journey</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">Got Questions?</span>
              <h2 className="heading-lg text-ink">
                Frequently Asked <span className="text-primary font-bold">Inquiries</span>
              </h2>
              <p className="text-muted mt-2 text-sm">
                Find direct answers about age qualifications, admissions schedules, fee guidelines, transport, and curriculum standards.
              </p>
            </div>

            <div className="bg-warm border border-line rounded-3xl p-6 lg:p-8">
              <div className="divide-y divide-line">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-ink hover:text-primary transition-colors py-2"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      >
                        <span>{faq.question}</span>
                        <div className={`size-8 rounded-full bg-white flex items-center justify-center border border-line shadow-sm text-light transition-all shrink-0 ${
                          isOpen ? "rotate-180 bg-primary-light border-primary/20 text-primary" : ""
                        }`}>
                          <ChevronDown size={16} />
                        </div>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-muted leading-relaxed pb-2 pl-1 pr-6">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
