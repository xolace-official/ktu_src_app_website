"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
            aria-expanded={open === i}
          >
            <span className="text-sm font-medium">{item.question}</span>
            <CaretDown
              className={`size-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              open === i ? "max-h-60" : "max-h-0"
            }`}
          >
            <p className="px-5 pb-4 pt-1 text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
