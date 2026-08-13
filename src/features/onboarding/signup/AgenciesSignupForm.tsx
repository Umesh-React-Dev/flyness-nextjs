"use client";

import { FormEvent } from "react";
import {
  CURRENCIES,
  Field,
  FormActions,
  LANGUAGES,
  RecaptchaPlaceholder,
  SignupShell,
  TITLES,
} from "./SignupShared";
import { AGENCIES_SIGNUP } from "@/jsonStaticData/onboardingData";

export function AgenciesSignupForm() {
  const { fields, sections, conditions, title } = AGENCIES_SIGNUP;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <SignupShell title={title} showAgentIcon onSubmit={handleSubmit}>
      <section className="signup-card">
        <div className="signup-card__head">
          <h2 className="signup-card__title">{sections.organizationDetails}</h2>
        </div>
        <div className="signup-grid signup-grid--4">
          <Field
            label={fields.organizationCode.label}
            required={fields.organizationCode.required}
          >
            <input className="signup-input" type="text" name="organizationCode" />
          </Field>
          <Field label={fields.agentId.label} required={fields.agentId.required}>
            <input className="signup-input" type="text" name="agentId" />
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
          <h2 className="signup-card__title">{sections.contactDetails}</h2>
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
          <Field label={fields.middleName.label}>
            <input
              className="signup-input"
              type="text"
              name="middleName"
              autoComplete="additional-name"
            />
          </Field>
          <Field label={fields.lastName.label} required={fields.lastName.required}>
            <input className="signup-input" type="text" name="lastName" autoComplete="family-name" />
          </Field>
        </div>

        <div className="signup-grid signup-grid--4" style={{ marginBottom: "1.1rem" }}>
          <Field label={fields.currency.label} required={fields.currency.required}>
            <select className="signup-select" name="currency" defaultValue="Saudi Riyal">
              {CURRENCIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label={fields.language.label} required={fields.language.required}>
            <select className="signup-select" name="language" defaultValue="English">
              {LANGUAGES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label={fields.email.label} required={fields.email.required}>
            <input className="signup-input" type="email" name="email" autoComplete="email" />
          </Field>
          <Field label={fields.eveningPhone.label} required={fields.eveningPhone.required}>
            <input className="signup-input" type="tel" name="eveningPhone" />
          </Field>
        </div>

        <div className="signup-grid signup-grid--4">
          <Field label={fields.contactPhone.label} required={fields.contactPhone.required}>
            <input className="signup-input" type="tel" name="contactPhone" />
          </Field>
          <Field label={fields.mobilePhone.label} required={fields.mobilePhone.required}>
            <input className="signup-input" type="tel" name="mobilePhone" autoComplete="tel" />
          </Field>
          <Field label={fields.fax.label} required={fields.fax.required}>
            <input className="signup-input" type="tel" name="fax" />
          </Field>
        </div>
      </section>

      <label className="signup-check" style={{ margin: "1rem 0" }}>
        <input type="checkbox" name="acceptConditions" />
        <span>
          {conditions.prefix}{" "}
          <a href={conditions.href} className="signup-link">
            {conditions.linkLabel}
          </a>
        </span>
      </label>

      <RecaptchaPlaceholder />
      <FormActions />
    </SignupShell>
  );
}
