"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/data/products";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const quickReplies = [
  { key: "quick1", action: "hours" },
  { key: "quick2", action: "blend" },
  { key: "quick3", action: "advice" },
  { key: "quick4", action: "whatsapp" },
];

function botReply(action: string): string {
  switch (action) {
    case "hours":
      return "🕐 **Horaires :**\nLundi — Samedi : 10h00 — 18h00\nDimanche : Fermé\n\n📍 **Adresse :**\nChaussée de Tongres 85, 4000 Rocourt";
    case "blend":
      return "🧪 **Création sur mesure !**\n\nRendez-vous dans notre section *Mélanges* pour choisir votre famille olfactive, l'intensité et le format. Notre expert réalisera votre fragrance unique !";
    case "advice":
      return "👩‍🔬 **Conseil personnalisé :**\n\nPassez nous voir en boutique ou répondez à notre quiz olfactif en ligne pour une recommandation sur mesure !";
    case "whatsapp":
      return "📱 **Commander via WhatsApp**\n\nCliquez ici pour commander :\n" + SOCIAL_LINKS.whatsapp;
    default:
      return "Merci pour votre message ! Un conseiller vous répondra bientôt. En attendant, vous pouvez également nous contacter par téléphone au " + SOCIAL_LINKS.phone;
  }
}

export default function ChatWidget() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: t("chat.greeting") },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    const botMsg: Message = { role: "bot", text: botReply(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
  }

  function handleQuickReply(action: string) {
    const qr = quickReplies.find((q) => q.action === action);
    const label = qr ? t(`chat.${qr.key}`) : action;
    handleSend(label);
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input };
    const genericReply = botReply("generic");
    setMessages((prev) => [...prev, userMsg, { role: "bot", text: genericReply }]);
    setInput("");
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-slide-up flex h-96 w-80 flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl sm:w-96">
          {/* Header */}
          <div className="flex items-center justify-between bg-gold px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="text-sm font-semibold">{t("chat.title")}</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex gap-2",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === "bot" && (
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Bot className="h-3.5 w-3.5 text-gold" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-gold text-white"
                      : "bg-muted text-foreground"
                  )}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <User className="h-3.5 w-3.5 text-gold" />
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-1.5 border-t px-4 py-2">
            {quickReplies.map((qr) => (
              <button
                key={qr.action}
                onClick={() => handleQuickReply(qr.action)}
                className="rounded-full border border-gold/30 px-2.5 py-1 text-[11px] text-gold transition-colors hover:bg-gold/10"
              >
                {t(`chat.${qr.key}`)}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center gap-2 border-t px-3 py-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chat.placeholder")}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim()}
              className="h-8 w-8 shrink-0 rounded-full bg-gold text-white hover:bg-gold-dark disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all",
          open
            ? "bg-muted text-foreground rotate-90 scale-90"
            : "bg-gold text-white hover:bg-gold-dark"
        )}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
