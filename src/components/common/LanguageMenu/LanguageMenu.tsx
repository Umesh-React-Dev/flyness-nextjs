"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import {
  countries,
  formatLocaleLabel,
  type SelectedLocale,
} from "./languageData";
import "./LanguageMenu.scss";

const DEFAULT_SELECTION: SelectedLocale = {
  countryCode: "KSA",
  languageCode: "en",
};

export default function LanguageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] =
    useState<SelectedLocale>(DEFAULT_SELECTION);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedLabel = formatLocaleLabel(selection);

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
        <div className="languageMenuPanel" role="menu" aria-label="Country and language">
          <div className="languageMenuSelected">
            <p className="languageMenuLabel">Selected Country (Language)</p>
            <p className="languageMenuSelectedValue">{selectedLabel}</p>
          </div>

          <div className="languageMenuDivider" aria-hidden="true" />

          <div className="languageMenuAll">
            <p className="languageMenuLabel">All Countries</p>
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
