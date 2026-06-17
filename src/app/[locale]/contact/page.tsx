import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactSection from "@/components/sections/contact-section";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: `${t("title")} | L'Essentiel`,
    description: t("subtitle"),
  };
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <ContactSection />
    </main>
  );
}
