"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Cookie, X, Check } from "lucide-react";

interface CookiePrefs {
  essential: boolean;
  stats: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "lessentiel_cookie_consent";

const defaultPrefs: CookiePrefs = {
  essential: true,
  stats: false,
  marketing: false,
};

export default function CookieConsent() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      try {
        setPrefs(JSON.parse(stored));
      } catch {
        setVisible(true);
      }
    }
  }, []);

  function savePrefs(p: CookiePrefs) {
    setPrefs(p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setVisible(false);
    setCustomizeOpen(false);
  }

  function acceptAll() {
    savePrefs({ essential: true, stats: true, marketing: true });
  }

  function rejectAll() {
    savePrefs({ essential: true, stats: false, marketing: false });
  }

  function saveCustom() {
    savePrefs(prefs);
  }

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm text-muted-foreground">{t("cookie.text")}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={rejectAll}>
                <X className="mr-1 h-3.5 w-3.5" />
                {t("cookie.reject")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCustomizeOpen(true)}
              >
                {t("cookie.settings")}
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="bg-gold text-white hover:bg-gold-dark"
              >
                <Check className="mr-1 h-3.5 w-3.5" />
                {t("cookie.accept_all")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={customizeOpen} onOpenChange={setCustomizeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("cookie.modal_title")}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {(
              [
                { key: "essential", desc: t("cookie.essential_desc"), disabled: true },
                { key: "stats", desc: t("cookie.stats_desc"), disabled: false },
                { key: "marketing", desc: t("cookie.marketing_desc"), disabled: false },
              ] as const
            ).map((cat) => (
              <div
                key={cat.key}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <p className="text-sm font-medium">
                    {t(`cookie.${cat.key}`)}
                  </p>
                  <p className="text-xs text-muted-foreground">{cat.desc}</p>
                </div>
                <button
                  disabled={cat.disabled}
                  onClick={() =>
                    setPrefs((prev) => ({
                      ...prev,
                      [cat.key]: !prev[cat.key],
                    }))
                  }
                  className={cn(
                    "relative h-6 w-11 rounded-full transition-colors",
                    prefs[cat.key]
                      ? "bg-gold"
                      : "bg-muted-foreground/30",
                    cat.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
                      prefs[cat.key] && "translate-x-5"
                    )}
                  />
                </button>
              </div>
            ))}
          </div>
          <Button
            onClick={saveCustom}
            className="w-full bg-gold text-white hover:bg-gold-dark"
          >
            {t("cookie.save")}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
