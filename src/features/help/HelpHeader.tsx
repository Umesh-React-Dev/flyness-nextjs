"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/help/logo-green.svg";
import "./HelpHeader.scss";

type LanguageOption = {
  code: "en" | "ar";
  label: string;
};

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.33333 8C1.33333 11.6794 4.32057 14.6667 8 14.6667C11.6794 14.6667 14.6667 11.6794 14.6667 8C14.6667 4.32057 11.6794 1.33333 8 1.33333C4.32057 1.33333 1.33333 4.32057 1.33333 8V8"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33333C4.44444 5.06667 4.44444 10.9333 8 14.6667C11.5556 10.9333 11.5556 5.06667 8 1.33333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33333 8H14.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.3333 4L6 11.3333L2.66667 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HelpHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageOption["code"]>("en");
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    LANGUAGES.find((item) => item.code === language)?.label ?? "English";

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
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

  const handleSelect = (code: LanguageOption["code"]) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <header className="helpHeader">
      <div className="helpHeader__inner">
        <div className="helpHeader__left">
          <Link href="/" className="helpHeader__logo" aria-label="flynas home">
            <Image
              src={logo}
              alt="flynas"
              width={111}
              height={48}
              priority
              className="helpHeader__logoImage"
            />
          </Link>
          <nav className="helpHeader__nav" aria-label="Help navigation">
            <Link href="/" className="helpHeader__homeLink">
              Home
            </Link>
          </nav>
        </div>

        <div className="helpHeader__langWrap" ref={menuRef}>
          <button
            type="button"
            className={`helpHeader__lang${isOpen ? " isOpen" : ""}`}
            aria-label="Language"
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="helpHeader__langIcon" aria-hidden="true">
              <GlobeIcon />
            </span>
            {selectedLabel}
          </button>

          {isOpen ? (
            <div
              className="helpHeader__langMenu"
              role="menu"
              aria-label="Language"
            >
              {LANGUAGES.map((option) => {
                const isSelected = option.code === language;

                return (
                  <button
                    key={option.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isSelected}
                    className={`helpHeader__langOption${
                      isSelected ? " isSelected" : ""
                    }`}
                    onClick={() => handleSelect(option.code)}
                  >
                    <span>{option.label}</span>
                    {isSelected ? (
                      <span className="helpHeader__langCheck" aria-hidden="true">
                        <CheckIcon />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
