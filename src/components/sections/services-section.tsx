"use client";

import { useTranslations } from "next-intl";
import { Gem, FlaskConical, Users, Truck } from "lucide-react";

const services = [
  { icon: Gem, key: "luxury" },
  { icon: FlaskConical, key: "custom" },
  { icon: Users, key: "advice" },
  { icon: Truck, key: "delivery" },
] as const;

export default function ServicesSection() {
  const t = useTranslations();

  return (
    <section id="services" className="bg-warm-beige py-20 dark:bg-charcoal-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("services.title")}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="group animate-fade-in rounded-xl border border-border/50 bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 transition-colors group-hover:bg-gold/20">
                <Icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold">
                {t(`services.${key}`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`services.${key}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
