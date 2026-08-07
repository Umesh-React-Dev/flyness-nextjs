"use client";

import { FormEvent } from "react";
import {
  Field,
  FormActions,
  RecaptchaPlaceholder,
  SignupShell,
  TITLES,
} from "./SignupShared";

const CURRENCIES = ["Saudi Riyal", "US Dollar", "Euro", "UAE Dirham"];
const LANGUAGES = ["English", "Arabic", "Russian"];

export function AgenciesSignupForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <SignupShell title="Agent Register" showAgentIcon onSubmit={handleSubmit}>
      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">Organization Details</h2>
        </div>
        <div className="signup-grid signup-grid--4">
          <Field label="Organization Code" required>
            <input className="signup-input" type="text" name="organizationCode" />
          </Field>
          <Field label="Agent ID" required>
            <input className="signup-input" type="text" name="agentId" />
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
          <h2 className="signup-card__title">Contact Details</h2>
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
          <Field label="Middle name">
            <input className="signup-input" type="text" name="middleName" autoComplete="additional-name" />
          </Field>
          <Field label="Last name" required>
            <input className="signup-input" type="text" name="lastName" autoComplete="family-name" />
          </Field>
        </div>

        <div className="signup-grid signup-grid--4" style={{ marginBottom: "1.1rem" }}>
          <Field label="Currency" required>
            <select className="signup-select" name="currency" defaultValue="Saudi Riyal">
              {CURRENCIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Language" required>
            <select className="signup-select" name="language" defaultValue="English">
              {LANGUAGES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Email" required>
            <input className="signup-input" type="email" name="email" autoComplete="email" />
          </Field>
          <Field label="Evening Phone" required>
            <input className="signup-input" type="tel" name="eveningPhone" />
          </Field>
        </div>

        <div className="signup-grid signup-grid--4">
          <Field label="Contact Phone" required>
            <input className="signup-input" type="tel" name="contactPhone" />
          </Field>
          <Field label="Mobile Phone" required>
            <input className="signup-input" type="tel" name="mobilePhone" autoComplete="tel" />
          </Field>
          <Field label="Fax" required>
            <input className="signup-input" type="tel" name="fax" />
          </Field>
        </div>
      </section>

      <label className="signup-check" style={{ margin: "1rem 0" }}>
        <input type="checkbox" name="acceptConditions" />
        <span>
          I have read and understood and accept the{" "}
          <a href="#" className="signup-link">
            Conditions of carriage
          </a>
        </span>
      </label>

      <RecaptchaPlaceholder />
      <FormActions />
    </SignupShell>
  );
}
