"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations();
  const points = t.raw("about.points") as string[];

  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("about.title")}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
            {t("about.subtitle")}
          </h2>
          <p className="mt-2 text-gold/80">{t("about.tagline")}</p>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gold" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {t("about.text1")}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t("about.text2")}
          </p>
          <ul className="mt-8 space-y-3 text-left">
            {points.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
