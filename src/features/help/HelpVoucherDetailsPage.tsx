"use client";

import { useState, type FormEvent } from "react";
import heroDecoration from "@/assets/images/help/inquiry-hero-decoration.png";
import HelpSubpageHero from "@/components/help/HelpSubpageHero";
import HelpBreadcrumb from "@/components/help/HelpBreadcrumb";
import HelpAccordion from "@/components/help/HelpAccordion";
import HelpFaq from "@/components/help/HelpFaq";
import { HelpFormField } from "@/components/help/HelpForm";
import {
  HELP_VOUCHER_BALANCE,
  HELP_VOUCHER_FAQS,
  HELP_VOUCHER_FIELDS,
  HELP_VOUCHER_HERO,
  HELP_VOUCHER_TERMS,
} from "@/jsonStaticData/helpVoucherData";
import "@/components/help/helpSubpage.scss";
import "@/components/help/HelpForm/HelpForm.scss";
import "@/features/help/helpUtilities.scss";
import "./HelpVoucherDetailsPage.scss";

type VoucherFormState = {
  pnr: string;
  voucher: string;
};

const INITIAL_FORM: VoucherFormState = {
  pnr: "",
  voucher: "",
};

export default function HelpVoucherDetailsPage() {
  const [form, setForm] = useState<VoucherFormState>(INITIAL_FORM);

  const updateField = (field: keyof VoucherFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="helpSubpage helpVoucherDetails">
      <HelpSubpageHero
        titleId="help-voucher-title"
        title={HELP_VOUCHER_HERO.title}
        subtitle={HELP_VOUCHER_HERO.subtitle}
        decorationSrc={heroDecoration}
      />

      <HelpBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Voucher Details" },
        ]}
      />

      <div className="helpSubpageContent">
        <section
          className="helpSubpageFormCard helpVoucherDetails__balance"
          aria-labelledby="help-voucher-balance-title"
        >
          <form className="helpForm" onSubmit={handleSubmit} noValidate>
            <div className="helpForm__header">
              <h2
                id="help-voucher-balance-title"
                className="helpForm__headerTitle"
              >
                {HELP_VOUCHER_BALANCE.title}
              </h2>
              <p className="helpForm__headerDescription">
                {HELP_VOUCHER_BALANCE.description}
              </p>
            </div>

            <div className="helpForm__grid">
              <HelpFormField
                label={HELP_VOUCHER_FIELDS.pnr.label}
                hint={HELP_VOUCHER_FIELDS.pnr.hint}
                hintSmall
                htmlFor="voucher-pnr"
              >
                <input
                  id="voucher-pnr"
                  type="text"
                  className="helpForm__input"
                  placeholder={HELP_VOUCHER_FIELDS.pnr.placeholder}
                  value={form.pnr}
                  maxLength={HELP_VOUCHER_FIELDS.pnr.maxLength}
                  onChange={(event) => updateField("pnr", event.target.value)}
                />
              </HelpFormField>

              <HelpFormField
                label={HELP_VOUCHER_FIELDS.voucher.label}
                hint={HELP_VOUCHER_FIELDS.voucher.hint}
                hintSmall
                htmlFor="voucher-reference"
              >
                <input
                  id="voucher-reference"
                  type="text"
                  className="helpForm__input"
                  placeholder={HELP_VOUCHER_FIELDS.voucher.placeholder}
                  value={form.voucher}
                  onChange={(event) =>
                    updateField("voucher", event.target.value)
                  }
                />
              </HelpFormField>
            </div>

            <div className="helpForm__actions">
              <button type="submit" className="helpForm__submit">
                {HELP_VOUCHER_BALANCE.submit}
              </button>
            </div>
          </form>
        </section>

        <HelpAccordion
          title={HELP_VOUCHER_TERMS.title}
          titleId="help-voucher-terms"
        >
          <div className="helpVoucherTerms">
            <h3 className="helpVoucherTerms__heading">
              {HELP_VOUCHER_TERMS.heading}
            </h3>
            <ol className="helpVoucherTerms__list">
              {HELP_VOUCHER_TERMS.items.map((item) => (
                <li key={item.id}>
                  <p>{item.text}</p>
                  {item.bullets ? (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </HelpAccordion>

        <HelpFaq title="Frequently Asked Questions" items={HELP_VOUCHER_FAQS} />
      </div>
    </div>
  );
}
