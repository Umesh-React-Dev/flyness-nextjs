"use client";

import { useTranslation } from "react-i18next";
import heroDecoration from "@/assets/images/help/support-hero-decoration.png";
import HelpSubpageHero from "@/components/help/HelpSubpageHero";
import HelpBreadcrumb from "@/components/help/HelpBreadcrumb";
import HelpTopicCards from "@/components/help/HelpTopicCards";
import { HELP_LABEL } from "@/i18n/constants/help.constant";
import { HELP_SUPPORT_TOPICS } from "@/jsonStaticData/helpSupportData";
import "@/components/help/helpSubpage.scss";

export default function HelpSupportPage() {
  const { t } = useTranslation("help");

  return (
    <div className="helpSubpage">
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

      <HelpTopicCards
        ariaLabel={t(HELP_LABEL.SUPPORT_TOPICS_ARIA)}
        items={HELP_SUPPORT_TOPICS.map((topic) => ({
          ...topic,
          title: t(`support.topics.${topic.id}.title`),
          description: t(`support.topics.${topic.id}.description`),
        }))}
      />
    </div>
  );
}
