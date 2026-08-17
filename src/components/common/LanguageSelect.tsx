"use client";

import { useEffect, useId, useRef, useState, type ComponentType } from "react";
import { useTranslation } from "react-i18next";
import FlagRu from "@/assets/icons/FlagRu";
import FlagSa from "@/assets/icons/FlagSa";
import FlagUk from "@/assets/icons/FlagUk";
import {
  normalizeLanguage,
  setAppLanguage,
  type SupportedLanguage,
} from "@/i18n/i18n";
import { ONBOARDING_LABEL } from "@/i18n/constants/onboarding.constant";
import "@/styles/language-select.scss";

export type LanguageCode = SupportedLanguage;

export type LanguageOption = {
  code: LanguageCode;
  label: string;
  Flag: ComponentType<{ className?: string }>;
};

export const DEFAULT_LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", Flag: FlagUk },
  { code: "ar", label: "العربية", Flag: FlagSa },
  { code: "ru", label: "Русский", Flag: FlagRu },
];

type LanguageSelectProps = {
  languages?: LanguageOption[];
  className?: string;
};

export function LanguageSelect({
  languages = DEFAULT_LANGUAGES,
  className = "",
}: LanguageSelectProps) {
  const { t, i18n } = useTranslation("onboarding");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const activeCode = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const selected =
    languages.find((language) => language.code === activeCode) ?? languages[0];

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function selectLanguage(code: LanguageCode) {
    void setAppLanguage(code);
    setOpen(false);
  }

  return (
    <div
      ref={rootRef}
      className={`language-select${open ? " is-open" : ""}${className ? ` ${className}` : ""}`}
    >
      <button
        type="button"
        className="language-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="language-select__flag">
          <selected.Flag />
        </span>
        <span className="language-select__label">{selected.label}</span>
        <span className="language-select__chevron" aria-hidden="true" />
      </button>

      {open && (
        <ul
          id={listId}
          className="language-select__menu"
          role="listbox"
          aria-label={t(ONBOARDING_LABEL.LANGUAGE_SELECT_ARIA)}
        >
          {languages.map((language) => {
            const isActive = language.code === selected.code;

            return (
              <li key={language.code} role="presentation">
                <button
                  type="button"
                  className={`language-select__option${isActive ? " is-active" : ""}`}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => selectLanguage(language.code)}
                >
                  <span className="language-select__flag">
                    <language.Flag />
                  </span>
                  <span className="language-select__label">{language.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
