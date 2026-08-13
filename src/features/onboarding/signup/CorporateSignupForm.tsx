"use client";

import { FormEvent } from "react";
import {
  COUNTRY_CODES,
  DAYS,
  DOCUMENT_TYPES,
  Field,
  FormActions,
  MONTHS,
  NATIONALITIES,
  RecaptchaPlaceholder,
  SignupShell,
  TITLES,
  UploadDocumentButton,
  YEARS,
} from "./SignupShared";
import { CORPORATE_SIGNUP } from "@/jsonStaticData/onboardingData";

export function CorporateSignupForm() {
  const { fields, sections } = CORPORATE_SIGNUP;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <SignupShell showRequiredNote onSubmit={handleSubmit}>
      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{sections.loginDetails}</h2>
        </div>
        <div className="signup-grid signup-grid--3">
          <Field
            label={fields.userEmail.label}
            required={fields.userEmail.required}
            hint={fields.userEmail.hint}
          >
            <input className="signup-input" type="email" name="email" autoComplete="email" />
          </Field>
          <Field
            label={fields.password.label}
            required={fields.password.required}
            hint={fields.password.hint}
          >
            <input
              className="signup-input"
              type="password"
              name="password"
              autoComplete="new-password"
            />
          </Field>
          <Field
            label={fields.confirmPassword.label}
            required={fields.confirmPassword.required}
            hint={fields.confirmPassword.hint}
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
          <h2 className="signup-card__title">{sections.passengerDocument}</h2>
          <UploadDocumentButton />
        </div>

        <div className="signup-grid signup-grid--4" style={{ marginBottom: "1.1rem" }}>
          <Field label={fields.title.label} required={fields.title.required}>
            <select className="signup-select" name="title" defaultValue="">
              <option value="" disabled>
                {fields.title.placeholder}
              </option>
              {TITLES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label={fields.firstName.label} required={fields.firstName.required}>
            <input className="signup-input" type="text" name="firstName" autoComplete="given-name" />
          </Field>
          <Field label={fields.lastName.label} required={fields.lastName.required}>
            <input className="signup-input" type="text" name="lastName" autoComplete="family-name" />
          </Field>
          <Field
            label={fields.dateOfBirth.label}
            required={fields.dateOfBirth.required}
            className="signup-field--dob"
          >
            <div className="signup-dob">
              <select className="signup-select" name="dobDay" defaultValue="" aria-label="Day">
                <option value="" disabled>
                  {fields.dateOfBirth.dayPlaceholder}
                </option>
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select className="signup-select" name="dobMonth" defaultValue="" aria-label="Month">
                <option value="" disabled>
                  {fields.dateOfBirth.monthPlaceholder}
                </option>
                {MONTHS.map((month, index) => (
                  <option key={month} value={String(index + 1)}>
                    {month}
                  </option>
                ))}
              </select>
              <select className="signup-select" name="dobYear" defaultValue="" aria-label="Year">
                <option value="" disabled>
                  {fields.dateOfBirth.yearPlaceholder}
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
          <Field label={fields.nationality.label} required={fields.nationality.required}>
            <select className="signup-select" name="nationality" defaultValue="Saudi Arabia">
              {NATIONALITIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label={fields.documentType.label} required={fields.documentType.required}>
            <select className="signup-select" name="documentType" defaultValue="">
              <option value="" disabled>
                {fields.documentType.placeholder}
              </option>
              {DOCUMENT_TYPES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label={fields.documentNumber.label} required={fields.documentNumber.required}>
            <input className="signup-input" type="text" name="documentNumber" />
          </Field>
        </div>
      </section>

      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{sections.contactDetails}</h2>
        </div>
        <div className="signup-grid signup-grid--2" style={{ marginBottom: "1.1rem" }}>
          <Field label={fields.countryCode.label} required={fields.countryCode.required}>
            <select className="signup-select" name="countryCode" defaultValue="Saudi Arabia(+966)">
              {COUNTRY_CODES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label={fields.mobile.label}
            required={fields.mobile.required}
            hint={fields.mobile.hint}
          >
            <input className="signup-input" type="tel" name="mobile" autoComplete="tel" />
          </Field>
        </div>
        <div className="signup-grid signup-grid--2">
          <Field label={fields.email.label} required={fields.email.required}>
            <input className="signup-input" type="email" name="contactEmail" autoComplete="email" />
          </Field>
          <Field label={fields.confirmEmail.label} required={fields.confirmEmail.required}>
            <input className="signup-input" type="email" name="confirmEmail" autoComplete="email" />
          </Field>
        </div>
      </section>

      <RecaptchaPlaceholder />
      <FormActions />
    </SignupShell>
  );
}
