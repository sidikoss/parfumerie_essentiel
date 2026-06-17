import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/sections/hero-section";
import FeaturesBar from "@/components/sections/features-bar";
import BrandsSection from "@/components/sections/brands-section";
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import PromoBanner from "@/components/sections/promo-banner";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";
import CatalogSection from "./_sections/catalog-section";
import BlendSection from "./_sections/blend-section";
import QuizSection from "./_sections/quiz-section";
import BackToTop from "./_sections/back-to-top";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesBar />
      <CatalogSection />
      <BlendSection />
      <QuizSection />
      <BrandsSection />
      <ServicesSection />
      <AboutSection />
      <PromoBanner />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <BackToTop />
    </>
  );
}
