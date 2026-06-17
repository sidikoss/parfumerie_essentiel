"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { blendFamilies, blendIntensities, blendFormats, SOCIAL_LINKS } from "@/data/products";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, RotateCcw, Check } from "lucide-react";

export default function BlendConfigurator() {
  const t = useTranslations();
  const [step, setStep] = useState(1);
  const [family, setFamily] = useState<string | null>(null);
  const [intensity, setIntensity] = useState<string | null>(null);
  const [format, setFormat] = useState<string | null>(null);

  const selectedFamily = blendFamilies.find((f) => f.id === family);
  const selectedIntensity = blendIntensities.find((i) => i.id === intensity);
  const selectedFormat = blendFormats.find((f) => f.id === format);

  const totalPrice = selectedFormat?.price ?? 0;

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  function buildWhatsAppMessage() {
    const lines = [
      "Bonjour ! Je souhaite commander un mélange sur mesure :",
      "",
      `Famille olfactive : ${selectedFamily?.label ?? "—"}`,
      `Intensité : ${selectedIntensity?.label ?? "—"}`,
      `Format : ${selectedFormat?.label ?? "—"}`,
      `Prix : €${totalPrice}`,
    ];
    return `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  function handleNext() {
    if (step < totalSteps) setStep((s) => s + 1);
  }

  function handleBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleRestart() {
    setStep(1);
    setFamily(null);
    setIntensity(null);
    setFormat(null);
  }

  const canGoNext =
    (step === 1 && family) ||
    (step === 2 && intensity) ||
    (step === 3 && format);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {t("blend.step_of", { current: step, total: totalSteps })}
          </span>
          <span className="text-gold">{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors",
                  s < step
                    ? "bg-gold text-white"
                    : s === step
                    ? "border-2 border-gold text-gold"
                    : "border-2 border-muted-foreground/30 text-muted-foreground/50"
                )}
              >
                {s < step ? <Check className="h-3.5 w-3.5" /> : s}
              </div>
              {s < totalSteps && (
                <div
                  className={cn(
                    "hidden h-px w-12 sm:block",
                    s < step ? "bg-gold" : "bg-muted-foreground/20"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Family */}
      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="mb-6 text-center font-serif text-2xl font-semibold">
            {t("blend.step1")}
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {blendFamilies.map((f) => (
              <button
                key={f.id}
                onClick={() => setFamily(f.id)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all",
                  family === f.id
                    ? "border-gold bg-gold/5 shadow-md"
                    : "border-border/50 hover:border-gold/50 hover:bg-muted/50"
                )}
              >
                <span className="text-2xl">{f.icon}</span>
                <span className="font-semibold text-sm">{f.label}</span>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  {f.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Intensity */}
      {step === 2 && (
        <div className="animate-fade-in">
          <h3 className="mb-6 text-center font-serif text-2xl font-semibold">
            {t("blend.step2")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {blendIntensities.map((i) => (
              <button
                key={i.id}
                onClick={() => setIntensity(i.id)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border-2 p-6 text-center transition-all",
                  intensity === i.id
                    ? "border-gold bg-gold/5 shadow-md"
                    : "border-border/50 hover:border-gold/50 hover:bg-muted/50"
                )}
              >
                <span className="text-3xl">{i.icon}</span>
                <span className="font-semibold text-sm">{i.label}</span>
                <span className="text-[11px] text-muted-foreground leading-tight">
                  {i.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Format */}
      {step === 3 && (
        <div className="animate-fade-in">
          <h3 className="mb-6 text-center font-serif text-2xl font-semibold">
            {t("blend.step3")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {blendFormats.map((f) => (
              <button
                key={f.id}
                onClick={() => setFormat(f.id)}
                className={cn(
                  "flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all",
                  format === f.id
                    ? "border-gold bg-gold/5 shadow-md"
                    : "border-border/50 hover:border-gold/50 hover:bg-muted/50"
                )}
              >
                <span className="text-2xl">{f.icon}</span>
                <div className="flex-1">
                  <span className="font-semibold text-sm">{f.label}</span>
                  <p className="text-xs text-muted-foreground">
                    {f.description}
                  </p>
                </div>
                <span className="text-lg font-bold text-gold">€{f.price}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Summary (always visible at step 3) */}
      {step === 3 && selectedFamily && selectedIntensity && selectedFormat && (
        <div className="animate-slide-up mt-8 rounded-xl border-2 border-gold/30 bg-gold/5 p-6">
          <h3 className="mb-4 font-serif text-xl font-semibold text-gold">
            {t("blend.summary")}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Famille</span>
              <span className="font-medium">
                {selectedFamily.icon} {selectedFamily.label}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Intensité</span>
              <span className="font-medium">
                {selectedIntensity.icon} {selectedIntensity.label}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Format</span>
              <span className="font-medium">
                {selectedFormat.icon} {selectedFormat.label}
              </span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-gold">€{totalPrice}</span>
              </div>
            </div>
          </div>
          <a
            href={buildWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block"
          >
            <Button className="w-full bg-gold text-white hover:bg-gold-dark">
              {t("blend.order_whatsapp")}
            </Button>
          </a>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={step > 1 ? handleBack : handleRestart}
        >
          {step > 1 ? (
            <>
              <ArrowLeft className="mr-1 h-4 w-4" />
              {t("quiz.prev")}
            </>
          ) : (
            <>
              <RotateCcw className="mr-1 h-4 w-4" />
              {t("blend.restart")}
            </>
          )}
        </Button>

        {step < totalSteps ? (
          <Button
            onClick={handleNext}
            disabled={!canGoNext}
            className="bg-gold text-white hover:bg-gold-dark disabled:opacity-50"
          >
            {t("quiz.next")}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button variant="outline" onClick={handleRestart}>
            <RotateCcw className="mr-1 h-4 w-4" />
            {t("blend.restart")}
          </Button>
        )}
      </div>
    </div>
  );
}
