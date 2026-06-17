import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BlendSection from "../_sections/blend-section";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blend" });
  return {
    title: `${t("title")} | L'Essentiel`,
    description: t("subtitle"),
  };
}

export default function BlendsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlendSection />
      </div>
    </main>
  );
}
