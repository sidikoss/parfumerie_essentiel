import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TestimonialsSection from "@/components/sections/testimonials-section";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reviews" });
  return {
    title: `${t("title")} | L'Essentiel`,
    description: t("subtitle"),
  };
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-24">
      <TestimonialsSection />
    </main>
  );
}
