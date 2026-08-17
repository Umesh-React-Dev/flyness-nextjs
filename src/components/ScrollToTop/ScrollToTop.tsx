"use client";

import { useEffect, useState } from "react";
import ChevronUpIcon from "@/assets/icons/ChevronUpIcon";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import "./ScrollToTop.scss";

const SHOW_AFTER_PX = 400;

export default function ScrollToTop() {
  const { t } = useTranslation("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scrollToTop${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label={t(HOME_LABEL.SCROLL_TOP)}
      tabIndex={visible ? 0 : -1}
    >
      <ChevronUpIcon className="scrollToTop__icon" />
    </button>
  );
}
