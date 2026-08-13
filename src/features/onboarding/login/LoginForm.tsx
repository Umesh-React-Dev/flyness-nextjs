"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import EditIcon from "@/assets/icons/EditIcon";
import LockIcon from "@/assets/icons/LockIcon";
import UserIcon from "@/assets/icons/UserIcon";
import loginBackground from "@/assets/images/login/login-background.jpg";
import {
  LOGIN_COPY,
  LOGIN_FIELDS,
  LOGIN_TABS,
  type LoginType,
} from "@/jsonStaticData/onboardingData";
import "@/styles/login.scss";

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

function RecaptchaPlaceholder() {
  return (
    <div className="login-recaptcha" role="presentation">
      <label className="login-recaptcha__check">
        <input type="checkbox" aria-label={LOGIN_COPY.captchaLabel} />
        <span>{LOGIN_COPY.captchaLabel}</span>
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
  const [loginType, setLoginType] = useState<LoginType>("member");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const isMember = loginType === "member";
  const identifierField = isMember ? LOGIN_FIELDS.email : LOGIN_FIELDS.userId;

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
          <nav className="login-tabs" aria-label="Login type">
            {LOGIN_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`login-tabs__item${loginType === tab.id ? " is-active" : ""}`}
                onClick={() => setLoginType(tab.id)}
                aria-pressed={loginType === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="login-field">
              <UserIcon className="login-field__icon" />
              <input
                type={isMember ? "email" : "text"}
                name="identifier"
                placeholder={identifierField.placeholder}
                aria-label={identifierField.label}
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
                placeholder={LOGIN_FIELDS.password.placeholder}
                aria-label={LOGIN_FIELDS.password.label}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <RecaptchaPlaceholder />

            <div className="login-form__actions">
              <a href="#" className="login-link">
                {LOGIN_COPY.forgotPassword}
              </a>
            </div>

            <button type="submit" className="login-submit">
              {LOGIN_COPY.submit}
            </button>

            {loginType === "corporate" && (
              <p className="login-support">
                {LOGIN_COPY.corporate.supportPrefix}{" "}
                <a
                  href={`mailto:${LOGIN_COPY.corporate.supportEmail}`}
                  className="login-link"
                >
                  {LOGIN_COPY.corporate.supportEmail}
                </a>
              </p>
            )}

            {loginType === "agencies" && (
              <p className="login-support">
                {LOGIN_COPY.agencies.supportPrefix}{" "}
                <a
                  href={`mailto:${LOGIN_COPY.agencies.supportEmail}`}
                  className="login-link"
                >
                  {LOGIN_COPY.agencies.supportEmail}
                </a>
              </p>
            )}

            <div className="login-signup">
              {loginType === "member" && (
                <p>
                  {LOGIN_COPY.memberSignup.prefix}{" "}
                  <a href={LOGIN_COPY.memberSignup.href} className="login-link">
                    {LOGIN_COPY.memberSignup.linkLabel}
                  </a>
                </p>
              )}

              {loginType === "corporate" && (
                <a href={LOGIN_COPY.corporate.signupHref} className="login-signup__cta">
                  <EditIcon className="login-signup__icon" />
                  {LOGIN_COPY.corporate.signupLabel}
                </a>
              )}

              {loginType === "agencies" && (
                <a href={LOGIN_COPY.agencies.signupHref} className="login-signup__cta">
                  <EditIcon className="login-signup__icon" />
                  {LOGIN_COPY.agencies.signupLabel}
                </a>
              )}
            </div>
          </form>
        </div>

        <NasmilesLogo />
      </div>
    </main>
  );
}
