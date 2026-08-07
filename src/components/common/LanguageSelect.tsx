"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import "@/styles/language-select.scss";

export type LanguageCode = "en" | "ar" | "ru";

export type LanguageOption = {
  code: LanguageCode;
  label: string;
  Flag: () => ReactNode;
};

function FlagUk() {
  return (
    <svg viewBox="0 0 60 30" width="22" height="14" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagSa() {
  return (
    <svg viewBox="0 0 60 30" width="22" height="14" aria-hidden="true">
      <rect width="60" height="30" fill="#006C35" />
      <text
        x="30"
        y="14"
        textAnchor="middle"
        fill="#fff"
        fontSize="7"
        fontFamily="Arial, sans-serif"
      >
        لا إله إلا الله
      </text>
      <path d="M18 20h24" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M40 18.5c2 0 3.2 1.2 3.2 2.8S42 24 40 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function FlagRu() {
  return (
    <svg viewBox="0 0 60 30" width="22" height="14" aria-hidden="true">
      <rect width="60" height="10" y="0" fill="#fff" />
      <rect width="60" height="10" y="10" fill="#0039A6" />
      <rect width="60" height="10" y="20" fill="#D52B1E" />
    </svg>
  );
}

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
