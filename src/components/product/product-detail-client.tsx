"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useCart } from "@/contexts/cart-context";
import { useFavorites } from "@/contexts/favorites-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SOCIAL_LINKS } from "@/data/products";
import { ShoppingBag, Heart, ArrowLeft, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const t = useTranslations();
  const { addItem } = useCart();
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(product.id);

  const categoryLabel = t(`catalog.filters.${product.category}`);
  const whatsappUrl = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(`Bonjour ! Je suis intéressé(e) par "${product.name}" (€${product.price}) — ${SOCIAL_LINKS.address}`)}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/#catalog"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-gold"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au catalogue
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <Badge className="mb-3 w-fit bg-gold/10 text-gold hover:bg-gold/20">
            {categoryLabel}
          </Badge>

          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {product.brand}
          </p>

          <h1 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-2 text-3xl font-bold text-gold">
            €{product.price}
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {product.notes && (
            <div className="mt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Notes olfactives
              </span>
              <p className="mt-1 text-sm">{product.notes}</p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={() => addItem(product.id)}
              className="bg-gold text-white hover:bg-gold-dark"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              {t("catalog.add_to_cart")}
            </Button>

            <Button
              variant="outline"
              onClick={() => toggle(product.id)}
              className={cn(
                fav ? "border-red-200 text-red-500" : "border-border"
              )}
            >
              <Heart className={cn("mr-2 h-4 w-4", fav && "fill-current")} />
              {fav ? "Retirer des favoris" : "Ajouter aux favoris"}
            </Button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Partager sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
