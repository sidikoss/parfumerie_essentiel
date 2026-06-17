"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-[70dvh] items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-2 to-charcoal px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c9a96e15_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-block animate-fade-in rounded-full bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wider text-gold">
          {t("hero.badge")}
        </span>
        <h1 className="animate-slide-up mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="animate-slide-up mt-4 text-base text-gray-300 sm:text-lg">
          {t("hero.subtitle")}
        </p>
        <p className="animate-fade-in mt-2 text-sm text-gold/80">
          {t("hero.tagline")}
        </p>
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="#catalog">
            <Button className="h-12 bg-gold px-8 text-base text-white hover:bg-gold-dark">
              {t("hero.cta_selection")}
            </Button>
          </Link>
          <Link href="#blend">
            <Button
              variant="outline"
              className="h-12 border-gold/50 px-8 text-base text-gold hover:bg-gold/10"
            >
              {t("hero.cta_blend")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
