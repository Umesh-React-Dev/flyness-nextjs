"use client";

import { useEffect, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, {
  getStoredLanguage,
  LANGUAGE_STORAGE_KEY,
  normalizeLanguage,
  setAppLanguage,
} from "@/i18n/i18n";

type I18nProviderProps = {
  children: ReactNode;
};

function syncDocumentLanguage(language: string) {
  const baseLang = normalizeLanguage(language);
  document.documentElement.lang = baseLang;
  document.documentElement.dir = baseLang === "ar" ? "rtl" : "ltr";
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    void setAppLanguage(storedLanguage);
    syncDocumentLanguage(storedLanguage);

    const handleLanguageChanged = (language: string) => {
      syncDocumentLanguage(language);
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== LANGUAGE_STORAGE_KEY || !event.newValue) return;
      void setAppLanguage(event.newValue);
    };

    i18n.on("languageChanged", handleLanguageChanged);
    window.addEventListener("storage", handleStorage);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
