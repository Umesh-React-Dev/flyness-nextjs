"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "@/components/common/LanguageSelect";
import { ONBOARDING_LABEL } from "@/i18n/constants/onboarding.constant";
import { ONBOARDING_FOOTER_LINKS } from "@/jsonStaticData/onboardingData";
import "@/styles/onboarding.scss";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation("onboarding");

  return (
    <div className="onboarding-layout">
      <header className="onboarding-header">
        <Link href="/" className="onboarding-header__logo" aria-label="flynas home">
          <Image
            src="https://static.flynas.com/images/IBE/assets/images/flynas-logo-green.svg"
            alt="flynas"
            width={140}
            height={48}
            priority
            unoptimized
          />
        </Link>
        <LanguageSelect />
      </header>

      <div className="onboarding-layout__content">{children}</div>

      <footer className="onboarding-footer">
        <nav
          className="onboarding-footer__nav"
          aria-label={t(ONBOARDING_LABEL.FOOTER_NAV_ARIA)}
        >
          {ONBOARDING_FOOTER_LINKS.map(({ labelKey, href }, index) => (
            <span key={labelKey} className="onboarding-footer__item">
              {index > 0 && (
                <span className="onboarding-footer__sep" aria-hidden="true">
                  |
                </span>
              )}
              <a href={href}>{t(labelKey)}</a>
            </span>
          ))}
        </nav>
      </footer>
    </div>
  );
}
