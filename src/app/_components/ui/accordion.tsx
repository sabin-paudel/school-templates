"use client";

import { Plus } from "lucide-react";
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
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-lg border bg-white transition-colors ${
              isOpen ? "border-primary/30" : "border-line"
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-bold text-ink sm:text-base">{item.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                  isOpen
                    ? "rotate-45 border-accent bg-accent text-primary-darker"
                    : "border-line bg-warm text-primary"
                }`}
              >
                <Plus size={16} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-body border-t border-line px-5 pb-5 pt-4 text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
