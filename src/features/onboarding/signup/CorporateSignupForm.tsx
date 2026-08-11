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

export function CorporateSignupForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <SignupShell showRequiredNote onSubmit={handleSubmit}>
      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">Your login details</h2>
        </div>
        <div className="signup-grid signup-grid--3">
          <Field
            label="User Email"
            required
            hint="Please enter your valid corporate email address as your username (e.g. lg@corporatedomain.com)"
          >
            <input className="signup-input" type="email" name="email" autoComplete="email" />
          </Field>
          <Field
            label="Password"
            required
            hint="Your password can comprise letters, numbers or special characters"
          >
            <input
              className="signup-input"
              type="password"
              name="password"
              autoComplete="new-password"
            />
          </Field>
          <Field
            label="Confirm password"
            required
            hint="Your password can comprise letters, numbers or special characters"
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
          <h2 className="signup-card__title">Passenger and Document details</h2>
          <UploadDocumentButton />
        </div>

        <div className="signup-grid signup-grid--4" style={{ marginBottom: "1.1rem" }}>
          <Field label="Title" required>
            <select className="signup-select" name="title" defaultValue="">
              <option value="" disabled>
                Title
              </option>
              {TITLES.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </Field>
          <Field label="First name" required>
            <input className="signup-input" type="text" name="firstName" autoComplete="given-name" />
          </Field>
          <Field label="Last name" required>
            <input className="signup-input" type="text" name="lastName" autoComplete="family-name" />
          </Field>
          <Field label="Date of birth (Gregorian)" required className="signup-field--dob">
            <div className="signup-dob">
              <select className="signup-select" name="dobDay" defaultValue="" aria-label="Day">
                <option value="" disabled>
                  DD
                </option>
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select className="signup-select" name="dobMonth" defaultValue="" aria-label="Month">
                <option value="" disabled>
                  MONTH
                </option>
                {MONTHS.map((month, index) => (
                  <option key={month} value={String(index + 1)}>
                    {month}
                  </option>
                ))}
              </select>
              <select className="signup-select" name="dobYear" defaultValue="" aria-label="Year">
                <option value="" disabled>
                  YYYY
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
          <Field label="Nationality" required>
            <select className="signup-select" name="nationality" defaultValue="Saudi Arabia">
              {NATIONALITIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Document type" required>
            <select className="signup-select" name="documentType" defaultValue="">
              <option value="" disabled>
                Document type
              </option>
              {DOCUMENT_TYPES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Document number" required>
            <input className="signup-input" type="text" name="documentNumber" />
          </Field>
        </div>
      </section>

      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">Contact details</h2>
        </div>
        <div className="signup-grid signup-grid--2" style={{ marginBottom: "1.1rem" }}>
          <Field label="Country code" required>
            <select className="signup-select" name="countryCode" defaultValue="Saudi Arabia(+966)">
              {COUNTRY_CODES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Mobile" required hint="e.g. 920001234">
            <input className="signup-input" type="tel" name="mobile" autoComplete="tel" />
          </Field>
        </div>
        <div className="signup-grid signup-grid--2">
          <Field label="Email" required>
            <input className="signup-input" type="email" name="contactEmail" autoComplete="email" />
          </Field>
          <Field label="Confirm email" required>
            <input className="signup-input" type="email" name="confirmEmail" autoComplete="email" />
          </Field>
        </div>
      </section>

      <RecaptchaPlaceholder />
      <FormActions />
    </SignupShell>
  );
}
