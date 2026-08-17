"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import "./CopyrightSection.scss";

const legalLinks = [
  { key: "cookies", href: "#" },
  { key: "personalData", href: "#" },
  { key: "privacy", href: "#" },
  { key: "cookiePolicy", href: "#" },
  { key: "terms", href: "#" },
  { key: "fare", href: "#" },
  { key: "sitemap", href: "#" },
] as const;

export default function CopyrightSection() {
  const { t } = useTranslation("home");
  const year = new Date().getFullYear();

  return (
    <div className="copyrightSection" role="contentinfo" aria-label={t(HOME_LABEL.FOOTER_COPYRIGHT_ARIA)}>
      <div className="copyrightSection__inner">
        <div className="copyrightSection__left">
          <p className="copyrightSection__copy">
            {t(HOME_LABEL.FOOTER_COPYRIGHT, { year })}
          </p>
          <p className="copyrightSection__note">{t(HOME_LABEL.FOOTER_NOTE)}</p>
        </div>

        <nav className="copyrightSection__links" aria-label={t(HOME_LABEL.FOOTER_LEGAL_ARIA)}>
          {legalLinks.map((link, index) => (
            <span key={link.key} className="copyrightSection__linkItem">
              {index > 0 && (
                <span className="copyrightSection__sep" aria-hidden="true">
                  |
                </span>
              )}
              <Link href={link.href} className="copyrightSection__link">
                {t(`footer.legal.${link.key}`)}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
