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

export function MemberSignupForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <SignupShell title="New Member Registration" onSubmit={handleSubmit}>
      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">Your login details</h2>
        </div>
        <div className="signup-grid signup-grid--3">
          <Field
            label="User Email"
            required
            hint="Please enter your valid email address as your username (e.g. name@gmail.com)"
          >
            <input className="signup-input" type="email" name="email" autoComplete="email" />
          </Field>
          <Field label="Password" required hint="must be 8-20 characters">
            <input
              className="signup-input"
              type="password"
              name="password"
              autoComplete="new-password"
            />
          </Field>
          <Field label="Confirm password" required hint="Please enter the same password">
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
        <div className="signup-grid signup-grid--3">
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
            <input
              className="signup-input"
              type="tel"
              name="mobile"
              placeholder="555XXXXXX"
              autoComplete="tel"
            />
          </Field>
          <Field label="Email" required>
            <input className="signup-input" type="email" name="contactEmail" autoComplete="email" />
          </Field>
        </div>
      </section>

      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">Sign up to our newsletter</h2>
        </div>
        <div className="signup-grid signup-grid--3" style={{ marginBottom: "1rem" }}>
          <Field label="Language">
            <select className="signup-select" name="newsletterLanguage" defaultValue="English">
              <option>English</option>
              <option>Arabic</option>
              <option>Russian</option>
            </select>
          </Field>
          <Field label="City of Origin">
            <input className="signup-input" type="text" name="cityOfOrigin" />
          </Field>
          <Field label="Preferred destinations">
            <select className="signup-select" name="preferredDestinations" defaultValue="">
              <option value="" disabled>
                Locations
              </option>
              <option>Riyadh</option>
              <option>Jeddah</option>
              <option>Dubai</option>
              <option>Cairo</option>
            </select>
          </Field>
        </div>
        <label className="signup-check">
          <input type="checkbox" name="allowNewsletter" />
          Allow News letter notification
        </label>
      </section>

      <p className="signup-terms">
        By clicking Register, I confirm that I accept the{" "}
        <a href="#">Terms &amp; Conditions</a>
      </p>

      <RecaptchaPlaceholder />
      <FormActions />
    </SignupShell>
  );
}
