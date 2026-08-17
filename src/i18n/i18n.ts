import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHelp from "../../public/locales/en/help.json";
import enHome from "../../public/locales/en/home.json";
import enOnboarding from "../../public/locales/en/onboarding.json";
import ruHelp from "../../public/locales/ru/help.json";
import ruHome from "../../public/locales/ru/home.json";
import ruOnboarding from "../../public/locales/ru/onboarding.json";

export const SUPPORTED_LANGUAGES = ["en", "ru"] as const;
export const DEFAULT_LANGUAGE = "en";
export const LANGUAGE_STORAGE_KEY = "flynas-lang";
export const NAMESPACES = ["onboarding", "home", "help"] as const;

const DEFAULT_NAMESPACE = "onboarding";

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
const SUPPORTED_LANGUAGE_SET = new Set<string>(SUPPORTED_LANGUAGES);

export const isSupportedLanguage = (lang: string): lang is SupportedLanguage =>
  SUPPORTED_LANGUAGE_SET.has(lang);

export const normalizeLanguage = (lang?: string | null): SupportedLanguage => {
  if (!lang) return DEFAULT_LANGUAGE;
  const baseLang = lang.split("-")[0];
  return isSupportedLanguage(baseLang) ? baseLang : DEFAULT_LANGUAGE;
};

const readCookieLanguage = (): string | null => {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${LANGUAGE_STORAGE_KEY}=`));

  return match ? decodeURIComponent(match.split("=")[1] ?? "") : null;
};

export const getStoredLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const storedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLang && isSupportedLanguage(storedLang)) {
    return storedLang;
  }

  const cookieLang = readCookieLanguage();
  if (cookieLang && isSupportedLanguage(cookieLang)) {
    return cookieLang;
  }

  const browserLang = navigator.language.split("-")[0];
  if (isSupportedLanguage(browserLang)) {
    return browserLang;
  }

  return DEFAULT_LANGUAGE;
};

export const persistLanguage = (lang: SupportedLanguage) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  document.cookie = `${LANGUAGE_STORAGE_KEY}=${encodeURIComponent(lang)};path=/;max-age=31536000;SameSite=Lax`;
};

export const setAppLanguage = async (lang: string) => {
  const nextLang = normalizeLanguage(lang);
  persistLanguage(nextLang);

  if (normalizeLanguage(i18n.language) !== nextLang) {
    await i18n.changeLanguage(nextLang);
  }

  return nextLang;
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: getStoredLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    load: "currentOnly",
    supportedLngs: [...SUPPORTED_LANGUAGES],
    ns: [...NAMESPACES],
    defaultNS: DEFAULT_NAMESPACE,
    resources: {
      en: { onboarding: enOnboarding, home: enHome, help: enHelp },
      ru: { onboarding: ruOnboarding, home: ruHome, help: ruHelp },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    debug: false,
  });
}

export default i18n;
