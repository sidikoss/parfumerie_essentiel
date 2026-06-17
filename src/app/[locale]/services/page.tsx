import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ServicesSection from "@/components/sections/services-section";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: `${t("title")} | L'Essentiel`,
    description: t("luxury_desc"),
  };
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <ServicesSection />
    </main>
  );
}
