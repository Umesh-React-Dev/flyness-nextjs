"use client";

import { useEffect, useId, useRef, useState, type ComponentType } from "react";
import FlagRu from "@/assets/icons/FlagRu";
import FlagSa from "@/assets/icons/FlagSa";
import FlagUk from "@/assets/icons/FlagUk";
import "@/styles/language-select.scss";

export type LanguageCode = "en" | "ar" | "ru";

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
  value?: LanguageCode;
  defaultValue?: LanguageCode;
  onChange?: (code: LanguageCode) => void;
  className?: string;
};

export function LanguageSelect({
  languages = DEFAULT_LANGUAGES,
  value,
  defaultValue = "en",
  onChange,
  className = "",
}: LanguageSelectProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<LanguageCode>(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const selectedCode = value ?? internalValue;
  const selected =
    languages.find((language) => language.code === selectedCode) ?? languages[0];

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
    if (value === undefined) {
      setInternalValue(code);
    }
    onChange?.(code);
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
          aria-label="Select language"
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
