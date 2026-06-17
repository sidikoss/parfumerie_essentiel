"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/contexts/cart-context";
import { FavoritesProvider } from "@/contexts/favorites-context";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/layout/cookie-consent";
import ChatWidget from "@/components/chat/chat-widget";

export default function ProvidersWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <FavoritesProvider>
          <ToastProvider>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieConsent />
            <ChatWidget />
            <ToastViewport />
          </ToastProvider>
        </FavoritesProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
