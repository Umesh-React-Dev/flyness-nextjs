"use client";

import CheckIcon from "@/assets/icons/CheckIcon";
import HelpGlobeIcon from "@/assets/icons/HelpGlobeIcon";
import { useTranslation } from "react-i18next";
import { HELP_LABEL } from "@/i18n/constants/help.constant";
import {
  normalizeLanguage,
  setAppLanguage,
  type SupportedLanguage,
} from "@/i18n/i18n";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
] as const;

export default function HelpLanguageMenu() {
  const { t, i18n } = useTranslation("help");
  const activeCode = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const selected =
    LANGUAGES.find((language) => language.code === activeCode) ?? LANGUAGES[0];

  return (
    <div className="helpHeader__langWrap">
      <div
        className="helpHeader__lang"
        role="button"
        tabIndex={0}
        aria-label={t(HELP_LABEL.HEADER_LANGUAGE)}
        aria-haspopup="listbox"
      >
        <span className="helpHeader__langIcon" aria-hidden="true">
          <HelpGlobeIcon />
        </span>
        <span className="helpHeader__langLabel">{selected.label}</span>
      </div>

      <div
        className="helpHeader__langMenu"
        role="listbox"
        aria-label={t(HELP_LABEL.HEADER_LANGUAGE)}
      >
        {LANGUAGES.map((option) => (
            <label key={option.code} className="helpHeader__langOption" role="option">
            <input
              type="radio"
              name="help-language"
              value={option.code}
              checked={option.code === activeCode}
              onChange={() => void setAppLanguage(option.code as SupportedLanguage)}
              className="helpHeader__langInput"
              aria-label={option.label}
            />
            <span>{option.label}</span>
            <span className="helpHeader__langCheck" aria-hidden="true">
              <CheckIcon />
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
