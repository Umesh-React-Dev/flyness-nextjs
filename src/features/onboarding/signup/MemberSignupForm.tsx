"use client";

import { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  COUNTRY_CODE_VALUES,
  DAYS,
  DESTINATION_VALUES,
  DOCUMENT_TYPE_VALUES,
  Field,
  FormActions,
  LANGUAGE_VALUES,
  NATIONALITY_VALUES,
  RecaptchaPlaceholder,
  SignupShell,
  TITLE_VALUES,
  UploadDocumentButton,
  useSignupOptions,
  YEARS,
} from "./SignupShared";
import { ONBOARDING_LABEL } from "@/i18n/constants/onboarding.constant";
import { SIGNUP_LINKS } from "@/jsonStaticData/onboardingData";

export function MemberSignupForm() {
  const { t } = useTranslation("onboarding");
  const options = useSignupOptions();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <SignupShell title={t(ONBOARDING_LABEL.MEMBER_TITLE)} onSubmit={handleSubmit}>
      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{t(ONBOARDING_LABEL.MEMBER_SECTION_LOGIN)}</h2>
        </div>
        <div className="signup-grid signup-grid--3">
          <Field
            label={t(ONBOARDING_LABEL.FIELD_USER_EMAIL)}
            required
            hint={t(ONBOARDING_LABEL.FIELD_USER_EMAIL_HINT_MEMBER)}
          >
            <input className="signup-input" type="email" name="email" autoComplete="email" />
          </Field>
          <Field
            label={t(ONBOARDING_LABEL.FIELD_PASSWORD)}
            required
            hint={t(ONBOARDING_LABEL.FIELD_PASSWORD_HINT_MEMBER)}
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
            hint={t(ONBOARDING_LABEL.FIELD_CONFIRM_PASSWORD_HINT_MEMBER)}
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
          <h2 className="signup-card__title">{t(ONBOARDING_LABEL.MEMBER_SECTION_PASSENGER)}</h2>
          <UploadDocumentButton />
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
          <Field label={t(ONBOARDING_LABEL.FIELD_LAST_NAME)} required>
            <input className="signup-input" type="text" name="lastName" autoComplete="family-name" />
          </Field>
          <Field
            label={t(ONBOARDING_LABEL.FIELD_DOB)}
            required
            className="signup-field--dob"
          >
            <div className="signup-dob">
              <select className="signup-select" name="dobDay" defaultValue="" aria-label="Day">
                <option value="" disabled>
                  {t(ONBOARDING_LABEL.FIELD_DOB_DAY)}
                </option>
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select className="signup-select" name="dobMonth" defaultValue="" aria-label="Month">
                <option value="" disabled>
                  {t(ONBOARDING_LABEL.FIELD_DOB_MONTH)}
                </option>
                {options.months.map((month, index) => (
                  <option key={month} value={String(index + 1)}>
                    {month}
                  </option>
                ))}
              </select>
              <select className="signup-select" name="dobYear" defaultValue="" aria-label="Year">
                <option value="" disabled>
                  {t(ONBOARDING_LABEL.FIELD_DOB_YEAR)}
                </option>
                {YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </Field>
        </div>

        <div className="signup-grid signup-grid--3">
          <Field label={t(ONBOARDING_LABEL.FIELD_NATIONALITY)} required>
            <select className="signup-select" name="nationality" defaultValue="Saudi Arabia">
              {NATIONALITY_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.nationalities[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_DOCUMENT_TYPE)} required>
            <select className="signup-select" name="documentType" defaultValue="">
              <option value="" disabled>
                {t(ONBOARDING_LABEL.FIELD_DOCUMENT_TYPE_PLACEHOLDER)}
              </option>
              {DOCUMENT_TYPE_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.documentTypes[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_DOCUMENT_NUMBER)} required>
            <input className="signup-input" type="text" name="documentNumber" />
          </Field>
        </div>
      </section>

      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{t(ONBOARDING_LABEL.MEMBER_SECTION_CONTACT)}</h2>
        </div>
        <div className="signup-grid signup-grid--3">
          <Field label={t(ONBOARDING_LABEL.FIELD_COUNTRY_CODE)} required>
            <select className="signup-select" name="countryCode" defaultValue="Saudi Arabia(+966)">
              {COUNTRY_CODE_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.countryCodes[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label={t(ONBOARDING_LABEL.FIELD_MOBILE)}
            required
            hint={t(ONBOARDING_LABEL.FIELD_MOBILE_HINT)}
          >
            <input
              className="signup-input"
              type="tel"
              name="mobile"
              placeholder={t(ONBOARDING_LABEL.FIELD_MOBILE_PLACEHOLDER)}
              autoComplete="tel"
            />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_EMAIL)} required>
            <input className="signup-input" type="email" name="contactEmail" autoComplete="email" />
          </Field>
        </div>
      </section>

      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{t(ONBOARDING_LABEL.MEMBER_SECTION_NEWSLETTER)}</h2>
        </div>
        <div className="signup-grid signup-grid--3" style={{ marginBottom: "1rem" }}>
          <Field label={t(ONBOARDING_LABEL.FIELD_LANGUAGE)}>
            <select className="signup-select" name="newsletterLanguage" defaultValue="English">
              {LANGUAGE_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.languages[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_CITY_OF_ORIGIN)}>
            <input className="signup-input" type="text" name="cityOfOrigin" />
          </Field>
          <Field label={t(ONBOARDING_LABEL.FIELD_PREFERRED_DESTINATIONS)}>
            <select className="signup-select" name="preferredDestinations" defaultValue="">
              <option value="" disabled>
                {t(ONBOARDING_LABEL.FIELD_PREFERRED_DESTINATIONS_PLACEHOLDER)}
              </option>
              {DESTINATION_VALUES.map((value, index) => (
                <option key={value} value={value}>
                  {options.destinations[index] ?? value}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <label className="signup-check">
          <input type="checkbox" name="allowNewsletter" />
          {t(ONBOARDING_LABEL.MEMBER_NEWSLETTER_OPT_IN)}
        </label>
      </section>

      <p className="signup-terms">
        {t(ONBOARDING_LABEL.MEMBER_TERMS_PREFIX)}{" "}
        <a href={SIGNUP_LINKS.termsHref}>{t(ONBOARDING_LABEL.MEMBER_TERMS_LINK)}</a>
      </p>

      <RecaptchaPlaceholder />
      <FormActions />
    </SignupShell>
  );
}
