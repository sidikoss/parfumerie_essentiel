"use client";

import { useTranslations } from "next-intl";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { products, SOCIAL_LINKS } from "@/data/products";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

interface CartSheetProps {
  onClose?: () => void;
}

export default function CartSheet({ onClose }: CartSheetProps) {
  const t = useTranslations();
  const { items, updateQuantity, removeItem } = useCart();

  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter(Boolean);

  const total = cartItems.reduce(
    (sum, item) => sum + item!.product.price * item!.quantity,
    0
  );

  function buildWhatsAppOrder() {
    const lines = cartItems.map(
      (item) =>
        `• ${item!.product.name} (x${item!.quantity}) — €${(
          item!.product.price * item!.quantity
        ).toFixed(2)}`
    );
    const message = [
      "Bonjour ! Je souhaite commander :",
      ...lines,
      "",
      `Total : €${total.toFixed(2)}`,
    ].join("\n");
    return `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b pb-4">
        <h2 className="font-serif text-xl font-bold">{t("cart.title")}</h2>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ShoppingBag className="mb-3 h-10 w-10 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">{t("cart.empty")}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item!.product.id}
                className="flex gap-3 rounded-lg border p-3"
              >
                <img
                  src={item!.product.image}
                  alt={item!.product.name}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm font-medium leading-tight">
                      {item!.product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item!.product.brand}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gold">
                      €{item!.product.price}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(
                            item!.product.id,
                            item!.quantity - 1
                          )
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item!.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(
                            item!.product.id,
                            item!.quantity + 1
                          )
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        €{(item!.product.price * item!.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item!.product.id)}
                        className="text-muted-foreground hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t pt-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-base font-semibold">{t("cart.total")}</span>
            <span className="text-xl font-bold text-gold">
              €{total.toFixed(2)}
            </span>
          </div>
          <a
            href={buildWhatsAppOrder()}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-gold text-white hover:bg-gold-dark">
              {t("cart.checkout")}
            </Button>
          </a>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {t("cart.or_call")}
          </p>
        </div>
      )}
    </div>
  );
}
