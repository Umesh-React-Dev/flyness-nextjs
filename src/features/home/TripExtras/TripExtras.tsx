"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { TRIP_EXTRAS } from "./tripExtrasData";
import "./TripExtras.scss";

export default function TripExtras() {
  const { t } = useTranslation("home");

  return (
    <section className="tripExtras" aria-labelledby="trip-extras-title">
      <div className="tripExtras__inner">
        <header className="tripExtras__header">
          <h2 id="trip-extras-title" className="tripExtras__title">
            {t(HOME_LABEL.EXTRAS_TITLE)}
          </h2>
          <p className="tripExtras__subtitle">{t(HOME_LABEL.EXTRAS_SUBTITLE)}</p>
        </header>

        <ul className="tripExtras__grid">
          {TRIP_EXTRAS.map((extra) => (
            <li key={extra.id} className="tripExtras__card">
              <div className="tripExtras__imageWrap">
                <Image
                  src={extra.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="tripExtras__image"
                />
              </div>
              <div className="tripExtras__body">
                <h3 className="tripExtras__cardTitle">
                  {t(`extras.items.${extra.id}.title`)}
                </h3>
                <p className="tripExtras__cardText">
                  {t(`extras.items.${extra.id}.description`)}
                </p>
                <Link href={extra.href} className="tripExtras__cta">
                  {t(`extras.items.${extra.id}.cta`)}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
