"use client";

import { useTranslations } from "next-intl";
import { products } from "@/data/products";
import ProductCard from "@/components/catalog/product-card";
import type { Product } from "@/types";

interface ProductGridProps {
  category: string;
  priceRange: number[];
  sort: string;
}

export default function ProductGrid({
  category,
  priceRange,
  sort,
}: ProductGridProps) {
  const t = useTranslations();

  let filtered: Product[] = [...products];

  if (category !== "all") {
    filtered = filtered.filter(
      (p) => p.category === category
    );
  }

  filtered = filtered.filter((p) => p.price <= priceRange[0]);

  switch (sort) {
    case "price_asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => b.popularity - a.popularity);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length}{" "}
        {filtered.length === 1 ? "produit" : "produits"}
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium text-foreground/60">
            Aucun produit trouvé
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Essayez de modifier vos filtres.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
