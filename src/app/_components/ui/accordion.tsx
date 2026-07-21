"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly FaqItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-medium text-navy">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="prose-body max-w-3xl text-sm">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
