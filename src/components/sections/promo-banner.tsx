"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Gift, Shield, Sparkles } from "lucide-react";

function Countdown({ target }: { target: Date }) {
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    function tick() {
      const now = new Date().getTime();
      const diff = target.getTime() - now;
      if (diff <= 0) {
        setRemaining("00:00:00");
        return;
      }
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setRemaining(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <span className="font-mono text-2xl font-bold tracking-widest text-gold">
      {remaining}
    </span>
  );
}

export default function PromoBanner() {
  const t = useTranslations();

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  return (
    <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          {t("promo.title")}
        </h2>
        <p className="mt-2 text-white/80">{t("promo.subtitle")}</p>
        <div className="mt-6">
          <Countdown target={targetDate} />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { icon: Gift, text: t("promo.free_shipping") },
            { icon: Shield, text: t("promo.authentic") },
            { icon: Sparkles, text: t("promo.sample") },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <Icon className="h-4 w-4" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
