"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/images/help/hero.jpg";
import iconArrow from "@/assets/images/help/icon-arrow.svg";
import iconArrowPink from "@/assets/images/help/icon-arrow-pink.svg";
import iconCase from "@/assets/images/help/icon-case.svg";
import iconEmail from "@/assets/images/help/icon-email.svg";
import iconTrackArrow from "@/assets/images/help/icon-track-arrow.svg";
import HelpFaq from "@/components/help/HelpFaq";
import { HELP_CATEGORIES, HELP_FAQS } from "@/jsonStaticData/helpData";
import { HELP_LABEL } from "@/i18n/constants/help.constant";
import { useTranslation } from "react-i18next";
import "./HelpPage.scss";

type TrackMode = "case" | "email";

export default function HelpPage() {
  const { t } = useTranslation("help");
  const [trackMode, setTrackMode] = useState<TrackMode>("email");
  const [trackValue, setTrackValue] = useState("");

  const handleTrackSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="helpPage">
      <section className="helpHero" aria-labelledby="help-hero-title">
        <div className="helpHero__media" aria-hidden="true">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="helpHero__image"
          />
          <span className="helpHero__overlay" />
        </div>
        <div className="helpHero__inner">
          <h1 id="help-hero-title" className="helpHero__title">
            {t(HELP_LABEL.HERO_TITLE)}
          </h1>
        </div>
      </section>

      <div className="helpPage__shell">
        <section className="helpTrack" aria-labelledby="help-track-title">
          <div className="helpTrack__copy">
            <h2 id="help-track-title" className="helpTrack__title">
              {t(HELP_LABEL.TRACK_TITLE)}
            </h2>
            <p className="helpTrack__subtitle">
              {t(HELP_LABEL.TRACK_SUBTITLE)}
            </p>
          </div>

          <form className="helpTrack__form" onSubmit={handleTrackSubmit}>
            <div
              className="helpTrack__toggle"
              role="group"
              aria-label={t(HELP_LABEL.TRACK_BY_ARIA)}
            >
              <button
                type="button"
                className={`helpTrack__toggleBtn${
                  trackMode === "case" ? " isActive" : ""
                }`}
                aria-pressed={trackMode === "case"}
                onClick={() => setTrackMode("case")}
              >
                <span className="helpTrack__toggleIcon" aria-hidden="true">
                  <Image src={iconCase} alt="" width={16} height={16} />
                </span>
                {t(HELP_LABEL.TRACK_CASE_NUMBER)}
              </button>
              <button
                type="button"
                className={`helpTrack__toggleBtn${
                  trackMode === "email" ? " isActive" : ""
                }`}
                aria-pressed={trackMode === "email"}
                onClick={() => setTrackMode("email")}
              >
                <span className="helpTrack__toggleIcon" aria-hidden="true">
                  <Image src={iconEmail} alt="" width={16} height={16} />
                </span>
                {t(HELP_LABEL.TRACK_EMAIL)}
              </button>
            </div>

            <div className="helpTrack__fields">
              <label className="helpTrack__field">
                <span className="visuallyHidden">
                  {trackMode === "email"
                    ? t(HELP_LABEL.TRACK_EMAIL_PLACEHOLDER)
                    : t(HELP_LABEL.TRACK_CASE_NUMBER)}
                </span>
                <input
                  type={trackMode === "email" ? "email" : "text"}
                  className="helpTrack__input"
                  placeholder={
                    trackMode === "email"
                      ? t(HELP_LABEL.TRACK_EMAIL_PLACEHOLDER)
                      : t(HELP_LABEL.TRACK_CASE_PLACEHOLDER)
                  }
                  value={trackValue}
                  onChange={(event) => setTrackValue(event.target.value)}
                />
              </label>

              <button type="submit" className="helpTrack__submit">
                {t(HELP_LABEL.TRACK_SUBMIT)}
                <span className="helpTrack__submitIcon" aria-hidden="true">
                  <Image src={iconTrackArrow} alt="" width={16} height={16} />
                </span>
              </button>
            </div>
          </form>
        </section>

        <div className="helpPage__content">
          <section className="helpCategories" aria-label={t(HELP_LABEL.CATEGORIES_ARIA)}>
            <ul className="helpCategories__grid">
              {HELP_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    className={`helpCard${
                      category.featured ? " helpCard--featured" : ""
                    }`}
                  >
                    <div className="helpCard__header">
                      <div className="helpCard__heading">
                        <span
                          className={`helpCard__iconWrap${
                            category.featured ? " helpCard__iconWrap--featured" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <Image
                            src={category.icon}
                            alt=""
                            width={28}
                            height={28}
                            className="helpCard__icon"
                          />
                        </span>
                        <h3 className="helpCard__title">
                          {t(`categories.${category.id}.title`)}
                        </h3>
                      </div>
                      <span className="helpCard__arrow" aria-hidden="true">
                        <Image
                          src={category.featured ? iconArrowPink : iconArrow}
                          alt=""
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>

                    <p className="helpCard__description">
                      {t(`categories.${category.id}.description`)}
                    </p>

                    {category.tagCount ? (
                      <div className="helpCard__tags">
                        {(
                          t(`categories.${category.id}.tags`, {
                            returnObjects: true,
                          }) as string[]
                        ).map((tag) => (
                          <span key={tag} className="helpCard__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <HelpFaq
            title={t(HELP_LABEL.FAQ_TITLE)}
            items={HELP_FAQS.map((faq) => {
              const bullets = t(`faq.items.${faq.id}.bullets`, {
                returnObjects: true,
              });

              return {
                id: faq.id,
                question: t(`faq.items.${faq.id}.question`),
                answer: t(`faq.items.${faq.id}.answer`),
                bullets: Array.isArray(bullets) ? (bullets as string[]) : undefined,
              };
            })}
          />
        </div>
      </div>
    </div>
  );
}
