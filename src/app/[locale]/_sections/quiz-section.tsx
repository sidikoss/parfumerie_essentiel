"use client";

import { useTranslations } from "next-intl";
import OlfactiveQuiz from "@/components/quiz/olfactive-quiz";

export default function QuizSection() {
  const t = useTranslations();

  return (
    <section id="quiz" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("quiz.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("quiz.subtitle")}</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <OlfactiveQuiz />
      </div>
    </section>
  );
}
