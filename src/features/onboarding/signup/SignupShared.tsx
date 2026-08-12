"use client";

import Link from "next/link";
import { FormEvent, ReactNode } from "react";
import AgentTitleIcon from "@/assets/icons/AgentTitleIcon";
import RequiredIcon from "@/assets/icons/RequiredIcon";
import UploadIcon from "@/assets/icons/UploadIcon";

export const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));
export const MONTHS = [
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
];
export const YEARS = Array.from({ length: 100 }, (_, i) => String(new Date().getFullYear() - i));

export const TITLES = ["Mr", "Mrs", "Ms", "Miss", "Dr"];
export const NATIONALITIES = ["Saudi Arabia", "United Arab Emirates", "Egypt", "India", "United Kingdom"];
export const DOCUMENT_TYPES = ["Passport", "National ID", "Iqama"];
export const COUNTRY_CODES = [
  "Saudi Arabia(+966)",
  "United Arab Emirates(+971)",
  "Egypt(+20)",
  "India(+91)",
  "United Kingdom(+44)",
];

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
  const captchaLabel = "I'm not a robot";

  return (
    <div className="signup-recaptcha" role="presentation">
      <label className="signup-recaptcha__check">
        <input type="checkbox" aria-label={captchaLabel} />
        <span>{captchaLabel}</span>
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
  return (
    <button type="button" className="signup-upload">
      <UploadIcon />
      Upload your Document
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
          This is required
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

export function FormActions({ backHref = "/login" }: FormActionsProps) {
  return (
    <div className="signup-actions">
      <Link href={backHref} className="signup-btn signup-btn--back">
        Back
      </Link>
      <button type="submit" className="signup-btn signup-btn--register">
        Register
      </button>
    </div>
  );
}
