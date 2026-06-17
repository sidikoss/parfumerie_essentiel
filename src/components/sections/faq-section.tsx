"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const faqKeys = [
  { q: "q1", a: "a1" },
  { q: "q2", a: "a2" },
  { q: "q3", a: "a3" },
  { q: "q4", a: "a4" },
] as const;

export default function FaqSection() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-card py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("faq.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("faq.subtitle")}</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <div className="space-y-3">
          {faqKeys.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-border/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="text-sm font-medium sm:text-base">
                    {t(`faq.${item.q}`)}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border/50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                      {t(`faq.${item.a}`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
