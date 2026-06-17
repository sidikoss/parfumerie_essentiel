import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FaqSection from "@/components/sections/faq-section";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  return {
    title: `${t("title")} | L'Essentiel`,
    description: t("subtitle"),
  };
}

export default function FaqPage() {
  return (
    <main className="min-h-screen pt-24">
      <FaqSection />
    </main>
  );
}
