"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import logo from "@/assets/images/help/logo-green.svg";
import { HELP_LABEL } from "@/i18n/constants/help.constant";
import HelpLanguageMenu from "./HelpLanguageMenu";
import "./HelpHeader.scss";

export default function HelpHeader() {
  const { t } = useTranslation("help");

  return (
    <header className="helpHeader">
      <div className="helpHeader__inner">
        <div className="helpHeader__left">
          <Link href="/" className="helpHeader__logo" aria-label={t(HELP_LABEL.HEADER_HOME_ARIA)}>
            <Image
              src={logo}
              alt="flynas"
              width={111}
              height={48}
              priority
              className="helpHeader__logoImage"
            />
          </Link>
          <nav className="helpHeader__nav" aria-label={t(HELP_LABEL.HEADER_NAV_ARIA)}>
            <Link href="/" className="helpHeader__homeLink">
              {t(HELP_LABEL.HEADER_HOME)}
            </Link>
          </nav>
        </div>

        <HelpLanguageMenu />
      </div>
    </header>
  );
}
