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
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-line">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="flex items-baseline gap-5">
                <span className="hidden text-xs font-semibold tracking-[0.18em] text-light sm:inline">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {item.question}
                </span>
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-ink bg-charcoal text-white"
                    : "border-line text-ink"
                }`}
              >
                <Plus size={16} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-body max-w-2xl pb-7 pl-0 text-sm sm:pl-10">
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
