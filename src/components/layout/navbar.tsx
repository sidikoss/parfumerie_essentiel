"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useCart } from "@/contexts/cart-context";
import { useFavorites } from "@/contexts/favorites-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CartSheet from "@/components/cart/cart-sheet";
import FavoritesSheet from "@/components/cart/favorites-sheet";
import { Search, Heart, ShoppingBag, Menu, Sun, Moon, X } from "lucide-react";
import { products } from "@/data/products";

const locales = [
  { code: "fr", label: "FR" },
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
] as const;

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { count: cartCount } = useCart();
  const { count: favCount } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: "/catalog", label: t("nav.catalog") },
    { href: "/blends", label: t("nav.blends") },
    { href: "/services", label: t("nav.services") },
    { href: "/reviews", label: t("nav.reviews") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const searchResults = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">{t("common.menu")}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-6">
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex gap-2 border-t pt-6">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      switchLocale(l.code);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "rounded-md px-3 py-1 text-sm font-medium transition-colors",
                      locale === l.code
                        ? "bg-gold text-white"
                        : "text-foreground/60 hover:text-gold"
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-wide text-gold">
            L&apos;Essentiel
          </span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="mr-2 hidden gap-1 sm:flex">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={cn(
                  "rounded-md px-2 py-1 text-xs font-semibold uppercase transition-colors",
                  locale === l.code
                    ? "bg-gold/10 text-gold"
                    : "text-foreground/40 hover:text-foreground/70"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-foreground/70 hover:text-gold"
          >
            <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-gold">
                <Search className="h-4 w-4" />
                <span className="sr-only">{t("common.search")}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <div className="flex items-center gap-3 border-b pb-4">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
              <div className="max-h-64 overflow-y-auto">
                {!searchQuery.trim() ? (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    {t("search.hint")}
                  </p>
                ) : searchResults.length === 0 ? (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    {t("search.no_results", { query: searchQuery })}
                  </p>
                ) : (
                  <div className="space-y-2 pt-2">
                    <p className="text-xs text-muted-foreground">
                      {t("search.results_for", { query: searchQuery })}
                    </p>
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-md object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {product.brand}
                          </p>
                          <p className="text-sm font-semibold text-gold">
                            €{product.price}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <Sheet open={favOpen} onOpenChange={setFavOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-foreground/70 hover:text-gold"
              >
                <Heart className="h-4 w-4" />
                {favCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                    {favCount}
                  </span>
                )}
                <span className="sr-only">{t("common.favorites")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <FavoritesSheet onClose={() => setFavOpen(false)} />
            </SheetContent>
          </Sheet>

          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-foreground/70 hover:text-gold"
              >
                <ShoppingBag className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">{t("common.cart")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <CartSheet onClose={() => setCartOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
