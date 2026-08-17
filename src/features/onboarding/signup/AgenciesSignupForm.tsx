"use client";

import { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  CURRENCY_VALUES,
  Field,
  FormActions,
  LANGUAGE_VALUES,
  RecaptchaPlaceholder,
  SignupShell,
  TITLE_VALUES,
  useSignupOptions,
} from "./SignupShared";
import { ONBOARDING_LABEL } from "@/i18n/constants/onboarding.constant";
import { SIGNUP_LINKS } from "@/jsonStaticData/onboardingData";

export function AgenciesSignupForm() {
  const { t } = useTranslation("onboarding");
  const options = useSignupOptions();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <SignupShell
      title={t(ONBOARDING_LABEL.AGENCIES_TITLE)}
      showAgentIcon
      onSubmit={handleSubmit}
    >
      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{t(ONBOARDING_LABEL.AGENCIES_SECTION_ORG)}</h2>
        </div>
        <div className="signup-grid signup-grid--4">
          <Field label={t(ONBOARDING_LABEL.FIELD_ORGANIZATION_CODE)} required>
            <input className="signup-input" type="text" name="organizationCode" />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_AGENT_ID)} required>
            <input className="signup-input" type="text" name="agentId" />
          </Field>
          <Field
            label={t(ONBOARDING_LABEL.FIELD_PASSWORD)}
            required
            hint={t(ONBOARDING_LABEL.FIELD_PASSWORD_HINT_GENERIC)}
          >
            <input
              className="signup-input"
              type="password"
              name="password"
              autoComplete="new-password"
            />
          </Field>
          <Field
            label={t(ONBOARDING_LABEL.FIELD_CONFIRM_PASSWORD)}
            required
            hint={t(ONBOARDING_LABEL.FIELD_CONFIRM_PASSWORD_HINT_GENERIC)}
          >
            <input
              className="signup-input"
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
            />
          </Field>
        </div>
      </section>

      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{t(ONBOARDING_LABEL.AGENCIES_SECTION_CONTACT)}</h2>
        </div>

        <div className="signup-grid signup-grid--4" style={{ marginBottom: "1.1rem" }}>
          <Field label={t(ONBOARDING_LABEL.FIELD_TITLE)} required>
            <select className="signup-select" name="title" defaultValue="">
              <option value="" disabled>
                {t(ONBOARDING_LABEL.FIELD_TITLE_PLACEHOLDER)}
              </option>
              {TITLE_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.titles[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_FIRST_NAME)} required>
            <input className="signup-input" type="text" name="firstName" autoComplete="given-name" />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_MIDDLE_NAME)}>
            <input
              className="signup-input"
              type="text"
              name="middleName"
              autoComplete="additional-name"
            />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_LAST_NAME)} required>
            <input className="signup-input" type="text" name="lastName" autoComplete="family-name" />
          </Field>
        </div>

        <div className="signup-grid signup-grid--4" style={{ marginBottom: "1.1rem" }}>
          <Field label={t(ONBOARDING_LABEL.FIELD_CURRENCY)} required>
            <select className="signup-select" name="currency" defaultValue="Saudi Riyal">
              {CURRENCY_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.currencies[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_LANGUAGE)} required>
            <select className="signup-select" name="language" defaultValue="English">
              {LANGUAGE_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.languages[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_EMAIL)} required>
            <input className="signup-input" type="email" name="email" autoComplete="email" />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_EVENING_PHONE)} required>
            <input className="signup-input" type="tel" name="eveningPhone" />
          </Field>
        </div>

        <div className="signup-grid signup-grid--4">
          <Field label={t(ONBOARDING_LABEL.FIELD_CONTACT_PHONE)} required>
            <input className="signup-input" type="tel" name="contactPhone" />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_MOBILE_PHONE)} required>
            <input className="signup-input" type="tel" name="mobilePhone" autoComplete="tel" />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_FAX)} required>
            <input className="signup-input" type="tel" name="fax" />
          </Field>
        </div>
      </section>

      <label className="signup-check" style={{ margin: "1rem 0" }}>
        <input type="checkbox" name="acceptConditions" />
        <span>
          {t(ONBOARDING_LABEL.AGENCIES_CONDITIONS_PREFIX)}{" "}
          <a href={SIGNUP_LINKS.conditionsHref} className="signup-link">
            {t(ONBOARDING_LABEL.AGENCIES_CONDITIONS_LINK)}
          </a>
        </span>
      </label>

      <RecaptchaPlaceholder />
      <FormActions />
    </SignupShell>
  );
}
