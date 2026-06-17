"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useFavorites } from "@/contexts/favorites-context";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations();
  const { isFavorite, toggle } = useFavorites();
  const { addItem } = useCart();
  const fav = isFavorite(product.id);

  const categoryLabel = t(`catalog.filters.${product.category}`);

  return (
    <div className="group animate-fade-in relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-2 top-2 rounded-full bg-gold/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
          {categoryLabel}
        </span>
        <button
          onClick={() => toggle(product.id)}
          className={cn(
            "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow backdrop-blur-sm transition-colors dark:bg-charcoal/80",
            fav ? "text-red-500" : "text-gray-400 hover:text-red-400"
          )}
        >
          <Heart className={cn("h-4 w-4", fav && "fill-current")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gold">
            {product.brand}
          </p>
          <Link href={`/product/${product.id}`}>
            <h3 className="mt-1 font-serif text-base font-semibold leading-tight text-foreground transition-colors hover:text-gold">
              {product.name}
            </h3>
          </Link>
          {product.notes && (
            <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
              {product.notes}
            </p>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">
            €{product.price}
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product.id)}
            className="bg-gold text-white hover:bg-gold-dark"
          >
            <ShoppingBag className="mr-1 h-3.5 w-3.5" />
            {t("catalog.add_to_cart")}
          </Button>
        </div>
      </div>
    </div>
  );
}
