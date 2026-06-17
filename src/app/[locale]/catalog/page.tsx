import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CatalogSection from "../_sections/catalog-section";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return {
    title: `${t("title")} | L'Essentiel`,
    description: t("subtitle"),
  };
}

export default function CatalogPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CatalogSection />
      </div>
    </main>
  );
}
