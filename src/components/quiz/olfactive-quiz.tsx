"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { ShoppingBag, RotateCcw, ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/types";

type Answer = string | null;

const questions = [
  {
    id: "occasion",
    prompt: "Quand portez-vous du parfum ?",
    options: [
      { value: "day", label: "Jour", icon: "☀️" },
      { value: "evening", label: "Soirée", icon: "🌙" },
      { value: "both", label: "Les deux", icon: "✨" },
      { value: "special", label: "Occasions spéciales", icon: "🎉" },
    ],
  },
  {
    id: "scent",
    prompt: "Quelles senteurs préférez-vous ?",
    options: [
      { value: "floral", label: "Floral", icon: "🌸" },
      { value: "woody", label: "Boisé", icon: "🌲" },
      { value: "fresh", label: "Frais", icon: "🌊" },
      { value: "oriental", label: "Oriental", icon: "🌙" },
      { value: "gourmand", label: "Gourmand", icon: "🍯" },
    ],
  },
  {
    id: "intensity",
    prompt: "Quelle intensité ?",
    options: [
      { value: "light", label: "Léger", icon: "☁️" },
      { value: "medium", label: "Moyen", icon: "🌤️" },
      { value: "intense", label: "Intense", icon: "🔥" },
    ],
  },
];

function recommendProduct(
  answers: [string, string, string]
): Product | null {
  const [occasion, scent, intensity] = answers;

  const score = new Map<number, number>();
  for (const p of products) {
    score.set(p.id, 0);
  }

  for (const p of products) {
    let s = 0;

    if (occasion === "evening" || occasion === "special") {
      if (
        ["niche", "coffrets"].includes(p.category) ||
        p.name.toLowerCase().includes("noir") ||
        p.name.toLowerCase().includes("black")
      )
        s += 3;
      if (p.price >= 100) s += 2;
    }

    if (occasion === "day") {
      if (
        p.name.toLowerCase().includes("light") ||
        p.name.toLowerCase().includes("acqua") ||
        p.category === "homme"
      )
        s += 2;
      if (p.price < 100) s += 1;
    }

    if (scent === "floral") {
      if (
        p.notes?.toLowerCase().includes("rose") ||
        p.notes?.toLowerCase().includes("jasmin") ||
        p.notes?.toLowerCase().includes("floral") ||
        p.category === "femme"
      )
        s += 3;
    }
    if (scent === "woody") {
      if (
        p.notes?.toLowerCase().includes("bois") ||
        p.notes?.toLowerCase().includes("cèdre") ||
        p.notes?.toLowerCase().includes("santal") ||
        p.notes?.toLowerCase().includes("vétiver") ||
        p.category === "niche"
      )
        s += 3;
    }
    if (scent === "fresh") {
      if (
        p.notes?.toLowerCase().includes("agrum") ||
        p.notes?.toLowerCase().includes("bergamote") ||
        p.notes?.toLowerCase().includes("citron") ||
        p.notes?.toLowerCase().includes("aquatique") ||
        p.name.toLowerCase().includes("light") ||
        p.name.toLowerCase().includes("acqua")
      )
        s += 3;
    }
    if (scent === "oriental") {
      if (
        p.notes?.toLowerCase().includes("orient") ||
        p.notes?.toLowerCase().includes("ambre") ||
        p.notes?.toLowerCase().includes("musc") ||
        p.notes?.toLowerCase().includes("vanille")
      )
        s += 3;
    }
    if (scent === "gourmand") {
      if (
        p.notes?.toLowerCase().includes("vanille") ||
        p.notes?.toLowerCase().includes("cacao") ||
        p.notes?.toLowerCase().includes("caramel") ||
        p.notes?.toLowerCase().includes("gourmand") ||
        p.notes?.toLowerCase().includes("praline")
      )
        s += 3;
    }

    if (intensity === "light") {
      if (p.price < 80) s += 1;
    }
    if (intensity === "intense") {
      if (p.price >= 100 || p.popularity > 90) s += 2;
    }

    score.set(p.id, s);
  }

  let bestId = 0;
  let bestScore = -1;
  for (const [id, s] of score) {
    if (s > bestScore) {
      bestScore = s;
      bestId = id;
    }
  }

  return products.find((p) => p.id === bestId) ?? products[0];
}

export default function OlfactiveQuiz() {
  const t = useTranslations();
  const { addItem } = useCart();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<[Answer, Answer, Answer]>([
    null,
    null,
    null,
  ]);

  const currentQuestion = questions[step];
  const isComplete = step === questions.length;
  const progress = (step / questions.length) * 100;

  const recommended = useMemo(() => {
    if (!isComplete) return null;
    const valid = answers.filter((a): a is string => a !== null);
    if (valid.length < 3) return null;
    return recommendProduct(valid as [string, string, string]);
  }, [isComplete, answers]);

  function selectOption(value: string) {
    const next = [...answers] as [Answer, Answer, Answer];
    next[step] = value;
    setAnswers(next);
  }

  function handleNext() {
    if (answers[step] && step < questions.length - 1) {
      setStep((s) => s + 1);
    } else if (answers[step] && step === questions.length - 1) {
      setStep((s) => s + 1);
    }
  }

  function handlePrev() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleRetry() {
    setStep(0);
    setAnswers([null, null, null]);
  }

  return (
    <div className="mx-auto max-w-xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Question {Math.min(step + 1, questions.length)} sur{" "}
            {questions.length}
          </span>
          <span className="text-gold">{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      {!isComplete && currentQuestion && (
        <div className="animate-fade-in">
          <h3 className="mb-6 text-center font-serif text-xl font-semibold">
            {currentQuestion.prompt}
          </h3>
          <div
            className={cn(
              "grid gap-3",
              currentQuestion.options.length <= 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
            )}
          >
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectOption(opt.value)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all",
                  answers[step] === opt.value
                    ? "border-gold bg-gold/5 shadow-md"
                    : "border-border/50 hover:border-gold/50 hover:bg-muted/50"
                )}
              >
                <span className="text-xl">{opt.icon}</span>
                <span className="font-medium text-sm">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result */}
      {isComplete && recommended && (
        <div className="animate-fade-in">
          <h3 className="mb-2 text-center font-serif text-2xl font-semibold">
            {t("quiz.result")}
          </h3>
          <div className="mt-6 overflow-hidden rounded-xl border shadow-lg">
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src={recommended.image}
                alt={recommended.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {recommended.brand}
              </p>
              <h4 className="mt-1 font-serif text-xl font-bold">
                {recommended.name}
              </h4>
              {recommended.notes && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {recommended.notes}
                </p>
              )}
              <p className="mt-1 text-sm leading-relaxed">
                {recommended.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-gold">
                  €{recommended.price}
                </span>
                <Button
                  onClick={() => addItem(recommended.id)}
                  className="bg-gold text-white hover:bg-gold-dark"
                >
                  <ShoppingBag className="mr-1 h-4 w-4" />
                  Ajouter au panier
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <div>
          {step > 0 && !isComplete && (
            <Button variant="outline" onClick={handlePrev}>
              <ArrowLeft className="mr-1 h-4 w-4" />
              {t("quiz.prev")}
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          {isComplete ? (
            <Button variant="outline" onClick={handleRetry}>
              <RotateCcw className="mr-1 h-4 w-4" />
              {t("quiz.retry")}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!answers[step]}
              className="bg-gold text-white hover:bg-gold-dark disabled:opacity-50"
            >
              {step < questions.length - 1 ? (
                <>
                  {t("quiz.next")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </>
              ) : (
                "Voir mon résultat"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
