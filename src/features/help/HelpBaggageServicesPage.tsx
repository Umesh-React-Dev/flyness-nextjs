"use client";

import { useTranslation } from "react-i18next";
import heroDecoration from "@/assets/images/help/inquiry-hero-decoration.png";
import HelpSubpageHero from "@/components/help/HelpSubpageHero";
import HelpBreadcrumb from "@/components/help/HelpBreadcrumb";
import HelpTopicCards from "@/components/help/HelpTopicCards";
import { HELP_LABEL } from "@/i18n/constants/help.constant";
import { HELP_BAGGAGE_TOPICS } from "@/jsonStaticData/helpBaggageData";
import "@/components/help/helpSubpage.scss";

export default function HelpBaggageServicesPage() {
  const { t } = useTranslation("help");

  return (
    <div className="helpSubpage">
      <HelpSubpageHero
        titleId="help-baggage-title"
        title={t(HELP_LABEL.BAGGAGE_HERO_TITLE)}
        subtitle={t(HELP_LABEL.BAGGAGE_HERO_SUBTITLE)}
        decorationSrc={heroDecoration}
      />

      <HelpBreadcrumb
        ariaLabel={t(HELP_LABEL.BAGGAGE_BREADCRUMB_ARIA)}
        items={[
          { label: t(HELP_LABEL.BAGGAGE_BREADCRUMB_HOME), href: "/" },
          { label: t(HELP_LABEL.BAGGAGE_BREADCRUMB_BAGGAGE) },
        ]}
      />

      <HelpTopicCards
        ariaLabel={t(HELP_LABEL.BAGGAGE_TOPICS_ARIA)}
        items={HELP_BAGGAGE_TOPICS.map((topic) => ({
          ...topic,
          title: t(`baggage.topics.${topic.id}.title`),
          description: t(`baggage.topics.${topic.id}.description`),
        }))}
      />
    </div>
  );
}
