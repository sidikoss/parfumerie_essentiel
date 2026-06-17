import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'Essentiel — Parfumerie & Création sur Mesure | Rocourt, Liège",
  description:
    "Parfumerie de luxe à Rocourt (Liège). Parfums 100% authentiques, création sur mesure, conseils personnalisés. CHANEL, DIOR, CREED, Tom Ford et bien d'autres.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon.svg",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
