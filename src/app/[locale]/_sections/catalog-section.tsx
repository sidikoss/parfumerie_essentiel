"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ProductFilters from "@/components/catalog/product-filters";
import ProductGrid from "@/components/catalog/product-grid";

export default function CatalogSection() {
  const t = useTranslations();
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([300]);
  const [sort, setSort] = useState("popularity");

  return (
    <section id="catalog" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("catalog.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("catalog.subtitle")}</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <ProductFilters
          category={category}
          priceRange={priceRange}
          sort={sort}
          onCategoryChange={setCategory}
          onPriceChange={setPriceRange}
          onSortChange={setSort}
        />
        <div className="mt-8">
          <ProductGrid
            category={category}
            priceRange={priceRange}
            sort={sort}
          />
        </div>
      </div>
    </section>
  );
}
