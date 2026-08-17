"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import heroDecoration from "@/assets/images/help/support-hero-decoration.png";
import iconArrow from "@/assets/images/help/icon-arrow.svg";
import HelpSubpageHero from "@/components/help/HelpSubpageHero";
import HelpBreadcrumb from "@/components/help/HelpBreadcrumb";
import { HELP_LABEL } from "@/i18n/constants/help.constant";
import { HELP_SUPPORT_TOPICS } from "@/jsonStaticData/helpSupportData";
import "@/components/help/helpSubpage.scss";
import "./HelpSupportPage.scss";

export default function HelpSupportPage() {
  const { t } = useTranslation("help");

  return (
    <div className="helpSubpage helpSupportPage">
      <HelpSubpageHero
        titleId="help-support-title"
        title={t(HELP_LABEL.SUPPORT_HERO_TITLE)}
        subtitle={t(HELP_LABEL.SUPPORT_HERO_SUBTITLE)}
        decorationSrc={heroDecoration}
      />

      <HelpBreadcrumb
        ariaLabel={t(HELP_LABEL.SUPPORT_BREADCRUMB_ARIA)}
        items={[
          { label: t(HELP_LABEL.SUPPORT_BREADCRUMB_HOME), href: "/" },
          { label: t(HELP_LABEL.SUPPORT_BREADCRUMB_SUPPORT) },
        ]}
      />

      <section className="helpSupportTopics" aria-label={t(HELP_LABEL.SUPPORT_TOPICS_ARIA)}>
        <ul className="helpSupportTopics__grid">
          {HELP_SUPPORT_TOPICS.map((topic) => (
            <li key={topic.id}>
              <Link href={topic.href} className="helpSupportCard">
                <div className="helpSupportCard__header">
                  <div className="helpSupportCard__heading">
                    <span className="helpSupportCard__iconWrap" aria-hidden="true">
                      <Image
                        src={topic.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="helpSupportCard__icon"
                      />
                    </span>
                    <h2 className="helpSupportCard__title">
                      {t(`support.topics.${topic.id}.title`)}
                    </h2>
                  </div>
                  <span className="helpSupportCard__arrow" aria-hidden="true">
                    <Image src={iconArrow} alt="" width={20} height={20} />
                  </span>
                </div>
                <p className="helpSupportCard__description">
                  {t(`support.topics.${topic.id}.description`)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
