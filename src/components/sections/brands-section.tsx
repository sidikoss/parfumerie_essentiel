"use client";

import { useTranslations } from "next-intl";

const brands = [
  "CHANEL",
  "DIOR",
  "CREED",
  "TOM FORD",
  "BYREDO",
  "YSL",
  "LANCÔME",
  "MFK",
  "JO MALONE",
  "HERMÈS",
  "GIVENCHY",
  "VERSACE",
  "ARMANI",
  "VIKTOR & ROLF",
  "ARMAF",
  "JO MALONE",
];

export default function BrandsSection() {
  const t = useTranslations();

  return (
    <section className="bg-charcoal py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-white sm:text-3xl">
          {t("brands.title")}
        </h2>
        <div className="scrollbar-hide overflow-x-auto">
          <div className="flex animate-fade-in items-center gap-10 sm:justify-center sm:gap-14">
            {brands.map((brand) => (
              <span
                key={brand}
                className="shrink-0 text-sm font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-gold sm:text-base"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
