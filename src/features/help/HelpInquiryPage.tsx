"use client";

import { useMemo, useState, type FormEvent } from "react";
import heroDecoration from "@/assets/images/help/inquiry-hero-decoration.png";
import HelpSubpageHero from "@/components/help/HelpSubpageHero";
import HelpBreadcrumb from "@/components/help/HelpBreadcrumb";
import HelpStepSummary from "@/components/help/HelpStepSummary";
import {
  HelpFormField,
  HelpFileUpload,
  countHelpFormWords,
} from "@/components/help/HelpForm";
import {
  HELP_INQUIRY_DETAILS,
  HELP_INQUIRY_FIELDS,
  HELP_INQUIRY_HERO,
  HELP_INQUIRY_UPLOAD,
} from "@/jsonStaticData/helpInquiryData";
import "@/components/help/helpSubpage.scss";
import "@/components/help/HelpForm/HelpForm.scss";
import "@/features/help/helpUtilities.scss";

type InquiryFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pnr: string;
  subject: string;
  description: string;
};

const INITIAL_FORM: InquiryFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pnr: "",
  subject: "",
  description: "",
};

export default function HelpInquiryPage() {
  const [form, setForm] = useState<InquiryFormState>(INITIAL_FORM);
  const [files, setFiles] = useState<File[]>([]);

  const wordCount = useMemo(() => countHelpFormWords(form.description), [form.description]);

  const updateField = (field: keyof InquiryFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="helpSubpage">
      <HelpSubpageHero
        titleId="help-inquiry-title"
        title={HELP_INQUIRY_HERO.title}
        subtitle={HELP_INQUIRY_HERO.subtitle}
        decorationSrc={heroDecoration}
      />

      <HelpBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Inquiry" },
        ]}
      />

      <div className="helpSubpageContent">
        <HelpStepSummary
          title={HELP_INQUIRY_DETAILS.title}
          description={HELP_INQUIRY_DETAILS.description}
          activeStep={0}
        />

        <section className="helpSubpageFormCard" aria-labelledby="help-inquiry-form-title">
          <h2 id="help-inquiry-form-title" className="visuallyHidden">
            Inquiry form
          </h2>

          <form className="helpForm" onSubmit={handleSubmit} noValidate>
            <div className="helpForm__section">
              <h3 className="helpForm__sectionTitle">Personal Information</h3>

              <div className="helpForm__grid">
                <HelpFormField
                  label={HELP_INQUIRY_FIELDS.firstName.label}
                  required={HELP_INQUIRY_FIELDS.firstName.required}
                  htmlFor="inquiry-first-name"
                >
                  <input
                    id="inquiry-first-name"
                    type="text"
                    className="helpForm__input"
                    placeholder={HELP_INQUIRY_FIELDS.firstName.placeholder}
                    value={form.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                    required={HELP_INQUIRY_FIELDS.firstName.required}
                  />
                </HelpFormField>

                <HelpFormField
                  label={HELP_INQUIRY_FIELDS.lastName.label}
                  required={HELP_INQUIRY_FIELDS.lastName.required}
                  htmlFor="inquiry-last-name"
                >
                  <input
                    id="inquiry-last-name"
                    type="text"
                    className="helpForm__input"
                    placeholder={HELP_INQUIRY_FIELDS.lastName.placeholder}
                    value={form.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                    required={HELP_INQUIRY_FIELDS.lastName.required}
                  />
                </HelpFormField>

                <HelpFormField
                  label={HELP_INQUIRY_FIELDS.email.label}
                  required={HELP_INQUIRY_FIELDS.email.required}
                  htmlFor="inquiry-email"
                >
                  <input
                    id="inquiry-email"
                    type="email"
                    className="helpForm__input"
                    placeholder={HELP_INQUIRY_FIELDS.email.placeholder}
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    required={HELP_INQUIRY_FIELDS.email.required}
                  />
                </HelpFormField>

                <HelpFormField
                  label={HELP_INQUIRY_FIELDS.phone.label}
                  required={HELP_INQUIRY_FIELDS.phone.required}
                  hint={HELP_INQUIRY_FIELDS.phone.hint}
                  htmlFor="inquiry-phone"
                >
                  <input
                    id="inquiry-phone"
                    type="tel"
                    className="helpForm__input"
                    placeholder={HELP_INQUIRY_FIELDS.phone.placeholder}
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    required={HELP_INQUIRY_FIELDS.phone.required}
                  />
                </HelpFormField>

                <HelpFormField
                  label={HELP_INQUIRY_FIELDS.pnr.label}
                  hint={HELP_INQUIRY_FIELDS.pnr.hint}
                  htmlFor="inquiry-pnr"
                >
                  <input
                    id="inquiry-pnr"
                    type="text"
                    className="helpForm__input"
                    placeholder={HELP_INQUIRY_FIELDS.pnr.placeholder}
                    value={form.pnr}
                    onChange={(event) => updateField("pnr", event.target.value)}
                  />
                </HelpFormField>
              </div>
            </div>

            <HelpFormField
              label={HELP_INQUIRY_FIELDS.subject.label}
              required={HELP_INQUIRY_FIELDS.subject.required}
              className="helpForm__field--full"
              htmlFor="inquiry-subject"
            >
              <input
                id="inquiry-subject"
                type="text"
                className="helpForm__input"
                placeholder={HELP_INQUIRY_FIELDS.subject.placeholder}
                value={form.subject}
                onChange={(event) => updateField("subject", event.target.value)}
                required={HELP_INQUIRY_FIELDS.subject.required}
              />
            </HelpFormField>

            <HelpFormField
              label={HELP_INQUIRY_FIELDS.description.label}
              required={HELP_INQUIRY_FIELDS.description.required}
              className="helpForm__field--full"
              htmlFor="inquiry-description"
            >
              <textarea
                id="inquiry-description"
                className="helpForm__textarea"
                placeholder={HELP_INQUIRY_FIELDS.description.placeholder}
                value={form.description}
                maxLength={HELP_INQUIRY_FIELDS.description.maxLength}
                onChange={(event) => updateField("description", event.target.value)}
                required={HELP_INQUIRY_FIELDS.description.required}
              />
              <div className="helpForm__meta">
                <span className="helpForm__hint">
                  {HELP_INQUIRY_FIELDS.description.hint}
                </span>
                <span className="helpForm__wordCount">{wordCount} words</span>
              </div>
            </HelpFormField>

            <HelpFileUpload
              title={HELP_INQUIRY_UPLOAD.title}
              dropzoneTitle={HELP_INQUIRY_UPLOAD.dropzoneTitle}
              dropzoneHint={HELP_INQUIRY_UPLOAD.dropzoneHint}
              maxFiles={HELP_INQUIRY_UPLOAD.maxFiles}
              files={files}
              onFilesChange={setFiles}
              inputId="inquiry-file-upload"
            />

            <div className="helpForm__actions">
              <button type="submit" className="helpForm__submit">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
