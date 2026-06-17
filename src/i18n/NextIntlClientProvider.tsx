"use client";

import { NextIntlClientProvider as Provider } from "next-intl";
import { ReactNode } from "react";

export default function NextIntlClientProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, unknown>;
  children: ReactNode;
}) {
  return (
    <Provider locale={locale} messages={messages}>
      {children}
    </Provider>
  );
}
