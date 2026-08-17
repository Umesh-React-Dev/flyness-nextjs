"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import whereWeFlyGif from "@/assets/images/img33-gif.webp";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import "./WhereWeFly.scss";

export default function WhereWeFly() {
  const { t } = useTranslation("home");

  return (
    <section className="whereWeFly" aria-label={t(HOME_LABEL.WHERE_WE_FLY_ARIA)}>
      <Link href="#" className="whereWeFly__link">
        <Image
          src={whereWeFlyGif}
          alt={t(HOME_LABEL.WHERE_WE_FLY_ALT)}
          unoptimized
          priority={false}
          className="whereWeFly__image"
          sizes="100vw"
        />
      </Link>
    </section>
  );
}
