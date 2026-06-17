"use client";

import { useTranslations } from "next-intl";
import { Shield, Store, Award, Sparkles } from "lucide-react";

const features = [
  { icon: Shield, key: "authentic" },
  { icon: Store, key: "pickup" },
  { icon: Award, key: "brands" },
  { icon: Sparkles, key: "custom" },
] as const;

export default function FeaturesBar() {
  const t = useTranslations();

  return (
    <section className="border-y border-border/40 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border/40 sm:grid-cols-4">
        {features.map(({ icon: Icon, key }) => (
          <div
            key={key}
            className="flex flex-col items-center justify-center gap-2 bg-card px-4 py-8 text-center"
          >
            <Icon className="h-6 w-6 text-gold" />
            <span className="text-sm font-semibold">{t(`features.${key}`)}</span>
            <span className="text-xs text-muted-foreground">
              {t(`features.${key}_desc`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
