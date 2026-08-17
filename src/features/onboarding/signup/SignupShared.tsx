"use client";

import Link from "next/link";
import { FormEvent, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import AgentTitleIcon from "@/assets/icons/AgentTitleIcon";
import RequiredIcon from "@/assets/icons/RequiredIcon";
import UploadIcon from "@/assets/icons/UploadIcon";
import { ONBOARDING_LABEL } from "@/i18n/constants/onboarding.constant";
import { SIGNUP_LINKS, SIGNUP_OPTION_VALUES } from "@/jsonStaticData/onboardingData";

export const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));
export const YEARS = Array.from({ length: 100 }, (_, i) => String(new Date().getFullYear() - i));

export const TITLE_VALUES = SIGNUP_OPTION_VALUES.titles;
export const NATIONALITY_VALUES = SIGNUP_OPTION_VALUES.nationalities;
export const DOCUMENT_TYPE_VALUES = SIGNUP_OPTION_VALUES.documentTypes;
export const COUNTRY_CODE_VALUES = SIGNUP_OPTION_VALUES.countryCodes;
export const CURRENCY_VALUES = SIGNUP_OPTION_VALUES.currencies;
export const LANGUAGE_VALUES = SIGNUP_OPTION_VALUES.languages;
export const DESTINATION_VALUES = SIGNUP_OPTION_VALUES.destinations;

export function useSignupOptions() {
  const { t } = useTranslation("onboarding");

  const asList = (key: string, fallback: string[]) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? (value as string[]) : fallback;
  };

  return {
    titles: asList(ONBOARDING_LABEL.OPTIONS_TITLES, TITLE_VALUES),
    nationalities: asList(ONBOARDING_LABEL.OPTIONS_NATIONALITIES, NATIONALITY_VALUES),
    documentTypes: asList(ONBOARDING_LABEL.OPTIONS_DOCUMENT_TYPES, DOCUMENT_TYPE_VALUES),
    countryCodes: asList(ONBOARDING_LABEL.OPTIONS_COUNTRY_CODES, COUNTRY_CODE_VALUES),
    months: asList(ONBOARDING_LABEL.OPTIONS_MONTHS, [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]),
    currencies: asList(ONBOARDING_LABEL.OPTIONS_CURRENCIES, CURRENCY_VALUES),
    languages: asList(ONBOARDING_LABEL.OPTIONS_LANGUAGES, LANGUAGE_VALUES),
    destinations: asList(ONBOARDING_LABEL.OPTIONS_DESTINATIONS, DESTINATION_VALUES),
  };
}

type FieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
};

export function Field({ label, required, hint, className = "", children }: FieldProps) {
  return (
    <div className={`signup-field${className ? ` ${className}` : ""}`}>
      <label className="signup-label">
        {label}
        {required ? <span className="signup-required">*</span> : null}
      </label>
      {children}
      {hint ? <p className="signup-hint">{hint}</p> : null}
    </div>
  );
}

export function RecaptchaPlaceholder() {
  const { t } = useTranslation("onboarding");
  const label = t(ONBOARDING_LABEL.SIGNUP_CAPTCHA);

  return (
    <div className="signup-recaptcha" role="presentation">
      <label className="signup-recaptcha__check">
        <input type="checkbox" aria-label={label} />
        <span>{label}</span>
      </label>
      <div className="signup-recaptcha__brand">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#1a73e8" opacity="0.15" />
          <path
            d="M32 12a20 20 0 1 0 18.5 12.5"
            fill="none"
            stroke="#1a73e8"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M50 18v12H38" fill="none" stroke="#1a73e8" strokeWidth="5" />
          <circle cx="32" cy="32" r="8" fill="#34a853" />
        </svg>
        <small>reCAPTCHA</small>
        <span>Privacy - Terms</span>
      </div>
    </div>
  );
}

export function UploadDocumentButton() {
  const { t } = useTranslation("onboarding");

  return (
    <button type="button" className="signup-upload">
      <UploadIcon />
      {t(ONBOARDING_LABEL.SIGNUP_UPLOAD_DOCUMENT)}
    </button>
  );
}

type SignupShellProps = {
  title?: string;
  showRequiredNote?: boolean;
  showAgentIcon?: boolean;
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function SignupShell({
  title,
  showRequiredNote = false,
  showAgentIcon = false,
  children,
  onSubmit,
}: SignupShellProps) {
  const { t } = useTranslation("onboarding");

  return (
    <main className="signup-main">
      {title ? (
        <h1 className="signup-title">
          {showAgentIcon ? <AgentTitleIcon className="signup-title__icon" /> : null}
          {title}
        </h1>
      ) : null}

      {showRequiredNote ? (
        <p className="signup-required-note">
          <RequiredIcon />
          {t(ONBOARDING_LABEL.SIGNUP_REQUIRED_NOTE)}
        </p>
      ) : null}

      <form onSubmit={onSubmit} noValidate>
        {children}
      </form>
    </main>
  );
}

type FormActionsProps = {
  backHref?: string;
};

export function FormActions({ backHref = SIGNUP_LINKS.backHref }: FormActionsProps) {
  const { t } = useTranslation("onboarding");

  return (
    <div className="signup-actions">
      <Link href={backHref} className="signup-btn signup-btn--back">
        {t(ONBOARDING_LABEL.SIGNUP_BACK)}
      </Link>
      <button type="submit" className="signup-btn signup-btn--register">
        {t(ONBOARDING_LABEL.SIGNUP_REGISTER)}
      </button>
    </div>
  );
}
