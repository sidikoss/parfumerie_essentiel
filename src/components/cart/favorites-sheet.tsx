"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useFavorites } from "@/contexts/favorites-context";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Heart, ShoppingBag, X } from "lucide-react";

interface FavoritesSheetProps {
  onClose?: () => void;
}

export default function FavoritesSheet({ onClose }: FavoritesSheetProps) {
  const t = useTranslations();
  const { items, toggle } = useFavorites();
  const { addItem } = useCart();

  const favProducts = items
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b pb-4">
        <h2 className="font-serif text-xl font-bold">{t("favorites.title")}</h2>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {favProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Heart className="mb-3 h-10 w-10 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              {t("favorites.empty")}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {favProducts.map((product) => (
              <div
                key={product!.id}
                className="flex gap-3 rounded-lg border p-3"
              >
                <Image
                  src={product!.image}
                  alt={product!.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-sm font-medium leading-tight">
                    {product!.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product!.brand}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-gold">
                    €{product!.price}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-gold hover:text-gold-dark"
                    onClick={() => addItem(product!.id)}
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-muted-foreground hover:text-red-500"
                    onClick={() => toggle(product!.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
