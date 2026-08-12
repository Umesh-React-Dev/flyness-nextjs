"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import EditIcon from "@/assets/icons/EditIcon";
import LockIcon from "@/assets/icons/LockIcon";
import UserIcon from "@/assets/icons/UserIcon";
import loginBackground from "@/assets/images/login/login-background.jpg";
import "@/styles/login.scss";

type LoginType = "member" | "corporate" | "agencies";

const TABS: { id: LoginType; label: string }[] = [
  { id: "member", label: "Member Login" },
  { id: "corporate", label: "Corporate Login" },
  { id: "agencies", label: "Agencies Login" },
];

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
  const captchaLabel = "I'm not a robot";

  return (
    <div className="login-recaptcha" role="presentation">
      <label className="login-recaptcha__check">
        <input type="checkbox" aria-label={captchaLabel} />
        <span>{captchaLabel}</span>
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
  const identifierLabel = isMember ? "Email address" : "User ID";

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
            {TABS.map((tab) => (
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
                placeholder={identifierLabel}
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
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <RecaptchaPlaceholder />

            <div className="login-form__actions">
              <a href="#" className="login-link">
                Forgot password
              </a>
            </div>

            <button type="submit" className="login-submit">
              Log in
            </button>

            {loginType === "corporate" && (
              <p className="login-support">
                for Corporate queries, mail-to{" "}
                <a href="mailto:corporate@flynas.com" className="login-link">
                  corporate@flynas.com
                </a>
              </p>
            )}

            {loginType === "agencies" && (
              <p className="login-support">
                For GDS support and queries, mail-to{" "}
                <a href="mailto:gds@flynas.com" className="login-link">
                  gds@flynas.com
                </a>
              </p>
            )}

            <div className="login-signup">
              {loginType === "member" && (
                <p>
                  Don&apos;t have an account yet?{" "}
                  <a href="/signup/member" className="login-link">
                    Sign up
                  </a>
                </p>
              )}

              {loginType === "corporate" && (
                <a href="/signup/corporate" className="login-signup__cta">
                  <EditIcon className="login-signup__icon" />
                  New corporate member? Sign up
                </a>
              )}

              {loginType === "agencies" && (
                <a href="/signup/agencies" className="login-signup__cta">
                  <EditIcon className="login-signup__icon" />
                  New Agent ? Sign up
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
