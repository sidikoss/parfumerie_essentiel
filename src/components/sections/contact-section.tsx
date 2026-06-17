"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SOCIAL_LINKS } from "@/data/products";
import { MapPin, Phone, Clock, Facebook, Send } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [nlEmail, setNlEmail] = useState("");
  const [nlSubscribed, setNlSubscribed] = useState(false);

  function handleContactForm(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
  }

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!nlEmail.trim()) return;
    setNlSubscribed(true);
    setNlEmail("");
  }

  return (
    <section id="contact" className="bg-warm-beige py-20 dark:bg-charcoal-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("contact.subtitle")}</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gold" />
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t("contact.address")}</h3>
                <p className="text-sm text-muted-foreground">
                  {SOCIAL_LINKS.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t("contact.phone")}</h3>
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {SOCIAL_LINKS.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t("contact.hours")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("contact.hours_week")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("contact.hours_sun")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Facebook className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t("contact.facebook")}</h3>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  @ParfumerieEssentiel
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-3 font-serif text-lg font-semibold">
                {t("contact.newsletter_title")}
              </h3>
              {nlSubscribed ? (
                <p className="text-sm text-gold">
                  Merci de votre inscription !
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <Input
                    type="email"
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    placeholder={t("contact.newsletter_placeholder")}
                    required
                  />
                  <Button
                    type="submit"
                    className="shrink-0 bg-gold text-white hover:bg-gold-dark"
                  >
                    {t("contact.newsletter_cta")}
                  </Button>
                </form>
              )}
              <p className="mt-2 text-xs text-muted-foreground">
                {t("contact.newsletter_consent")}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6">
            <h3 className="mb-4 font-serif text-lg font-semibold">
              {t("contact.form_title")}
            </h3>
            {sent ? (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-950 dark:text-green-400">
                Message envoyé ! Nous vous répondrons rapidement.
              </p>
            ) : (
              <form onSubmit={handleContactForm} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    {t("contact.form_name")}
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("contact.form_name")}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    {t("contact.form_email")}
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contact.form_email")}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    {t("contact.form_message")}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("contact.form_message")}
                    required
                    rows={4}
                    className="flex w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold text-white hover:bg-gold-dark"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t("contact.form_send")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
