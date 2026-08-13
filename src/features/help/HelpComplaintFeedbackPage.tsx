"use client";

import { useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import heroDecoration from "@/assets/images/help/inquiry-hero-decoration.png";
import iconCase from "@/assets/images/help/icon-case.svg";
import HelpSubpageHero from "@/components/help/HelpSubpageHero";
import HelpBreadcrumb from "@/components/help/HelpBreadcrumb";
import HelpStepSummary from "@/components/help/HelpStepSummary";
import {
  HelpFormField,
  HelpFileUpload,
  countHelpFormWords,
} from "@/components/help/HelpForm";
import {
  HELP_COMPLAINT_FIELDS,
  HELP_COMPLAINT_FORM_HEADER,
  HELP_COMPLAINT_HERO,
  HELP_COMPLAINT_MOBILITY,
  HELP_COMPLAINT_STEP,
  HELP_COMPLAINT_UPLOAD,
} from "@/jsonStaticData/helpComplaintFeedbackData";
import "@/components/help/helpSubpage.scss";
import "@/components/help/HelpForm/HelpForm.scss";
import "@/features/help/helpUtilities.scss";

type ComplaintFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pnr: string;
  subject: string;
  description: string;
  mobilityRelated: boolean;
};

const INITIAL_FORM: ComplaintFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pnr: "",
  subject: "",
  description: "",
  mobilityRelated: false,
};

export default function HelpComplaintFeedbackPage() {
  const [form, setForm] = useState<ComplaintFormState>(INITIAL_FORM);
  const [files, setFiles] = useState<File[]>([]);

  const wordCount = useMemo(
    () => countHelpFormWords(form.description),
    [form.description],
  );

  const updateField = (
    field: keyof Omit<ComplaintFormState, "mobilityRelated">,
    value: string,
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="helpSubpage">
      <HelpSubpageHero
        titleId="help-complaint-title"
        title={HELP_COMPLAINT_HERO.title}
        subtitle={HELP_COMPLAINT_HERO.subtitle}
        decorationSrc={heroDecoration}
      />

      <HelpBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Complaint & Feedback" },
        ]}
      />

      <div className="helpSubpageContent">
        <HelpStepSummary title={HELP_COMPLAINT_STEP.title} activeStep={0} />

        <section className="helpSubpageFormCard" aria-labelledby="help-complaint-form-title">
          <h2 id="help-complaint-form-title" className="visuallyHidden">
            Complaint form
          </h2>

          <form className="helpForm" onSubmit={handleSubmit} noValidate>
            <div className="helpForm__header">
              <h3 className="helpForm__headerTitle">
                {HELP_COMPLAINT_FORM_HEADER.title}
              </h3>
              <p className="helpForm__headerDescription">
                {HELP_COMPLAINT_FORM_HEADER.description}
              </p>
            </div>

            <div className="helpForm__section">
              <h3 className="helpForm__sectionTitle">Personal Information</h3>

              <div className="helpForm__grid">
                <HelpFormField
                  label={HELP_COMPLAINT_FIELDS.firstName.label}
                  required={HELP_COMPLAINT_FIELDS.firstName.required}
                  htmlFor="complaint-first-name"
                >
                  <input
                    id="complaint-first-name"
                    type="text"
                    className="helpForm__input"
                    placeholder={HELP_COMPLAINT_FIELDS.firstName.placeholder}
                    value={form.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                    required={HELP_COMPLAINT_FIELDS.firstName.required}
                  />
                </HelpFormField>

                <HelpFormField
                  label={HELP_COMPLAINT_FIELDS.lastName.label}
                  required={HELP_COMPLAINT_FIELDS.lastName.required}
                  htmlFor="complaint-last-name"
                >
                  <input
                    id="complaint-last-name"
                    type="text"
                    className="helpForm__input"
                    placeholder={HELP_COMPLAINT_FIELDS.lastName.placeholder}
                    value={form.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                    required={HELP_COMPLAINT_FIELDS.lastName.required}
                  />
                </HelpFormField>

                <HelpFormField
                  label={HELP_COMPLAINT_FIELDS.email.label}
                  required={HELP_COMPLAINT_FIELDS.email.required}
                  htmlFor="complaint-email"
                >
                  <input
                    id="complaint-email"
                    type="email"
                    className="helpForm__input"
                    placeholder={HELP_COMPLAINT_FIELDS.email.placeholder}
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    required={HELP_COMPLAINT_FIELDS.email.required}
                  />
                </HelpFormField>

                <HelpFormField
                  label={HELP_COMPLAINT_FIELDS.phone.label}
                  required={HELP_COMPLAINT_FIELDS.phone.required}
                  hint={HELP_COMPLAINT_FIELDS.phone.hint}
                  htmlFor="complaint-phone"
                >
                  <input
                    id="complaint-phone"
                    type="tel"
                    className="helpForm__input"
                    placeholder={HELP_COMPLAINT_FIELDS.phone.placeholder}
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    required={HELP_COMPLAINT_FIELDS.phone.required}
                  />
                </HelpFormField>
              </div>
            </div>

            <HelpFormField
              label={HELP_COMPLAINT_FIELDS.pnr.label}
              required={HELP_COMPLAINT_FIELDS.pnr.required}
              hint={HELP_COMPLAINT_FIELDS.pnr.hint}
              hintSmall
              className="helpForm__field--full"
              htmlFor="complaint-pnr"
            >
              <div className="helpForm__inputWrap">
                <span className="helpForm__inputIcon" aria-hidden="true">
                  <Image src={iconCase} alt="" width={16} height={16} />
                </span>
                <input
                  id="complaint-pnr"
                  type="text"
                  className="helpForm__input helpForm__input--withIcon"
                  placeholder={HELP_COMPLAINT_FIELDS.pnr.placeholder}
                  value={form.pnr}
                  onChange={(event) => updateField("pnr", event.target.value)}
                  required={HELP_COMPLAINT_FIELDS.pnr.required}
                />
              </div>
            </HelpFormField>

            <HelpFormField
              label={HELP_COMPLAINT_FIELDS.subject.label}
              required={HELP_COMPLAINT_FIELDS.subject.required}
              className="helpForm__field--full"
              htmlFor="complaint-subject"
            >
              <input
                id="complaint-subject"
                type="text"
                className="helpForm__input"
                placeholder={HELP_COMPLAINT_FIELDS.subject.placeholder}
                value={form.subject}
                onChange={(event) => updateField("subject", event.target.value)}
                required={HELP_COMPLAINT_FIELDS.subject.required}
              />
            </HelpFormField>

            <HelpFormField
              label={HELP_COMPLAINT_FIELDS.description.label}
              required={HELP_COMPLAINT_FIELDS.description.required}
              className="helpForm__field--full"
              htmlFor="complaint-description"
            >
              <textarea
                id="complaint-description"
                className="helpForm__textarea"
                placeholder={HELP_COMPLAINT_FIELDS.description.placeholder}
                value={form.description}
                maxLength={HELP_COMPLAINT_FIELDS.description.maxLength}
                onChange={(event) => updateField("description", event.target.value)}
                required={HELP_COMPLAINT_FIELDS.description.required}
              />
              <div className="helpForm__meta">
                <span className="helpForm__hint">
                  {HELP_COMPLAINT_FIELDS.description.hint}
                </span>
                <span className="helpForm__wordCount">{wordCount} words</span>
              </div>
            </HelpFormField>

            <div className="helpForm__checkboxRow">
              <input
                id="complaint-mobility"
                type="checkbox"
                className="helpForm__checkbox"
                checked={form.mobilityRelated}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    mobilityRelated: event.target.checked,
                  }))
                }
              />
              <div className="helpForm__checkboxContent">
                <label htmlFor="complaint-mobility" className="helpForm__checkboxLabel">
                  {HELP_COMPLAINT_MOBILITY.label}
                </label>
                <span className="helpForm__hint">{HELP_COMPLAINT_MOBILITY.hint}</span>
              </div>
            </div>

            <HelpFileUpload
              title={HELP_COMPLAINT_UPLOAD.title}
              dropzoneTitle={HELP_COMPLAINT_UPLOAD.dropzoneTitle}
              dropzoneHint={HELP_COMPLAINT_UPLOAD.dropzoneHint}
              maxFiles={HELP_COMPLAINT_UPLOAD.maxFiles}
              files={files}
              onFilesChange={setFiles}
              inputId="complaint-file-upload"
            />

            <div className="helpForm__actions">
              <button type="submit" className="helpForm__submit">
                Submit Complaint
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
