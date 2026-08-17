"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import {
  countries,
  formatLocaleLabel,
  type SelectedLocale,
} from "./languageData";
import {
  normalizeLanguage,
  setAppLanguage,
} from "@/i18n/i18n";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import "./LanguageMenu.scss";

export default function LanguageMenu() {
  const { t, i18n } = useTranslation("home");
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<SelectedLocale>(() => ({
    countryCode: "KSA",
    languageCode: normalizeLanguage(i18n.resolvedLanguage ?? i18n.language),
  }));
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedLabel = formatLocaleLabel(selection);

  useEffect(() => {
    const languageCode = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
    setSelection((current) =>
      current.languageCode === languageCode
        ? current
        : { ...current, languageCode },
    );
  }, [i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (countryCode: string, languageCode: string) => {
    setSelection({ countryCode, languageCode });
    void setAppLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="languageMenu" ref={rootRef}>
      <button
        type="button"
        className={`languageMenuTrigger${isOpen ? " isOpen" : ""}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <GlobeIcon />
        <span>{selectedLabel}</span>
        <ChevronDownIcon />
      </button>

      {isOpen ? (
        <div className="languageMenuPanel" role="menu" aria-label={t(HOME_LABEL.LANGUAGE_MENU_ARIA)}>
          <div className="languageMenuSelected">
            <p className="languageMenuLabel">{t(HOME_LABEL.LANGUAGE_SELECTED)}</p>
            <p className="languageMenuSelectedValue">{selectedLabel}</p>
          </div>

          <div className="languageMenuDivider" aria-hidden="true" />

          <div className="languageMenuAll">
            <p className="languageMenuLabel">{t(HOME_LABEL.LANGUAGE_ALL)}</p>
            <ul className="languageMenuList">
              {countries.map((country) => (
                <li key={country.code} className="languageMenuCountry">
                  <p className="languageMenuCountryCode">{country.code}</p>
                  <div className="languageMenuLanguages">
                    {country.languages.map((language) => {
                      const isSelected =
                        selection.countryCode === country.code &&
                        selection.languageCode === language.code;

                      return (
                        <button
                          key={`${country.code}-${language.code}`}
                          type="button"
                          role="menuitem"
                          className={`languageMenuLanguage${
                            isSelected ? " isSelected" : ""
                          }`}
                          onClick={() =>
                            handleSelect(country.code, language.code)
                          }
                        >
                          {language.label}
                        </button>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
