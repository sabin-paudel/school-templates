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
    <div className="divide-y divide-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-medium text-ink sm:text-base">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-ink-light transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="text-body text-sm">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
