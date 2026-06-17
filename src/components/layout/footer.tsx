"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/products";
import { Facebook, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-border/40 bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-bold tracking-wide text-gold">
              L&apos;Essentiel
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {t("footer.description")}
            </p>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t("footer.services_title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/catalog" className="transition-colors hover:text-gold">
                  {t("nav.catalog")}
                </Link>
              </li>
              <li>
                <Link href="/blends" className="transition-colors hover:text-gold">
                  {t("nav.blends")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-gold">
                  {t("services.advice")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t("footer.hours_title")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{t("contact.hours_week")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{t("contact.hours_sun")}</span>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="transition-colors hover:text-gold"
                >
                  {SOCIAL_LINKS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{SOCIAL_LINKS.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t("footer.follow_title")}
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              {t("contact.newsletter_title")}
            </p>
            {subscribed ? (
              <p className="text-sm text-gold">
                Merci de votre inscription !
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.newsletter_placeholder")}
                  className="min-w-0 flex-1 rounded-lg border border-gray-600 bg-charcoal-2 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-gold focus:outline-none"
                />
                <Button
                  type="submit"
                  className="shrink-0 bg-gold text-white hover:bg-gold-dark"
                >
                  {t("contact.newsletter_cta")}
                </Button>
              </form>
            )}
            <p className="mt-2 text-xs text-gray-500">
              {t("contact.newsletter_consent")}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
