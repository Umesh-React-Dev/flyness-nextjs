"use client";

import EmailIcon from "@/assets/icons/EmailIcon";
import { useTranslation } from "react-i18next";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import "./NewsletterSubscribe.scss";

export default function NewsletterSubscribe() {
  const { t } = useTranslation("home");

  return (
    <section
      className="newsletterSubscribe"
      aria-labelledby="newsletter-subscribe-title"
    >
      <div className="newsletterSubscribe__inner">
        <div className="newsletterSubscribe__copy">
          <h2
            id="newsletter-subscribe-title"
            className="newsletterSubscribe__title"
          >
            {t(HOME_LABEL.NEWSLETTER_TITLE)}
          </h2>
          <p className="newsletterSubscribe__subtitle">
            {t(HOME_LABEL.NEWSLETTER_SUBTITLE)}
          </p>
        </div>

        <form className="newsletterSubscribe__form" action="#" method="post">
          <label className="visually-hidden" htmlFor="newsletter-email">
            {t(HOME_LABEL.NEWSLETTER_EMAIL)}
          </label>
          <EmailIcon className="newsletterSubscribe__icon" />
          <input
            id="newsletter-email"
            className="newsletterSubscribe__input"
            type="email"
            name="email"
            placeholder={t(HOME_LABEL.NEWSLETTER_EMAIL)}
            autoComplete="email"
            required
          />
          <button type="submit" className="newsletterSubscribe__button">
            {t(HOME_LABEL.NEWSLETTER_SUBSCRIBE)}
          </button>
        </form>
      </div>
    </section>
  );
}
