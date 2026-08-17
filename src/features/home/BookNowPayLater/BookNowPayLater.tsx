"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import bookNowPayLaterImg from "@/assets/images/img5763.webp";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import "./BookNowPayLater.scss";

export default function BookNowPayLater() {
  const { t } = useTranslation("home");

  return (
    <section className="bookNowPayLater" aria-label={t(HOME_LABEL.PAY_LATER_ARIA)}>
      <div className="bookNowPayLater__inner">
        <Link href="#" className="bookNowPayLater__link">
          <Image
            src={bookNowPayLaterImg}
            alt={t(HOME_LABEL.PAY_LATER_ALT)}
            priority={false}
            className="bookNowPayLater__image"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </Link>
      </div>
    </section>
  );
}
