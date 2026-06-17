"use client";

import { useTranslations } from "next-intl";
import { testimonials } from "@/data/products";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const t = useTranslations();

  return (
    <section id="reviews" className="bg-warm-beige py-20 dark:bg-charcoal-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("reviews.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("reviews.subtitle")}</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="animate-slide-up rounded-xl border border-border/50 bg-card p-6 shadow-sm"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.source}
                  </p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${
                      j < testimonial.rating
                        ? "fill-gold text-gold"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
