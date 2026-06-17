"use client";

import { useTranslations } from "next-intl";
import BlendConfigurator from "@/components/blend/blend-configurator";

export default function BlendSection() {
  const t = useTranslations();

  return (
    <section id="blend" className="bg-warm-beige py-20 dark:bg-charcoal-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("blend.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("blend.subtitle")}</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <BlendConfigurator />
      </div>
    </section>
  );
}
