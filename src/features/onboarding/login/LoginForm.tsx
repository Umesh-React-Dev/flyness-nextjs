"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import EditIcon from "@/assets/icons/EditIcon";
import LockIcon from "@/assets/icons/LockIcon";
import UserIcon from "@/assets/icons/UserIcon";
import loginBackground from "@/assets/images/login/login-background.jpg";
import { ONBOARDING_LABEL } from "@/i18n/constants/onboarding.constant";
import {
  LOGIN_LINKS,
  LOGIN_TAB_IDS,
  type LoginType,
} from "@/jsonStaticData/onboardingData";
import "@/styles/login.scss";

const LOGIN_TAB_LABELS: Record<LoginType, string> = {
  member: ONBOARDING_LABEL.LOGIN_TAB_MEMBER,
  corporate: ONBOARDING_LABEL.LOGIN_TAB_CORPORATE,
  agencies: ONBOARDING_LABEL.LOGIN_TAB_AGENCIES,
};

function NasmilesLogo() {
  return (
    <div className="login-nasmiles" aria-hidden="true">
      <Image
        src="https://static.flynas.com/images/IBE/assets/images/nasmile_logo.png"
        alt="nasmiles"
        width={160}
        height={120}
        className="login-nasmiles__img"
        unoptimized
      />
    </div>
  );
}

function RecaptchaPlaceholder({ label }: { label: string }) {
  return (
    <div className="login-recaptcha" role="presentation">
      <label className="login-recaptcha__check">
        <input type="checkbox" aria-label={label} />
        <span>{label}</span>
      </label>
      <div className="login-recaptcha__brand">
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

export function LoginForm() {
  const { t } = useTranslation("onboarding");
  const [loginType, setLoginType] = useState<LoginType>("member");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const isMember = loginType === "member";
  const identifierLabel = isMember
    ? t(ONBOARDING_LABEL.LOGIN_EMAIL_LABEL)
    : t(ONBOARDING_LABEL.LOGIN_USER_ID_LABEL);
  const identifierPlaceholder = isMember
    ? t(ONBOARDING_LABEL.LOGIN_EMAIL_PLACEHOLDER)
    : t(ONBOARDING_LABEL.LOGIN_USER_ID_PLACEHOLDER);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="login-main">
      <div className="login-main__bg" aria-hidden="true">
        <Image
          src={loginBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="login-main__bgImage"
        />
      </div>
      <div className="login-stage">
        <div className="login-card">
          <nav className="login-tabs" aria-label={t(ONBOARDING_LABEL.LOGIN_TABS_ARIA)}>
            {LOGIN_TAB_IDS.map((tabId) => (
              <button
                key={tabId}
                type="button"
                className={`login-tabs__item${loginType === tabId ? " is-active" : ""}`}
                onClick={() => setLoginType(tabId)}
                aria-pressed={loginType === tabId}
              >
                {t(LOGIN_TAB_LABELS[tabId])}
              </button>
            ))}
          </nav>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="login-field">
              <UserIcon className="login-field__icon" />
              <input
                type={isMember ? "email" : "text"}
                name="identifier"
                placeholder={identifierPlaceholder}
                aria-label={identifierLabel}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                autoComplete={isMember ? "email" : "username"}
              />
            </div>

            <div className="login-field">
              <LockIcon className="login-field__icon" />
              <input
                type="password"
                name="password"
                placeholder={t(ONBOARDING_LABEL.LOGIN_PASSWORD_PLACEHOLDER)}
                aria-label={t(ONBOARDING_LABEL.LOGIN_PASSWORD_LABEL)}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <RecaptchaPlaceholder label={t(ONBOARDING_LABEL.LOGIN_CAPTCHA)} />

            <div className="login-form__actions">
              <a href="#" className="login-link">
                {t(ONBOARDING_LABEL.LOGIN_FORGOT_PASSWORD)}
              </a>
            </div>

            <button type="submit" className="login-submit">
              {t(ONBOARDING_LABEL.LOGIN_SUBMIT)}
            </button>

            {loginType === "corporate" && (
              <p className="login-support">
                {t(ONBOARDING_LABEL.LOGIN_CORPORATE_SUPPORT_PREFIX)}{" "}
                <a
                  href={`mailto:${LOGIN_LINKS.corporateSupportEmail}`}
                  className="login-link"
                >
                  {LOGIN_LINKS.corporateSupportEmail}
                </a>
              </p>
            )}

            {loginType === "agencies" && (
              <p className="login-support">
                {t(ONBOARDING_LABEL.LOGIN_AGENCIES_SUPPORT_PREFIX)}{" "}
                <a
                  href={`mailto:${LOGIN_LINKS.agenciesSupportEmail}`}
                  className="login-link"
                >
                  {LOGIN_LINKS.agenciesSupportEmail}
                </a>
              </p>
            )}

            <div className="login-signup">
              {loginType === "member" && (
                <p>
                  {t(ONBOARDING_LABEL.LOGIN_MEMBER_SIGNUP_PREFIX)}{" "}
                  <Link href={LOGIN_LINKS.memberSignupHref} className="login-link">
                    {t(ONBOARDING_LABEL.LOGIN_MEMBER_SIGNUP_LINK)}
                  </Link>
                </p>
              )}

              {loginType === "corporate" && (
                <Link href={LOGIN_LINKS.corporateSignupHref} className="login-signup__cta">
                  <EditIcon className="login-signup__icon" />
                  {t(ONBOARDING_LABEL.LOGIN_CORPORATE_SIGNUP)}
                </Link>
              )}

              {loginType === "agencies" && (
                <Link href={LOGIN_LINKS.agenciesSignupHref} className="login-signup__cta">
                  <EditIcon className="login-signup__icon" />
                  {t(ONBOARDING_LABEL.LOGIN_AGENCIES_SIGNUP)}
                </Link>
              )}
            </div>
          </form>
        </div>

        <NasmilesLogo />
      </div>
    </main>
  );
}
